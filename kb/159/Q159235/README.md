---
layout: page
title: "Q159235: APM Drive Spin Down Supported on IDE Devices Only"
permalink: kb/159/Q159235/
---

## Q159235: APM Drive Spin Down Supported on IDE Devices Only

	Article: Q159235
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): osr2 diskmem win95 kbDiskMemory
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Windows 95 OEM Service Release 2 (OSR2), the drive spin down feature works
	only with IDE hard disks. It does not work, for example, with SCSI hard disk.
	
	CAUSE
	=====
	
	The drive spin down feature is only supported on IDE devices.
	
	MORE INFORMATION
	================
	
	Although SCSI hard disks do support the drive spin down feature natively,
	Windows 95 does not support this feature with SCSI drives.
	
	The IDE driver (Esdi_506.pdr) does support this feature.
	
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbOPKSearch
	Version           : WINDOWS:95
	
	=============================================================================
	
