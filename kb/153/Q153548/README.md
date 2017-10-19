---
layout: page
title: "Q153548: SCSI Drives Using FAT32 Should Be Repartitioned When Moved"
permalink: /kb/153/Q153548/
---

## Q153548: SCSI Drives Using FAT32 Should Be Repartitioned When Moved

	Article: Q153548
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you move a SCSI hard disk formatted with the FAT32 file system from one
	SCSI controller to another controller, you may not be able to reliably write
	data to and read data from the hard disk.
	
	CAUSE
	=====
	
	This behavior can occur if you partition and format a hard disk using a SCSI
	controller that fully supports interrupt 13 extensions and you then move the
	hard disk to a controller that does not fully support the interrupt 13
	extensions.
	
	RESOLUTION
	==========
	
	To move a drive using the FAT32 file system to a different controller, you must
	verify that both controllers fully support interrupt 13 extensions in the same
	manner. If they do not, data loss may occur.
	
	Microsoft only supports the use of fixed media on the same controller used to
	partition and format the media.
	
	NOTE: This information does not apply to removable media.
	
	MORE INFORMATION
	================
	
	Windows 95 uses logical block addressing (LBA) on most SCSI drives to access
	data. With drives using the FAT32 file system with interrupt 13 extensions,
	Windows 95 depends on the BIOS to fully support the interrupt 13 extensions.
	
	This problem typically occurs only with drives 8 gigabytes and larger in size.
	
	
	Additional query words: osr2
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
