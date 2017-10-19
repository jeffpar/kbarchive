---
layout: page
title: "Q132847: All Desktop Settings Not Restored After Full-System Backup"
permalink: /kb/132/Q132847/
---

## Q132847: All Desktop Settings Not Restored After Full-System Backup

	Article: Q132847
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you restore a full-system backup, it may appear that the desktop pattern,
	the wallpaper, and the screen saver have not been restored.
	
	CAUSE
	=====
	
	The last process of the restore operation is to merge the registry settings from
	the backup into the current registry. Once this process is completed, the
	registry contains the desktop settings from the backup files, and you must
	restart the computer so that the settings can be loaded into memory. If you do
	not restart the computer promptly, Windows may automatically update the registry
	with the previous desktop settings by overwriting the changes made during the
	restore operation.
	
	RESOLUTION
	==========
	
	Restart the computer as quickly as possible after the restore operation is
	completed; however, follow the proper shut-down procedures.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
