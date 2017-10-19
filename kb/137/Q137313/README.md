---
layout: page
title: "Q137313: Err Msg: Microsoft Backup Could Not Create an Image List..."
permalink: /kb/137/Q137313/
---

## Q137313: Err Msg: Microsoft Backup Could Not Create an Image List...

	Article: Q137313
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
	
	If you use Microsoft Backup to perform a large number of backup, restore, or
	compare operations, either all at once or over a long period of time, the
	following error message may be displayed if you do not close Backup
	periodically:
	
	  Microsoft Backup could not create an image list. Quit Backup and all other
	  running programs, restart Backup, and then try again.
	
	CAUSE
	=====
	
	Backup uses various system resources each time it performs a particular
	operation. These resources may not be returned to the system when the operation
	is complete, and therefore may accumulate as subsequent operations are
	performed. When a large number of operations have been performed, Windows 95 may
	be unable to allocate additional resources to Backup, causing the above error
	message to be displayed.
	
	RESOLUTION
	==========
	
	If you receive the error message stated above, quit and then restart Backup, and
	then resume your backup, restore, or compare operations. If this does not
	eliminate the problem, restart your computer, start Backup, and then resume the
	operations.
	
	
	To prevent this error message from appearing, quit and restart Backup
	periodically when you are performing a large number of operations.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
