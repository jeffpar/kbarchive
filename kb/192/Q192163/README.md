---
layout: page
title: "Q192163: &quot;Stop 0x7B&quot; During Hardware Detection Portion of Setup"
permalink: /kb/192/Q192163/
---

## Q192163: &quot;Stop 0x7B&quot; During Hardware Detection Portion of Setup

	Article: Q192163
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbhw kbsetup kbHardware
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT Setup, you may receive the following error message
	during the hardware detection phase:
	
	  STOP: 0x0000007B Inaccessible Boot Device
	
	CAUSE
	=====
	
	This behavior can occur if your computer contains a motherboard with an onboard
	Adaptec Dual-Channel Ultra Wide 7895 Small Computer System Interface (SCSI)
	controller. This controller is not on the Windows NT Hardware Compatibility List
	(HCL), and is not detected correctly by Windows NT Setup.
	
	For information about the Windows NT 4.0 HCL, see the following article in the
	Microsoft Knowledge Base:
	
	  Q131303 Latest Windows 2000 and Windows NT Hardware Compatibility List (HCL)
	
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Insert Windows NT Setup disk 1 in drive A, and then turn on or restart the
	  computer.
	
	2. When you are prompted to specify the mass storage devices, press S.
	
	3. Provide the driver disks included with the motherboard.
	
	For information about how to install the driver, please contact the motherboard's
	manufacturer.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
