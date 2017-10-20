---
layout: page
title: "Q224928: BUG: CFormView Loses the Control's Focus When Restored"
permalink: /kb/224/Q224928/
---

## Q224928: BUG: CFormView Loses the Control's Focus When Restored

{% raw %}

	Article: Q224928
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbMFC kbVC400bug kbVC500bug kbVC600bug kbBug kbGrpDSMFCATL kbISS
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.0, 4.1, 4.2, 5.0, 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set the focus to one control of CFormView, minimize the frame window of
	CFormView, and then restore it, the focus isn't set back to the control that
	previously held the focus.
	
	CAUSE
	=====
	
	The handle of the control that had the focus when the frame window was
	minimized, isn't stored.
	
	RESOLUTION
	==========
	
	To save the handle of the control that has the focus when you minimize the view,
	do the following:
	
	1. Define a message called WM_SAVEFOCUS in the Resource.h file:
	
	  #define WM_SAVEFOCUS          WM_APP+1
	
	2. Add a message handler for this user-defined message. In the class definition
	  of your CMyFormView class, add:
	
	  afx_msg LRESULT OnSaveFocus(WPARAM wParam, LPARAM lParam);
	
	  In the .cpp file of CMyFormView, add the message map macro:
	
	  ON_MESSAGE(WM_SAVEFOCUS, OnSaveFocus)
	
	  Add the handler function:
	
	  LRESULT CMyFormView::OnSaveFocus(WPARAM wParam, LPARAM lParam)
	  {
	  	CFormView::SaveFocusControl();
	
	  	return (LRESULT)0;
	  }
	
	3. In the class definition of CMainFrame, add:
	
	  afx_msg void OnSysCommand( UINT nID, LPARAM lParam );
	
	  In the .cpp file, add the OnSysCommand message map macro:
	
	  ON_WM_SYSCOMMAND()
	
	  Override OnSysCommand of the frame window class that you are using for the
	  formview, and send the WM_SAVEFOCUS message when it is about to minimize. The
	  code should resemble the following:
	
	  void CMainFrame::OnSysCommand(UINT nID, LPARAM lParam)
	  {
	          if ((nID & 0xfff0) == SC_MINIMIZE)
	                  GetActiveView()->SendMessage(WM_SAVEFOCUS);
	
	          CFrameWnd::OnSysCommand(nID,lParam);
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use AppWizard to generate an MFC SDI application. In the last step, change
	  the base class of the view to CFormView.
	
	2. Insert two edit box controls to the view from the resource editor.
	
	3. Compile and run the application.
	
	4. The focus is set to the first edit box by default. Change the focus to the
	  second edit box by clicking it.
	
	5. Minimize the frame window by clicking Minimize on the System menu, or click
	  the Minimize button in the title bar.
	
	6. Restore the frame window. The focus will go back to the first edit box, not
	  the second edit box.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Yana Wang,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbMFC kbVC400bug kbVC500bug kbVC600bug kbBug kbGrpDSMFCATL kbISS 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
