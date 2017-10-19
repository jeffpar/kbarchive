---
layout: page
title: "Q173753: Duplicate IP Addresses After Upgrading DHCP Clients to SP2"
permalink: /kb/173/Q173753/
---

## Q173753: Duplicate IP Addresses After Upgrading DHCP Clients to SP2

	Article: Q173753
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade your Windows NT Dynamic Host Configuration Protocol (DHCP)
	clients to Service Pack 2 or later, and you are using non-Windows NT DHCP
	servers, you may begin receiving error messages indicating duplicate IP
	addresses on your network, displayed by DHCP clients.
	
	CAUSE
	=====
	
	Windows NT Service Pack 2 includes an update to the DHCP client that allows the
	client to send a new packet type to the DHCP server. This new packet, DHCP
	DECLINE, lacks the Client ID in the DHCP Options field. Some non- Windows NT
	DHCP servers may not process the DECLINE packet, which can create duplicate IP
	addresses on the network.
	
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
	
	Windows NT Service Pack 2 includes an update to the DHCP client that improves
	the handling of duplicate IP addresses by workstations. Upon receiving a DHCP
	lease, it uses address resolution protocol (ARP) to determine the assigned IP
	address. If a response is received (indicating that the address is already in
	use by another device on the network), it sends a DHCP decline to the server. A
	Windows NT DHCP Server then marks the address as "bad" and does not attempt to
	assign that IP address to any other device. The client resends a DHCP DISCOVER
	packet and starts the lease process again.
	
	RFC 2131 contains the following statement about the required use of client ID in
	Section 2, page 9:
	
	If a client uses a 'client identifier' in one message, it MUST use that same
	identifier in all subsequent messages, to ensure that all servers correctly
	identify the client. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	ARTICLE-ID: ARTICLE-ID: Q161430
	TITLE : DHCP: Detecting and Flagging Duplicate IP Addresses
	
	This problem will not arise if you accept the media access control address as the
	default client ID (CID) and use a Windows NT DHCP Server, because the Windows NT
	DHCP server will look elsewhere in the packet for the media access control
	address of the client. If you choose to implement custom CIDs or use a
	third-party DHCP server, the IP address will not be marked as a Bad_Address.
	There will be duplicate IP addresses on the network if the DHCP server does not
	have duplicate address detection enabled.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q172408
	TITLE: DHCP: Customer DHCP Client Identifiers for Windows NT
	
	Additional query words: sp2 client sp-2
	======================================================================
	Keywords          : kb3rdparty kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
