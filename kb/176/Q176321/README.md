---
layout: page
title: "Q176321: Unable to Resolve NetBIOS Names Through PPTP Connection"
permalink: /kb/176/Q176321/
---

## Q176321: Unable to Resolve NetBIOS Names Through PPTP Connection

{% raw %}

	Article: Q176321
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Windows Internet Name Service (WINS) server is on the same computer as
	the Point-to-Point Tunneling Protocol (PPTP) server, and you attempt to connect
	to a computer using a PPTP client, either or both of the following symptoms may
	occur:
	
	- The NetBIOS name of the computer to which you are attempting to connect is
	  not resolved.
	
	- You receive an error message similar to the following error message: System
	  error 53 has occurred. The network path was not found.
	
	If the WINS server is not on the same computer as the PPTP server and you attempt
	to connect to a computer using a PPTP client, you may be able to connect to
	computers on your local area network (LAN), but you may be unable to connect to
	network shares or resources on the PPTP server.
	
	CAUSE
	=====
	
	This issue can occur if there is a host route added to the PPTP client that
	routes all Internet Protocol (IP) traffic destined for the PPTP server through
	your original dial-up connection to your Internet service provider (ISP). This
	path may contain routers or firewalls that block User Datagram Protocol (UDP)
	ports 137 or 138, or Transmission Control Protocol (TCP) port 139. These ports
	must be open for NetBIOS traffic to pass.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	Method 1
	--------
	
	Use the NetBEUI protocol for your PPTP tunnel instead of, or in addition to,
	TCP/IP.
	
	Method 2
	--------
	
	Enable unicast traffic through UDP ports 137 and 138 and TCP port 139 across all
	routers and firewalls between the PPTP client and PPTP server.
	
	NOTE: If you use this method, your PPTP client and server may be susceptible to
	unwanted traffic from other hosts. Please ensure that you enable the proper
	permissions and rights to secure your computers.
	
	Method 3
	--------
	
	If the WINS server is on the same computer as the PPTP server, move the WINS
	server to a different computer.
	
	NOTE: If UDP ports 137 and 138 and TCP port 139 are not enabled, you may be able
	to resolve the NetBIOS name of the PPTP server, but you may be unable to connect
	to its resources.
	
	Method 4
	--------
	
	Create an additional IP interface on the PPTP server. To do so, use any of the
	following methods:
	
	- Add a second network adapter to your PPTP server so that your PPTP clients
	  can gain access to resources on the PPTP server using an IP address different
	  from that of the PPTP server adapter. Be sure to disable the WINS client on
	  the PPTP network adapter.
	
	- Add a Microsoft Loopback adapter to the PPTP server. Make sure it registers
	  with WINS.
	
	- Add a second IP address to the existing network adapter in the Advanced
	  TCP/IP Properties dialog box on the PPTP server. Make PPTP connection to the
	  second IP address.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q133241
	TITLE : Browsing Domain Master Browsers w/ Multiple NICs and Protocols
	
	ARTICLE-ID: Q135404
	TITLE : Multihomed Master Browser May Cause Event ID 8021 and 8032
	
	
	Additional query words: ntnetserv NTPROTOCOL NTSrv nttcp kberrmsg kbinterop kbnetwork
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
