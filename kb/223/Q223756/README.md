---
layout: page
title: "Q223756: IRDP Client Support Added to Windows NT 4.0"
permalink: /kb/223/Q223756/
---

## Q223756: IRDP Client Support Added to Windows NT 4.0

	Article: Q223756
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp5fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	You require Internet Control Message Protocol (ICMP) Internet Router Discovery
	Protocol (IRDP) support on Microsoft Windows NT
	
	CAUSE
	=====
	
	IRDP (router discovery) support has been added to Windows NT 4.0. IRDP support
	has also added to Windows 95 and 98 (see the "More Information" section of this
	article).
	
	The following text is an excerpt from Request for Comments (RFC) 1256:
	
	  The ICMP router discovery messages are called "Router Advertisements" and
	  "Router Solicitations. " Each router periodically multicasts a Router
	  Advertisement from each of its multicast interfaces, announcing the IP
	  address(es) of that interface. Hosts discover the addresses of their
	  neighboring routers simply by listening for advertisements.
	
	This is one way of testing for dead gateways. This solution requires that routers
	be configured to send IRDP router advertisement packets.
	
	RESOLUTION
	==========
	
	Windows NT 4.0 now supports performing "router discovery" as specified in RFC
	1256.
	
	Router discovery provides an improved method of configuring and detecting default
	gateways. When using DHCP or manual default gateway configuration, there is no
	way to adjust to network changes. Using router discovery, clients dynamically
	discover routers and can switch to backup routers if a network failure or
	administrative change is needed. Router discovery is made up of two types of
	packets: Router Solicitations sent by hosts, and Router Advertisements sent by
	routers. Windows NT 4.0 supports router discovery as a host only.
	
	This feature is disabled by default.
	
	Client Configuration
	--------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Router discovery is configured from the following registry keys:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\<adaptername>\Parameters\Tcpip\
	
	  Value Name: PerformRouterDiscovery
	  Value Type: REG_DWORD - Number
	  Valid Range: 0,1
	  Default: 0
	  Description: This parameter controls whether Windows NT will attempt to
	  perform router discovery per RFC 1256 on a per-interface basis. This
	  parameter defaults to 0 or FALSE.
	
	3. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\<adaptername>\Parameters\Tcpip\
	
	  Value Name:SolicitationAddressBcast
	  Value Type: REG_DWORD - Number
	  Valid Range: 0,1
	  Default: 0
	  Description: This parameter can be used to configure Windows NT to send router
	  discovery messages as limited broadcasts (255.255.255.255) instead of
	  multicasts, as described in RFC 1256. By default, router discovery
	  solicitations are sent to the all routers multicast group (224.0.0.2).
	  By default, IRDP client listens to both multicast and broadcast router
	  advertisements.
	
	4. Quit Registry Editor.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0. This problem
	was first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	When a host that supports router discovery initializes, it joins the
	"all-systems" IP multicast group (224.0.0.1), and then listens for the router
	advertisements sent to that group.
	
	Router Solicitation
	-------------------
	
	Hosts send ICMP Router Solicitation messages to the all routers IP multicast
	address (224.0.0.2). The router will respond by sending a router advertisement.
	This ensures the client receives a default gateway immediately without waiting
	for a periodic router advertisement. Windows NT sends a maximum of 3
	solicitations at intervals of approximately 600 milliseconds.
	
	NOTE: If multiple default gateways (0.0.0.0 routes) have a metric of 1, random
	routing behavior can occur. For additional information, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  Q159168 Multiple Default Gateways Can Cause Connectivity Problems
	
	For IRDP support, Windows 95 requires Windows Socket update 2; Windows 98
	natively supports IRDP. For additional information, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  Q183902 Dead Gateway Detection Is Not Triggered During Logon
	
	For additional information about the IPRIP Listener Tool for Windows 98, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q194464 Description of the Microsoft IPRIP Listener Tool for Windows 98
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
