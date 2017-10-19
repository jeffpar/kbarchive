---
layout: page
title: "Q246497: RAS Clients Cannot Resolve NetBIOS Names"
permalink: /kb/246/Q246497/
---

## Q246497: RAS Clients Cannot Resolve NetBIOS Names

	Article: Q246497
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a server-assigned Internet Protocol (IP) address with a remote
	access client to connect to a Microsoft Windows NT Server 4.0-based remote
	access server, and you try to connect to resources on a remote network, network
	basic input/output (NetBIOS) name resolution may be unsuccessful.
	
	CAUSE
	=====
	
	This behavior can occur when Dynamic Host Configuration Protocol (DHCP) assigns
	IP addresses to Remote Access Service (RAS) clients.
	
	RESOLUTION
	==========
	
	To resolve this issue, specify the IP addresses of WINS servers in the TCP/IP
	configuration of the RAS server. The IP addresses of the WINS servers configured
	on the RAS server will be forwarded to RAS clients, enabling them to resolve
	NetBIOS names on the network.
	
	MORE INFORMATION
	================
	
	For additional information about DHCP options and RAS clients, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q160699 Understanding DHCP IP Address Assignment for RAS Clients
	
	RAS clients do not receive the TCP/IP configuration defined in the DHCP scope. If
	you do not configure WINS server addresses locally on the RAS server, RAS
	clients use b-node (local broadcast) as the WINS node type, which confines the
	NetBIOS name query requests to the local subnet.
	
	Additional query words: nt 4.0 resolve netbios remote
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
