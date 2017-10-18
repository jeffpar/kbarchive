---
layout: page
title: "Q160671: Stop 0x0000007F May Occur on Compaq SystemPro"
permalink: kb/160/Q160671/
---

## Q160671: Stop 0x0000007F May Occur on Compaq SystemPro

	Article: Q160671
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows NT 4.0 is installed on a Compaq SystemPro computers, the following
	blue screen error may occur:
	
	  STOP 0x0000007f (0x00000008,0x00000000,0x00000000,0x00000000)
	  UNEXPECTED_KERNEL_MODE_TRAP.
	
	NOTE: The stop and parameters above may occur for other reasons as well.
	
	CAUSE
	=====
	
	On computers with greater than 40 MB of memory, there are memory management
	issues with Windows NT version 4.0 and the Compaq computers that cause blue
	screen errors when memory activities and processes are higher than average. You
	can also experience blue screen errors randomly on startup, along with messages
	that you are out of virtual memory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0.
	This problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt Stop 0x0000007F(0x00000008, 0x00000000, 0x00000000)
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
