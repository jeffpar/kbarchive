---
layout: page
title: "Q138635: Backup to Floppy Disk Does Not Use All Available Disk Space"
permalink: /kb/138/Q138635/
---

## Q138635: Backup to Floppy Disk Does Not Use All Available Disk Space

	Article: Q138635
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
	
	When you use the Full System Backup set included with Windows 95, the size of
	the backup file on the floppy disk may be less than the full capacity of the
	disk.
	
	CAUSE
	=====
	
	This behavior occurs because of the number of files being backed up and the
	manner in which Microsoft Backup reserves room for the directory listing of
	these files. This normally occurs when you are using more than one hard disk,
	but can also occur with one hard disk if you back up many files or folders.
	
	RESOLUTION
	==========
	
	To resolve this issue, create multiple backup sets to separate the data being
	backed up, and then perform a backup operation for each set. For information
	about performing a backup operation, see the "Using Backup to back up your
	files" topic in the online Help system.
	
	Note that this method does not back up the registry files. The Full System Backup
	set backs up the registry files, and merges them back into the registry if you
	restore the backup files. To back up the registry, use the Microsoft
	Configuration Backup tool.
	
	Microsoft Configuration Backup is included in the CD-ROM version of Windows 95,
	but not in the floppy disk version. If you are using the floppy disk version of
	Windows 95 and want to use Configuration Backup, please see the following
	article in the Microsoft Knowledge Base for information about the availability
	of Configuration Backup:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	For additional information about Configuration Backup, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q135120 Configuration Backup Tool for Backing Up the Registry
	
	MORE INFORMATION
	================
	
	The Full System Backup set is used as an emergency recovery set in case of
	complete data loss. A partial restoration of this backup should not be
	performed.
	
	Additional query words: diskette
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
