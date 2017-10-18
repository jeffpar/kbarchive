---
layout: page
title: "Q71760: Drive and Directory Manipulation in Windows"
permalink: kb/071/Q71760/
---

## Q71760: Drive and Directory Manipulation in Windows

	Article: Q71760
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To get or set the current drive or directory in an application developed for the
	Microsoft Windows environment, use functions provided by the Microsoft C
	Run-time library. The functions listed below are compatible with Windows and are
	documented in the "Microsoft Run-time Library Reference" of Microsoft C version
	6.0, Microsoft C/C++ version 7.0, Microsoft Visual C++ version 1.0, and in the
	associated QuickHelp on-line help file. Some of the functions listed below are
	not available in Microsoft C version 5.1.
	
	NOTE: Any time an application gets or sets the current drive, it should get or
	set the current directory.
	
	Function       Use
	--------       ---
	
	chdir          Changes current working directory.
	
	_chdrive       Changes current drive.
	
	_dos_getdrive  Gets the current default drive, using MS-DOS
	              Interrupt 21h Function 19h.
	
	_dos_setdrive  Sets the default disk drive, using MS-DOS
	              Interrupt 21h Function 0Eh.
	
	getcwd         Gets current working directory.
	
	_getdcwd       Gets current working directory for the specified drive.
	
	_getdrive      Gets the current disk drive.
	
	mkdir          Makes a new directory.
	
	rmdir          Removes a directory.
	
	_searchenv     Searches for a given file on specified paths.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
