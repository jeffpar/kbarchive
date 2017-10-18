---
layout: page
title: "Q64566: &quot;Cannot Open File current.&#36;&quot; May Mean INIT Incorrect"
permalink: kb/064/Q64566/
---

## Q64566: &quot;Cannot Open File current.&#36;&quot; May Mean INIT Incorrect

	Article: Q64566
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
	
	When using the Programmer's Workbench (PWB) version 1.0 or 1.1, the following
	message may appear as a pop-up dialog box when choosing Compile or MS-DOS Shell
	(or OS/2 Shell for OS/2):
	
	  +----- Cannot open file! -----+
	  | D:\TEST\SRC\X\current.$ |
	  | No such file or directory |
	  |-----------------------------|
	  | < OK > < Help > |
	  +-----------------------------+
	
	One cause for this error is an incorrect setting of the INIT environment
	variable. To remedy the situation, exit PWB and make sure that the INIT
	environment variable is set to a valid directory name (that is, a directory that
	exists).
	
	MORE INFORMATION
	================
	
	To reproduce this message, set your INIT environment variable to an invalid
	directory, for example (if a directory named X does not exist on your drive):
	
	  SET INIT=C:\X
	
	Then start PWB and try to compile a program. The message will appear in the
	middle of the screen.
	
	One possible reason why your INIT environment variable may be set incorrectly,
	even if your AUTOEXEC.BAT sets it correctly, is that you might have run out of
	environment space in the setting of the variable. You can refer to the "MS-DOS
	Encyclopedia," Article 2, for more information about increasing your environment
	space.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
