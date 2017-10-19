---
layout: page
title: "Q113195: Adaptec 274x Series SCSI Adapters"
permalink: /kb/113/Q113195/
---

## Q113195: Adaptec 274x Series SCSI Adapters

	Article: Q113195
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT version 3.1 currently supports the Adaptec 2740 and 2742
	SCSI adapters in Adaptec's 274x adapter series. Support for Adaptec models
	2740W, 2742W, 2740T, 2742T, 2740A, 2742A, 2740A-W, 2742A-W, 2740A-T, and 2742A-T
	is provided by obtaining a driver from Adaptec.
	
	MORE INFORMATION
	================
	
	Adaptec 274x SCSI adapters are 32-bit EISA adapters using the AIC 7770 RISC
	chip. They support multitasking, multi-input/output, and tag queuing.
	
	As with most Adaptec models, a model number ending in 2 (such as the 2742)
	indicates support for floppy disk drives, while models ending in 0 (such as the
	2740) do not support floppy disk drives.
	
	Some models end with letters. The following explains what the letters indicate:
	
	W - Wide SCSI. These models support 16 megabytes (MB) data transfer and are
	  generally used for hard disk drives designed for this transfer speed.
	  Only SCSI devices that support wide SCSI can take advantage of the
	  higher data transfer rate. The external connector on this card is a 68-
	  pin P connector. Other than the additional pins, it looks similar to a
	  SCSI-2 connector.
	
	T - Twin Channel. These adapters support 14 SCSI devices - either 7
	  external and 7 internal devices, or 14 internal devices.
	
	A - Indicates that this model is based on the AIC-7770 revision E RISC
	  processor. Models without the "A" are based on the AIC-7770 revision C
	  RISC processor.
	
	
	According to Adaptec product support, their version of ARROW.SYS does support
	models 2740W, 2742W, 2740T, 2742T, 2740A, 2742A, 2740A-W, 2742A-W, 2740A-T,
	2742A-T. This driver can be obtained by downloading the file 2X4XWNT.ZIP from
	the Adaptec BBS at (408) 945-7727. All support for the Adaptec driver is
	provided by Adaptec. You can call Adaptec Technical Support at (408) 945-2550.
	
	The products included here are manufactured by Adaptec, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
