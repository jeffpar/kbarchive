---
layout: page
title: "Q98106: Windows Expand Utility Doesn't Correctly Expand MS-DOS Files"
permalink: /kb/098/Q98106/
---

## Q98106: Windows Expand Utility Doesn't Correctly Expand MS-DOS Files

	Article: Q98106
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you expand an MS-DOS program file with the Windows Expand utility, and then
	execute the file from within Windows, one of the following error messages may be
	displayed:
	
	  This application has violated system integrity due to execution of an invalid
	  instruction and will be terminated. Quit all applications, quit Windows, and
	  then restart your computer.
	
	  -or-
	
	  Insufficient memory to run the application. Quit one or more Windows
	  applications to increase available memory, and try again.
	
	In addition, the icon for a Windows-based MS-DOS 6.0 utility may appear as a
	generic MS-DOS icon.
	
	CAUSE
	=====
	
	The Expand utility included with Microsoft Windows 3.1 or Windows for Workgroups
	3.1 does not correctly expand MS-DOS 6.0 files. The Windows Expand utility only
	copies the files from the MS-DOS 6.0 disk to the target directory; it does not
	expand them.
	
	NOTE: You may accidentally use the Windows Expand utility if the Windows
	directory is in the path before the MS-DOS directory.
	
	If a Windows-based MS-DOS utility is still compressed, its icon appears as a
	generic MS-DOS icon, instead of its usual icon.
	
	WORKAROUND
	==========
	
	To properly expand files from the MS-DOS disks, you must use the MS-DOS Expand
	utility (EXPAND.EXE), which correctly expands MS-DOS files, as well as Windows
	3.1 and Windows for Workgroups 3.1 files.
	
	The MS-DOS 6 Expand utility (EXPAND.EXE) is located on Disk 1 of the 720-kilobyte
	(K), 1.2-megabyte (MB), and 1.44-MB disk sets and on Disk 3 of the 360K disk
	set. It can also be found in the MS-DOS directory if you have already installed
	MS-DOS 6.0 or 6.2.
	
	Additional query words: 6.22 6.00 6.20 3.10 MS-DOS6 err msg errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	
