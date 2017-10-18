---
layout: page
title: "Q138629: How Windows NT 3.51 Handles Compression of Paging Files"
permalink: kb/138/Q138629/
---

## Q138629: How Windows NT 3.51 Handles Compression of Paging Files

	Article: Q138629
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT provides virtual memory by creating a paging file (PAGEFILE.SYS) in
	the root directory of the boot drive or the root directory of the Windows NT
	drive (the drive where Windows NT is installed). In Windows NT 3.51, the Windows
	NT file system (NTFS) file system supports on-the-fly compression and
	decompression of files and directories. This article explains how Windows NT
	3.51 handles file compression of paging files.
	
	MORE INFORMATION
	================
	
	File compression in the NTFS partition is accomplished by reallocating the file
	during the operation. Since you cannot reallocate the paging file while it is
	being used, compression of an active paging file is not allowed. When you
	compress a file in the NTFS partition, the file is reallocated as new data is
	written to the file. Because reallocation of the paging file is not allowed
	while servicing a page fault, NTFS prevents compression on active paging files.
	No message appears notifying the user that this operation is not allowed.
	
	If you have multiple installed versions of Windows NT 3.51 and multiple paging
	files on the same computer (each installation with its own paging file),
	compression of the inactive paging file is allowed. However, if you shutdown and
	restart another installed version of Windows NT with a compressed paging file,
	PAGEFILE.SYS is automatically uncompressed.
	
	Additional query words: prodnt compact
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
