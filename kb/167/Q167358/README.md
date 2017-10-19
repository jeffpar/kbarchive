---
layout: page
title: "Q167358: FIX: Remote Windows 95 Machine Crashes on Stop Debugging"
permalink: /kb/167/Q167358/
---

## Q167358: FIX: Remote Windows 95 Machine Crashes on Stop Debugging

	Article: Q167358
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbtool kbDebug kbide kbVC kbVC500bug kbVC600fixkbbuglist
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the remote machine is a Windows 95 machine and Stop Debugging is selected
	inside the InitInstance member function of a default Appwizard generated
	application, Developer Studio hangs on the local machine. If you kill Developer
	Studio from Task Manager, the remote Windows 95 machine crashes and must be
	restarted.
	
	RESOLUTION
	==========
	
	Using single stepping (F10 or F11) or Debug Go (F5), return from the
	InitInstance function so that the main window of the application is visible. Now
	you can safely select Stop Debugging.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	The behavior is seen if the remote computer is a Windows 95 machine. The local
	computer could be a Windows NT or a Windows 95 computer.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a default Appwizard generated MFC application and build it as Debug
	  build.
	
	2. Set the local computer and remote computer for remote debugging.
	
	3. Set a break point at the following line in the application's InitInstance
	  function:
	
	        pMainFrame->ShowWindow(m_nCmdShow);
	
	4. Start debugging by selecting Build|Start Debug|Go, or hitting the F5 key. The
	  debugger will stop at the above line of code.
	
	5. Hit F10 (Step Over) or F11 key (Step Into) to go to next line of code. You
	  will see an outline of the application window on the remote computer.
	
	6. Select Stop Debugging. A Debug Assertion in the remote computer (you may
	  Abort or Retry) occurs, and Developer Studio hangs on the local computer.
	
	7. Kill Developer Studio from Task Manager to crash the remote computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbDebug kbide kbVC kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
