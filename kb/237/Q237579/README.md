---
layout: page
title: "Q237579: Performance Monitor Logs Lose Data Across Subnets"
permalink: kb/237/Q237579/
---

## Q237579: Performance Monitor Logs Lose Data Across Subnets

	Article: Q237579
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbui
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	To connect to a computer across subnets in a multiple-subnet environment with a
	remote Performance Monitor Session, you must use either the Fully Qualified
	Domain Name (FQDN), or the Internet Protocol (IP) address. After you connect,
	you can view data in real-time. However, when you try to capture data to a log,
	even though the NetBIOS name is resolved and the log grows in size, all objects
	and counters are lost.
	
	CAUSE
	=====
	
	This issue occurs because Performance Monitor is dependent on NetBIOS name
	resolution when logging data.
	
	RESOLUTION
	==========
	
	To work around this issue, use any of the following methods:
	
	Method 1
	--------
	
	1. Place an Lmhosts file containing the computer name and IP address of the
	  target computer in the %systemroot%\drivers\etc folder of the monitoring
	  workstation. View the Lmhosts.sam file for information about how to do so.
	
	2. Configure TCP/IP to perform a LMHOSTS lookup. For information about how to do
	  so, please click the article number below to view the article in the
	  Microsoft Knowledge Base:
	
	  Q192064 Using LMHOSTS Lookup to Create Multiple Preferred Login Servers
	
	Method 2
	--------
	
	Enable DNS for Windows Resolution:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. Click the Protocols tab, double-click TCP/IP, and then click to select the
	  "Enable DNS for WINS Resolution" check box. Note that a DNS server must also
	  be defined in TCP/IP Properties.
	
	Method 3
	--------
	
	Point computer monitoring to a WINS server on the network that has the target
	computer defined:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. Click the Protocols tab, double-click TCP/IP, click the Wins Address tab,
	  enter the appropriate IP addresses of the primary and secondary (if
	  applicable) WINS servers, and then click OK.
	
	NOTE: Because the computer performing the data logging is the only one that needs
	NetBIOS resolution, the quickest way to get the Performance Monitor working is
	to create an Lmhosts file on that machine. This is not an optimal solution for
	WINS resolution on a large network because these files would have to be on
	multiple servers and workstations. Also, IP addressing changes would require
	modification on all computers that have an Lmhosts file.
	
	MORE INFORMATION
	================
	
	For additional information about WINS, please click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q169790 How to Troubleshoot Basic TCP/IP Problems in Windows NT 4.0
	
	  Q192064 Using LMHOSTS Lookup to Create Multiple Preferred Login Servers
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
