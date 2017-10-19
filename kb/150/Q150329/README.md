---
layout: page
title: "Q150329: Personal Folders (.pst) File Not Automatically Reduced in Size"
permalink: /kb/150/Q150329/
---

## Q150329: Personal Folders (.pst) File Not Automatically Reduced in Size

	Article: Q150329
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
	
	Your personal folders (.pst) file may not reduce in size after you delete
	messages in Microsoft Exchange.
	
	CAUSE
	=====
	
	In order for a .pst file to be compressed automatically, the following
	conditions must be met:
	
	- Microsoft Exchange must be running.
	
	- The amount of recoverable space must be at least four percent of the total
	  size of the .pst file.
	
	- There must be idle processor time. You may need to disable your screen saver.
	
	RESOLUTION
	==========
	
	To reduce the size of a .pst file manually, follow these steps:
	
	1. Start Microsoft Exchange.
	
	2. On the Tools menu, click Services.
	
	3. Click Personal Folders, click Properties, and then click Compact Now.
	
	MORE INFORMATION
	================
	
	Personal Address Book (.pab) files are not compacted when you remove addresses
	from your address book. There is no way to manually compact these files.
	However, free space in these files is reused when you add new addresses.
	
	Additional query words: store information
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
