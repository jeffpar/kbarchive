---
layout: page
title: "Q133492: Dual Channel PCI SCSI Adapters"
permalink: /kb/133/Q133492/
---

## Q133492: Dual Channel PCI SCSI Adapters

	Article: Q133492
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can usually get better performance out of any SCSI device using a
	multiplexed dual-channel PCI SCSI adapters. This article describes the SCSI
	adapter and its advantages.
	
	MORE INFORMATION
	================
	
	Multiplexed dual-channel PCI SCSI adapters are two SCSI controllers on one card.
	The controllers often share a single interrupt, but each has its own I/O address
	and interface. Although typical SCSI adapters use a single RISC processor, a
	dual-channel SCSI adapter has two RISC processors (with each processor
	controlling its own SCSI bus).
	
	There are several reasons for using dual-channel PCI SCSI adapters, but the main
	benefit is a dual-channel controller saves one slot over two single controllers.
	By using one controller that switches between channels, dual- channel adapters
	can support up to 14 devices while theoretically providing the same throughput
	as a single-channel SCSI-2 adapter (which can support just seven devices). On a
	dual-channel adapter, the two SCSI buses operate independently. Data is
	transferred across the PCI bus by one controller at a time, but there is no
	throughput loss because the PCI bus operates much faster than the two SCSI buses
	combined. This assumes an aggregate SCSI-2 transfer rate of 20 MB per second (2
	channels x 10MB per channel), compared with the 132 MB per second burst-mode
	speed of the 33 mHz PCI bus.
	
	Software-based disk striping, disk duplexing, and RAID support also work better
	with dual-channel SCSI adapters. Disk striping offers the best performance if
	there are multiple disk drives without disk duplexing or RAID enabled.
	Dual-channel SCSI adapters can assume two basic configurations during operation.
	The first distributes devices equally between the two controllers. The second
	one takes a hint from dual-channel EIDE (Enhanced IDE) controllers. Slower
	devices such as scanners, printers, CD-ROM drives and tape drives are placed on
	one channel, whereas faster devices such as hard disks and optical disks are
	placed on the other channel. Separating slow and fast devices works better when
	not using striping, duplexing, or RAID because each channel can run at the most
	efficient speed for the devices attached to it. Microsoft Windows 95 and Windows
	NT take better advantage of the dual-channel adapters because they can issue
	multiple disk requests simultaneously.
	
	Additional query words: prodnt 3.10 dual-scsi
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
