---
layout: page
title: "Q153600: Missing Extended Memory After Restarting from MS-DOS Mode"
permalink: /kb/153/Q153600/
---

## Q153600: Missing Extended Memory After Restarting from MS-DOS Mode

	Article: Q153600
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you type "win" to restart Windows 95 from MS-DOS mode, your computer may
	seem to have lost 2 MB of extended memory.
	
	CAUSE
	=====
	
	This problem can occur if you are using QEMM version 7.50 with OEM Service
	Release 2 (OSR2).
	
	RESOLUTION
	==========
	
	To resolve this issue, use any one of the following methods:
	
	1. Type "exit" instead of "win" to return to Windows 95 from MS-DOS mode.
	
	2. Upgrade to QEMM version 8.0 or later.
	
	3. After you restart Windows 95 by typing "win," shut down and restart the
	  computer.
	
	MORE INFORMATION
	================
	
	In OSR2, loading Win.com automatically starts SmartDrive. This is not normally a
	problem because SmartDrive is released by Win.com in the transition from real
	mode to protected mode. QEMM, however, allocates specific extended memory that
	Windows 95 cannot reclaim when Win.com unloads SmartDrive. The memory that
	cannot be reclaimed is the memory used by SmartDrive.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2
	Version           : :2
	
	=============================================================================
	
