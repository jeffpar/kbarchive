---
layout: page
title: "Q115201: MS-DOS Help: Incomplete Information About ScanDisk /AUTOFIX"
permalink: /kb/115/Q115201/
---

## Q115201: MS-DOS Help: Incomplete Information About ScanDisk /AUTOFIX

	Article: Q115201
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS Help contains the following text about ScanDisk /AUTOFIX:
	
	/AUTOFIX
	
	  Fixes damage without prompting you first. By default, if you start ScanDisk
	  with the /AUTOFIX switch and ScanDisk finds lost clusters on your drive, it
	  saves the lost clusters as files in the drive's root directory. To have
	  ScanDisk delete lost clusters rather than saving them, include the /NOSAVE
	  switch. (If you use the /AUTOFIX switch and ScanDisk finds errors, it still
	  prompts you for an Undo disk; to prevent this, include the /NOSUMMARY
	  switch.) You cannot use the /AUTOFIX switch in conjunction with the
	  /CHECKONLY or /CUSTOM switches.
	
	MORE INFORMATION
	================
	
	Using the syntax above, ScanDisk does not actually scan the hard disk drive
	surface. To force ScanDisk to do so, use the /SURFACE switch in conjunction with
	the /AUTOFIX switch.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
