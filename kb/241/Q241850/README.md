---
layout: page
title: "Q241850: PRB: Call to CToolBarCtrl::Customize() Does Not Keep Dialog Box"
permalink: /kb/241/Q241850/
---

## Q241850: PRB: Call to CToolBarCtrl::Customize() Does Not Keep Dialog Box

	Article: Q241850
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbDlg kbMFC kbToolbar kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL
	Last Modified: 14-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SYMPTOMS
	========
	
	When you call the CToolBarCtrl::Customize function, the dialog box disappears
	after it is briefly shown.
	
	CAUSE
	=====
	
	You need to handle the TBN_QUERYINSERT message in the parent window and return
	TRUE. If you return FALSE or do not handle it, then the customization dialog box
	is destroyed.
	
	RESOLUTION
	==========
	
	When you return TRUE for the TBN_QUERYINSERT message, this keeps the
	customization dialog box visible for the user. Following is the code needed to
	handle the TBN_QUERYINSERT notification that is sent to the parent window:
	
	  LRESULT CMainFrame::WindowProc(UINT message, WPARAM wParam, LPARAM lParam) 
	  {
	    if (WM_NOTIFY == message)
	    {
	      NMHDR *lpNMHDR = (LPNMHDR) lParam;
	      switch (lpNMHDR->code)
	      {
	        case TBN_QUERYINSERT:
	             //Returning FALSE causes customize dialog box to not appear.
	             return TRUE;
	             break;
	      }
	    }
	
	    return CFrameWnd::WindowProc(message, wParam, lParam);
	  }
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new MFC SDI Application using AppWizard and use all of the default
	  settings.
	
	2. Inside of the CMainFrame::OnCreate() function call, add the following code
	  just prior to the return 0 line:
	
	   m_wndToolBar.GetToolBarCtrl().Customize();
	   return 0;
	  }
	
	3. Build and run the application.
	
	Notice that the toolbar customization dialog box briefly appears and then
	disappears when you run the application.
	
	REFERENCES
	==========
	
	- See the "CToolBarCtrl::Customize" topic in MSDN at the following Web site:
	
	  http://msdn.microsoft.com/library/devprods/vs6/visualc/vcmfc/_mfc_ctoolbarctrl.3a3a.customize.htm
	
	- See the "CToolBarCtrl: Handling Customization Notifications" in MSDN at the
	  following Web site:
	
	  http://msdn.microsoft.com/library/devprods/vs6/visualc/vcmfc/_mfc_ctoolbarctrl.3a_.handling_customization_notifications.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnCtrls kbDlg kbMFC kbToolbar kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
