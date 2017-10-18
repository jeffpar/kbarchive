---
layout: page
title: "Q151961: Err Msg: Errors Occurred During this Operation..."
permalink: kb/151/Q151961/
---

## Q151961: Err Msg: Errors Occurred During this Operation...

	Article: Q151961
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use Microsoft Backup to restore files, you may receive the following
	error message:
	
	  Errors occurred during this operation. Do you want to view them now?
	
	Clicking Yes displays the error.log file, which contains the following errors:
	
	  Microsoft Backup has encountered an unexpected error number. Quit and restart
	  Backup, and then try again.
	
	  Microsoft Backup cannot find this file. If this is a network file, the
	  network may not be available. Or, the file Backup is looking for may have
	  been deleted or moved.
	
	CAUSE
	=====
	
	This behavior can occur if the files are being restored to a path that includes
	a logical drive letter that does not exist on the computer.
	
	For example, this behavior can occur if files are backed up from drive E on one
	computer and then restored on a different computer that does not have a logical
	drive E. By default, Backup attempts to restore files to the original location.
	Because the drive is not present, Backup is unable to restore the files.
	
	RESOLUTION
	==========
	
	To enable Backup to restore files to an alternate location, follow these steps:
	
	1. In Backup, click Options on the Settings menu.
	
	2. Click the Restore tab.
	
	3. Click Alternate Location.
	
	4. Click OK.
	
	5. Try to restore the files again.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
