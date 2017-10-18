---
layout: page
title: "Q128794: File Manager Displays Maximum Disk Space of 1.99 GB"
permalink: kb/128/Q128794/
---

## Q128794: File Manager Displays Maximum Disk Space of 1.99 GB

	Article: Q128794
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95,98; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT and Windows 95/98 support the creation of primary partitions and
	logical drives that are larger than 2 gigabytes (GB). When you run File Manager
	in Windows version 3.1 or Windows for Workgroups version 3.11 to view a large
	Windows NT drive, the maximum disk space (available or total disk space)
	displayed is 1.99 GB.
	
	MORE INFORMATION
	================
	
	Since Windows version 3.1 and Windows for Workgroups version 3.11 operate with
	MS-DOS, they are limited to a 16-bit FAT drive. The maximum cluster size for a
	16-bit FAT drive is 64K, or 65,536 bytes (where 1K = 1024 bytes). In addition,
	the maximum cluster size in MS-DOS is 32K, or 32,768 bytes. Therefore, the
	maximum logical drive size in MS-DOS is calculated as follows:
	
	  32K x 64K = 2048 MB = 2 GB
	
	Although the maximum disk space that File Manager reports is 1.99 GB in Windows
	version 3.1 or Windows for Workgroups version 3.11, you can still access data
	stored on the FAT, HPFS, and NTFS drives larger than 2 GB.
	
	
	The maximum partition sizes under Windows NT are:
	
	  
	  +--------------------------------------------+
	  | File System | Maximum Partition Size       | 
	  +--------------------------------------------+
	  | FAT         | 2^32 bytes (4 gigabytes)     | 
	  +--------------------------------------------+
	  | HPFS        | 2^41 bytes (2,048 gigabytes) | 
	  +--------------------------------------------+
	  | NTFS        | 2^64 bytes (16 exabytes)     | 
	  +--------------------------------------------+
	
	NOTE: 16 exabytes equals 18,446,744,073,709,551,616 bytes.
	
	Additional query words: 3.10 3.11 wfw wfwg win3x prodnt two four file system high performance greater gb eb
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWin3xSearch kbWin95search kbWin98search kbWinNT310Search kbWinNTW310Search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW311 kbWin98
	Version           : WINDOWS:95,98; winnt:3.5
	
	=============================================================================
	
