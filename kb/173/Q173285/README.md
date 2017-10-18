---
layout: page
title: "Q173285: Win3.x Client Problem Connecting over Netmanage Newt TCP/IP"
permalink: kb/173/Q173285/
---

## Q173285: Win3.x Client Problem Connecting over Netmanage Newt TCP/IP

	Article: Q173285
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 (all SP),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure the SNA Server Windows 3.x client software with two firewall
	addresses, the SNA client is unable to connect through the second firewall
	server if the SNA Server computer associated with the first firewall server is
	unavailable. This problem occurs when the SNA Server Windows 3.x client is
	communicating over the TCP/IP Windows sockets interface provided by Netmanage
	Newt version 4.6 or 4.65. This problem does not occur when you are using the
	Microsoft TCP32 protocol and Windows sockets interface.
	
	SNA Server client support for connectivity across Internet firewalls is described
	in the following Microsoft Knowledge Base article:
	
	  Q139508 Internet Firewall Support in SNA Server
	
	Here are the specific failure scenarios you encounter when using the Netmanage
	Newt TCP/IP sockets interface:
	
	- If the first SNA Server computer (associated with the first firewall address)
	  is not connected to the network, then the SNA Windows 3.x client receives
	  error 10060 (WSAETIMEDOUT), as expected, when connecting to the SnaBase
	  socket 1478. But when the SNA client attempts to connect to the second SNA
	  Server computer (associated with the second firewall address), you still
	  receive error 10060, even though a network trace (such as Microsoft Network
	  Monitor) indicates that the TCP/IP syn/syn/ack connection succeeded to socket
	  1478 on the second server.
	
	- If both SNA Server computers are connected to the network, but the SNA Server
	  service is not running on the first server, then the SNA client's attempt to
	  open a connection to socket 1477 on the second server fails with socket error
	  10009 (WSAEBADF). The connection attempt to the first SNA Server computer
	  fails as expected with error 10061 (WSAECONNREFUSED), because the SNA Server
	  service was not started on the first SNA Server computer.
	
	RESOLUTION
	==========
	
	At the time this article was written, there was no solution for this problem
	available from Netmanage.
	
	
	This problem does not occur when you are using the SNA Server Windows 3.x client
	software over the Microsoft TCP32 protocol stack.
	
	STATUS
	======
	
	The Netmanage Newt products discussed here are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: chameleon
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 (all SP),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
