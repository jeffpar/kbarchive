---
layout: page
title: "Q154463: Clearing DNS Statistics Without Stopping DNS Server"
permalink: /kb/154/Q154463/
---

## Q154463: Clearing DNS Statistics Without Stopping DNS Server

	Article: Q154463
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under the Domain Name System (DNS) Manager for Windows NT 4.0, there is no way
	to reset the statistics without stopping and restarting the DNS Server service.
	
	MORE INFORMATION
	================
	
	The Windows NT 4.0 Resource Kit includes a tool (DNSSTAT) that will accomplish a
	reset of the statistics without stopping the DNS Server service.
	
	This command-line utility provides a dump of DNS server statistics (queries and
	responses, database size, caching, memory consumption) on a computer running
	Microsoft DNS Server.
	
	  dnsstat {servername | IP address} [{-c | /c | -clear | /clear}]
	
	Where servername gives a dump of all DNS server statistics on the server named
	servername.
	
	IP address gives a dump of all DNS server statistics on the server with the IP
	address indicated.
	
	-c or /c or -clear or /clear will reset clearable DNS statistics on the server
	indicated.
	
	Additional query words: prodnt sur ntdns
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
