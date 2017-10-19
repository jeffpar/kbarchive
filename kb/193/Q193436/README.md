---
layout: page
title: "Q193436: DHCP Client Shuts Down After Two Declines"
permalink: /kb/193/Q193436/
---

## Q193436: DHCP Client Shuts Down After Two Declines

	Article: Q193436
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows NT 4.0 client may fail to get an IP address from a Dynamic Host
	Configuration Protocol (DHCP) Server. Sending a Ipconfig.exe /Renew command from
	a command prompt will also be unsuccessful. The client will not try to lease a
	new address from the DHCP server until the client has been restarted.
	
	CAUSE
	=====
	
	A Windows NT 4.0 Service Pack 3 DHCP client issues a gratuitous ARP after
	receiving a lease from a DHCP server. If another computer responds, that IP
	address is already in use on the network by the other computer. The client will
	not bind the IP address but will instead send a DHCP DECLINE to the DHCP server
	from which it obtained the lease and the DHCP server will mark the address as
	bad. The client will then proceed again with the DHCP DISCOVER process.
	
	After a second address conflict, however, the client sends a second DHCP DECLINE,
	leaves the init state, and no loner attempts to obtain a address from DHCP.
	
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
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
