---
layout: page
title: "Q137269: System Agent May Hang MS Backup"
permalink: kb/137/Q137269/
---

## Q137269: System Agent May Hang MS Backup

	Article: Q137269
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Backup while System Agent is running, your computer may restart. Or,
	after you quit Backup, you may find that an error has occurred with Disk
	Defragmenter, ScanDisk, or Compression Agent.
	
	CAUSE
	=====
	
	Because of minimal keyboard activity after you start Backup, System Agent may
	determine that the system is idle and start a scheduled task. These tools report
	"Error 6" when there is really nothing wrong with the drive in question. This
	error occurs if Backup is accessing a particular file or cluster when one of the
	disk tools try to access the same file or cluster. Note that there is no danger
	of data loss when this occurs.
	
	RESOLUTION
	==========
	
	Before you run Backup, disable System Agent. To do so, use the right mouse
	button to click the System Agent icon on the taskbar, and then click Suspend
	System Agent on the menu that appears. After Backup is finished, reactivate
	System Agent by clicking Suspend System Agent again.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	
