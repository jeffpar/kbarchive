---
layout: page
title: "Q169268: FTP Err Msg: Error: Connection Timed Out"
permalink: kb/169/Q169268/
---

## Q169268: FTP Err Msg: Error: Connection Timed Out

	Article: Q169268
	Product(s): Internet Information Server
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a site via FTP, you may get the following error
	message after a few minutes if the Internet Information Server (IIS) is
	configured with more than one default gateway:
	
	  Error: Connection timed out
	
	This may also happen only when you try to connect via FTP using a slow link (for
	example, a 28.8k modem connection) to a server that has more than one default
	gateway.
	
	CAUSE
	=====
	
	The IIS computer should have only one IP default gateway. The IP address of the
	default gateway should be configured on the external network adapter card only.
	
	This requirement is a result of the basic architecture of TCP/IP. Only one
	default gateway must be defined on a host that resides on two or more
	non-connected networks.
	
	If IIS server is configured with more than one network interface, it is connected
	to two networks that are by design non-connected.
	
	A default gateway is a router that is supposed to be used for all traffic that
	has no specific route. If you have two default-gateways, the IIS server TCP/IP
	stack will assume that they lead to the same set of networks. This will cause
	the IIS server to send Internet traffic to the internal network, or internal
	traffic to the Internet.
	
	WORKAROUND
	==========
	
	Remove the default gateway from the advanced TCP/IP settings of the internal
	network interface on the IIS server and define static routes to the internal
	network segments.
	
	For additional information, please see the following Microsoft Knowledge Base
	article:
	
	  Q161380 : Only One Default Gateway Allowed On Proxy Server
	
	Because no default gateway will be defined for the internal network, you must add
	static routes using the Route Add command. These routes can be made persistent
	by using the -p command switch.
	
	MORE INFORMATION
	================
	
	For additional information on adding static routes to the routing table, please
	see the following:
	
	- Type route /? for additional command switches.
	
	For additional information, please see the following Microsoft Knowledge Base
	article:
	
	  Q140859 : TCP/IP Routing Basics for Windows NT
	
	
	Additional query words: proxy internet server timeout connect fail winsock ftp iis
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis300
	Version           : :3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
