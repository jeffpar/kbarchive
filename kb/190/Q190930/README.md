---
layout: page
title: "Q190930: UDP Broadcast Forwarding by Cisco's IP Helper"
permalink: /kb/190/Q190930/
---

## Q190930: UDP Broadcast Forwarding by Cisco's IP Helper

{% raw %}

	Article: Q190930
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000,3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 23-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	User Datagram Protocol (UDP) broadcasts are transformed into directed datagrams.
	Upon inspection of the media access control address, network packets have been
	transformed from the expected broadcast address (FFFFFFFF) to a specific media
	access control address.
	
	CAUSE
	=====
	
	IP Helper has been enabled on a Cisco switch.
	
	
	RESOLUTION
	==========
	
	Disable IP Help either completely or on a per UDP port basis.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Typically, a broadcast should be confined within its IP subnet. However, notable
	exceptions occur such as a DHCP (BootP) broadcast. Cisco has provided
	functionality in some of its router products called IP Helper to forward
	specific broadcast to designated computers. For example, you could configure all
	DHCP broadcasts to be directed to the specified DHCP server. The thinking behind
	this is a directed datagram will decrease the network traffic when compared to a
	broadcast packet propagated to all subnets.
	
	If an IP helper address is specified and UDP forwarding is enabled, broadcast
	packets destined to the following port numbers are forwarded by default.
	
	  Time Service             Port 37
	  TACACS                   Port 49
	  Domain Name Services     Port 53
	  Trivial File Transfer    Port 69
	  DHCP (BootP)             Port 67 and Port 68
	  NetBIOS Name Server      Port 137
	  NetBIOS Datagram Server  Port 138
	
	The forwarding of NetBIOS broadcasts on UDP port 138 can impact the ability of
	the browser service to properly elect a segment master browser or a domain
	master browser. Disabling the forwarding of broadcast packets on ports 137 and
	138 enables the browser service to work as designed.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q135464 8003 Browsing Errors with UDP Forwarding
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: ethernet helper forward 8003 missing event events
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWin95search kbWin98search kbWinNT310Search kbWinNTW310Search kbWinAdvServSearch kbWinDataServSearch kbZNotKeyword3 kbWin98
	Version           : :2000,3.1,3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
