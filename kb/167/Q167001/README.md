---
layout: page
title: "Q167001: Winmsd.exe May Show Invalid Drive Statistics in Reports"
permalink: kb/167/Q167001/
---

## Q167001: Winmsd.exe May Show Invalid Drive Statistics in Reports

	Article: Q167001
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT Diagnostics utility, Winmsd.exe, may show invalid drive
	statistics in a saved or printed report. This can occur for drives where the
	product of bytes per sector multiplied by sectors per cluster is smaller than
	1,024.
	
	CAUSE
	=====
	
	When generating a report, the Winmsd.exe diagnostic utility shows drive
	statistics in kilobytes and not in bytes, as it does on the Drives tab. When
	calculating the total and free disk space of a drive, it uses the following
	formula:
	
	  ((bytes per sector * sectors per cluster) / 1024)
	
	If the product of bytes per sector and sectors per cluster is smaller than 1,024,
	the result equals 0, and the drives report will show 0 KB as both total and free
	disk space. This may happen with small NTFS partitions where bytes per sector
	equals 512 and sectors per cluster equals 1. However, the Drives tab does
	display the correct statistics.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: winmsd drives report total free prodnt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
