---
layout: page
title: "Q102651: Required Settings for Adaptec 1510 SCSI Host Adapter"
permalink: kb/102/Q102651/
---

## Q102651: Required Settings for Adaptec 1510 SCSI Host Adapter

	Article: Q102651
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Adaptec 1510 SCSI host adapter must be configured in the following manner in
	order for it to work under Windows NT:
	
	  SCSI Disconnection        Enabled
	  SCSI Address              7
	  SCSI Parity               Enabled
	  Synchronous Negotiation   Enabled
	  Interrupt Channel (IRQ)   11
	  I/O Port Address          340h
	
	
	MORE INFORMATION
	================
	
	The Windows NT device driver for the Adaptec 1510 adapter is SPARROW.SYS. The
	driver is hard-coded for the parameters listed above. Although MS-DOS device
	drivers, by the use of switches, can specify adapter-related parameters, such as
	IRQ and parity, this cannot be done under Windows NT. Make sure you attach only
	SCSI targets to the Adaptec 1510 adapter that support the settings listed above.
	Note that since the adapter always uses IRQ 11 and does not report this fact,
	conflicts with other devices using the same IRQ may occur.
	
	NOTE: The driver for the Adaptec 1520 SCSI host adapter does not have this
	limitation.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
