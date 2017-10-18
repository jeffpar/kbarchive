---
layout: page
title: "Q127852: Total Free Space Reported Incorrectly on Drives Larger Than 2 GB"
permalink: kb/127/Q127852/
---

## Q127852: Total Free Space Reported Incorrectly on Drives Larger Than 2 GB

	Article: Q127852
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbtool diskmem win95 kbDiskMemory
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Windows 95 to access a mapped network drive that is larger
	than 2 gigabytes (GB) in size (for example, an NTFS or FAT volume shared by a
	Windows NT server), Windows 95 reports only 2 GB of disk space for the network
	drive.
	
	If the network drive is larger than 2 GB and has more than 2 GB of available disk
	space, Windows 95 reports 2 GB of total disk space, 2 GB of available disk
	space, and 0 bytes of used disk space. If the network drive has less than 2 GB
	of available disk space, Windows 95 reports the available disk space correctly.
	
	If you use Windows 95 OEM Service Release 2 (OSR2) with a local hard disk that
	uses the FAT32 file system, Windows reports 0 bytes of used space if the hard
	disk has more than 2 GB of available disk space. If the local hard disk has less
	than 2 GB of available disk space, Windows reports the available disk space
	correctly.
	
	RESOLUTION
	==========
	
	To work around this behavior for a local hard disk that uses the FAT32 file
	system, install Microsoft Internet Explorer 4.0 with the Windows Desktop Update
	component. Note that this method does not work around this behavior with network
	drives.
	
	
	For information about obtaining Internet Explorer 4.0, visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/ie/
	
	STATUS
	======
	
	This behavior is by design for network drives.
	
	MORE INFORMATION
	================
	
	Both Microsoft MS-DOS and Windows 95 use a 16-bit FAT for logical drives larger
	than 15 megabytes (MB). The maximum number of clusters for a 16-bit FAT drive is
	64K, or 65,536 bytes (where 1K = 1024 bytes). In addition, the maximum cluster
	size in MS-DOS and Windows 95 is 32K, or 32,768 bytes. Based on this
	information, the maximum logical drive size in MS-DOS and Windows 95 is
	calculated as follows:
	
	  32K x 64K = 2048 MB = 2 GB
	
	Note that when you connect to a network share using a UNC connection and you
	check the properties of a folder on the network share, Windows 95 (retail and
	OEM Service Release 2) accurately reports its size up to 4 GB. If the network
	share's size exceeds 4 GB, the properties for the folder show the byte counter
	properly incrementing up to 4 GB, and then the counter resets back to 0 and
	resumes counting. For example, with a 4.5-GB share, the counter counts up to 4
	GB, starts over at 0, and then continues incrementing up to 500 MB.
	
	To maintain compatibility with MS-DOS-based and Windows-based programs that
	assume a 2-GB drive size limit, the Windows 95 network redirector (Vredir.vxd)
	never reports more than 2 GB of total or available disk space on network
	drives.
	
	
	Additional query words: 1.99 large partition
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbtool diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
