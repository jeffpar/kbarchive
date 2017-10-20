---
layout: page
title: "Q187939: IPX May Not Work When Packet Size Is Larger Than Receive Buffer"
permalink: /kb/187/Q187939/
---

## Q187939: IPX May Not Work When Packet Size Is Larger Than Receive Buffer

{% raw %}

	Article: Q187939
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IPX may not work, or data corruption may occur, with a receive-packet driver
	when a token ring packet spans multiple receive buffers. Data corruption is
	likely when the Receive buffer size on the client Windows NT computer is smaller
	that that of the Maximum transmit size of the Windows NT server computer.
	
	NOTE: The data transfers may seem to work but the data is corrupted if the NDIS
	packets are large enough to be split among receive buffers.
	
	The IPX protocol allows packets to span multiple receive buffers, but only token
	ring packets are large enough to do so. NDIS 4 token ring drivers, such as
	Ibmtrp.sys, that support the ReceivePacket function may encounter this problem.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	You can work around this problem by setting the maximum transmit size on server
	computers to equal to or smaller than the receive buffer sizes of client
	computers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: Olicom ISA 16/4 (oc-3118) TR PCI MAU
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
