---
layout: page
title: "Q74454: MS-DOS Shell and the Colorado Tape Backup System"
permalink: kb/074/Q74454/
---

## Q74454: MS-DOS Shell and the Colorado Tape Backup System

	Article: Q74454
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Colorado Tape Backup on your system, and when you try to exit a
	program that has been run from MS-DOS Shell, you receive an error message
	similar to one of the following:
	
	  Unable to Load MS-DOS Shell
	
	  -or-
	
	  Unable to Unload MS-DOS Shell
	
	If you choose the RETRY button you are returned to MS-DOS Shell. If you choose
	the NO button, you are returned to the MS-DOS command prompt.
	
	CAUSE
	=====
	
	According to Colorado Memory Systems, when you load the automatic backup program
	from the AUTOEXEC.BAT file, it causes a memory conflict with Shell. If its
	automatic tape backup program is loaded from the AUTOEXEC.BAT file, it does not
	leave enough memory for Shell to operate properly.
	
	WORKAROUND
	==========
	
	A workaround for this problem is to load the automatic tape backup program from
	the MS-DOS command prompt, instead of the AUTOEXEC.BAT file.
	
	MORE INFORMATION
	================
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this products' performance
	or reliability.
	
	Additional query words: 5.00 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
