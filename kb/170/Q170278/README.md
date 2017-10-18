---
layout: page
title: "Q170278: Demand-dial Connection Fails with Event 20050"
permalink: kb/170/Q170278/
---

## Q170278: Demand-dial Connection Fails with Event 20050

	Article: Q170278
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your attempts to connect to a remote router are unsuccessful. In the event log
	of one the routers you get the following error. The error may be logged on the
	router making or receiving the call:
	
	  Event: 20050
	  Source: Router
	  Description: The user <domain\username> connected to port
	  <portname> has been disconnected because the computer could not be
	  projected onto the network.
	
	The Rasipcp.log file on this computer shows information similar to the
	following:
	
	  [158] 10:23:03: IPCP: ReconfigureTcpip(04878585 / ffffffff)...
	  [158] 10:23:03: IPCP: ReconfigureTcpip done(1214)
	  [158] 10:23:03: IPCP: ReconfigureTcpip=1214
	
	The Ppp.log file on this computer will have the following error message:
	
	  [158] 10:23:03:071: Notifying IPCP of projection notification
	  [158] 10:23:03:071: RasIPCPProjectionNotification returned 1214
	
	The logs on the other router do not indicate any errors.
	
	
	CAUSE
	=====
	
	This error is caused by one of the routers requesting a bad IP address. In this
	case, the router is requesting an address of 133.133.135.4 and the routers are
	using a subnet mask of 255.255.255.252. Using a mask of 252 results in the
	following configuration:
	
	133.133.135.4 - Network ID
	133.133.135.5 - First Host ID
	133.133.135.6 - Second Host ID
	133.133.135.7 - Subnet Broadcast ID
	
	Therefore, the IP address being requested is a Network ID and not a Host ID. The
	same error will occur if the Subnet Broadcast ID (133.133.135.7) were requested.
	
	RESOLUTION
	==========
	
	Change the demand dial interface to request a valid Host Address or to use an IP
	address assigned by remote router.
	
	Additional query words: rras
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : 4.0
	Issue type        : kbinfo
	
	=============================================================================
	
