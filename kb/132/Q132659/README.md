---
layout: page
title: "Q132659: Cannot Start WordPerfect 6.0a After Local Reboot"
permalink: kb/132/Q132659/
---

## Q132659: Cannot Start WordPerfect 6.0a After Local Reboot

	Article: Q132659
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
	
	If you exit WordPerfect with a local reboot, you receive the following error
	message when you try to restart the program:
	
	  Cannot start MFWIN before previous instance has quit
	
	CAUSE
	=====
	
	When you exit a 16-bit Windows-based program with a local reboot, the program
	does not cleanly remove all of its components from memory. In this case, DLLs
	are left in memory.
	
	RESOLUTION
	==========
	
	To start WordPerfect again, restart Windows 95. To avoid this problem, exit
	WordPerfect normally.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
