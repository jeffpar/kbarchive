---
layout: page
title: "Q96333: MS Backup Err Msg: File Is Not a Setup File..."
permalink: kb/096/Q96333/
---

## Q96333: MS Backup Err Msg: File Is Not a Setup File...

	Article: Q96333
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you start Microsoft Backup for
	Windows on an NEC portable:
	
	  File is not a setup file C:\DOS\DEFAULT.SET
	
	CAUSE
	=====
	
	The following two conditions cause this error:
	
	- NEC BIOS creates a DEFAULT.SET file in the DOS directory when the battery
	  starts running low.
	
	- The DEFAULT.SET file in the DOS directory is corrupt.
	
	WORKAROUND
	==========
	
	To work around this problem, delete or rename the DEFAULT.SET file, and then
	restart Microsoft Backup for Windows.
	
	Additional query words: 6.00 mwbackup 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
