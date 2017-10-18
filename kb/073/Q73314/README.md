---
layout: page
title: "Q73314: CTRL+PRINT SCREEN Causes ANSI Escape Sequences to Print"
permalink: kb/073/Q73314/
---

## Q73314: CTRL+PRINT SCREEN Causes ANSI Escape Sequences to Print

	Article: Q73314
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use ANSI escape sequences in the PROMPT command ($E) and turn on
	continuous print by pressing CTRL+PRINT SCREEN, the ANSI escape sequences used
	in the prompt will be printed when you press ENTER.
	
	MORE INFORMATION
	================
	
	When working from the command prompt, CTRL+PRINT SCREEN will print continuous
	output in a mirror image of the computer screen. If you used ANSI escape
	sequences to customize the command prompt with $E, the prompt, including the
	ANSI characters used in the PROMPT command, will be printed. The following
	example shows a prompt using ANSI escape codes to set the command prompt to
	magenta on black, and how it prints out using CTRL+PRINT SCREEN:
	
	  Prompt setting: PROMPT $e[35;40m$p$g$e[37;40m
	  How it will print: 35;40mC:\>37;40m
	
	If this output is unacceptable, the prompt can be changed from the command line
	by issuing the following command:
	
	  " PROMPT $P$G " (without the quotation marks)
	
	To set the prompt to its previous setting, restart the computer.
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0,6.0,6.2,6.21,6.22
	
	=============================================================================
	
