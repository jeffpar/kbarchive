---
layout: page
title: "Q244984: Event ID 7026 after Installing Compaq SSD Version 2.1x."
permalink: kb/244/Q244984/
---

## Q244984: Event ID 7026 after Installing Compaq SSD Version 2.1x.

	Article: Q244984
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart a Compaq Proliant 6500 computer on which the boot device is
	connected to the Symc810 adapter after you install Compaq Software Support Disk
	(SSD) version 2.10 for Microsoft Windows NT 4.0, you may receive a STOP
	0x0000007B error message. Event Viewer may report the following event:
	
	  Event ID 7026:
	  The following boot start or system start drivers failed to load:
	  Cpq32fs2.sys
	
	If you add an external hard disk to an embedded SCSI (Small Computer System
	Interface) controller on a computer running Microsoft Windows NT Server 4.0
	Service Pack 4 and SSD version 2.12, Event Viewer may report the following
	events, in addition to event 7026:
	
	  Event ID 11: cpq32fs2
	  The driver detected a controller error on...
	
	  Event ID 4: cpq32fs2
	  The driver detected an internal error in its data structures for period
	
	CAUSE
	=====
	
	This behavior can occur if the embedded SCSI adapter is not compatible with the
	Cpq32fs2.sys driver. The Cpq32fs2.sys driver is the Compaq version of the
	Microsoft Symc810.sys driver. Usually, the Compaq SSD replaces the Symc810.sys
	driver with the Cpq32fs2.sys driver during the installation of the SSD.
	
	RESOLUTION
	==========
	
	To work around this behavior:
	
	1. Perform a parallel installation of Windows NT Server 4.0 on the computer.
	
	2. Start the computer to the parallel installation.
	
	3. In the Winnt\System32\Drivers folder of the original installation, locate the
	  Cpq32fs2.sys file and rename it to Cpq32fs.bak.
	
	4. Copy the Symc810.sys file from the Winnt\System32\Drivers folder of the
	  parallel installation to the Winnt\System32\Drivers folder of the original
	  installation.
	
	5. Rename the copied Symc810.sys file to Cpq32fs2.sys on the original
	  installation.
	
	6. Restart the computer to the original installation of Windows NT Server 4.0.
	
	7. Remove the parallel installation.
	
	
	Additional query words: nt 4.0 cpq32fs2.sys stop
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
