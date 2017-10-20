---
layout: page
title: "Q110505: PRB: Setting First Pane of CStatusBar"
permalink: /kb/110/Q110505/
---

## Q110505: PRB: Setting First Pane of CStatusBar

{% raw %}

	Article: Q110505
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbMFC kbStatBar KbUIDesign kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the text in the first pane of a CStatusBar window is changed using
	SetPaneText() and a menu is selected, the text is overwritten by the Help
	prompts for the menu.
	
	CAUSE
	=====
	
	Setting any but the first pane of the status bar is relatively simple. You just
	need to set the pane using SetPaneText() and make sure you have added in an
	ON_UPDATE_COMMAND_UI handler for the ID of that pane (set in your MAINFRAME.CPP
	as an element of an indicators[] array). This handler should call Enable() in
	the following manner to make sure that the pane is not erased:
	
	     void CMainFrame::OnUpdateMystat(CCmdUI* pCmdUI)
	     {
	        pCmdUI->Enable();
	     }
	
	However, setting the FIRST pane of a status bar using SetPaneText() or calling
	SetWindowText() on the status bar is a bit more difficult.
	
	The problem is that the framework itself is changing the first pane using some
	special techniques. Basically, the framework is passing a WM_SETTEXT command
	directly to the status bar, from a number of places within its own code.
	
	Adding ON_UPDATE_COMMAND_UI handlers or calling SetPaneText() for the first pane
	of the status bar does not permanently set it. The framework eventually sends a
	WM_SETTEXT message directly to the status bar, changing the text from what was
	set.
	
	RESOLUTION
	==========
	
	One way of setting the first pane yourself and keeping it set to what you want
	is to derive your own class from CStatusBar (for example CMyStat) and to give it
	a WM_SETTEXT handler. (Adding the WM_SETTEXT handler cannot be done using
	ClassWizard, so the handler must be added by hand.)
	
	The steps to do this are as follows:
	
	1. Use ClassWizard to add a new class, derived from a generic CWnd. Now edit the
	  .H and .CPP files to change the two references to CWnd to CStatusBar.
	
	2. Add a protected member function of CMyStat:
	
	        afx_msg LRESULT OnSetText(WPARAM, LPARAM);
	
	3. Add a message map entry for the function in the .CPP file, as follows:
	
	        BEGIN_MESSAGE_MAP(CMyStat, CStatusBar)
	           //{{AFX_MSG_MAP(CMyStat)
	           // NOTE: ClassWizard will add and remove mapping macros here.
	           //}}AFX_MSG_MAP
	           ON_MESSAGE( WM_SETTEXT, OnSetText )
	        END_MESSAGE_MAP()
	
	4. Now implement the function as follows:
	
	        LRESULT CMyStat::OnSetText(WPARAM wParam, LPARAM lParam)
	        {
	           if ( !bIgnoreSetText )
	              return CStatusBar::OnSetText( wParam, lParam );
	           return 0;  // Same as CStatusBar::OnSetText success
	        }
	
	  where bIgnoreSetText is true only if you have set your own text in the status
	  bar with a SetPaneText() call.
	
	5. Include CMyStat class header file in your MAINFRM.H file and replace:
	
	        CStatusBar m_wndStatusBar;
	
	  with the following:
	
	         CMyStat     m_wndStatusBar;
	
	Whenever bIgnoreSetText is true, the first pane of the status bar will be updated
	only when you update it with SetPaneText(). The frameworks WM_SETTEXT messages
	will be blocked when you have this flag set to a non- zero value. Note that this
	blocking effects only the first pane of the status bar.
	
	You could also add member functions to your status bar class that both set the
	text of the status bar and set the bIgnoreSetText flag to lock or unlock the
	status bar in one step. You might call them SetPaneOneAndLock() and
	SetPaneOneAndUnlock().
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC kbStatBar KbUIDesign kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0,4.1,4.2,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
