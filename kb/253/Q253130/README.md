---
layout: page
title: "Q253130: PRB: Message Box in ExitInstance of MFC App Are Not Displayed"
permalink: /kb/253/Q253130/
---

## Q253130: PRB: Message Box in ExitInstance of MFC App Are Not Displayed

{% raw %}

	Article: Q253130
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDlg kbMFC kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to display a message box in the ExitInstance function of a
	dialog-based Microsoft Foundation Classes (MFC) application, you don't see the
	message box displayed. Also, if you place any window creation code after the
	DoModal call in your InitInstance function, you don't see the window.
	
	CAUSE
	=====
	
	Destruction of the main window causes a WM_QUIT message to be posted to the main
	application thread indicating to the operating system that the thread is to be
	terminated. Any window created after this is destroyed immediately after
	creation resulting in a brief flash.
	
	RESOLUTION
	==========
	
	To work around this problem, comment out the line in the InitInstance function
	that assigns the m_pMainWnd function to your dialog as follows:
	
	    // m_pMainWnd = &dlg;
	
	Also, and instead of using message boxes, you could use the MFC TRACE macros to
	display information in the debug output window for debugging purposes.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new MFC dialog-based application called "Dlgbased".
	
	2. Add the following code to the InitInstance function:
	
	  BOOL CDlgbasedApp::InitInstance()
	  {
	     int ret;
	     ret = AfxMessageBox("Before Dialog");
	
	     CDlgbasedDlg dlg;
	     m_pMainWnd = &dlg;
	
	     int nResponse = dlg.DoModal();
	     if (nResponse == IDOK)
	     {
	     }
	     else if (nResponse == IDCANCEL)
	     {
	     }
	
	     ret = AfxMessageBox("After Dialog.  Won't see me");
	     return FALSE;
	  }
	
	3. Use ClassWizard to override the ExitInstance function for CdlgbasedApp.
	
	4. Add the following code to the ExitInstance function:
	
	  BOOL CDlgbasedApp::ExitInstance()
	  {
	     AfxMessageBox("Won't see me!");
	     return CWinApp::ExitInstance();
	  }
	
	5. Build and run the application.
	
	After dismissing the dialog box, notice that the message boxes do not appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDlg kbMFC kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.0,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
