---
layout: page
title: "Q137049: Save As Command May Overwrite Full System Backup Set File"
permalink: kb/137/Q137049/
---

## Q137049: Save As Command May Overwrite Full System Backup Set File

	Article: Q137049
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
	
	When you click Save As on the File menu in Backup, the name displayed in the
	File Name field is "Full System Backup.Set," which is the name of the default
	file set installed with Backup. If you click OK to save your current file set
	with this name, you overwrite the default file set, and you cannot perform a
	backup of your entire system.
	
	RESOLUTION
	==========
	
	To recover the original "Full System Backup.Set" file, you must reinstall
	Backup. To do so, follow these steps:
	
	1. In Control Panel, double-click the Add/Remove Programs icon.
	
	2. On the Windows Setup tab, click Disk Tools, and then click Details.
	
	3. Click the Backup check box to clear it, and then click OK.
	
	4. Click OK.
	
	5. Repeat steps 1-2.
	
	6. Click the Backup check box to select it, and then click OK.
	
	7. Click OK.
	
	NOTE: This procedure overwrites the current "Full System Backup.Set" file in the
	Program Files\Accessories folder. If this file represents a custom backup set
	that you want to keep, rename the file to another name before you follow the
	steps above. To do so, follow these steps:
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, and then click Backup.
	
	2. On the File menu, click Open File Set.
	
	3. Click the "Full System Backup.Set" file, and then click Open. Note that this
	  file is installed by default in the Program Files\Accessories folder.
	
	4. On the File menu, click Save As.
	
	5. Type a new name in the File Name field, and then click OK.
	
	6. Quit Backup.
	
	MORE INFORMATION
	================
	
	The "Full System Backup.Set" file set is designed to back up your entire system.
	This file set is configured to include all the registry files that are necessary
	for your system to work properly when you restore the files. You should not use
	this file set for incremental or partial backups.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
