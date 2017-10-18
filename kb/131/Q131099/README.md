---
layout: page
title: "Q131099: PRB: MFC App's CWinApp::ProcessMessageFilter() Never Invoked"
permalink: kb/131/Q131099/
---

## Q131099: PRB: MFC App's CWinApp::ProcessMessageFilter() Never Invoked

	Article: Q131099
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC kbVC100 kbVC200 kbVC410 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++ 32-bit Edition, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a 16-bit MFC application under Windows version 3.x, the
	application's CWinApp::ProcessMessageFilter() is never invoked.
	
	When running a 32-bit DEBUG MFC application under Win32s, the application
	generates an assertion in the CWnd::CreateEx() function. When the application is
	built for RELEASE mode, Win32s reports an Unhandled Exception.
	
	CAUSE
	=====
	
	Calling the SetMessageQueue() function from within an MFC application causes the
	problems listed above. Depending on the version of MFC used, MFC sets up one or
	more Window hooks when the application is first loaded. Calling
	SetMessageQueue() under Windows version 3.x, allocates a new message queue for
	your application and deletes the old one. After these hooks have been
	established, calling SetMessageQueue() destroys the hooks.
	
	This problem does not occur when running under Windows NT, because
	SetMessageQueue() does nothing on Windows NT. Windows NT automatically increases
	the application's message queue as needed.
	
	RESOLUTION
	==========
	
	Newer versions of MFC, starting with Visual C++ version 1.5, automatically
	attempt to set the application's message queue to a size of 96 using a loop
	similar to this one:
	
	          // attempt to make the message queue bigger
	          for (int cMsg = 96; !SetMessageQueue(cMsg) && (cMsg -= 8); )
	              ;
	
	Note that an attempt is made to set the message queue to 96. If this attempt
	fails, another attempt is made with a smaller value.
	
	If a larger message queue is needed or a failure is required in the event so that
	the message queue cannot be set at a desired size, you will need to provide a
	custom WinMain() function that duplicates the functionality of MFC's
	implementation of WinMain(). You can find the MFC implementation of WinMain() in
	\MFC\SRC\WINMAIN.CPP. Use it as a guideline for writing a custom WinMain()
	function for your application.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For more information on SetMessageQueue() and SetWindowsHookEx(), please consult
	the Visual C++ Help menu.
	
	Additional query words: 1.00 1.50 2.00 2.10 4.00 4.10
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC kbVC100 kbVC200 kbVC410 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
