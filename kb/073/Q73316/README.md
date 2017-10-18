---
layout: page
title: "Q73316: MS-DOS Shell Error Message: Unable to Load COMMAND.COM"
permalink: kb/073/Q73316/
---

## Q73316: MS-DOS Shell Error Message: Unable to Load COMMAND.COM

	Article: Q73316
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
	
	You may get the following error message when trying to run an application from
	MS-DOS Shell:
	
	  Unable to load COMMAND.COM or DOSSWAP.EXE.
	
	CAUSE
	=====
	
	Your DOSSHELL.INI may be corrupt.
	
	WORKAROUND
	==========
	
	To correct this problem, the DOSSHELL.INI file must be expanded from the
	Microsoft MS-DOS 5 or 6 Upgrade disks. There are different DOSSHELL.INI files
	for various video systems. Because there is no compressed .INI file for VGA
	video systems, the EGA.IN_ must be expanded for VGA video systems. The names of
	the compressed INI files are as follows:
	
	  MONO.IN_     2990     04-09-91     5:00a
	  CGA.IN_      3330     04-09-91     5:00a
	  EGA.IN_      3333     04-09-91     5:00a
	
	For MS-DOS 5, these files can be found on Disk 3 (5.25-inch disk set) or Disk 2
	(3.5-inch set).
	
	For MS-DOS 6, these files are on Disk 1 (both disk sets).
	
	The following command is an example of how to expand the EGA MS-DOS Shell .INI
	file to the \DOS directory on drive C. Type the following from the drive that
	contains the MS-DOS 5.0 upgrade disk:
	
	  EXPAND EGA.IN_ C:\DOS\DOSSHELL.INI
	
	REFERENCES
	==========
	
	For more information on installing DOSSHELL.INI files, see pages 44-46 of the
	version 5.0 "Microsoft MS-DOS Getting Started" manual. For version 6.0, refer to
	page 195 of the "Microsoft MS-DOS User's Guide" and to online help.
	
	For more information on MS-DOS Shell, query on the following words:
	
	  " MS-DOS and DOSSHELL and <version number> " (without the quotation
	  marks)
	
	where <version number> is the version of MS-DOS that you are using.
	
	Additional query words: 5.00 5.00a 6.00 6.20, 6.21, 6.22 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
