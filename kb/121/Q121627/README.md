---
layout: page
title: "Q121627: Using NCR C810 PCI SCSI Adapter on Systems with Phoenix BIOS"
permalink: /kb/121/Q121627/
---

## Q121627: Using NCR C810 PCI SCSI Adapter on Systems with Phoenix BIOS

	Article: Q121627
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	System performance, especially hard disk performance, decreases dramatically
	after you install Windows 95.
	
	CAUSE
	=====
	
	The NCR C810 PCI SCSI adapter functions correctly only if it is configured to
	use IRQ 15. The BIOS setup utility on systems using Phoenix System BIOS version
	5.12 or 5.33 allows the PCI SCSI adapter to be configured to use any IRQ in the
	7-15 range. If the NCR C810 PCI SCSI adapter is not configured correctly,
	Windows 95 is forced to use slower real-mode device drivers.
	
	RESOLUTION
	==========
	
	Consult the system manual and change the NCR C810 PCI SCSI adapter IRQ setting
	to IRQ 15 in the system BIOS setup utility. This enables Windows 95 to use the
	faster protected-mode device drivers.
	
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3rdparty protected scuzzy
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
