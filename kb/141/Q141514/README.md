---
layout: page
title: "Q141514: Wrong IP Address Chosen from WINS Server"
permalink: kb/141/Q141514/
---

## Q141514: Wrong IP Address Chosen from WINS Server

	Article: Q141514
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows 95-based computer using the Microsoft Client for Microsoft
	Networks attempts to connect to a multihomed server with the TCP/IP protocol
	using WINS to find the most accessible IP address to make the connection, an IP
	address may be chosen that is not in fact the most accessible address.
	
	The Windows 95 client may not connect, or may connect to an IP address that does
	not have the best performance.
	
	CAUSE
	=====
	
	When a server using the TCP/IP protocol is multihomed (meaning that it uses
	multiple IP addresses), the WINS server lists all of these address for clients
	to use to connect to the server. The client chooses the address that is the most
	accessible, typically favoring an address that is local (not on a different
	subnet).
	
	In Windows 95, there is an error in the algorithm used to determine which of
	these addresses is the most accessible, so that the client often does not choose
	the local IP address. Sometimes, the client cannot connect using the chosen
	address.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	A server using the TCP/IP protocol is said to be multihomed if it has multiple
	network adapters, either on the same network or on separate subnets, each with
	its own IP address.
	
	Some customers may use systems that bill users for network usage, identifying
	users by which network they connect from. This problem would create inaccurate
	billing information for such customers.
	
	For additional information about issues with multi-homed servers and WINS, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q139985 WINS Client Fails to Reach a Multi-homed Server
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
