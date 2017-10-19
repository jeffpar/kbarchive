---
layout: page
title: "Q194881: WinNT Router May Drop IP Packets While Awaiting ARP Response"
permalink: /kb/194/Q194881/
---

## Q194881: WinNT Router May Drop IP Packets While Awaiting ARP Response

	Article: Q194881
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Windows NT Server version 4.0 is configured as a router, some routed IP
	packets may be dropped while the server awaits an ARP response from the
	destination or next hop router.
	
	MORE INFORMATION
	================
	
	If a Windows NT router does not have an Ethernet (media access control) address
	entry for the destination or next hop router in its ARP cache, it will have to
	send an ARP Request. While Windows NT awaits an ARP Response, ARP will "queue"
	the IP packet that needs to be sent. When Windows NT receives the ARP Response,
	it will only transmit the "latest" or last packet that it received in its "ARP
	Packet Queue" for any given destination host.
	
	A common example of this phenomenon would be a ping (ICMP) message larger than
	the MTU of a given network segment. This will force TCP/IP to fragment the
	message into multiple packets. When Windows NT receives packet 1 of 2, it will
	send an ARP Request for the destination or next hop router. Before it receives
	the ARP Response, it will receive packet 2 of 2 of the ping message. When
	Windows NT finally receives the ARP Response, it will only transmit the "latest"
	or last packet it received -- the rest would be discarded.
	
	REFERENCES
	==========
	
	For detailed information about the Address Resolution Protocol (ARP) in Windows
	NT Server version 4.0, please download the "TCP/IP Implementation Details" white
	paper from the Microsoft FTP Site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-docs/papers/TCPIMP2.EXE
	
	For more information about the ARP Packet Queue, please see RFC 1122 -
	"Requirements for Internet Hosts -- Communication Layers".
	
	RFCs may be obtained via the Internet as follows:
	
	Paper copies of all RFCs are available from the NIC, either individually or on a
	subscription basis (for more information, contact NIC@NIC.DDN.MIL). Online
	copies are available via FTP or Kermit from NIC.DDN.MIL as rfc/rfc####.txt or
	rfc/rfc####.PS (#### is the RFC number without leading zeros).
	
	Additionally, RFCs may be requested through electronic mail from the automated
	NIC mail server by sending a message to SERVICE@NIC.DDN.MIL with a subject line
	of "rfc ####" for text versions, or a subject line of "rfc ####.PS" for
	PostScript versions. To obtain the RFC index, the subject line of your message
	should read "rfc index".
	
	Additional query words: ntrouter
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
