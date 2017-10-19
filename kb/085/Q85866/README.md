---
layout: page
title: "Q85866: MS-DOS Shell May Create #.1 File"
permalink: /kb/085/Q85866/
---

## Q85866: MS-DOS Shell May Create #.1 File

	Article: Q85866
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When MS-DOS Shell is interrupted abruptly by a system crash or a system reboot,
	a file called #.X (where X is an integer value of 1 or more) may be left in the
	MS-DOS directory.
	
	This file is a temporary file containing information similar to the DOSSHELL.INI
	file.
	
	MORE INFORMATION
	================
	
	Shell is a file and program management interface supplied with MS-DOS 5.0 and
	6.0. The preference settings for the program are saved in the DOSSHELL.INI
	file.
	
	Changing options within Shell may cause a file called #.X (where X is an integer)
	to be created. The #.X file contains the original DOSSHELL.INI file with the
	updated options.
	
	Normally this file is deleted when you properly exit Shell, but if the system
	hangs before exiting, the file may remain in the directory that contains Shell.
	
	If there are problems writing to the #.X file, Shell may get stuck in a loop, and
	the file may become several megabytes in size. If this happens, you can delete
	the file after exiting Shell.
	
	NOTE: Any settings changed before the system hang or reboot must be set again.
	
	Additional query words: 5.00 6.00 5.00a msdos 50 dosshell
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	
