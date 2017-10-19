---
layout: page
title: "Q99999: INFO: Background Processing in an MFC Application"
permalink: /kb/099/Q99999/
---

## Q99999: INFO: Background Processing in an MFC Application

	Article: Q99999
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows 
	   - Microsoft Visual C++ 32-bit Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many applications perform lengthy processing "in the background" during
	intervals when the user is not otherwise interacting with the application. In an
	application developed for the Microsoft Windows operating system, an application
	can perform background processing by splitting a lengthy process into many small
	fragments. After processing each fragment, the application yields execution
	control to Windows using a PeekMessage() loop.
	
	An application developed with the Microsoft Foundation Class Library can perform
	background processing either by using the PeekMessage() loop in the library
	code's main message loop or by embedding another PeekMessage() loop in the
	application.
	
	NOTE: The remainder of this article, namely the sample code, is specific to
	Visual C++ for Windows and Visual C++ 32-bit Edition, version 2.x. For Visual
	C++ 32-bit Edition, version 4.0, please refer to the Frequently Asked Question
	(FAQ) about MFC "Background Processing in an MFC Application" in the Visual C++
	4.0 Books Online.
	
	MORE INFORMATION
	================
	
	In an application developed with the Microsoft Foundation Class Library, the
	main message loop in the CWinApp class contains a PeekMessage() loop. This loop
	calls the CWinApp::OnIdle() function between messages. An application can
	process messages in this idle time by overriding the OnIdle() function. For more
	information about performing background processing in the OnIdle() function,
	please refer to the documentation for the CWinApp::OnIdle() function in the
	"Class Libraries Reference" manual.
	
	Another method to perform background processing in an application involves
	embedding a PeekMessage() loop in a function. Because a PeekMessage() loop is
	very similar to the main message loop, such a loop in an application developed
	with the Microsoft Foundation Class Library must perform many of the functions
	of the main message loop in the library. The following code fragment
	demonstrates writing a PeekMessage() loop that is compatible with the Microsoft
	Foundation Class Library:
	
	     while (bDoingBackgroundProcessing)
	     {
	        while (::PeekMessage(&msg, NULL, 0, 0, PM_REMOVE))
	        {
	           if (msg.message == WM_QUIT)
	           {
	              bDoingBackgroundProcessing = FALSE;
	              ::PostQuitMessage(nExitCode);
	              break;
	           }
	           if (!AfxGetApp()->PreTranslateMessage(&msg))
	           {
	              ::TranslateMessage(&msg);
	              ::DispatchMessage(&msg);
	           }
	        }
	        AfxGetApp()->OnIdle(0);   // updates user interface
	        AfxGetApp()->OnIdle(1);   // frees temporary objects
	
	       // Perform some background processing here
	       // When you are done with the background task
	       // set bDoingBackgroundProcessing to FALSE
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbinfo
	
	=============================================================================
	
