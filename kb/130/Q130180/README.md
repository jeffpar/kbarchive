---
layout: page
title: "Q130180: Safe Mode Reports 4K Less Conventional Memory"
permalink: kb/130/Q130180/
---

## Q130180: Safe Mode Reports 4K Less Conventional Memory

	Article: Q130180
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MEM and CHKDSK commands report 4K less of conventional memory in Safe mode
	than they do when you are running Windows 95 normally.
	
	  Safe Mode   Running Normally
	  ----------------------------
	  651,264     655,360
	
	CAUSE
	=====
	
	The difference in the amount of conventional memory reported is due to a 4K
	buffer for hard disk double-buffering allocated by Safe mode. Not all computers
	require this buffer, but when started in Safe mode, Windows 95 allocates this
	buffer unconditionally as an additional safety precaution.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
