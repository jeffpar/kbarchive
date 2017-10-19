---
layout: page
title: "Q71667: SUBST, JOIN, and APPEND Commands with Windows"
permalink: /kb/071/Q71667/
---

## Q71667: SUBST, JOIN, and APPEND Commands with Windows

	Article: Q71667
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS commands APPEND, SUBST, and JOIN modify the way MS-DOS searches for
	files. This can cause problems with certain applications, including Microsoft
	Windows and Windows for Workgroups.
	
	MORE INFORMATION
	================
	
	Windows 3.0
	-----------
	
	The README.TXT that comes with Microsoft Windows version 3.0 includes the
	following:
	
	  Omit the APPEND, JOIN, and SUBST MS-DOS Utilities
	  -------------------------------------------------
	  The MS-DOS utilities APPEND, JOIN, and SUBST can cause problems
	  when you are running Windows 3.0. If you included APPEND, JOIN,
	  or SUBST in your AUTOEXEC.BAT file, remove them and refrain from
	  running them within Windows.
	
	If any of these commands are in the AUTOEXEC.BAT file when Microsoft Windows 3.0
	is installed, they can cause the installation to be corrupted. This can cause
	the unrecoverable application errors (UAEs) to continue to occur even after the
	APPEND, JOIN, and SUBST commands are removed from the AUTOEXEC.BAT file.
	
	These commands can also cause intermittent UAEs if they are added after the
	installation of Windows. Therefore, customers who use Microsoft Windows 3.0
	should be warned when these commands are added to the AUTOEXEC.BAT files.
	
	Windows 3.1
	-----------
	
	The MS-DOS utilities APPEND, JOIN, and SUBST are listed in the [incompTSR2]
	section of the SETUP.INF file. If you are running these programs when you run
	Windows Setup, you receive the following message:
	
	  SETUP has found the programs listed below on your system. When SETUP or
	  Windows runs with some versions of these programs, your system may fail. It
	  is recommended that you quit Setup now and look in the file SETUP.TXT for
	  information about using the programs with Setup or Windows. Then run Setup
	  again.
	
	For more information on the SUBST, JOIN, and APPEND commands, query on the
	following words:
	
	  subst and path and msdos
	
	  -or-
	
	  subst and join and append
	
	Additional query words: 3.10 3.20 3.21 3.30 4.00 4.01 4.01a 5.0 5.00 5.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
