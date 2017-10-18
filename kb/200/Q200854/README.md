---
layout: page
title: "Q200854: HOWTO: Trapping Server's Menu Commands in Composite Menu Bar"
permalink: kb/200/Q200854/
---

## Q200854: HOWTO: Trapping Server's Menu Commands in Composite Menu Bar

	Article: Q200854
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbContainer kbMenu kbMFC kbVC500 kbVC600 kbGrpDSMFCATL kbArchite
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The composite menu bar is a shared menu composed of menu groups from both a
	container application and an in-place activated server application. Sometimes,
	the container application may want to trap the server's menu commands that are
	shown in the composite menu bar to carry out its own operations. This article
	illustrates a way to accomplish this task.
	
	MORE INFORMATION
	================
	
	When the server is in-place activated, the COleClientItem::OnInsertMenus()
	function will be called to install the composite menu. When the server is
	deactivated, the COleClientItem::OnRemoveMenus() function will be called to
	remove the composite menu. We can make use of these two functions to determine
	the menu selection when the composite menu is shown.
	
	In the following sample code, Microsoft Word is the server application in an
	AppWizard-generated MFC container application. The steps to trap the Word's
	Edit/Paste menu command follow:
	
	1. Add a public member variable named m_hSharedMenu of type HMENU to the
	  container's CWinApp-derived class. Initialize its value to NULL in the
	  constructor function. It is public because it will be accessed by functions
	  in the COleClientItem-derived class.
	
	2. Override both the OnInsertMenus() and OnRemoveMenus() functions of the
	  COleClientItem-derived class. Set the value of the m_hSharedMenu variable to
	  the HMENU of the composite menu in the OnInsertMenus() function, and assign
	  NULL to m_hSharedMenu in the OnRemoveMenus() function.
	
	     // CContainerCntrItem is a COleClientItem-derived class.
	     void CContainerCntrItem:OnInsertMenus(
	         CMenu* pMenuShared, LPOLEMENUGROUPWIDTHS lpMenuWidths)
	     {
	         ((CContainerApp *) AfxGetApp())->m_hSharedMenu =
	             pMenuShared->GetSafeHmenu();
	         COleClientItem::OnInsertMenus(pMenuShared, lpMenuWidths);
	     }
	
	     void CContainerCntrItem::OnRemoveMenus(CMenu* pMenuShared)
	     {
	         ((CContainerApp *) AfxGetApp())->m_hSharedMenu = NULL;
	         COleClientItem::OnRemoveMenus(pMenuShared);
	     }
	
	3. Override PreTranslateMessage() of the CWinApp-derived class to trap the
	  selection of the Edit/Paste menu command.
	
	     // CContainerApp is a CWinApp-derived class.
	     BOOL CContainerApp::PreTranslateMessage(MSG* pMsg)
	     {
	         if (pMsg->message == WM_COMMAND && m_hSharedMenu)
	         {
	          // The drop-down menu in the menu bar is 0-based. To simplify the
	          // code, we make an assumption that the Edit menu is at position
	          // one, instead of looping through the main menu to find out the
	          // position of the Edit menu.
	          char str[80];
	          ::GetMenuString(m_hSharedMenu, 1, str, sizeof(str),
	              MF_BYPOSITION);
	          TRACE("submenu = %s\n", str);
	
	          HMENU hsub = ::GetSubMenu(m_hSharedMenu, 1);
	
	          // Get the menu string of the selected menu item.
	          ::GetMenuString(hsub, pMsg->wParam, str, sizeof(str),
	              MF_BYCOMMAND);
	          TRACE("menu item = %s\n", str);
	
	          // Do something when Edit\Paste menu command is selected.
	          if (lstrcmp(str, "&Paste\tCtrl+V") == 0)
	              TRACE("Word's Edit\\Paste menu command is selected\n");
	          return TRUE;
	      }
	      else
	          return CWinApp::PreTranslateMessage(pMsg);
	     }
	
	I, Yeong-Kah Tam, give Microsoft Corporation permission to publish my name as a
	contributor to this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbContainer kbMenu kbMFC kbVC500 kbVC600 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
