---
layout: page
title: "Q141591: Clarification of Enhanced IDE Under Windows NT"
permalink: /kb/141/Q141591/
---

## Q141591: Clarification of Enhanced IDE Under Windows NT

	Article: Q141591
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides clarification of issues relating to EIDE devices under
	Windows NT. It addresses the most common questions asked by customers.
	
	
	MORE INFORMATION
	================
	
	Q: What is the maximum amount of IDE devices Windows NT will support?
	
	A: Section 2.3.1.1 of the EIDE Version .95 Guide defines the maximum amount to 4
	devices, 2 devices on each channel. The Windows NT ATAPI.SYS driver conforms to
	this standard.
	
	Q: What about adding a third-party IDE channel for more than 4 devices?
	
	A: Currently there is no specification for this. Thus, it is unsupported by
	Windows NT. Some sound card manufacturers have recently put actual ATA-2
	controllers on their sound cards, these manufacturers would have to release a
	new ATAPI.SYS driver for this to work under Windows NT as a 3rd channel, but
	would still be unsupported.
	
	They would be supported if the ATA-2 controller on the sound card was configured
	as the secondary channel in absence of one already present.
	
	Q: What modes of transfer can Windows NT do with IDE devices?
	
	A: Windows NT 3.5 and 3.51 currently support PIO Mode 1 and 2 only.
	
	Q. Is bus-mastering IDE disk access (DMA 0 & 2) available under Windows NT
	4.0?
	
	A. This feature is planned for release in the Service Pack 1 or 2 for Windows NT
	4.0.
	
	Q. Does Windows NT use 32-bit I/O accesses (also known as HDD Block Mode)?
	
	A. To date, this has been seen to corrupt data in some cases. Therefore, it is
	not used.
	
	Q. Does Windows NT support Advanced PIO/DMA programming modes (PIO Mode 3 or 4)?
	
	A. If the BIOS programs the part for advanced PIO modes, then it is left in those
	modes.
	
	Q. Does Windows NT support multiple sector disk transfers for hard drives and
	removable media devices such as Ez-Drive, ATAPI Jaz, or ATAPI Zip drives?
	
	A. Windows NT 4.0 supports multi-sector transfers for hard drives, CD-ROM drives,
	and for removable media.
	
	Q. Does Windows NT support ATAPI CD-ROM drives supporting DMA and multiple sector
	disk transfers?
	
	A. This feature is currently in Windows NT 3.51 and 4.0.
	
	Q. Does Windows NT have the ability to boot from a drive other than a floppy or
	hard drive device (also called El Torrito capability)?
	
	A. El Torrito is supported under NT 4.0 for both ATAPI and SCSI formats. The bios
	must be capable of using El Torrito in NonEmulation mode.
	
	Q. What is the recommended configuration for my IDE devices?
	
	A. You should put your hard drives on the primary channel, and your slower
	devices (such as IDE CD-ROMs or IDE tape drives) on the secondary channel. This
	is because high speed PIO or DMA transfers are recommended, but are not required
	for the secondary channel.
	
	The other benefit of this configuration is that both channels can operate
	simultaneously. This is not the case if two IDE devices are on the same chain,
	because they must alternately share the interrupt.
	
	Many of the high speed features of Enhanced IDE such as bus- mastering, DMA
	scatter/gather transfers, 32-bit PIO transfers, and high speed DMA transfers,
	are not required and not present on the secondary channel.
	
	Many of the current Enhanced IDE controllers do not support separate transfer
	speeds of the slave and master, so if you have a fast master device and a slow
	slave device on the same channel, your controller may reduce the maximum
	transfer speed to the speed of slowest device.
	
	
	Q: What is the recommended configuration for my IDE devices?
	
	A: You should put your hard drives on the primary channel and your slower devices
	such as IDE CD-ROMs, or IDE tape drives on the secondary channel. This is
	because Section 2.3.1.1 of the EIDE guide states that high speed PIO or DMA
	transfers is recommended, but is NOT REQUIRED for the secondary channel.
	
	This is why hard drives should only be put on the secondary channel if you need
	to add a 3rd IDE hard drive
	
	Many of the high speed features of Enhanced IDE such as Busmastering, DMA
	scatter/gather transfers, 32 bit PIO transfers, and high speed DMA transfers are
	not required and not present on the secondary channel.
	
	Many of the current Enhanced IDE controllers do not support separate transfer
	speeds of the slave and master, so if you have a fast master device and a slow
	slave device on the same channel, your controller may lower the maximum transfer
	speed to the slowest device.
	
	Additional query words: prodnt ATA2 ATA tertiary
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
