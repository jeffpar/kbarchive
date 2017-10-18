---
layout: page
title: "Q112888: PC DOS: Err Msg: Notice 13 Disk Full or Error Writing to Disk"
permalink: kb/112/Q112888/
---

## Q112888: PC DOS: Err Msg: Notice 13 Disk Full or Error Writing to Disk

	Article: Q112888
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0b, 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear when you access mail messages from the
	MS-DOS client:
	
	  Notice 13
	  Disk Full or Error Writing to Disk
	
	CAUSE
	=====
	
	This error can be caused by inadequate network rights.
	
	If you can send normal mail messages but have problems when you send mail with
	attachments, this error can also be caused by missing ATT subdirectories.
	
	RESOLUTION
	==========
	
	Make sure you have adequate network rights. If subdirectories are missing from
	the ATT directory, either restore them from a backup copy or, if no backup
	exists, create them using the MS-DOS MD command.
	
	NOTE: If you don't restore from backup copies but you just re-create the missing
	subdirectories, any attachments in the directory prior to its loss will no
	longer be available.
	
	Missing subdirectories are often a result of backup and restore processes that
	are not configured to include empty directories or zero-length files.
	
	If you move a database (for example, from drive M to drive P), the following
	XCOPY command ensures all directories are re-created on the destination drive:
	
	  xcopy m:\*.* /s /e p:
	
	Additional query words: 2.1x 3.00 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:2.1x,3.0,3.0b,3.2
	
	=============================================================================
	
