---
layout: page
title: "Q152376: HOWTO: How To Disable Push Buttons on a DialogBar in MFC"
permalink: /kb/152/Q152376/
---

## Q152376: HOWTO: How To Disable Push Buttons on a DialogBar in MFC

	Article: Q152376
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbDocView kbMFC KbUIDesign kbVC kbGrpDSMFCATL kbMFCCtrlBar
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52, 1.52b, 1.52c 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Push-button controls on a DialogBar cannot be disabled by calling EnableWindow.
	The following code has no effect:
	
	     GetDlgItem(IDC_BUTTON1)->EnableWindow(FALSE);
	
	This article describes how to implement push-button controls that can be
	disabled.
	
	MORE INFORMATION
	================
	
	Controls on a DialogBar behave like the bitmaps on a Toolbar. They can be
	enabled or disabled by manually adding an ON_UPDATE_COMMAND_UI within the
	message map of the appropriate class (such as CMainFrame).
	
	Step-by-Step Example
	--------------------
	
	After you have placed a control on your DialogBar, such as a push-button with a
	resource ID of IDC_BUTTON1, use the following steps to manage the state of the
	control:
	
	1. Within the declaration of your class, add the declaration for a handler
	  function:
	
	     afx_msg void OnUpdateButton1(CCmdUI* pCmdUI);
	
	2. Within the implementation of your class, add a manual entry in the message
	  map:
	
	     BEGIN_MESSAGE_MAP(CMainFrame, CMDIFrameWnd)
	         //{ {AFX_MSG_MAP(CMainFrame)
	         ...
	         //} }AFX_MSG_MAP
	         ON_UPDATE_COMMAND_UI(IDC_BUTTON1, OnUpdateButton1)
	     END_MESSAGE_MAP()
	
	3. Provide the definition of the handler function, as follows:
	
	     void CMainFrame::OnUpdateButton1(CCmdUI* pCmdUI)
	     {
	         pCmdUI->Enable( TRUE );
	     }
	
	Additional query words: 1.00 1.50 1.51 1.52 2.00 2.10 2.20 4.00 4.10
	
	======================================================================
	Keywords          : kbDocView kbMFC KbUIDesign kbVC kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,2.2,4.0,4.1
	Issue type        : kbhowto
	
	=============================================================================
	
