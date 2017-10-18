---
layout: page
title: "Q132650: Cannot Remove Deeply Rooted Folder"
permalink: kb/132/Q132650/
---

## Q132650: Cannot Remove Deeply Rooted Folder

	Article: Q132650
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95 98
	Operating System(s): 
	Keyword(s): kberrmsg kbui win95 win98
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to delete a folder, you may receive one of the following error
	message:
	
	  Cannot remove folder <folder name>: Access is denied. Make sure the
	  disk is not full or write protected and that the file is not currently in
	  use.
	
	  Cannot delete *.*. Cannot find the specified file. Make sure you specify the
	  correct path and filename.
	
	CAUSE
	=====
	
	The directory structure for the folder you want to remove is longer than the
	maximum allowable length.
	
	RESOLUTION
	==========
	
	You may be able to delete the folder using one of the following methods:
	
	- Rename some of the parent folders that are closer to the root directory with
	  shorter names, then try to delete the folder.
	
	- Run ScanDisk, then try to delete the folder.
	
	MORE INFORMATION
	================
	
	You may also receive the following message when you rename a folder:
	
	  This operation may affect some registered applications.
	
	This message occurs for the same reason as the message you receive when you try
	to delete a folder. You can ignore this message and continue.
	
	======================================================================
	Keywords          : kberrmsg kbui win95 win98 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : 95 98
	Issue type        : kbprb
	
	=============================================================================
	
