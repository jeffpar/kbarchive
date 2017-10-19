---
layout: page
title: "Q138086: Windows NT 3.51: Reverse Name Resolution for WINS Clients"
permalink: /kb/138/Q138086/
---

## Q138086: Windows NT 3.51: Reverse Name Resolution for WINS Clients

	Article: Q138086
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT version 3.51 TCP/IP includes a new feature that allows a host to find
	out the computer name (host name) that matches a TCP/IP address; this is
	possible even if DHCP is being used to dynamically assign TCP/IP addresses.
	
	MORE INFORMATION
	================
	
	Windows Sockets programs use the GetHostByAddr() call to resolve a TCP/IP
	address to a computer name. To accomplish this resolution, the Windows NT 3.51
	GetHostByAddr() first attempts to look up the computer name by contacting a
	domain name server (DNS), if one is configured. If the DNS lookup does not
	return a host name, then GetHostByAddr() attempts to resolve the TCP/IP address
	to a computer name by using a NetBIOS Node Status Request as defined in
	RFC1001/1002. NetBIOS nodes return their name table in response. The
	GetHostByAddr() routine parses the name table for the computer name and returns
	this to the caller.
	
	This method does not work for hosts that are not NetBIOS-capable. PTR records
	(that is address-to-name records) must be added to the DNS for these computers.
	
	Windows NT utility programs such as PING.EXE, TRACERT.EXE, and NETSTAT.EXE use
	GetHostByAddr(), so they can take advantage of this feature.
	
	
	Additional query words: prodnt IP tcp tcpip
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
