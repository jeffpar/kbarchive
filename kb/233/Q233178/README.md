---
layout: page
title: "Q233178: Third-Party Monitoring Programs Monitor Applications and Ports"
permalink: /kb/233/Q233178/
---

## Q233178: Third-Party Monitoring Programs Monitor Applications and Ports

	Article: Q233178
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 31-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses some third-party monitoring tools you can use to monitor
	applications and ports.
	
	MORE INFORMATION
	================
	
	Windows NT Load Balancing Service (WLBS) monitors cluster integrity using the
	periodic exchange of heartbeats between cluster members. Heartbeat exchange
	ensures the server is available on the network, but does not include any
	checking at the port or application level.
	
	You can use third-party monitoring tools to control cluster membership based on
	content availability. Some tools allow a command to be executed after detecting
	an application failure at a server. For example, if an application being load
	balanced on a server fails, the monitoring tool could execute the following
	command
	
	  wlbs stop <IPaddress>:<HostID>
	
	where IPaddress is the IP address for that cluster and HostID is the host ID or
	dedicated IP address of that server.
	
	For information about the command line syntax, type "wlbs" (without the quotation
	marks) at an MS-DOS prompt.
	
	Some examples of third-party tools that monitor cluster membership are listed in
	the following table.
	
	+----------------------------------------------------------+
	| Program                       | Web Address              | 
	+----------------------------------------------------------+
	| Freshwater Software SiteScope | http://www.freshtech.com | 
	+----------------------------------------------------------+
	| NetIQ AppManager              | http://www.netiq.com     | 
	+----------------------------------------------------------+
	| Ipswitch WhatsUp Gold         | http://www.ipswitch.com  | 
	+----------------------------------------------------------+
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTLBS100 kbWinNTLBSSearch
	Version           : winnt:1.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
