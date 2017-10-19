---
layout: page
title: "Q231756: The Convert.exe Tool Uses 512-Byte Clusters"
permalink: /kb/231/Q231756/
---

## Q231756: The Convert.exe Tool Uses 512-Byte Clusters

	Article: Q231756
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Convert.exe tool to convert a partition from a FAT file system
	to an NTFS file system, the NTFS partition uses 512-byte clusters.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Convert.exe tool uses the default cluster size of 512 bytes. Using a smaller
	cluster size allows more efficient use of space on the hard disk and greater
	probability that the Convert.exe tool has sufficient disk space to perform the
	conversion.
	
	To change the cluster size, use the /a switch with the Format utility to specify
	the desired cluster size. For information about default cluster sizes, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q140365 Default Cluster Size for FAT and NTFS
	
	Additional query words: utility sector fat32 convert.exe
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
