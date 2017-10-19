---
layout: page
title: "Q188414: Random Stop 0x0000000A When Running IPX over Token Ring"
permalink: /kb/188/Q188414/
---

## Q188414: Random Stop 0x0000000A When Running IPX over Token Ring

	Article: Q188414
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Random STOP 0x0000000A error messages may occur in NDIS, NWLNKIPX, NWLNKSPX, or
	NTOSKRNL when running the IPX/SPX protocol over token ring.
	
	NOTE: These problems have been experienced with IBM PCI Token Ring adapters using
	the Ibmtrp.sys driver. Olicom PCI Token Ring adapters have had reports of
	similar problems.
	
	The Stop 0x0000000A seems to occur most often following an IPX send packet in the
	packet clean up routines. At times, the system may seem stable before
	experiencing the problem. Other times the system may fail during startup
	immediately following the load of the NWLNKSPX driver when the first packet
	attempts to be sent.
	
	
	CAUSE
	=====
	
	The cause of the problem is NDIS packet corruption caused by pool corruption.
	Most often, the NDIS packet header was found to be corrupt following the send of
	the packet on the wire. In particular, the
	"pNdispacket->protocolReserved->srConnFile" field was found to be
	corrupted.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
