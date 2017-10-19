---
layout: page
title: "Q131143: Event ID 5012 When Using S3 864 Video Adapter"
permalink: /kb/131/Q131143/
---

## Q131143: Event ID 5012 When Using S3 864 Video Adapter

	Article: Q131143
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbdisplay kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use an S3-864 video adapter with a hardware device, such as an IBM
	Token Ring 16/4 ISA network interface card (NIC), the NIC may fail and the
	following event log appears in the system log:
	
	  Event ID: 5012
	  Source: Ibmtok01
	  Type: Error
	  Description: The I/O base address supplied does not match the jumpers
	  on the adapter.
	
	CAUSE
	=====
	
	The S3 video adapter is attempting to use the same address range as the hardware
	device. For example, by default, the S3 video adapter with the 864 chipset uses
	the RAM address range of C000 to CFFF. The IBM TokenRing 16/4 ISA NIC uses the
	address range of CC00 to CDFF, by default.
	
	RESOLUTION
	==========
	
	To correct this problem, change the RAM address of the hardware device to
	another address range, such as DC00.
	
	Additional query words: prodnt dell token ring
	
	======================================================================
	Keywords          : kbdisplay kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
