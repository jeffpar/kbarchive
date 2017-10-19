---
layout: page
title: "Q141752: Limiting 32-Bit MFC SDI/MDI Applications to a Single Instance"
permalink: /kb/141/Q141752/
---

## Q141752: Limiting 32-Bit MFC SDI/MDI Applications to a Single Instance

	Article: Q141752
	Product(s): Microsoft C Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbSample kbMFC KbUIDesign kbVC400 kbVC500 kbVC600 kbFAQ kbGrpDSMFCATL kbA
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Foundation Classes (MFC), version 1.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ONET32 sample application demonstrates how to limit a Microsoft Foundation
	Class Library (MFC) application to a single instance. This is the 32-bit version
	of this sample.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Onet32.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	Onet32.exe is a self-extracting file and should be executed as follows:
	
	  ONET32 -d
	
	The -d option maintains the subdirectory structure.
	
	There are several ways to limit a Windows-based application to a single instance.
	This sample program uses a technique in which a custom window class is
	registered for the application's main frame window. In subsequent instances,
	CWinApp::InitInstance searches for this window class and then activates the
	prior instance.
	
	This technique was chosen because it is fairly easy to implement.
	
	The following code fragments show the essential requirements of this technique:
	
	1. Override CWinApp::InitInstance to check for, and activate, any previous
	  instance of the application. Also, register your own window class as
	  follows:
	
	        // Add a static BOOL that indicates whether the class was
	        // registered so that you can unregister it in ExitInstance
	        static BOOL bClassRegistered = FALSE;
	
	        BOOL COneT32App::InitInstance()
	        {
	            // If a previous instance of the application is already running,
	            // then activate it and return FALSE from InitInstance to
	            // end the execution of this instance.
	
	            if(!FirstInstance())
	              return FALSE;
	
	            // Register your unique class name that you wish to use
	            WNDCLASS wndcls;
	
	            memset(&wndcls, 0, sizeof(WNDCLASS));   // start with NULL
	                                                    // defaults
	
	            wndcls.style = CS_DBLCLKS | CS_HREDRAW | CS_VREDRAW;
	            wndcls.lpfnWndProc = ::DefWindowProc;
	            wndcls.hInstance = AfxGetInstanceHandle();
	            wndcls.hIcon = LoadIcon(IDR_MAINFRAME); // or load a different
	                                                    // icon
	            wndcls.hCursor = LoadCursor( IDC_ARROW );
	            wndcls.hbrBackground = (HBRUSH) (COLOR_WINDOW + 1);
	            wndcls.lpszMenuName = NULL;
	
	            // Specify your own class name for using FindWindow later
	            wndcls.lpszClassName = _T("MyNewClass");
	
	            // Register the new class and exit if it fails
	            if(!AfxRegisterClass(&wndcls))
	            {
	              TRACE("Class Registration Failed\n");
	              return FALSE;
	            }
	            bClassRegistered = TRUE;
	
	            // Rest of InitInstance goes here
	            ...
	            ...
	            ...
	        }
	
	2. Add a member function to your CWinApp-derived class that actually does the
	  work of checking for, and activating of, a previous instance:
	
	        BOOL COneT32App::FirstInstance()
	        {
	          CWnd *pWndPrev, *pWndChild;
	
	          // Determine if another window with your class name exists...
	          if (pWndPrev = CWnd::FindWindow(_T("MyNewClass"),NULL))
	          {
	            // If so, does it have any popups?
	            pWndChild = pWndPrev->GetLastActivePopup();
	
	            // If iconic, restore the main window
	            if (pWndPrev->IsIconic())
	               pWndPrev->ShowWindow(SW_RESTORE);
	
	            // Bring the main window or its popup to
	            // the foreground
	            pWndChild->SetForegroundWindow();
	
	            // and you are done activating the previous one.
	            return FALSE;
	          }
	          // First instance. Proceed as normal.
	          else
	            return TRUE;
	        }
	
	3. Override CWinApp::ExitInstance to unregister the class if it was registered
	  as follows:
	
	        int COneT32App::ExitInstance()
	        {
	          if(bClassRegistered)
	            ::UnregisterClass(_T("MyNewClass"),AfxGetInstanceHandle());
	          return CWinApp::ExitInstance();
	        }
	
	4. Override CFrameWnd::PreCreateWindow to use your window class instead of the
	  one registered automatically by MFC as follows:
	
	        BOOL CMainFrame::PreCreateWindow(CREATESTRUCT& cs)
	        {
	            // Use the specific class name you established earlier.
	            cs.lpszClass = _T("MyNewClass");
	
	            // Change the following line to call.
	            // CFrameWnd::PreCreateWindow(cs) if this is an SDI application.
	            return CMDIFrameWnd::PreCreateWindow(cs);
	        }
	
	NOTE: This information does not apply to WinCE-based applications. For additional
	information about limiting 32-bit applications to a single instance on a Windows
	CE environment, please click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q238100 HOWTO: Limiting 32-bit Applications to a Single Instance in WinCE
	
	REFERENCES
	==========
	
	MFC Technical Note #1 discusses window class registration.
	
	For additional information about how to register MFC window classes, please click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q140596 INFO: MFC 4.0 No Longer Pre-Registers Window Classes
	
	For additional information, which is more recent, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q243953 HOWTO: Limit 32-bit Applications to One Instance Using C++
	
	Additional query words: ONETIME one time Chapter 12 Advanced Windows HINSTANCE hPrevInstance single instance
	
	======================================================================
	Keywords          : kbcode kbfile kbSample kbMFC KbUIDesign kbVC400 kbVC500 kbVC600 kbFAQ kbGrpDSMFCATL kbArchitecture 
	Technology        : kbVCsearch kbAudDeveloper _IKkbbogus kbMFC kbVCNET
	Version           : :1.0
	
	=============================================================================
	
