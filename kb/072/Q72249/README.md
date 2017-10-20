---
layout: page
title: "Q72249: CodeView Does Not Detect M61xx Math Errors"
permalink: /kb/072/Q72249/
---

## Q72249: CodeView Does Not Detect M61xx Math Errors

{% raw %}

	Article: Q72249
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS 
	- Microsoft CodeView for OS/2 
	-------------------------------------------------------------------------------
	
	An attempt to use CodeView to determine which source code statement
	causes a "M61xx" math error fails because CodeView is not designed to
	detect the C run-time library called an application's error-handling
	function. CodeView does not differentiate an error-handling function
	from others in the application.
	
	If you run the program in the CodeView debugger, the "M61xx" error may
	occur, but CodeView does not halt execution at that point. Instead,
	CodeView displays either the "Program terminated normally" or "Thread
	terminated normally" message, changes the display to assembly language
	mode, and displays the C run-time library termination code. The Calls
	menu does not provide any indication of where the error occurred.
	CodeView for Windows displays an "Application Error" message and does
	not display any source code.
	
	Because the error-handling function calls the operating system to
	terminate the process, CodeView detects a normal application
	termination and acts accordingly: displaying a termination message and
	displaying the C run-time library termination code in assembly
	language mode.
	
	To debug math errors with CodeView, set breakpoints at strategic
	locations before you run the application or animate the program at key
	points to see each line before it executes.
	
	Unlike CodeView, the QuickC integrated debugger places the cursor on
	the line that causes the math error if you select Animate from the Run
	menu.
	
	Additional query words: kbinf 2.20 3.00 3.50 4.00 4.10 M6101 M6102 M6103 M6104 M6105 M6106 M6107 M6108 M6110 M6111 M6112
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
