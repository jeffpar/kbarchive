---
layout: page
title: "Q104355: SMARTDrive Reports Incorrect Version"
permalink: kb/104/Q104355/
---

## Q104355: SMARTDrive Reports Incorrect Version

	Article: Q104355
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SMARTDRV.EXE may report an incorrect version number when any of its functions
	are accessed from the command line. Rather than reporting the version of
	SMARTDRV.EXE that is loaded in memory, it reports the version of the first copy
	of SMARTDRV.EXE it finds on the hard disk (when using standard methods of
	searching for program files).
	
	CAUSE
	=====
	
	SMARTDrive is a disk-caching utility that can be started from the AUTOEXEC.BAT
	file or from the MS-DOS command prompt. Once SMARTDrive is running, certain
	functions can then be accessed from the MS-DOS command prompt. When any of these
	functions are accessed, SMARTDrive displays a status screen that includes a line
	similar to the following:
	
	  Microsoft SMARTDrive Disk Cache version 4.1
	
	As previously mentioned, the version number reported is the version of the first
	copy of SMARTDRV.EXE found in the search path.
	
	WORKAROUND
	==========
	
	To ensure that the copy that is found is the copy that is actually loaded in
	memory, use either of the following methods:
	
	- When you access SMARTDRV.EXE, specify the full path to the SMARTDRV.EXE file
	  that was loaded in memory. For example:
	
	     C:\DOS\SMARTDRV.EXE /STATUS
	
	-or-
	
	- Rename or delete all older versions of SMARTDRV.EXE that are located on the
	  hard disk.
	
	For more information on SMARTDrive, type the following at an MS-DOS command
	prompt:
	
	  " help smartdrv.exe" (without the quotation marks)
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
