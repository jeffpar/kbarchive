---
layout: page
title: "Q64433: Can't Resize a Window with a Macro in PWB"
permalink: /kb/064/Q64433/
---

## Q64433: Can't Resize a Window with a Macro in PWB

	Article: Q64433
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A window cannot be resized using the "resize" function in a macro. in the
	Programmer's WorkBench (PWB). After PWB performs the resize function, it waits
	for the you to respond with the UP ARROW or DOWN ARROW key. Functions that are
	placed in the macro after the resize function are ignored. If "record on" is
	selected and you try to record the resizing of a window, the macro will stop
	recording until the ENTER key on the numeric keypad is pressed.
	
	MORE INFORMATION
	================
	
	The following is an example:
	
	  resizeit:= cancel arg arg nextmsg window resize up up up NumEnter
	
	The above example stops at the resize function and waits for you to resize the
	window. The remaining functions are ignored.
	
	To make a window a specified size, move the cursor to a location on the screen
	and then open the window with the "window" function.
	
	The following is an example of a macro that opens the "<compile>" window
	with a specified size:
	
	  compile_size:= up up up up up up up up up up
	  resize_it:=cancel meta down compile_size arg window window arg \ 
	             "<compile>" setfile window
	  resize_it:ALT+U
	
	Note: The size of the compile window can be adjusted by changing the number of
	ups on the compile_size line.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
