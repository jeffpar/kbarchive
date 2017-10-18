---
layout: page
title: "Q201745: Third-Party BOOTP Server May Respond to DHCP Client Broadcasts"
permalink: kb/201/Q201745/
---

## Q201745: Third-Party BOOTP Server May Respond to DHCP Client Broadcasts

	Article: Q201745
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Dynamic Host Configuration Protocol (DHCP) client may receive incorrect IP
	Address from a BOOTP server.
	
	CAUSE
	=====
	
	Microsoft Windows DHCP client broadcasts for a DHCP server to obtain valid IP
	addresses and other configuration parameters. Third-party BOOTP Service may
	intercept these request packets and incorrectly respond to them by mistake.
	Windows clients are designed to broadcast a "Discovery" message and if a program
	other than a DHCP server responds and takes the broadcasts "out of context", the
	resolution must come from the offending program performing the "Offer" message,
	not the client.
	
	RESOLUTION
	==========
	
	To resolve any of these or related issues, contact the third-party vendor or
	reconfigure the BOOTP service to not respond to packets of this nature.
	
	MORE INFORMATION
	================
	
	DHCP is an extension of the initial Bootstrap Protocol or BOOTP, which assigned
	IP addresses from a database of physical addresses matching IP addresses. This
	database is configured by an Administrator and has a high amount of overhead.
	With the inception of DHCP, IP address assignment can be fully automated through
	several different avenues.
	
	There are a few differences in BOOTP and DHCP. BOOTP clients can use DHCP servers
	and DHCP clients can make use of the BOOTP relay service. DHCP also has a DHCP
	Class Identifier parameter. A requesting client populates this parameter and
	sends it to the server. In turn, the server uses this parameter field for
	selecting correct parameters (options) for the client.
	
	A server or router with a BOOTP service running should not respond to a request
	for which there are no reservations. In the case where dynamic BOOTP has been
	implemented, then reservations must be made to prevent overlap in IP addressing.
	If you implement a dynamic BOOTP server and a DHCP server on the same subnet, it
	is the equivalent of two DHCP servers on the same subnet. This can cause denial
	of IP addresses to clients as well as duplicate IP addresses on the network and
	is not recommended.
	
	REFERENCES
	==========
	
	For more information, please see the following Microsoft Knowledge Base
	article:
	
	  Q174765 How to Configure Microsoft DHCP Server for BOOTP Clients
	
	For more information about DHCP and BOOTP, see RFC 1541, RFC 2131, RFC 1534 and
	RFC 951. RFCs may be obtained over the Internet as follows:
	
	Paper copies of all RFCs are available from the NIC, either individually or on a
	subscription basis (for more information, contact NIC@NIC.DDN.MIL). Online
	copies are available through FTP or Kermit from NIC.DDN.MIL as rfc/rfc####.txt
	or rfc/rfc####.PS (#### is the RFC number without leading zeros).
	
	
	Additional query words: ack
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
