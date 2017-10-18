---
layout: page
title: "Q242577: PRB: Update Command UI Handlers Do Not Work Properly on Dialogs"
permalink: kb/242/Q242577/
---

## Q242577: PRB: Update Command UI Handlers Do Not Work Properly on Dialogs

	Article: Q242577
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDlg kbMenu kbMFC KbUIDesign kbVC600 kbDSupport kbGrpDSMFCATL
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- The Microsoft Foundation Classes (MFC) 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the state (enable/disable, check/uncheck, change text) of a menu item
	from its command user-interface (UI) handler does not work correctly if the menu
	is attached to a dialog box:
	
	  void CTestDlg::OnUpdateFileExit(CCmdUI* pCmdUI) 
	  {
	      pCmdUI->Enable(FALSE); //Not calling the command handler, but does not show as disabled.
	      pCmdUI->SetCheck(TRUE); // Does not show check mark before the text.
	      pCmdUI->SetRadio(TRUE); // Does not show dot before the text.
	      pCmdUI->SetText("Close"); //Does not change the text.
	  }
	
	CAUSE
	=====
	
	When a drop-down menu is displayed, the WM_INITMENUPOPUP message is sent prior
	to displaying the menu items. The MFC CFrameWnd::OnInitMenuPopup function
	iterates through the menu items and calls the update command UI handler for the
	item, if there is one. The appearance of each menu item is updated to reflect
	its state (enabled/disabled, checked/unchecked).
	
	The update UI mechanism doesn't work for a dialog box-based application because
	CDialog has no OnInitMenuPopup handler and it uses CWnd's default handler, which
	does not call update command UI handlers for menu items.
	
	RESOLUTION
	==========
	
	Use the following steps to resolve this problem:
	
	1. Add an ON_WM_INITMENUPOPUP entry to the message map:
	
	  BEGIN_MESSAGE_MAP(CTestDlg, CDialog)
	  	//} }AFX_MSG_MAP
	
	  	ON_WM_INITMENUPOPUP()
	  END_MESSAGE_MAP()
	
	2. Add a OnInitMenuPopup member function to your dialog box class and copy the
	  following code (note that this code is taken largely from
	  CFrameWnd::OnInitMenuPopup in WinFrm.cpp):
	
	  void CTestDlg::OnInitMenuPopup(CMenu *pPopupMenu, UINT nIndex,BOOL bSysMenu)
	  {
	      ASSERT(pPopupMenu != NULL);
	      // Check the enabled state of various menu items.
	
	      CCmdUI state;
	      state.m_pMenu = pPopupMenu;
	      ASSERT(state.m_pOther == NULL);
	      ASSERT(state.m_pParentMenu == NULL);
	
	      // Determine if menu is popup in top-level menu and set m_pOther to
	      // it if so (m_pParentMenu == NULL indicates that it is secondary popup).
	      HMENU hParentMenu;
	      if (AfxGetThreadState()->m_hTrackingMenu == pPopupMenu->m_hMenu)
	          state.m_pParentMenu = pPopupMenu;    // Parent == child for tracking popup.
	      else if ((hParentMenu = ::GetMenu(m_hWnd)) != NULL)
	      {
	          CWnd* pParent = this;
	             // Child windows don't have menus--need to go to the top!
	          if (pParent != NULL &&
	             (hParentMenu = ::GetMenu(pParent->m_hWnd)) != NULL)
	          {
	             int nIndexMax = ::GetMenuItemCount(hParentMenu);
	             for (int nIndex = 0; nIndex < nIndexMax; nIndex++)
	             {
	              if (::GetSubMenu(hParentMenu, nIndex) == pPopupMenu->m_hMenu)
	              {
	                  // When popup is found, m_pParentMenu is containing menu.
	                  state.m_pParentMenu = CMenu::FromHandle(hParentMenu);
	                  break;
	              }
	             }
	          }
	      }
	
	      state.m_nIndexMax = pPopupMenu->GetMenuItemCount();
	      for (state.m_nIndex = 0; state.m_nIndex < state.m_nIndexMax;
	        state.m_nIndex++)
	      {
	          state.m_nID = pPopupMenu->GetMenuItemID(state.m_nIndex);
	          if (state.m_nID == 0)
	             continue; // Menu separator or invalid cmd - ignore it.
	
	          ASSERT(state.m_pOther == NULL);
	          ASSERT(state.m_pMenu != NULL);
	          if (state.m_nID == (UINT)-1)
	          {
	             // Possibly a popup menu, route to first item of that popup.
	             state.m_pSubMenu = pPopupMenu->GetSubMenu(state.m_nIndex);
	             if (state.m_pSubMenu == NULL ||
	              (state.m_nID = state.m_pSubMenu->GetMenuItemID(0)) == 0 ||
	              state.m_nID == (UINT)-1)
	             {
	              continue;       // First item of popup can't be routed to.
	             }
	             state.DoUpdate(this, TRUE);   // Popups are never auto disabled.
	          }
	          else
	          {
	             // Normal menu item.
	             // Auto enable/disable if frame window has m_bAutoMenuEnable
	             // set and command is _not_ a system command.
	             state.m_pSubMenu = NULL;
	             state.DoUpdate(this, FALSE);
	          }
	
	          // Adjust for menu deletions and additions.
	          UINT nCount = pPopupMenu->GetMenuItemCount();
	          if (nCount < state.m_nIndexMax)
	          {
	             state.m_nIndex -= (state.m_nIndexMax - nCount);
	             while (state.m_nIndex < nCount &&
	              pPopupMenu->GetMenuItemID(state.m_nIndex) == state.m_nID)
	             {
	              state.m_nIndex++;
	             }
	          }
	          state.m_nIndexMax = nCount;
	      }
	  }
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The update command UI handler is also called from CWnd::OnCommand to make sure
	that command has not become disabled before routing. This is why the command
	handler is not called for a disabled menu item even though it is not grayed
	(unavailable). Menu items are not drawn to reflect their status in this case.
	This is the related code from the Wincore.cpp file:
	
	     // Make sure command has not become disabled before routing.	
	     CTestCmdUI state;
	     state.m_nID = nID;
	     OnCmdMsg(nID, CN_UPDATE_COMMAND_UI, &state, NULL);
	     if (!state.m_bEnabled)
	     {
	        TRACE1("Warning: not executing disabled command %d\n", nID);
	        return TRUE;
	     }
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	Follow these steps to reproduce this behavior in Visual C++ .NET:
	
	1. Create an MFC dialog-based application by using AppWizard.
	
	2. Create a new menu resource and add the File and File/Exit menu items to it.
	
	3. Set this menu as the menu for the dialog box in the dialog box Properties
	  window. To do this, open the dialog resource in the dialog editor. In the
	  Properties window, click select Menu. The ID of the new menu resource is
	  displayed in the Menu property editor drop-down list.
	
	4. Add an UPDATE_COMMAND_UI handler for File/Exit menu item. To do this,
	  right-clicking File/Exit in the menu editor, and then click Add Event
	  Handler. In the Event Handler wizard, add the UPDATE_COMMAND_UI handler to
	  the project CDialog derived class. Click Add and Edit to create the handler,
	  and then add one of these statements to the generated handler method:
	
	  	pCmdUI->Enable(FALSE); //Not calling the handler, but does not show as disabled
	  	pCmdUI->SetCheck(TRUE); // Does not show check mark before the text.
	  	pCmdUI->SetRadio(TRUE); // Does not show dot before the text.
	  	pCmdUI->SetText("Close"); //Does not change the text.
	
	5. Build and run the application.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q141751 SAMPLE: Adding Control Bars to Dialog Boxes in MFC
	
	(c) Microsoft Corporation 9/29/1999, All Rights Reserved.
	Contributions by Sreedhar Pelluru, Microsoft Corporation
	
	
	Additional query words: WM_INITMENUPOPUP ON_UPDATE_COMMAND_UI
	
	======================================================================
	Keywords          : kbDlg kbMenu kbMFC KbUIDesign kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbMFC kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
