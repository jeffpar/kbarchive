---
layout: page
title: "Q187628: Using Telnet to Test Port 3389 Functionality"
permalink: /kb/187/Q187628/
---

## Q187628: Using Telnet to Test Port 3389 Functionality

	Article: Q187628
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Terminal Server Clients use TCP port 3389 to communicate with Terminal Server. A
	common problem in a WAN environment is that a firewall or other network filter
	prevents connectivity with this port. You can run a simple troubleshooting test
	to make sure the Client can connect to the port. Just try to telnet to the port
	from the Client.
	
	To test the functionality of port 3389, use this command from the Client:
	
	  Telnet tserv 3389
	
	where "tserv" is the host name of your Terminal Server.
	
	If telnet is successful, you simply receive the telnet screen and a cursor. On
	the Terminal Server, Terminal Server Administration will show a blue computer
	icon with no other information. The Telnet connection will also consume an idle
	session.
	
	The Terminal Server should disconnect the connection after a few minutes. Or, you
	can disconnect using Telnet.
	
	This test tells you that you can connect over the port.
	
	If Telnet reports that you cannot connect, there are several possible reasons:
	
	1. If you can connect by replacing "tserv" with the Terminal Server's IP address
	  but not the host name, you may have a DNS or WINS resolution problem.
	
	2. If you can connect when "tserv" is the host name, but cannot connect when
	  "tserv" is the computer name, then you may have a NetBIOS name resolution
	  issue with WINS or an LMHOSTS file.
	
	3. If you cannot connect when "tserv" is the IP address, the host name, or the
	  computer name, then it is likely that port 3389 is blocked somewhere in your
	  WAN.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
