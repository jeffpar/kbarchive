---
layout: page
title: "Q118611: INFO: SetMessageQueue Used in MFC WinMain"
permalink: kb/118/Q118611/
---

## Q118611: INFO: SetMessageQueue Used in MFC WinMain

	Article: Q118611
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbWndwMsg kbGrpDSMFCATL kbArc
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Functions that use the applications message queue do not work correctly if they
	are called in the constructor of a global or static object. SetMessageQueue is
	called in the initialization code at the beginning of the MFC WinMain()
	function. SetMessageQueue replaces the current message queue with a new message
	queue. The constructors of global or static C++ objects are called before
	WinMain(). If these constructors call functions that rely on the message queue,
	the objects do not work properly.
	
	MORE INFORMATION
	================
	
	MFC for Windows, version 2.5, calls SetMessageQueue in the AfxWinInit()
	function, which is called by the MFC WinMain() function. The constructors for
	global and static objects are called before WinMain(). These constructors should
	not call functions that use the applications message queue or rely on the
	message queue remaining the same after the constructor is executed. These
	functions include:
	
	- Creating a window
	
	- Setting a timer (using SetTimer)
	
	- Setting a hook (using SetWindowsHook)
	
	- Posting a message
	
	If any one of these things is done in the constructor and is not processed or
	removed from the application's message queue before the constructor exits, it
	will not work later in the application. To work around this, initialize each of
	these objects in the CWinApp::InitInstance() function: Define an initialization
	member function for the object and call it in the CWinApp::InitInstance()
	function.
	
	Additional query words: kbinf 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbWndwMsg kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1
	Issue type        : kbinfo
	
	=============================================================================
	
