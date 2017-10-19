---
layout: page
title: "Q174956: WINS, DHCP, and DNS Not Supported As Failover Resource"
permalink: /kb/174/Q174956/
---

## Q174956: WINS, DHCP, and DNS Not Supported As Failover Resource

	Article: Q174956
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Cluster Server does not support the configuration of the Windows
	Internet Name Service (WINS), Dynamic Host Control Protocol (DHCP), and Domain
	Name Service (DNS) as failover resources.
	
	MORE INFORMATION
	================
	
	Cluster Server does not contain support for failover of a WINS server from one
	node to another. WINS may use push/pull replication between two WINS servers,
	allowing an alternate server for clients in the event that one server fails. The
	client may configure for primary and secondary WINS servers. In the event that
	one WINS server fails, the clients may use the other WINS server.
	
	For additional information on WINS, please see the following white paper
	available on the Microsoft anonymous FTP server:
	
	  File Name: Winswp.exe
	  Location : ftp://ftp.microsoft.com/bussys/winnt/winnt-docs/papers/
	  Title : "Microsoft Windows NT Server 4.0 Windows Internet Naming Service
	  (WINS) Architecture and Capacity Planning"
	
	Windows 2000 supports DHCP and WINS on clusters for scalability and fault
	tolerance. For additional information, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q226796 Using WINS and DHCP with the Windows 2000 Cluster Service
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
