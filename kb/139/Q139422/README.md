---
layout: page
title: "Q139422: FIX: Advanced Options for SDI Application in Appwizard"
permalink: /kb/139/Q139422/
---

## Q139422: FIX: Advanced Options for SDI Application in Appwizard

	Article: Q139422
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some of the Advance Options in Step 4 of AppWizard have no effect on an
	AppWizard-generated SDI applications. The Maximized and Minimized options for
	the Main Frame Window in the Window Styles tab have no effect when selected for
	an SDI application.
	
	The message generated in Visual C++ version 4.0, 4.1, or 4.2 that says these
	styles have no effect on Windows 95 is also wrong. The problem isn't specific to
	Windows 95.
	
	CAUSE
	=====
	
	The AppWizard-generated code does not have code to show the main window
	maximized or minimized. MFC code shows the main window with value passed into
	the program through the nCmdShow argument to WinMain. This value is normally
	SW_NORMAL and hence the window will not be maximized or minimized.
	
	RESOLUTION
	==========
	
	MFC stores the value passed through the nCmdShow argument to WinMain in
	CWinApp::m_nCmdShow. This variable can be modified to get the behavior you want.
	To have an SDI application initially maximized or minimized, set this variable
	to the appropriate value. Set m_nCmdShow to SW_SHOWMAXIMIZED to maximize or
	SW_SHOWMINIMIZED to minimize the main frame window initially. This variable has
	to be modified in the InitInstance() function of the CWinApp-derived class
	before the main window is made visible.
	
	In the Visual C++ 4.0 or 4.1 AppWizard-generated application, set this variable
	before this line:
	
	     if (!ProcessShellCommand(cmdInfo))
	        return FALSE;
	
	If the application was generated with an earlier version of Visual C++, set
	m_nCmdShow to the appropriate value before this line:
	
	     OnFileNew();
	
	In the Visual C++ 4.2 AppWizard-generated application do the following:
	
	      if  (!ProcessShellCommand(cmdInfo))
	          return FALSE;
	
	      m_pMainWnd->ShowWindow(SW_SHOWMAXIMIZED);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. The problem was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The following sample code shows the correct context in which m_nCmdShow has to
	be modified and demonstrates how to show an sdi application initially
	maximized.
	
	Sample Code
	-----------
	
	     // Visual C++ 4.0, 4.1, or 4.2 AppWizard-generated SDI application
	     BOOL CMyApp::InitInstance()
	     {
	     ...
	        ParseCommandLine(cmdInfo);
	
	             // Add the following line to initially maximize the Application.
	             m_nCmdShow = SW_SHOWMAXIMIZED;
	
	        // Dispatch commands specified on the command line.
	        if (!ProcessShellCommand(cmdInfo))
	           return FALSE;
	
	        return TRUE;
	     }
	
	     // Visual C++ 2.0 AppWizard-generated SDI application.
	     BOOL CMyApp::InitInstance()
	     {
	     ...
	        AddDocTemplate(pDocTemplate);
	
	             // Add the following line to initially maximize the Application.
	             m_nCmdShow = SW_SHOWMAXIMIZED;
	
	        // Create a new (empty) document
	        OnFileNew();
	     ...
	     }
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
