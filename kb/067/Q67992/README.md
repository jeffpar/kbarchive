---
layout: page
title: "Q67992: How Microsoft MS-DOS 5 Upgrade Locates DOS Subdirectory"
permalink: kb/067/Q67992/
---

## Q67992: How Microsoft MS-DOS 5 Upgrade Locates DOS Subdirectory

	Article: Q67992
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft MS-DOS 5 Upgrade SETUP.EXE identifies where your previous DOS files
	were kept on your hard drive.
	
	MORE INFORMATION
	================
	
	The Microsoft MS-DOS 5 Upgrade's Setup program searches the first active
	partition of the first physical hard drive for the following files:
	
	  FORMAT.COM    FORMAT.EXE
	  DISKCOPY.COM  DISKCOPY.EXE
	  BASIC.COM     BASIC.EXE
	  GWBASIC?.COM  GWBASIC?.EXE
	  SYS.COM       SYS.EXE
	
	If only one directory contains any of these files, that directory is used. If the
	above files are split between multiple directories, a directory will be chosen
	based upon the following criteria, in the following order:
	
	- The first directory found with three matches
	
	-or-
	
	- The first directory found with two matches
	
	-or-  - The first directory found with one match
	
	If no matches for the above files are found, the \DOS directory is used by
	default.
	
	Additional query words: 5.00 noupd 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
