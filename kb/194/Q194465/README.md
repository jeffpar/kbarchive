---
layout: page
title: "Q194465: PPTP May Refuse Connections When VPNs Are Free"
permalink: kb/194/Q194465/
---

## Q194465: PPTP May Refuse Connections When VPNs Are Free

	Article: Q194465
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows NT Server computer running the Point to Point Tunneling Protocol
	(PPTP) may encounter periods where all new client connections will be refused.
	These periods only last three to five seconds but can happen even when there are
	Virtual Private Network (VPN) adapters still available.
	
	CAUSE
	=====
	
	This problem only happens when clients are dialing in using NetBEUI. The clean
	up period after a VPN bound to NetBEUI can last three to five seconds. During
	this period, the VPN will refuse any connections. When the VPN refuses the
	connection, the server then thinks that all the connections are being used and
	refuses the entire connection instead of passing the connection on to another
	VPN.
	
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
	
	Additional query words: RAS PPTP NetBeui
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
