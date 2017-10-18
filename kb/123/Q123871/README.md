---
layout: page
title: "Q123871: PRB: Screen Saver Applications Cannot Be Debugged Properly"
permalink: kb/123/Q123871/
---

## Q123871: PRB: Screen Saver Applications Cannot Be Debugged Properly

	Article: Q123871
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2000,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbOSWin2000 kbVC kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbHWx86
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 5.0, 6.0, used with:
	   - the hardware: Intel x86 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may run into problems when debugging screen saver type applications in the
	Visual C++ development environment. For example, when attempting to debug the
	SCRNSAVE application included with Visual C++ version 2.0, the program starts
	correctly, but then may fail to return control and the focus to the debugger.
	
	CAUSE
	=====
	
	This is expected behavior. Screen savers don't use the same desktop as normal
	applications. When a breakpoint in the screen saver is encountered, the
	operating system doesn't switch desktops. Thus, there may be no screen in which
	to display the Visual C++ user interface and the breakpoint is essentially
	ignored.
	
	RESOLUTION
	==========
	
	There are two possible workarounds to this problem:
	
	1. Try debugging your application without using the Always-on-Top feature. Add
	  the feature when the application is ready to be released.
	
	2. Use remote debugging. For more information on remote debugging, see the
	  "Debugging Remote Applications" section in the "Using The Debugger" chapter
	  of the "Visual C++ User's Guide," or search for "remote debugging," in the
	  Visual C++ Books Online.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Using the Visual C++ version 2.0 SCRNSAVE sample in the
	\MSVC20\SAMPLES\WIN32\SCRNSAVE directory on the distribution CD, do the
	following:
	
	1. Build the program with debug information.
	
	2. Set a breakpoint on line 73 of FRACTAL.C.
	
	3. Set /S as an option for FRACTAL.EXE. To do this, select Settings from the
	  Project menu. Then select the Debug sheet from the Settings dialog. Type "/S"
	  (without the quotation marks) on the Program Arguments line.
	
	4. Run the program by pressing the F5 key. The screen should turn black and
	  appear to hang. Bring up the Task List by pressing CTRL+ESC. Then quit Visual
	  C++ to regain control of the system.
	
	NOTE: The SCRNSAVE sample included with Visual C++ version 4.0 is entirely
	different from that of Visual C++ version 2.0; it demonstrates Control Panel
	utility library routines for managing "cpArrow" window class/spinner controls
	used in applet dialog boxes.
	
	NOTE: No screen saver sample is provided in Visual C++ .NET.
	
	Additional query words: 9.00 Always Top HWND_TOP hung frozen not responding
	
	======================================================================
	Keywords          : kbDebug kbide kbOSWin2000 kbVC kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbHWx86 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :2.0,2.1,2000,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
