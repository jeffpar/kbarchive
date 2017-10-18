---
layout: page
title: "Q162396: Problem with DHCP Decline Feature in Service Pack 2"
permalink: kb/162/Q162396/
---

## Q162396: Problem with DHCP Decline Feature in Service Pack 2

	Article: Q162396
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP2
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP2 
	- Microsoft Windows NT Server version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT 4.0 Service Pack 2 DHCP client may fail to obtain a DHCP lease if a
	duplicate IP address exists on the network. DHCP logs an error in the event log
	with event ID 1008.
	
	CAUSE
	=====
	
	Windows NT Service Pack 2 includes an update to the DHCP client that improves
	the ability of a workstation to handle duplicate IP addresses. Upon receiving a
	DHCP lease, it ARPs for the IP address that was assigned. If a response is
	received (indicating that the address is already in use by another device on the
	network) it issues a DHCP decline to the server. The server then marks the
	address as "bad" and does not attempt to assign that IP address to any device.
	The client re-issues a DHCP DISCOVER packet and starts the lease process over
	again.
	
	For more information on this, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q161430
	  TITLE : DHCP: Detecting and Flagging Duplicate IP Addresses
	
	DHCP clients that also have RAS installed on them do not perform this DHCP
	decline operation successfully.
	
	RESOLUTION
	==========
	
	A new version of Rasarp.sys is available that corrects this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 2. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00 prodnt event 1008 sp2
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp2 kbWinNTSsearch kbWinNTS400sp2 kbWinNTS400search
	Version           : :4.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	
