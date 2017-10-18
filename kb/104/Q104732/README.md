---
layout: page
title: "Q104732: Running MSD 2.01 under Windows Causes DoubleGuard Error"
permalink: kb/104/Q104732/
---

## Q104732: Running MSD 2.01 under Windows Causes DoubleGuard Error

	Article: Q104732
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running Microsoft Diagnostics (MSD) under Windows or Window for Workgroups may
	result in one of the following error messages:
	
	- This program has violated system integrity due to execution of an invalid
	  instruction and will be terminated.
	
	-or-
	
	- DoubleGuard Alarm #xx
	
	  A program has corrupted memory belonging to DoubleSpace. Further disk activity
	  could result in the loss of some or all of the data on your drive. Therefore,
	  DoubleGuard has halted your computer. For more information, see the
	  README.TXT file.
	
	RESOLUTION
	==========
	
	To work around this problem, exit Windows or Windows for Workgroups before
	running MSD.
	
	Additional query words: 6.22 6.20 DBLSPACE DBLGUARD DoubleGaurd #13 #14 #15 #16
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	
