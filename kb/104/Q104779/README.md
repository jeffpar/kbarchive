---
layout: page
title: "Q104779: Undelete on LANtastic: Disk Drive Failed - Could Not..."
permalink: /kb/104/Q104779/
---

## Q104779: Undelete on LANtastic: Disk Drive Failed - Could Not...

	Article: Q104779
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Windows Undelete or the MS-DOS-based version of Undelete
	on a LANtastic server, you receive the following error message:
	
	  Disk drive failed - could not perform operation.
	
	CAUSE
	=====
	
	You cannot use Undelete on a local drive if LANtastic is running in server mode
	because all local drives are viewed as network drives.
	
	RESOLUTION
	==========
	
	To run Undelete, disable the server service by typing "REM" (without the
	quotation marks) and "space" (without the quotation marks) in front of the
	server command in your AUTOEXEC.BAT file and then restarting the computer.
	
	Additional query words: 6.22 6.00 6.20 mwundel
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
