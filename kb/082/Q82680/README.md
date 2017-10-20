---
layout: page
title: "Q82680: SCSI Controllers and Swap Files Under Windows 3.1"
permalink: /kb/082/Q82680/
---

## Q82680: SCSI Controllers and Swap Files Under Windows 3.1

{% raw %}

	Article: Q82680
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	Windows version 3.1 uses two types of swap files: permanent and
	temporary. Windows can use any MS-DOS device that supports file reads
	and writes as a temporary swap file, including network drives, SCSI
	hard disks, and floppies. Windows can create permanent swap files only
	on hard disk devices that support the standard Int 13h interface. Many
	SCSI controllers support the Int 13h interface, so these devices can
	support a permanent swap file.
	
	By employing the Windows 32-bit block device driver interface, 32-Bit
	Disk Access, Windows 3.1 can make better use of a permanent swap file.
	With 32-Bit Disk Access, paging is faster and MS-DOS programs can be
	swapped to disk while they are active. The default Windows 3.1
	configuration only supports AT-style hard disk controllers based on
	the Western Digital WD-1003 IDE controller card, so SCSI disks cannot
	take advantage of the 32-Bit Disk Access features. It is expected that
	several original equipment manufacturers (OEMs) that manufacture other
	driver types, including SCSI drives, will be marketing 32-Bit Disk
	Access block device drivers (VxDs) in the near future.
	
	Additional query words: 3.10 swapfile
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
