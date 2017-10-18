---
layout: page
title: "Q109175: How to Limit an MFC Application to a Single Instance"
permalink: kb/109/Q109175/
---

## Q109175: How to Limit an MFC Application to a Single Instance

	Article: Q109175
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1
	Operating System(s): 
	Keyword(s): kbsample kbMFC KbUIDesign kbVC kbGrpDSMFCATL kbArchitecture
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ONETIME sample application demonstrates how to limit a Microsoft Foundation
	Class Library (MFC) application to a single instance.
	
	NOTE: The technique shown in this article will not work with MFC versions 4.0 and
	later because MFC window classes are not pre-registered in these versions. A
	similar technique is used in the ONET32 sample that was written specifically for
	MFC versions 4.0 and later. For details, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q141752 SAMPLE: Limiting 32-bit Applications to a Single Instance
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Onetime.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	MORE INFORMATION
	================
	
	There are several ways to limit a Windows-based application to a single
	instance. This sample program uses a technique where a custom window class is
	registered for the application[ASCII 146]s main frame window. In subsequent
	instances, CWinApp::InitInstance() searches for this window class and then
	activates the prior instance.
	
	This technique was used because it is fairly easy to implement and is portable to
	the Win32 application programming interface (API). Because the
	BringWindowToTop() function works differently in Win32 from 16-bit Windows, the
	SetForegroundWindow() function should be used instead of BringWindowToTop() in
	applications that are based on Win32 only.
	
	REMINDER: The following ONETIME technique will not work with MFC versions 4.0 and
	later because the window classes are not pre-registered. A similar technique is
	used in the ONET32 sample, which was written specifically for MFC versions 4.0
	and later. For details, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q141752 SAMPLE: Limiting 32-bit Applications to a Single Instance
	
	Technique Used in the ONETIME Sample
	------------------------------------
	
	The following code fragments show the essential requirements of this technique:
	
	Sample code to override CWinApp::InitApplication() to register the custom window
	class:
	
	     BOOL COnetimeApp::InitApplication()
	     {
	
	       // Base class version actually does nothing.
	       CWinApp::InitApplication();
	
	       WNDCLASS wndcls;
	
	       // Start with NULL defaults.
	       memset(&wndcls, 0, sizeof(WNDCLASS));
	
	       // Retrieve WNDCLASS structure for default window class.
	       ::GetClassInfo(AfxGetInstanceHandle(),"AfxFrameOrView",&wndcls);
	
	       // Give new class a unique name.
	       wndcls.lpszClassName = "MyNewClass";
	
	       // Register new class and return result from ::RegisterClass().
	       return ::RegisterClass(&wndcls);
	
	     }
	
	Sample code to override CWinApp::InitInstance() to check for (and activate) any
	previous instance of the application:
	
	     BOOL COnetimeApp::InitInstance()
	     {
	
	       // If this isn't the first instance, return FALSE
	       // immediately. FirstInstance() will have already
	       // activated the previous instance.
	
	       if (!FirstInstance())
	         return FALSE;
	
	       SetDialogBkColor(); // Set dialog box background color to gray.
	          .
	          . // Continue with normal InitInstance code...
	          .
	     }
	
	Sample code to add a member function to your CWinApp-derived class that actually
	does the work of checking for and activating a previous instance:
	
	     BOOL COnetimeApp::FirstInstance()
	     {
	       CWnd *PrevCWnd, *ChildCWnd;
	
	       // Determine if another window with our class name exists...
	       if (PrevCWnd = CWnd::FindWindow("MyNewClass",NULL))
	       {
	         // if so, does it have any popups?
	         ChildCWnd=PrevCWnd->GetLastActivePopup();
	
	         // Bring the main window to the top.
	         PrevCWnd->BringWindowToTop();
	
	         // If iconic, restore the main window.
	         if (PrevCWnd->IsIconic())
	            PrevCWnd->ShowWindow(SW_RESTORE);
	
	         // If there was an active popup, bring it along too
	         if (PrevCWnd != ChildCWnd)
	            ChildCWnd->BringWindowToTop();
	
	         // Return FALSE. This isn't the first instance
	         // and you finished activating the previous one.
	         return FALSE;
	       }
	       else
	         return TRUE;  // First instance. Proceed as normal.
	     }
	
	Sample code to override CFrameWnd::PreCreateWindow() to use your window class
	instead of the one registered automatically by MFC:
	
	     BOOL CMainFrame::PreCreateWindow(CREATESTRUCT& cs)
	     {
	       cs.lpszClass = "MyNewClass";
	       return TRUE;
	     }
	
	Additional query words: kbNoUpdate
	
	======================================================================
	Keywords          : kbsample kbMFC KbUIDesign kbVC kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1
	
	=============================================================================
	
