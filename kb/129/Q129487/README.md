---
layout: page
title: "Q129487: Err Msg: Microsoft Backup Is Now Restoring the Settings in..."
permalink: kb/129/Q129487/
---

## Q129487: Err Msg: Microsoft Backup Is Now Restoring the Settings in...

	Article: Q129487
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
	
	When you are restoring one or more files using Microsoft Backup, you receive the
	following error message:
	
	  Microsoft Backup is now restoring the settings in your system registry. This
	  may take a few minutes. Do not shut down your computer until the registry is
	  fully restored, or your computer will not work properly.
	
	You receive this error message even if you did not choose to restore the registry
	files.
	
	CAUSE
	=====
	
	The "Full System Backup.Set" backup set may have been used to create the backup
	you are restoring from. When this backup set is used, the registry is restored
	regardless of which files you choose to restore.
	
	RESOLUTION
	==========
	
	Use a backup set other than "Full System Backup.Set" to back up data on your
	computer.
	
	MORE INFORMATION
	================
	
	The "Full System Backup.Set" backup set is intended for backing up your entire
	hard disk. When you use this backup set, the registry files are contained in the
	backup. When you later restore files from this backup, the registry information
	stored in the backup is merged into the current registry.
	
	You should not use the "Full System Backup.Set" backup set to perform partial or
	differential backups.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
