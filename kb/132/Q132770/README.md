---
layout: page
title: "Q132770: Duplicate SCSI Device Entries Appear in Device Manager"
permalink: /kb/132/Q132770/
---

## Q132770: Duplicate SCSI Device Entries Appear in Device Manager

{% raw %}

	Article: Q132770
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Duplicate SCSI device entries appear in Device Manager, and many unexplained
	drive letters appear in Windows Explorer or My Computer.
	
	CAUSE
	=====
	
	A SCSI device is installed that has the same device ID of 2, 7, or 15 as another
	SCSI device detected on the computer.
	
	Duplicate SCSI device entries appear in Device Manager when a SCSI device with an
	ID of 7 or 15 is put on the same SCSI ID as the SCSI controller. SCSI
	controllers are typically on SCSI ID 7 or ID 15 (on a wide SCSI interface).
	
	If a SCSI device detects another device on ID 2, it usually means that two SCSI
	controllers are using the same chain on ID 2.
	
	RESOLUTION
	==========
	
	If a SCSI device conflicts with another SCSI device on ID 7 or ID 15 (on a wide
	SCSI interface), change the SCSI ID of the duplicated SCSI device to an unused
	ID, such as 3, 4, 5, or 6.
	
	If two SCSI controllers conflict with each other on ID 2, break the chain. For
	example, make sure the internal cable goes only to the internal device (or
	devices), not to a PCI card.
	
	
	Additional query words: scsi
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
