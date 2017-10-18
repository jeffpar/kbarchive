---
layout: page
title: "Q106100: PC DOS: Err Msg: Keyboard Is Disabled. Saving Image."
permalink: kb/106/Q106100/
---

## Q106100: PC DOS: Err Msg: Keyboard Is Disabled. Saving Image.

	Article: Q106100
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you load the Microsoft Mail Screen Capture program (MSCAPT.EXE) and then
	try to invoke it by using the hot key (RIGHT SHIFT or LEFT SHIFT), the following
	error message may be displayed:
	
	  Keyboard is disabled. Saving image.
	
	CAUSE
	=====
	
	The keyboard is disabled by default. This is by design.
	
	RESOLUTION
	==========
	
	To resolve this problem, start the program with the -G switch:
	
	  MSCAPT -G
	
	The command-line options for the MSCAPT program are not mentioned in the
	Microsoft Mail for PC Networks "User's Guide."
	
	More command-line options for the MSCAPT program are available by typing the
	following command:
	
	  "MSCAPT -?" (without the quotation marks)
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
