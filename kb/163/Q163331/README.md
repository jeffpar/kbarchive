---
layout: page
title: "Q163331: Cirrus Logic Video Causes Event ID 21 on MIPS Computers"
permalink: kb/163/Q163331/
---

## Q163331: Cirrus Logic Video Causes Event ID 21 on MIPS Computers

	Article: Q163331
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Windows NT Server or Windows NT Workstation 4.0 on MIPS-based
	computers, the following errors will be logged in the event viewer:
	
	  ID: 21 Source: cirrus
	  A conflict has been detected between two drivers which claimed two overlapping
	  memory regions. Driver cirrus, with device <\Device\Video0.Translated>,
	  claimed a memory range with starting address in data address 0x28 and 0x2c,
	  and length in data address 0x30.
	
	  ID: 21 Source: cirrus A conflict has been detected between two drivers which
	  claimed two overlapping memory regions. Driver Physical Memory, with device
	  <.Translated>, claimed a memory range with starting address in data
	  address 0x28 and 0x2c, and length in data address 0x30.
	
	These errors occur on all NEC RISCSERVER computers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: Event cirrus NEC MIPS RISC prodnt
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
