---
layout: page
title: "Q149692: XCLN: Error Message When Clients Try To Connect Via Internet"
permalink: kb/149/Q149692/
---

## Q149692: XCLN: Error Message When Clients Try To Connect Via Internet

	Article: Q149692
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Microsoft Exchange clients try to connect to the Microsoft Exchange Server
	over the Internet, the following error may be received.
	
	  Microsoft Exchange could not be started. Network problems are preventing
	  connection to the Microsoft Exchange Server computer. Contact your system
	  administrator if this condition persists.
	
	MORE INFORMATION
	================
	
	When it tries to connect to the Microsoft Exchange server over the Internet, the
	Microsoft Exchange client needs to be able to get the IP address of the
	Microsoft Exchange server from the Fully Qualified Domain Name (DNS Name) of the
	Microsoft Exchange Server. This can be achieved through two ways:
	
	- The client has access to a DNS that is aware of the Microsoft Exchange
	  Server.
	
	- The client computer has a local HOSTS file with an entry for the Microsoft
	  Exchange Server computer.
	
	In most cases, the client will have to have a local HOSTS file, since most DNS's
	on the Internet will not have information about the Microsoft Exchange Server in
	their tables.
	
	NOTE: When creating a Microsoft Exchange profile on the client computer, it is
	possible to enter an IP address as the Microsoft Exchange server name. The RPC
	TCP/IP runtime routines know how to use a raw TCP/IP address to connect to the
	server, but the DNS name is what gets stored in the profile. Hence, there must
	be a DNS entry or local HOSTS file entry for the Microsoft Exchange Server in
	order for the client to contact the server.
	
	To verify that the client is able to communicate with the server, the following
	tests could be run:
	
	1. Ping the Microsoft Exchange Server name. This should tell us whether TCP/IP
	  connectivity is available.
	
	2. If you are able to "Ping" the server, use the RPC Ping utility to test RPC
	  Connectivity with the server. This utility, present in the Microsoft Exchange
	  Server CD in the Support\Rpcping directory, has two components, one to be run
	  on the server and the other to be run on the client computer.
	
	If there are problems with the RPC Connectivity, check to see if the server is
	located behind a firewall. If a firewall is being used, it will need to
	configured to allow access to the ports on the Microsoft Exchange Server that
	are used by Microsoft Exchange. Please refer to the Microsoft Exchange Server
	Release Notes for more information on "Setting TCP/IP Port Numbers for Internet
	Firewalls"
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
