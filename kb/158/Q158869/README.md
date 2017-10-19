---
layout: page
title: "Q158869: ScanDisk May Not Fix the Media Descriptor Byte"
permalink: /kb/158/Q158869/
---

## Q158869: ScanDisk May Not Fix the Media Descriptor Byte

	Article: Q158869
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1,6.22
	Operating System(s): 
	Keyword(s): osr2 diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	- Microsoft Windows 95 
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ScanDisk may not fix the media descriptor byte when it says that it will.
	
	MORE INFORMATION
	================
	
	
	There are two structures that are labeled "media descriptor." One is located in
	the boot sector and the other is located in the FAT entry for cluster 0.
	ScanDisk and ScanDisk for Windows check only the media descriptor located in the
	FAT entry, not the media descriptor located in the boot sector.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : osr2 diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210 kbMSDOSSearch kbMSDOS622
	Version           : :2,2.1,6.22
	
	=============================================================================
	
