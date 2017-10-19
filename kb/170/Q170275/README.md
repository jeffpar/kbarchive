---
layout: page
title: "Q170275: Windows NT Setup Hangs on Disk 3 with BusLogic SCSI Adapters"
permalink: /kb/170/Q170275/
---

## Q170275: Windows NT Setup Hangs on Disk 3 with BusLogic SCSI Adapters

	Article: Q170275
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During Windows NT Setup, when the SCSI floppy disk driver loads from disk 3, the
	computer may stop responding (hang).
	
	CAUSE
	=====
	
	This problem may occur if your computer uses the BusLogic BT-946C SCSI host
	adapter and SCSI Disconnection is disabled.
	
	RESOLUTION
	==========
	
	Enable SCSI Disconnection on the host adapter by changing the Enable
	Disconnection value to Yes. You can change the value for individual drives and
	should enable SCSI disconnection for all drives.
	
	NOTE: Most SCSI host adapters have SCSI Disconnection enabled by default. This
	same difficulty may affect other types of SCSI host adapters if SCSI
	Disconnection has been disabled on that device.
	
	Press CTRL+B during startup to access the BusLogic BT-946C SCSI BIOS. For other
	types of adapters, refer to the manufacturer's documentation to access the SCSI
	BIOS.
	
	MORE INFORMATION
	================
	
	This problem was duplicated using a BusLogic BT-946C SCSI Host Adapter with
	firmware version 4.22 and SCSI BIOS version 4.85-B.
	
	
	
	Additional query words: BT946C BT946-C SCSI_FLOPPY_DRIVER
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbprb
	
	=============================================================================
	
