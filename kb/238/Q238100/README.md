---
layout: page
title: "Q238100: HOWTO: Limit 32-Bit MFC SDI App to a Single Instance in WinCE"
permalink: kb/238/Q238100/
---

## Q238100: HOWTO: Limit 32-Bit MFC SDI App to a Single Instance in WinCE

	Article: Q238100
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC kbVC500 kbVC600 kbOSWinCEsearch kbDSupport kbGrpDSMFCATL
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Windows CE Toolkit for Visual C++, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article disscusses how to limit 32-bit applications to a single instance on
	WinCE.
	
	MORE INFORMATION
	================
	
	The reason the steps outlined in article Q141752 do not work for WinCE is
	because, under WinCE, wce_PreCreateWindow function prefixes "WCE_" to class name
	of the window. For example, if you register a class name of "MyNewClass", the
	actual class name you need to pass to FindWindow() is "WCE_MyNewClass".
	
	Sample code
	-----------
	
	1. Create a default WCE MFC AppWizard (exe)
	
	2. Select the ClassView tab, and go to the definition of InitInstance in the
	  Application class. Add the code at the begining of the definition of
	  InitInstance:
	
	     BOOL CSampleApp::InitInstance()
	     {
	     /********************************************************************/ 
	      // If a previous instance of the application is already running,
	      // then activate it and return FALSE from InitInstance to
	      // end the execution of this instance.
	
	      CWnd *pWndPrev;
	   
	      // Determine if another window with your class name exists...
	      if (pWndPrev = CWnd::FindWindow(_T("WCE_MyNewClass"),NULL))
	      {
	          // Bring previous instance to the foreground
	  	pWndPrev->SetForegroundWindow();
	  	return FALSE;
	      }
	      WNDCLASS wndcls;
	
	      memset(&wndcls, 0, sizeof(WNDCLASS));   // start with NULL defaults
	
	      wndcls.style = CS_DBLCLKS | CS_HREDRAW | CS_VREDRAW;
	      wndcls.lpfnWndProc = ::DefWindowProc;
	      wndcls.hInstance = AfxGetInstanceHandle();
	      wndcls.hIcon = LoadIcon(IDR_MAINFRAME); // or load a different icon
	      wndcls.hbrBackground = (HBRUSH) (COLOR_WINDOW + 1);
	      wndcls.lpszMenuName = NULL;
	      // Specify your own class name for using FindWindow later
	      wndcls.lpszClassName = _T("MyNewClass");
	
	      // Register the new class and exit if it fails
	      if(!AfxRegisterClass(&wndcls))
	      {
	         AfxMessageBox(_T("Class Registration Failed\n"));
	         return FALSE;
	      }
	     /********************************************************************/ 
	     // Other code here...
	     }
	
	3. Find the definition of PreCreateWindow for the Main Frame and add the
	  following code.
	
	     BOOL CMainFrame::PreCreateWindow(CREATESTRUCT& cs)
	     {
	       if( !CFrameWnd::PreCreateWindow(cs) )
	  	return FALSE;
	     /*************************************/ 
	       cs.lpszClass = _T("MyNewClass");
	     /*************************************/ 
	       return TRUE;
	     }
	
	4. Right-click CSampleApp and add a Virtual Function ExitInstance. Add the
	  following code in the function body:
	
	     int CSampleApp::ExitInstance() 
	     {
	      // Add your specialized code here and/or call the base class
	     /*********************/ 
	      ::UnregisterClass(_T("MyNewClass"),AfxGetInstanceHandle());
	     /*********************/        	
	      return CWinApp::ExitInstance();
	     }
	
	5. Choose your target, select Rebuild All and then select Run.
	
	REFERENCES
	==========
	
	  Q141752 SAMPLE: Limiting 32-bit Applications to a Single Instance
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Vidyanand Rajpathak, Microsoft Corporation
	
	
	Additional query words: VCCE, single, Instance
	
	======================================================================
	Keywords          : kbMFC kbVC kbVC500 kbVC600 kbOSWinCEsearch kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
