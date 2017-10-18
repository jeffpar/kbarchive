---
layout: page
title: "Q160014: Stop 7F - F Fault on the Intel P6 Processor"
permalink: kb/160/Q160014/
---

## Q160014: Stop 7F - F Fault on the Intel P6 Processor

	Article: Q160014
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following STOP error message appears on your Windows NT Server:
	
	  STOP: 0x0000007F (0x0000000F, 0x00000000, 0x00000000, 0x00000000)
	
	This problem only occurs on single-processor systems with the Intel Pentium Pro
	processor.
	
	RESOLUTION
	==========
	
	Disable the local Advanced Program Interrupt Controller (APIC) in the BIOS. Not
	all vendors have implemented enabling and disabling of the local APIC as a BIOS
	option. If this is the case, contact the system vendor and request an updated
	BIOS that corrects Pentium Pro erratum 5AP and 6AP.
	
	NOTE: Not every 7F - F fault in a Pentium Pro single processor system is
	necessarily traceable to the APIC.
	
	MORE INFORMATION
	================
	
	Faulty hardware was determined to be the cause of this error. The problem was
	reported to Intel.
	
	
	Additional query words: prodnt trap 0x7F blue screen
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
