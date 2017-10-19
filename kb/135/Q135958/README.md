---
layout: page
title: "Q135958: Second Instance of ScanDisk Returns Incorrect Exit Code"
permalink: /kb/135/Q135958/
---

## Q135958: Second Instance of ScanDisk Returns Incorrect Exit Code

	Article: Q135958
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you schedule two ScanDisk tasks in System Agent that overlap, the second task
	quits immediately with an exit code of 0. This causes ScanDisk to report that no
	errors were found, even though ScanDisk did not complete its scan.
	
	CAUSE
	=====
	
	You can run only one instance of ScanDisk at a time. If you try to start a
	second instance, the second instance quits immediately, and generates an
	incorrect exit code.
	
	RESOLUTION
	==========
	
	Do not schedule two ScanDisk tasks in System Agent that overlap.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	
