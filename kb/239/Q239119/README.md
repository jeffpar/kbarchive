---
layout: page
title: "Q239119: BUG: FDISK Reports Incorrect Disk Capacity for PCMCIA ATA Drives"
permalink: /kb/239/Q239119/
---

## Q239119: BUG: FDISK Reports Incorrect Disk Capacity for PCMCIA ATA Drives

	Article: Q239119
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbOSWin95bug kbOSWin98bug kbDSupport kbGrpDSWin9xDDK
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	FDISK, when run from an MS-DOS box after Windows has been started, reports the
	wrong disk size for PCCARD-based ATA drives that contain a storage capacity
	greater than 1023 cylinders. This issue generally applies to disk drives that do
	not appear in real mode prior to protected-mode Windows (this problem occurs,
	for example, with drives where the controller has no BIOS extension, so MS-DOS
	has no way of knowing that they exist).
	
	CAUSE
	=====
	
	A bug in the IDE device driver, Esdi_506.pdr, results in FDISK using INT 13
	function 8 to obtain disk geometry information. This function truncates the
	cylinder count to a 10-bit value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin95bug kbOSWin98bug kbDSupport kbGrpDSWin9xDDK 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
