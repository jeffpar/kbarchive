---
layout: page
title: "Q278452: PRB: Visual C++ 6.0 Break Command Failed"
permalink: kb/278/Q278452/
---

## Q278452: PRB: Visual C++ 6.0 Break Command Failed

	Article: Q278452
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC kbVC600bug kbDSupport kbGrpDSTools
	Last Modified: 26-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to break into a running application by using the Visual C++
	debugger, you may receive the following error message in the output window:
	
	  DBG: Break command failed within 3 seconds.
	  DBG: Potential deadlock. Soft broken.
	
	Any further attempts to step through code are unsuccessful; only Go works to
	resume the process.
	
	CAUSE
	=====
	
	There are two possible causes:
	
	- The current thread is suspended. The thread is probably waiting for a
	  synchronization object to become available. Unfortunately, the time-out value
	  in Visual C++ 5.0 and 6.0 is 3 seconds. There is no way to change this
	  time-out value.
	
	- The application is performing some CPU-intensive operation. In this case, the
	  debugger has problems breaking into the running process before the time out
	  occurs. This problem seems to happen more frequently on Microsoft Windows
	  2000.
	
	RESOLUTION
	==========
	
	The easiest way to work around this problem is to set breakpoints rather than to
	perform a hard break at run time. However, there are times when this is not
	possible.
	
	If you suspect that true deadlock is occurring in your application, you will have
	to determine its cause. See Detecting Deadlocks in Multithreaded Win32
	Applications by Ruediger R. Asche in the Microsoft Developer Library (MSDN) at:
	
	  http://msdn.microsoft.com/library/techart/msdn_deadlock.htm
	
	If you suspect that your process just needs more than 3 seconds to wait for the
	synchronization object, consider setting a breakpoint immediately after the
	WaitForSingleObject or WaitForMultipleObjects call.
	
	If your application is performing CPU-intensive activity when you need to break,
	one way to allow for easier debugging is to call the Sleep function. By placing
	strategic calls to Sleep, you allow the debugger to more successfully break into
	the running process. For example, you can use a macro that only evaluates to a
	Sleep call when you are debugging:
	
	  #ifdef _DEBUG
	  #define DEBUGSLEEP Sleep(50)
	  #else
	  #define DEBUGSLEEP
	  #endif
	
	If you continue to have problems when you use the DEBUGSLEEP macro, try
	increasing the time that you sleep by 50 after each test.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following two code fragments demonstrate the two possible situations. Notice
	that the second code fragment may not reproduce the behavior on all computers
	(it depends on the speed of the computer and the operating system).
	
	Deadlock Example:
	
	  // Simple deadlock example:
	  WaitForSingleObject(GetCurrentProcess(), INFINITE);
	
	CPU-Intensive Code:
	
	  // Infinite loop.
	  int i = 0;
	  while (true)
	     i++;
	
	In the second example, you may be able to successfully break in by changing the
	code to use the DEBUGSLEEP macro:
	
	     // Infinite loop.
	     int i = 0;
	     while (true)
	     {
	        DEBUGSLEEP;
	        i++;
	     }
	
	Additional query words: dead lock locke
	
	======================================================================
	Keywords          : kbDebug kbide kbVC kbVC600bug kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
