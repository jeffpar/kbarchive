---
layout: page
title: "Q137012: CD-ROM Drive Not Recognized with BusLogic 946C SCSI Controller"
permalink: /kb/137/Q137012/
---

## Q137012: CD-ROM Drive Not Recognized with BusLogic 946C SCSI Controller

	Article: Q137012
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows 95 on a computer with a BusLogic 946C SCSI controller,
	you may experience either of the following problems:
	
	- The SCSI controller is not recognized by Windows 95.
	
	- Hard disks on the SCSI chain are recognized, but a CD-ROM drive on the chain
	  is not recognized.
	
	RESOLUTION
	==========
	
	To resolve this problem, update the SCSI controller to firmware revision 4.22
	and BIOS revision 4.86 or later. Please contact BusLogic for information about
	obtaining these upgrades.
	
	MORE INFORMATION
	================
	
	You can use the BusLogic AutoSCSI tool included with the SCSI controller to
	determine the controller's version information. For information about this tool,
	please consult the controller's documentation.
	
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
