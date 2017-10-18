---
layout: page
title: "Q125216: Heavy I/O Operation Using Adaptec 1640 Causes STOP 0x0A"
permalink: kb/125/Q125216/
---

## Q125216: Heavy I/O Operation Using Adaptec 1640 Causes STOP 0x0A

	Article: Q125216
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform heavy I/O operations in Windows NT Server version 3.5 on an NCR
	3430 Dual Pentium P-60 computer using an Adaptec 1640 MCA SCSI controller, the
	following STOP message may appear on the target machine:
	
	  STOP 0x0000000A (0xfbc84000, 0x02, 0x01, 0x8013e953)
	  Memory at 0xfbc84000 was referenced at IRQL 2 for write access from
	  0x8013e953.
	  Address 0x8013e953 has base at 0x80100000 - ntoskrnl.exe
	
	
	WORKAROUND
	==========
	
	To work around this problem, use another SCSI controller. The NCR 3430 Dual
	Pentium P-60 computer has a built-in NCR 53C710 SCSI controller. To use this
	SCSI controller, you must access the computer system BIOS and enable the
	controller.
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt trap 0A stress aha blue fatal
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
