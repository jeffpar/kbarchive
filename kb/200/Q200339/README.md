---
layout: page
title: "Q200339: Promiscuous Mode Madge TR NIC Can Halt Mainframe Connection"
permalink: /kb/200/Q200339/
---

## Q200339: Promiscuous Mode Madge TR NIC Can Halt Mainframe Connection

	Article: Q200339
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Systems Management Server Network Monitor (Netmon) is running on
	a token ring segment, mainframe clients on that segment may no longer be able to
	access or connect to a mainframe host computer. As soon as Netmon is started on
	a client of a mainframe somewhere in the Token Ring network, all new sessions to
	the mainframe will fail and the mainframe becomes unavailable to all clients on
	the token ring network.
	
	CAUSE
	=====
	
	The computer (running either Windows NT 4.0 or Windows 95) on which Netmon is
	running has a Madge PCI Ringnode Token Ring network interface card (NIC) with
	Mdgmport.sys of version 5.02. When this adapter is set in Promiscuous mode
	(required for Netmon to monitor all network traffic), the driver will actually
	de-insert LLC XID frames from the ring.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade the Madge NIC driver from to 6.0 or newer.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: netmon madge ringnode pci token ring pmode promiscuous XID mdgmport miniport
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351xsearch kbWinNT350xsearch kbWinNT400xsearch kbWinNTW350 kbWinNTW350xsearch kbWinNTW351xsearch kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351xsearch kbWinNTS350xsearch kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
