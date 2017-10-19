---
layout: page
title: "Q174224: Description of Domain Name System (DNS)"
permalink: /kb/174/Q174224/
---

## Q174224: Description of Domain Name System (DNS)

	Article: Q174224
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 1.3,2.0,2.5,4.0,95
	Operating System(s): 
	Keyword(s): kbnetwork win95
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- The Microsoft Network versions 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Domain Name System (DNS) and its major components.
	
	MORE INFORMATION
	================
	
	DNS is the name service for Internet addresses that translates friendly domain
	names to numeric Internet Protocol (IP) addresses. For example,
	"www.microsoft.com" translates to 198.105.232.6.
	
	DNS consists of the following components:
	
	- Domains: A domain is a logical group of computers in a large network. Access
	  to each computer in a given group is controlled by the same server.
	
	- Distributed Database: A distributed database is an archive of information
	  about the computers in a network.
	
	- Name Servers: A name server contains address information about other
	  computers on the network. This information can be given to client computers
	  that make a request to the name server.
	
	- Clients: A client requests information from the servers. In a domain name
	  system, the client requests network addressing information from the name
	  servers.
	
	- Resolver: A resolver provides clients with address information about other
	  computers on the network.
	
	For information about configuring TCP/IP for MSN, The Microsoft Network, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q172552 How to Configure TCP/IP for The Microsoft Network
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbMSNSearch kbZNotKeyword3 kbMSN200 kbMSN130 kbMSN250
	Version           : 1.3,2.0,2.5,4.0,95
	Issue type        : kbinfo
	
	=============================================================================
	
