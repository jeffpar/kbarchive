---
layout: page
title: "Q182644: DNR Sorts IP Address for Multihomed Hosts Before Returning List"
permalink: /kb/182/Q182644/
---

## Q182644: DNR Sorts IP Address for Multihomed Hosts Before Returning List

	Article: Q182644
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Windows sockets client application connects to a server application on a
	multihomed server, it may not connect to the "nearest" or "best" IP address on
	that server.
	
	CAUSE
	=====
	
	When a Windows sockets application is used to connect to another computer, it
	normally calls gethostbyname() to obtain the IP address of the target computer.
	This Winsock API invokes the Domain Name Resolver (DNR) component on the client
	computer to send a name query to a Domain Name Service (DNS) server. DNS returns
	a list of IP addresses to the DNR, which places the list into a structure and
	returns it to the application. Most applications then try to connect to the
	first IP address in the list.
	
	An updated version of the DNR is now available. This version of the DNR sorts the
	list of IP addresses into the "best" order by examining the route table of the
	computer on which it is running. For instance, If any of the IP addresses in the
	list returned by the DNR are on a common subnet with the client, that IP address
	will be moved to the top of the list. This enhancement allows the client
	application to make the most direct connection possible to the server.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	Windows 95
	----------
	
	This issue is resolved by the following updated files for Windows 95 with the
	Winsock2 update for Windows 95 installed:
	
	  Mswsock.dll  version 4.10.1657  dated 4/8/98 4:57pm  71,168 bytes
	  Rnr20.dll    version 4.10.1657  dated 4/8/98 4:57pm  43,520 bytes
	
	
	
	NOTE: The Windows Sockets 2.0 (Winsock2) update for Windows 95 must be installed
	on Windows 95 prior to installing this update. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q182108 Availability of Windows Sockets 2.0 for Windows 95
	
	
	STATUS
	======
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4 and Windows NT Server 4.0, Terminal Server Edition Service
	Pack 4.
	
	
	Additional query words: multi-homed multi homed
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
