---
layout: page
title: "Q67347: Windows 3.0 Runs in Incorrect Mode from Menu Programs"
permalink: /kb/067/Q67347/
---

## Q67347: Windows 3.0 Runs in Incorrect Mode from Menu Programs

	Article: Q67347
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	Running Windows from a menu program may start Windows version 3.0 in
	real mode instead of standard mode or in standard mode instead of 386
	enhanced mode, depending on the machine's capability.
	
	If the menu program starts Windows with a mode switch, such as /r or
	/s, Windows operates in the mode indicated. For example, if the menu
	program uses WIN /R as its Windows execution command, Windows will
	always run in real mode.
	
	To correct the problem, change the menu program's instruction to run
	Windows or run Windows from a DOS prompt.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
