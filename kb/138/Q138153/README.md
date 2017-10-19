---
layout: page
title: "Q138153: Error Message Overwriting Newer Files with Backup"
permalink: /kb/138/Q138153/
---

## Q138153: Error Message Overwriting Newer Files with Backup

	Article: Q138153
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
	
	When you try to restore a backup to its original location, you may receive the
	following message:
	
	  An attempt to restore a file failed because the disk file is newer
	  than the file being restored.
	
	CAUSE
	=====
	
	This behavior can occur if the Overwrite Older Files Only option is enabled.
	Backup does not overwrite newer files by default.
	
	RESOLUTION
	==========
	
	To disable the Overwrite Older Files Only option, follow these steps:
	
	1. In Backup, click Options on the Settings menu.
	
	2. On the Restore tab, click Overwrite Files in the Advanced Options box. If you
	  prefer to be prompted before files are overwritten, click the Prompt Before
	  Overwriting Files check box to select it.
	
	3. Click OK.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
