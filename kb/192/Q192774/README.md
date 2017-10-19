---
layout: page
title: "Q192774: Stop 0x0000000A in Tcpip.sys Processing an ICMP Packet"
permalink: /kb/192/Q192774/
---

## Q192774: Stop 0x0000000A in Tcpip.sys Processing an ICMP Packet

	Article: Q192774
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 4.0 generates the following blue screen STOP error in Tcpip.sys when
	it processes an ICMP Subnet Mask Address Request packet:
	
	  STOP 0x0000000A (0xA0033000, 0x00000002, 0x00000000, 0xf381329B)
	
	NOTE: The fourth parameter will be different on most computers but will fall
	within the memory range of Tcpip.sys.
	
	CAUSE
	=====
	
	This blue screen STOP error occurs when there are multiple IP addresses bound to
	a network interface card from the same logical subnet and the same subnet mask,
	while processing an ICMP Subnet Mask Address Request packet.
	
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
	
	
	Additional query words: kbDSupport 0xa tcpip ntstop
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
