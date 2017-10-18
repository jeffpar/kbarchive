---
layout: page
title: "Q138568: 4mm DAT Tape Drives Fail on PCI Controller"
permalink: kb/138/Q138568/
---

## Q138568: 4mm DAT Tape Drives Fail on PCI Controller

	Article: Q138568
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use PCI SCSI controllers, some 4mm DAT tape drives may not work
	correctly with the Windows NT 4mm DAT driver.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Install the tape drive on a ISA SCSI controller. You can set correct IRQ
	  jumper settings or configure the correct settings using the software provided
	  with the ISA SCSI controller. -or-
	
	- On Intel (x86) based computers, the BIOS has an option to configure a
	  specific PCI slot to a user defined IRQ. This is implementation specific and
	  may not be available on all PCI computers.
	
	
	Additional query words: prodnt backup
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
