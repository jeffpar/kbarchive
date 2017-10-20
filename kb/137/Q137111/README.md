---
layout: page
title: "Q137111: Microsoft Backup Seems to Display Incorrect Information"
permalink: /kb/137/Q137111/
---

## Q137111: Microsoft Backup Seems to Display Incorrect Information

{% raw %}

	Article: Q137111
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
	
	When you click the Restore tab in Backup, click a drive or folder containing a
	backup set file, and then double-click the backup set file, the contents of the
	backup set file seem to be displayed inaccurately. In particular, the size
	displayed initially is 0, and the modified date displayed is not the date that
	the backup was made.
	
	CAUSE
	=====
	
	When you double-click a backup set file on the Restore tab, or click a backup
	set file and then click Next Step, the contents of that backup set file are
	displayed. The folder that is displayed initially in the pane on the right side
	of the screen is the root folder of the drive from which the backup was made.
	The information displayed to the right of this folder is information about the
	folder itself, not about the backup. A size of 0 bytes is reported because
	Windows 95 always reports folders as 0 bytes in size.
	
	RESOLUTION
	==========
	
	To see information about the actual files contained in the backup, double- click
	the folders displayed in the pane on the right side of the screen until the
	files in the folders are displayed.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
