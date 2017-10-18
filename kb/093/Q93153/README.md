---
layout: page
title: "Q93153: SMARTDrive Can't Load with Syntax Errors or Incorrect Options"
permalink: kb/093/Q93153/
---

## Q93153: SMARTDrive Can't Load with Syntax Errors or Incorrect Options

	Article: Q93153
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a syntax error occurs when you try to load SMARTDrive version 4.0, 4.1, 4.2,
	or 5.0 from the AUTOEXEC.BAT file or the MS-DOS command line, SMARTDrive does
	not load. Instead of displaying an error message, SMARTDrive displays the online
	help screen. This screen contains the same information that is displayed if you
	type "SMARTDRV /?" (without the quotation marks) at the MS-DOS command prompt.
	
	Similarly, if the /C or /Q switches are used on the command line to load
	SMARTDrive from the AUTOEXEC.BAT file, SMARTDrive does not load, but it also
	does not display any information, even if /V (Verbose) switch is used.
	
	CAUSE
	=====
	
	Any syntax errors that appear on the command line used to load SMARTDrive
	generate these problems. For example, if you try to enable write-behind caching
	for drive C by typing "+C" (instead of "C+") at the end of the SMARTDRV.EXE
	command line, SMARTDrive does not load, and the online help information is
	displayed (even if you specified a /Q switch, which normally prevents the
	display of SMARTDrive information on the screen).
	
	In addition, the following command line switches prevent SMARTDrive from
	loading:
	
	  Command Line Option              Purpose
	  -------------------              -------
	
	  /C                               Writes all cached information to
	                                   the hard disk.
	
	  /S                               Displays additional information about
	                                   the status of SMARTDrive.
	
	  /?                               Displays online help about SMARTDrive.
	
	These options are not designed to be used on the command line when you start
	SMARTDrive.
	
	Additional query words: 3.10 3.11 6.00 6.20 6.21 6.22 parameters switch switches
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	
