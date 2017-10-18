---
layout: page
title: "Q239514: MEM Command Reports Only 64 MB Extended Memory in MS-DOS Window"
permalink: kb/239/Q239514/
---

## Q239514: MEM Command Reports Only 64 MB Extended Memory in MS-DOS Window

	Article: Q239514
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbtool diskmem win95 win98 win98se kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the MEM command in an MS-DOS session within Windows, the value
	displayed for Extended (XMS) memory may be under 64 megabytes (MB), even though
	the computer may have more than 64 MB of physical memory installed. Also, the
	values for Extended memory and Total memory may be displayed as question marks
	(?).
	
	CAUSE
	=====
	
	This behavior occurs because programs running in an MS-DOS session in Windows
	can gain access to a maximum of 64 MB of extended memory.
	
	RESOLUTION
	==========
	
	The actual amount of physical memory detected by Windows is displayed in the
	System tool in Control Panel. The amount of free memory available is displayed
	in the System Monitor tool.
	
	For information about using the System Monitor tool to determine free memory
	availability, please click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q142770 How to View Free-Memory Statistics in Windows 95
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: ram virtual machine
	
	======================================================================
	Keywords          : kbtool diskmem win95 win98 win98se kbDiskMemory 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
