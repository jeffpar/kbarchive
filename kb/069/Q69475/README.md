---
layout: page
title: "Q69475: Increasing the Size of the PWB Build Status Box on MS-DOS"
permalink: /kb/069/Q69475/
---

## Q69475: Increasing the Size of the PWB Build Status Box on MS-DOS

	Article: Q69475
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the MS-DOS version of the Microsoft Programmer's WorkBench (PWB) versions 1.0
	and 1.1, the status box displayed in the center of the screen during a compile
	can be made larger by increasing the length of the command being executed.
	
	MORE INFORMATION
	================
	
	When Build or Rebuild All is selected from the Make menu in PWB, a build status
	box appears on the screen showing the command currently being executed.
	Unfortunately, this box is often too small and the current command being
	displayed gets truncated. One way to increase the size of this box is to
	increase the length of the NMAKE command line.
	
	To increase the length of the NMAKE command line, add the following text to the
	NMAKE Options dialog box, which can be selected from the Options menu:
	
	  " /NOLOGO " (without the quotation marks)
	
	Be sure to include the spaces when you type this line. Then, when you select
	Build or Rebuild All from the Make menu, the build status box will be almost as
	wide as the screen, allowing most of the subsequent commands to fit completely
	into the box.
	
	If you use the PWB "compile" command, or choose the Compile File option from the
	Make menu, the build status box behaves similarly -- the longer the command to
	be executed command, the larger the box will be.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS
	Version           : MS-DOS:1.0,1.1
	
	=============================================================================
	
