---
layout: page
title: "Q140859: TCP/IP Routing Basics for Windows NT"
permalink: kb/140/Q140859/
---

## Q140859: TCP/IP Routing Basics for Windows NT

	Article: Q140859
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.11,3.5,3.51,4.0,4.0a
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the Windows NT Routing Table on a single-homed machine
	and multihomed Windows NT Router with and without Multi Protocol Router (MPR).
	This background information will help with troubleshooting related to TCP/IP.
	
	MORE INFORMATION
	================
	
	The Route Table
	---------------
	
	Even a single-homed TCP/IP host has to make routing decisions. These routing
	decisions are controlled by the route table. The route table can be displayed by
	typing "route print" at the command prompt. The following is an example route
	table from a single-homed machine. This simple route table is built
	automatically by Windows NT based on the IP configuration of your host.
	
	Network Address   Netmask          Gateway Address  Interface       Metric
	
	0.0.0.0           0.0.0.0          157.57.8.1       157.57.11.169      1
	127.0.0.0         255.0.0.0        127.0.0.1        127.0.0.1          1
	157.57.8.0        255.255.248.0    157.57.11.169    157.57.11.169      1
	157.57.11.169     255.255.255.255  127.0.0.1        127.0.0.1          1
	157.57.255.255    255.255.255.255  157.57.11.169    157.57.11.169      1
	224.0.0.0         224.0.0.0        157.57.11.169    157.57.11.169      1
	255.255.255.255   255.255.255.255  157.57.11.169    157.57.11.169      1
	
	The titles of each column in the above table are explained in following text:
	
	Network Address:
	
	Network Address is the destination. The Network address column can contain:
	
	- Host address
	
	- Subnet address
	
	- Network address
	
	- Default gateway
	
	The search order is also as above, from the most unique route (host address) to
	most generic (default gateway):
	
	0.0.0.0         is the default route
	127.0.0.0       is the loopback address
	157.57.8.0      is the local subnet address
	157.57.11.169   is the network card address
	157.57.255.255  is the subnet broadcast address
	224.0.0.0       is the multicast address
	255.255.255.255 is the limited broadcast address
	
	Netmask:
	
	The Netmask defines what portion of the Network Address must match for that route
	to be used. When the mask is written in binary a 1 is significant (must match)
	and a 0 need not match. For example, a 255.255.255.255 mask is used for a host
	entry. The mask of all 255s (all 1s) means that the destination address of the
	packet to be routed must exactly match the Network Address for this route to be
	used. For another example, the Network Address 157.57.8.0 has a netmask of
	255.255.248.0. This netmask means the first two octets must match exactly, the
	first 5 bits of the third octet must match (248=11111000) and the last octet
	does not matter. Since 8 in the decimal number system is equivalent to 00001000
	in binary, a match would have to start with 00001. Thus, any address of 157.57
	and the third octet of 8 through 15 (15=00001111) will use this route. This is a
	netmask for a subnet route and is therefore called the subnet mask.
	
	Gateway Address:
	
	The Gateway Address is where the packet needs to be sent. This can be the local
	network card or a gateway (router) on the local subnet.
	
	Interface:
	
	The Interface is the address of the network card over which the packet should be
	sent out. 127.0.0.1 is the software loopback address.
	
	Metric:
	
	The Metric is the number of hops to the destination. Anything on the local LAN is
	one hop and each router crossed after that is an additional hop. The Metric is
	used to determine the best route.
	
	Multihomed Router
	-----------------
	
	The following is the default Route table of a multihomed Windows NT host.
	
	Network Address   Netmask           Gateway Address   Interface      Metric
	
	0.0.0.0           0.0.0.0           157.57.24.1       157.57.24.193     1
	0.0.0.0           0.0.0.0           199.199.40.1      199.199.40.139    1
	127.0.0.0         255.0.0.0         127.0.0.1         127.0.0.1         1
	157.57.24.0       255.255.248.0     157.57.24.193     157.57.24.193     1
	157.57.24.193     255.255.255.255   127.0.0.1         127.0.0.1         1
	199.199.40.0      255.255.255.0     199.199.40.139    199.199.40.139    1
	199.199.40.139    255.255.255.255   127.0.0.1         127.0.0.1         1
	199.199.40.255    255.255.255.255   199.199.40.139    199.199.40.139    1
	224.0.0.0         224.0.0.0         157.57.24.193     157.57.24.193     1
	224.0.0.0         224.0.0.0         199.199.40.139    199.199.40.139    1
	255.255.255.255   255.255.255.255   199.199.40.139    199.199.40.139    1
	
	Check "Enable IP Routing" in the Advanced TCP/IP configuration to enable routing.
	At this point Windows NT will route between these two subnets.
	
	NOTE - for the Multihomed Router to pass DHCP Discover packets from one subnet to
	the other you will need to install the "BootP Relay Agent" that comes with MPR.
	MPR is discussed later.
	
	A note on Default gateways:
	
	In the TCP/IP configuration, you can add a default route for each network card.
	This will create a 0.0.0.0 route for each. However, only one default route will
	actually be used. In this case, the 199.199.40.139 is the first card in the
	TCP/IP bindings and therefore the default route for this card will be used.
	Since only one default gateway will be used you should only configure one card
	to have a default gateway. This will reduce confusion and insure the results you
	intended.
	
	For more information, see the following article in the Microsoft Knowledge base:
	
	  ARTICLE-ID: Q157025
	  TITLE : Default Gateway Configuration for Multi-Homed Computers
	
	If the Windows NT router does not have an interface on a given subnet, it will
	need a route to get there. This can be done by adding Static Routes or by using
	MPR. MPR is discussed later.
	
	To Add a Static Route
	---------------------
	
	The following is an example route.
	
	  Route Add 199.199.41.0 mask 255.255.255.0 199.199.40.1 metric 2
	
	NOTE: The metric option is only supported in Windows NT 3.51 with Service Pack 2
	or later installed.
	
	The route in this example means that to get to the 199.199.41.0 subnet with a
	mask of 255.255.255.0 use gateway 199.199.40.1 and that the subnet is 2 hops
	away. A static route will also need to be added on the next router telling it
	how to get back to subnets reachable by the first router. With a network of a
	few routers or more, static routes can become very complicated.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q141383
	  TITLE : "P" Switch for Route Command Added in Windows NT
	
	Multi Protocol Router (MPR)
	---------------------------
	
	MPR consists of the following:
	
	- Routing Information Protocol (RIP) for TCP/IP.
	
	- BOOTP (Boot Protocol) relay agent for Dynamic Host Configuration Protocol
	  (DHCP).
	
	- RIP for IPX.
	
	RIP is used by routers to dynamically exchange routing information. RIP routers
	broadcast their routing tables every 30 seconds by default. Other RIP routers
	will listen for these RIP broadcasts and update their own route tables.
	
	MPR is available in Service Pack 2 for Windows NT 3.51.
	
	For additional information, please see the RIPROUTE.WRI file (available with
	Windows NT 3.51 Service Pack 2) for MPR installation instructions or the
	following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q138793
	  TITLE : Multi-Protocol Router Installation and Configuration
	
	Additional query words: tcpip win95 win95x
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbWFWSearch kbSBServSearch kbWinAdvServSearch kbZNotKeyword3 kbWFW311 kbSBServ400 kbSBServ400a
	Version           : :2000,3.11,3.5,3.51,4.0,4.0a
	Issue type        : kbhowto
	
	=============================================================================
	
