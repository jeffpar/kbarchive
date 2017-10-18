---
layout: page
title: "Q164260: Compressing and Uncompressing Files Cause File Cache to Grow"
permalink: kb/164/Q164260/
---

## Q164260: Compressing and Uncompressing Files Cause File Cache to Grow

	Article: Q164260
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compress or uncompress big files, the performance of the interactive
	processes may suffer. This happens when the files are bigger than the physical
	memory of the computer.
	
	All three of the following utilities capable of compressing or uncompressing
	files in Windows NT show this behavior:
	
	  COMPACT utility (Compact.exe)
	  File Manager (Winfile.exe)
	  Windows NT Explorer (Explorer.exe)
	
	When you run performance monitor during compression you will see that the cache
	(Memory: Cache Bytes) is very large (between 50 and 90 percent of the physical
	memory) and the working sets of the processes (Process: Working Set, Instance
	_Total) are reduced.
	
	MORE INFORMATION
	================
	
	The CreateFile API has a flag FILE_FLAG_SEQUENTIAL_SCAN that is especially
	useful when working on files in a sequential manner. It tells Cache Manager not
	to grow the file cache when requests for this handle arrive. Therefore, Memory
	Manager does not have to shrink the application's working set to accommodate the
	bigger cache.
	
	None of the three utilities used this flag when opening the files for compression
	or decompression.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt virtual memory
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
