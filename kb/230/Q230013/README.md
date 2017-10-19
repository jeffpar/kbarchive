---
layout: page
title: "Q230013: Error Message After You Install Intel Pro/100 Network Adapter"
permalink: /kb/230/Q230013/
---

## Q230013: Error Message After You Install Intel Pro/100 Network Adapter

	Article: Q230013
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 or one of its subsequent service packs on a
	computer containing an Intel Pro/100 (82558-based and 82559-based) network
	adapter, you may receive a STOP error message on a blue screen or the computer's
	network drivers may not start.
	
	CAUSE
	=====
	
	This behavior occurs because the Intel Pro/100 network adapters (82558-based and
	82559-based) are changed and are no longer compatible with the drivers that are
	included with Windows NT service packs.
	
	The newer network cards are incompatible with the driver for 82557-based network
	cards, but the driver name (E100b.sys) and hardware PnP ID are the same as
	previous network cards. This causes Windows NT to misdetect the network card
	during Setup, and it overwrites the OEM driver with an incompatible driver
	during service pack installation.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Intel and replace the E100b.sys driver (NDIS
	3.0) with a newer NDIS 3.0 driver (version 2.24 or later) that does not exhibit
	this problem.
	
	The network adapters and network adapter drivers included here are manufactured
	by vendors independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	If you receive an error message on a blue screen at startup, use the appropriate
	method to start the computer for driver replacement:
	
	FAT File System (if the %SystemRoot% partition is accessible from MS-DOS)
	
	1. Start in MS-DOS.
	
	2. Rename the E100b.sys driver located in %SystemRoot%\System32\Drivers folder
	  to E100b.old.
	
	3. Restart Windows NT.
	
	FAT or NTFS File Systems
	
	1. Physically remove the network card from the computer.
	
	2. Restart Windows NT.
	
	After the computer is started, uninstall the network adapter (using the Network
	tool in Control Panel), and then install the correct OEM version of the driver.
	
	Additional query words: e100bnt.sys
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
