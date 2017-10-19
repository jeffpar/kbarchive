---
layout: page
title: "Q154442: Application Handles Responses Received from DNS"
permalink: /kb/154/Q154442/
---

## Q154442: Application Handles Responses Received from DNS

	Article: Q154442
	Product(s): Microsoft Windows NT
	Version(s): 2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Explorer versions 2.0, 3.0 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using Domain Name System (DNS) to resolve multihomed clients can fail even if
	one of the IP addresses returned by DNS is correct.
	
	MORE INFORMATION
	================
	
	When a Windows NT 4.0 client uses DNS to resolve a name of a machine that is
	defined with multiple IP addresses, the application may fail if one or more of
	the IP addresses mapped to the name do not exist.
	
	Most HOST utilities (FTP, Telnet, and so forth) make a separate request to DNS
	each time an attempt is made to resolve the name. The round robin feature of DNS
	enables DNS to return the IP addresses of the name in a different order each
	time. The application will use the first IP address of the list each time and
	attempt to make a connection using that IP address.
	
	NetBT connectivity handles the responses differently. When the first query is
	made through DNS, the name is then cached for the time defined as the
	CacheTimeout (10 minutes). The request is made for the first entry in the
	returned list of IP addresses. Any attempts made within 10 minutes of the first
	are then addressed through the cache first and DNS will not be used. Any
	additional requests made after the cache is empty will (more likely) then also
	receive the response in a new order.
	
	Microsoft Internet Explorer works differently in that it will go through each IP
	address returned until either a response is received or all IP addresses are
	attempted. The responsibility of performing in this manner lies in the
	application. It is the responsibility of the resolver to return the addresses
	from DNS, not define the manner in which the application uses the addresses.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbIEsearch kbZNotKeyword2 kbIENT400Search kbZNotKeyword3 kbIE200WinNT400 kbIE300WinNT400
	Version           : :2.0,3.0,4.0
	
	=============================================================================
	
