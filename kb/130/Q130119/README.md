---
layout: page
title: "Q130119: DHCP Requests Not Returned by TokenRing Routers"
permalink: kb/130/Q130119/
---

## Q130119: DHCP Requests Not Returned by TokenRing Routers

	Article: Q130119
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft TCP/IP-32 for Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers running Windows for Workgroups and TCP/IP-32 for Windows for
	Workgroups, and computers running Windows NT and TCP/IP may fail to obtain DHCP
	addresses in a routed TokenRing environment. Routers functioning as a 1542 BootP
	relay agents in a TokenRing environment forward the request to the DHCP server,
	however when the server replies back to the client, routers (including the
	Proteon CNX500 router), may fail to forward the packet due to the htype field in
	the packet. Many routers do not check the htype field and forward packets
	allowing the workstation to receive the servers response.
	
	CAUSE
	=====
	
	The Hardware Type (htype) is filled out incorrectly by the client. The type
	should be 6 (IEEE 802 Networks), by RFC. However, protocol analyzer traces will
	show (htype) = 1 (0x1) 10 MB Ethernet even on a workstation configured with a
	TokenRing network adapter.
	
	RESOLUTION
	==========
	
	Obtain and install the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and
	TCPIP-32 for Windows for Workgroups versions 3.11 and 3.11a. This problem was
	corrected in Windows NT 3.51 as well as TCPIP-32 for WFW 3.11b included on the
	Windows NT 3.51 compact disc.
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.11 prodnt prodtcp32
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311
	Version           : :3.11,3.5
	
	=============================================================================
	
