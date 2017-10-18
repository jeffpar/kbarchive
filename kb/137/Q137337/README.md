---
layout: page
title: "Q137337: Overwrite Older Files Only Option Enabled By Default"
permalink: kb/137/Q137337/
---

## Q137337: Overwrite Older Files Only Option Enabled By Default

	Article: Q137337
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
	
	When you try to restore files using Backup, you may receive the following error
	message:
	
	  Errors occurred during this operation. Do you want to view them now?
	
	If you click Yes, the Error.log file is opened in Notepad, and one or more lines
	that contain the following text are displayed:
	
	  An attempt to restore a file failed because the disk file is the same
	  date or newer than the file being restored.
	
	CAUSE
	=====
	
	This behavior occurs when the Overwrite Older Files Only option is enabled. This
	option causes Backup to restore only files that are newer than the version in
	the destination location. This option is enabled by default.
	
	RESOLUTION
	==========
	
	To disable the Overwrite Older Files Only option in Backup, follow these steps:
	
	1. On the Settings menu, click Options.
	
	2. On the Restore tab, click the Overwrite Files option button.
	
	3. Click OK.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
