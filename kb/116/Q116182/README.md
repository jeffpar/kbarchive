---
layout: page
title: "Q116182: BUG: ClipCursor() Restricts Mouse Movement in Debugger"
permalink: /kb/116/Q116182/
---

## Q116182: BUG: ClipCursor() Restricts Mouse Movement in Debugger

	Article: Q116182
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.1; WINDOWS:1.0,1.5
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 4.0, 4.01, 4.1 
	- Microsoft Visual C++, versions 1.0, 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling the ClipCursor() function restricts mouse movement in CodeView for
	Windows, the Visual C++ integrated debugger, and the application being debugged.
	The problem also occurs when you use CodeView for Windows in dual- monitor mode.
	
	RESOLUTION
	==========
	
	To work around the problem, enter commands using the keyboard when mouse
	movement is restricted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in CodeView for Windows and the Visual
	C++ debugger. We are researching this problem and will post new information in
	the Microsoft Knowledge Base as soon as it becomes available.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, use the following steps:
	
	1. Add the sample code shown below to the MainWndProc() function in the GENERIC
	  sample found in the SAMPLES directory.
	
	2. Build the application in debug mode and set a breakpoint on the ClipCursor
	  function.
	
	3. Press F5 to run "Generic". Size the Generic window to be a fraction of the
	  total screen size.
	
	4. Choose "Help.About Generic".
	
	5. Click the "OK" button in the About dialog box to hit the breakpoint.
	
	6. Continue debugging using F8, F10, or F5.
	
	The mouse is now restricted to the small area of the screen that you resized in
	step 3.
	
	Sample Code
	-----------
	
	  long CALLBACK __export MainWndProc(/* ... */)
	     {
	      RECT rect;                         /* add this line */ 
	
	      switch (message)
	      {
	        case WM_COMMAND:
	          if (wParam == IDM_ABOUT)
	          {
	           DialogBox(/* ... */);
	           GetWindowRect(hWnd, &rect);    /* add this line */ 
	           ClipCursor(&rect);             /* add this line */ 
	           break;
	          }
	
	Additional query words: 4.00 4.01 4.10 1.00 1.50 1.50.01
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbvc150 kbvc100 kbCodeView kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :4.0,4.01,4.1; WINDOWS:1.0,1.5
	Issue type        : kbbug
	
	=============================================================================
	
