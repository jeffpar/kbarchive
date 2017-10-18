---
layout: page
title: "Q231571: Err Msg: STOP 0x00000050 Occurs with HP Color LaserJet 5/5M"
permalink: kb/231/Q231571/
---

## Q231571: Err Msg: STOP 0x00000050 Occurs with HP Color LaserJet 5/5M

	Article: Q231571
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers running Windows NT with HP Color Laserjet 5/5m printer drivers
	installed may crash and display the following blue screen error message:
	
	  STOP 00000050 : a0cd0000 00000000 00000000 00000000
	  PAGE_FAULT_IN_NONPAGED_AREA
	
	  -or-
	
	  STOP 0x0000001e(0xc0000005,0xf1dc6d6f,0x00000000,0x0000004c)
	  KMODE_EXCEPTION_NOT_HANDLED
	
	NOTE: Parameters may vary depending on the system configuration.
	
	CAUSE
	=====
	
	This problem is caused by the HP Color Laserjet printer driver's dynamic link
	library file, Hpc3.dll.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Hewlett Packard:
	
	  http://www.hp.com/support/
	
	
	STATUS
	======
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: 0x00000050 0x0000001e
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : :4.0,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
