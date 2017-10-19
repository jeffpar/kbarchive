---
layout: page
title: "Q155598: Cannot Install DPT SCSI Adapter During Setup on MIPS Platform"
permalink: /kb/155/Q155598/
---

## Q155598: Cannot Install DPT SCSI Adapter During Setup on MIPS Platform

	Article: Q155598
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows NT 4.0 on a NEC RISCStation 2000 MIPS platform
	with a DPT 3222 EISA RAID SCSI adapter, the onboard NCR 53c700 SCSI adapter is
	detected by Setup, but the DPT adapter is not detected.
	
	If you press S to install additional adapters, DPTSCSI is selected but Setup
	shows that the adapter is not installed in the computer.
	
	CAUSE
	=====
	
	A note about the MIPS platforms for the DPT 3222 adapter in the Windows NT 4.0
	Hardware Compatibility List states:
	
	  This adapter cannot be installed during Setup on MIPS systems. Use the SCSI
	  Adapter applet in the Control Panel to add this adapter after NT is
	  installed.
	
	RESOLUTION
	==========
	
	After Setup is finished, add the adapter. To do so, follow these steps:
	
	1. In Control Panel, double-click SCSI Adapters.
	
	2. If the DPT adapter is not listed, click the Drivers tab.
	
	3. Click Add.
	
	4. In the Manufacturers box, click DPT Corporation.
	
	5. In the SCSI Adapters box, click NEC EISA SCSI Adapter, and then click OK.
	
	MORE INFORMATION
	================
	
	Windows NT Setup always loads ATDISK as a boot driver on RISC systems because it
	is often not listed in the firmware as a necessary device. When you attempt to
	install the DPT driver during Setup, Dptscsi.sys does not load because ATDISK
	has already claimed the WD1003-compatible ports on the DPT adapter. You cannot
	install on the drives connected to the DPT 3222 adapter because it is not a boot
	device, nor can you install to any CD-ROM drive connected to the adapter because
	it would be necessary to boot from the drive.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
