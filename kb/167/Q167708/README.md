---
layout: page
title: "Q167708: BootP Client Names Disappear in DHCP Manager"
permalink: kb/167/Q167708/
---

## Q167708: BootP Client Names Disappear in DHCP Manager

	Article: Q167708
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a BOOTP client gets an IP address, the "Reservation" changes to
	"Reservation in use." However, the client name is removed from the list. As a
	result there is no identifier in the list to differentiate which IP address
	belong to which client.
	
	CAUSE
	=====
	
	The DHCP server does not handle the case correctly when the BOOTP client sends a
	Null host name in the DHCP Request Packet.
	
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
	
	
	MORE INFORMATION
	================
	
	Normally, when an administrator has set up a reservation for a BootP client on a
	Windows NT Dynamic Host Configuration Protocol (DHCP) server, the Active Leases
	list includes the address, client name, and "Reservation." When a DHCP client
	boots, the "Reservation" changes to "Reservation in use."
	
	If after applying the above-mentioned fix your DHCP Server continues to
	experience the symptoms, then verify that you have configured Option 12 for the
	BootP Client. When a BootP Client sends a request to the DHCP Server and the
	host name is blank, the DHCP Server looks in the registry for the HostName
	(Option 12) for use in propogating the Client Name field. If Option 12 is left
	blank, it will leave the client name blank.
	
	To correctly configure the BootP Client information, fill out the HostName
	information in the Option 12 field of the entry. Once the Bootp request is
	received, the Server will move the HostName option to the ClientName field.
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
