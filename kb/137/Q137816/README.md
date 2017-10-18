---
layout: page
title: "Q137816: Formatted Disk May Show Incorrect Bad Sector Information"
permalink: kb/137/Q137816/
---

## Q137816: Formatted Disk May Show Incorrect Bad Sector Information

	Article: Q137816
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
	
	When you format a floppy disk in Windows 95 by typing the FORMAT command (FORMAT
	<X>: /S) at an MS-DOS prompt, the summary information displayed for the
	disk may be incorrect. For example, you may see the following summary:
	
	      1,457,664 bytes total disk space
	        397,824 bytes used by system
	  4,294,597,120 bytes in bad sectors
	      1,430,016 bytes available on disk
	
	            512 bytes in each allocation unit.
	          2,793 allocation units available on disk.
	
	This behavior can occur after you see the following error message:
	
	  Disk unsuitable for system disk.
	
	CAUSE
	=====
	
	This behavior can occur if the floppy disk contains a bad sector where Windows
	95 would have otherwise copied the system files. Even though Windows 95 reports
	4 gigabytes of bad sectors, there is actually no problem with the disk other
	than that the transfer of system files failed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If you reformat the disk without the /S command, the correct information will be
	displayed for the disk. However, the disk will not be a boot disk.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
