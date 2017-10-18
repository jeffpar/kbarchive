---
layout: page
title: "Q112684: IBM Raid Controller Support in Windows NT"
permalink: kb/112/Q112684/
---

## Q112684: IBM Raid Controller Support in Windows NT

	Article: Q112684
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
	
	IBM manufactures computers that include a RAID 5 SCSI disk array controller on
	the motherboard. This controller is not on the Hardware Compatibility List (HCL)
	and is not directly supported under Windows NT. IBM has a driver available that
	allows this device to function under Windows NT.
	
	MORE INFORMATION
	================
	
	The IBM RAID Controller can be found in IBM Server 95/95A computers. There may
	be other models that include the array controller as well.
	
	When you install Windows NT on a computer that includes the IBM Raid Controller,
	the following STOP message may appear:
	
	  ***STOP: 0x0000007B INACCESSIBLE_BOOT_DEVICE
	
	To obtain the driver, call the IBM Fulfillment Center at (800) 845-4263.
	
	The driver is identified as "IBM Raid Controller Support Diskette Version 2.0"
	with a part number of 83G7707. This diskette should be in full production and
	available to customers by March 31, 1994.
	
	The product included here is manufactured by IBM, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt 0x7B blue trap
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
