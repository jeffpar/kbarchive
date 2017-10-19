---
layout: page
title: "Q74682: MS-DOS Shell Will Not Save Temporary Files to Floppy Disk"
permalink: /kb/074/Q74682/
---

## Q74682: MS-DOS Shell Will Not Save Temporary Files to Floppy Disk

	Article: Q74682
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When task swapping within MS-DOS version 5.0 and later Shell, dynamically
	created temporary files cannot be stored on a floppy drive. Even if the
	temporary environment variable is pointing to a floppy drive, Shell overrides
	the variable and creates any temporary files on the hard drive.
	
	If executing commands from the command prompt, such as the TYPE and PIPE
	commands, MS-DOS will store temporary files on the floppy disk.
	
	MS-DOS Shell recognizes a RAM drive for storing temporary files during task
	swapping.
	
	
	Additional query words: 5.00 5.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
