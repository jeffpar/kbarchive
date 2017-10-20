---
layout: page
title: "Q154711: HP Scanners Not Detected by Deskscan Program"
permalink: /kb/154/Q154711/
---

## Q154711: HP Scanners Not Detected by Deskscan Program

{% raw %}

	Article: Q154711
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Hewlett-Packard (HP) scanners may not be detected properly by the Deskscan
	program when you are using a BusLogic BT-542b SCSI host adapter.
	
	CAUSE
	=====
	
	This behavior occurs when you are connecting a HP scanner to a BusLogic SCSI
	host adapter with a BIOS firmware revision of 3.35/4.70. The HP scanner is
	properly detected with earlier versions of the BIOS.
	
	RESOLUTION
	==========
	
	Contact either BusLogic for a possible BIOS upgrade or Hewlett-Packard for an
	updated version of Deskscan.
	
	
	MORE INFORMATION
	================
	
	After you start Deskscan, your computer may slow for 3-4 minutes before Deskscan
	finally appears and misreports the scanner as absent. If you attempt to test for
	the presence of the scanner, the computer slows again for 3-4 minutes. If you
	opt to view the SCSI address settings within Deskscan, a scanner is reported at
	all eight IDs, even when it and the adapter are the only devices on the bus.
	Regedt32 reports the situation properly.
	
	This behavior has been reported with the HP ScanJet IIp and IIc using the
	BusLogic BT-646s h/a (MCA card) adapter and also on a PowerPC using the BT-542B
	and BT-545S SCSI controllers.
	
	NOTE: The scanners on the Windows NT 4.0 Hardware Compatibility List were not
	tested on BusLogic controllers. These scanners are only supported if connected
	to one of the following SCSI controllers: AHA-1542CP, AHA-2742, and AHA-2940,
	NCR 8100S, and 8250S.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 4.0
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
