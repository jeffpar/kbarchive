---
layout: page
title: "Q68624: Profiling Time Between OutputDebugString and FatalExit"
permalink: /kb/068/Q68624/
---

## Q68624: Profiling Time Between OutputDebugString and FatalExit

	Article: Q68624
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During the process of profiling an application, SHOWHITS.EXE typically reveals
	that a fairly large percentage of time was spent in the Microsoft Windows kernel
	between the FatalExit and OutputDebugString functions.
	
	This phenomenon occurs because a large amount of code between FatalExit and
	OutputDebugString is not public; however, this code is common to many public
	entry points. Therefore, when SHOWHITS.EXE compares the data generated from
	profiling an application to the data in the kernel symbol file, it matches the
	closest public symbol to the recorded information. Because the nonpublic code is
	present, SHOWHITS.EXE reports that the closest public symbols are FatalExit and
	OutputDebugString. However, the application may not be spending any time in
	either of these functions; instead, it may be spending time in some private
	function that is located between these functions.
	
	MORE INFORMATION
	================
	
	Because of the nonpublic code, determining exactly how much time the application
	is spending in a particular block of code can be difficult.
	
	The GetCurrentTime function and conditional compilation can be very helpful when
	timing specific sections of application code. GetCurrentTime returns the amount
	of time that has elapsed since Windows started. If an application calls this
	function before and after a particular block of code, the application can
	generate statistics on how much time is required for this block of code to
	execute.
	
	The following code demonstrates this idea:
	
	  // This preprocessor variable should be defined to build a profiling
	  // version of the application.
	  #define PROFILING
	
	  // This section should be either in the global variable section of the
	  // application or in the variable declaration section of the function
	  // to be profiled.
	  #ifdef PROFILING
	     static char szProfBuf[80];
	     static DWORD dwPrevTime, dwCurTime;
	  #endif
	
	  // This code initializes the variable and should be placed just before
	  // the code that is used to time a block of code.
	  #ifdef PROFILING
	     dwPrevTime = GetCurrentTime();
	  #endif
	
	  // This block of code is placed after each section of code timed. It
	  // will display the elapsed time and update the previous time variable
	  // so that a number of blocks of code can be timed.
	  #ifdef PROFILING
	     dwCurTime = GetCurrentTime();
	     wsprintf((LPSTR)szProfBuf, (LPSTR)"%lu\n\r\0",
	              dwCurTime - dwPrevTime);
	     OutputDebugString((LPSTR)szProfBuf);
	     dwPrevTime = dwCurTime;
	  #endif
	
	The sample code listed above displays the elapsed time on a secondary debugging
	monitor. If required, this code can be modified to write the data to a file for
	analysis instead of displaying the data on a monitor.
	
	Additional query words: 3.00 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
