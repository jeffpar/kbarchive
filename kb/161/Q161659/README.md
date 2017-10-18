---
layout: page
title: "Q161659: Stop 0x0000007F May Occur on Texas Instruments TravelMate"
permalink: kb/161/Q161659/
---

## Q161659: Stop 0x0000007F May Occur on Texas Instruments TravelMate

	Article: Q161659
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Windows NT 4.0 is installed on a Texas Instruments TravelMate 6050 computer
	that has more than 16 MB of memory, the following blue screen error may occur:
	
	  STOP 0x0000007f (0x00000008,0x00000000,0x00000000,0x00000000)
	  UNEXPECTED_KERNEL_MODE_TRAP.
	
	
	CAUSE
	=====
	
	The error is caused by a stack overflow problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt 0x7f
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
