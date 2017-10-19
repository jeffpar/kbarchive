---
layout: page
title: "Q120707: HOWTO: Debug an Active Process in 32-bit Visual C++"
permalink: /kb/120/Q120707/
---

## Q120707: HOWTO: Debug an Active Process in 32-bit Visual C++

	Article: Q120707
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can debug an active process with 32-bit editions of Microsoft Visual C++.
	You can attach to the active process by starting Visual C++ using the
	undocumented -p switch, followed by the process identification number (PID).
	
	MORE INFORMATION
	================
	
	To obtain the PID for the process to be debugged, use the process viewer
	(PVIEW.EXE). Start PView. You will see something like this:
	
	  Process               CPU Time      Privileged      User
	  MyApp(0xb7)           ...
	
	Here 0xb7 is the PID value of the application named MyApp.
	
	Assume that the process was built with debugging information. Start Visual C++
	version 2.x as follows:
	
	  MSVC -p 0xb7
	
	Or, start Visual C++ version 4.0 or later as follows:
	
	  MSDEV -p 0xb7
	
	NOTE: Beginning with Visual C++ 5.0, you can also attach to a process by
	selecting the following menu option:
	
	     Build::Start Debug::Attach to Process...
	
	When Visual C++ is loaded, look for statements in the status bar at the bottom of
	the screen stating that symbols for the application and its DLLs have been
	loaded. At this point, select the Debug menu, and choose the Break option to see
	the assembler listing in the main window. Bring up the call stack. Then
	double-click one of your functions. This brings up the source code for that
	source module in which a breakpoint can be set, or you can just open a source
	file and set a break point.
	
	NOTE: When you stop debugging the application, the application will be
	terminated. This is expected behavior.
	
	The procedure on Windows 95 is a little different with Visual C++ 2.0 through 4.0
	(Visual C++ 4.1 and later handle the Windows 95 PID without conversion). The
	Windows 95 PIDs are negative signed decimals when converted from hexadecimal.
	You need to make sure the PID has a minus sign in front of it. For instance, if
	the PID of the process you want to attach to is FFFE64C3, you can use this
	method with calculator to get the PID:
	
	  Hex PID -> [Not] -> (DEC) -> [Not] -> Dec PID
	
	The double negation is to trick calculator into giving you the correct number.
	Otherwise, it gives you the unsigned decimal equivalent of the hex number, which
	is well outside the valid PID range. In this example, you should get a Dec PID
	of -105277. The command line to attach, then, is simply:
	
	     start msdev -p -105277 -e -105277
	
	If you pass an invalid PID, you might receive an error like:
	
	  Invalid Parameter (Win32, Error 87)
	
	Additional query words: current running attach
	
	======================================================================
	Keywords          : kbDebug kbide 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : :2.0,2.1,4.0,4.1,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
