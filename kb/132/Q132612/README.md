---
layout: page
title: "Q132612: Arcada Backup Hangs in MS-DOS Mode"
permalink: /kb/132/Q132612/
---

## Q132612: Arcada Backup Hangs in MS-DOS Mode

	Article: Q132612
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
	
	Arcada Backup may stop responding (hang) when you are using it to back up or
	restore files.
	
	
	RESOLUTION
	==========
	
	Run Arcada Backup in MS-DOS mode. Specify a special configuration that does not
	load Emm386.exe but loads the necessary ASPI drivers. To create a special
	configuration, click the Advanced button on the Program tab in the program's
	properties.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
