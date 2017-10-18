---
layout: page
title: "Q116167: FIX: Visual Workbench Cannot Find WndProc in Windows 3.1 Apps"
permalink: kb/116/Q116167/
---

## Q116167: FIX: Visual Workbench Cannot Find WndProc in Windows 3.1 Apps

	Article: Q116167
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDebug kbidekbbuglist kbfixlist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Visual Workbench Integrated Debugger, used with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual Workbench debugger allows you to set a breakpoint in a window
	procedure. This makes it possible for the application being debugged to break in
	the function when a specific message or class of messages is received. If the
	Windows version 3.1 prototype is used for the window procedure, the Visual
	Workbench is not able to identify the function as a window procedure. As a
	result, the WndProc list box in the Breakpoints dialog box that lists the
	available window procedures does not list the function.
	
	CAUSE
	=====
	
	The Visual Workbench uses the Windows version 3.0 WndProc prototype, which reads
	as follows:
	
	           long _far _pascal WndProc(WORD, WORD, WORD, LONG)
	
	The Windows version 3.1 WndProc prototype is slightly different:
	
	           long _far _pascal WndProc(HWND, UINT, WPARAM, LPARAM)
	
	When the Windows version 3.1 prototype is used, the Visual Workbench is not able
	to find the WndProc function.
	
	RESOLUTION
	==========
	
	Even though it is not possible to select the window procedure to break in from
	the WndProc list box in the Breakpoints dialog box, it is possible to manually
	enter the name of the function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 2.0.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, do the following:
	
	1. Build a debug version of any of the Windows samples provided with Visual C++.
	
	2. When the build is completed, choose Breakpoints from the Debug menu.
	
	3. In the Type field, choose "Break at WndProc if Message is Received". The
	  second item in the dialog box will change to "WndProc"; however, the list box
	  will not contain any Windows procedures.
	
	Additional query words: 1.00 1.50
	
	======================================================================
	Keywords          : kbDebug kbide kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
