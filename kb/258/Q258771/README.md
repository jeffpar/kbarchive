---
layout: page
title: "Q258771: Cannot Connect to Virtual IP Address by UNC Without NetBIOS"
permalink: kb/258/Q258771/
---

## Q258771: Cannot Connect to Virtual IP Address by UNC Without NetBIOS

	Article: Q258771
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a virtual IP address by using a NetBIOS call (such as
	the netview or nbtstat -a command, or a Universal Naming Convention [UNC]
	connection), your network client may receive a system error 53 "The network path
	was not found" or "Host not found" error message. However, you can connect to
	the node's IP address, the node name, or the network name that is dependent on
	the virtual IP address. You can also ping the the IP address.
	
	CAUSE
	=====
	
	This behavior can occur if the NetBIOS interface is not running on the cluster
	node that currently owns the IP address resource. A virtual IP address in the
	cluster relies on the the NetBIOS interface exclusively for NetBIOS name
	resolution.
	
	RESOLUTION
	==========
	
	In the Devices tool in Control Panel, verify that the NetBIOS interface is set
	to Manual (this is the default) and that the Messenger service is set to
	Automatic (this is the default). The NetBIOS interface should be started by the
	Messenger service because the Messenger service depends on the NetBIOS
	interface.
	
	WORKAROUND
	==========
	
	If the the NetBIOS interface and the Messenger service are both set correctly
	but the NetBIOS interface still does not work, set the NetBIOS interface to
	Automatic, and then reboot the system.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q195462 WINS Registration and IP Address Behavior for MSCS 1.0
	
	  Q248605 Cluster IP Address Resource Fails with Many IP Address Resources
	
	Additional query words: mscs
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
