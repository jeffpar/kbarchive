---
layout: page
title: "Q155758: IP Received Header Error Count May Be High"
permalink: /kb/155/Q155758/
---

## Q155758: IP Received Header Error Count May Be High

	Article: Q155758
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	The "netstat -s" command can be used to view various TCP/IP protocol
	statistics.
	
	Windows NT systems that are running on a TCP/IP network with more than one
	logical subnet per physical network may display a large number of IP
	Received Header Errors, as shown below:
	
	IP Statistics
	
	  Packets Received                   = 84167
	  Received Header Errors             = 10395    <-------
	  Received Address Errors            = 94
	  Datagrams Forwarded                = 0
	  Unknown Protocols Received         = 0
	  Received Packets Discarded         = 0
	  Received Packets Delivered         = 73678
	  Output Requests                    = 2016
	  Routing Discards                   = 0
	  Discarded Output Packets           = 0
	  Output Packet No Route             = 0
	  Reassembly Required                = 0
	  Reassembly Successful              = 0
	  Reassembly Failures                = 0
	  Datagrams Successfully Fragmented  = 0
	  Datagrams Failing Fragmentation    = 0
	  Fragments Created                  = 0
	
	MORE INFORMATION
	================
	
	When an IP datagram is received as a broadcast at the link level, it is passed
	up to IP to process. IP performs a check to see if the datagram is a valid IP
	broadcast for a subnet that the computer is configured on. If the datagram is
	not a valid subnet broadcast, it is discarded, and the "IP Received Header
	Errors" count is incremented.
	
	This is a harmless error, but a request has been logged to eliminate this
	behavior in future versions of Windows NT.
	
	
	Additional query words: snmp
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
