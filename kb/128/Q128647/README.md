---
layout: page
title: "Q128647: Troubleshooting TCP/IP LAN and RAS Routing Issues"
permalink: /kb/128/Q128647/
---

## Q128647: Troubleshooting TCP/IP LAN and RAS Routing Issues

{% raw %}

	Article: Q128647
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may not be able to ping or otherwise connect to computers across a router
	using the TCP/IP protocol while you are connected as a RAS client to a remote
	Windows NT 3.5 or 4.0 Remote Access Service (RAS) server.
	
	CAUSE
	=====
	
	This problem occurs if you have "Use default gateway on remote network" selected
	under TCP/IP settings in the RAS Phonebook. This feature adds a route to the
	route table. The new route allows IP addresses that are not resolved by other
	entries in the route table to be routed to the gateway on the RAS link. To use
	Internet utilities, such as a WEB browser or FTP, this feature must be enabled.
	
	MORE INFORMATION
	================
	
	You can observe the change to the default route in the route tables by using the
	Route Print command at the Windows NT Command Prompt. For example, if you make a
	connection with RAS and issue the Route Print command, the first line of the IP
	routing table will look like the following (actual Gateway and Interface values
	will vary):
	
	  Network Address   Netmask   Gateway Address  Interface         Metric
	  0.0.0.0           0.0.0.0   199.199.41.1     199.199.41.254      1
	
	This first line is the natural default path to the local LAN gateway. If you
	connect with RAS to the remote Windows NT 3.5 RAS server, the first two lines of
	the Route Print command will appear as follows:
	
	  Network Address   Netmask   Gateway Address  Interface         Metric
	  0.0.0.0           0.0.0.0   199.199.41.1     199.199.41.254      2
	  0.0.0.0           0.0.0.0   199.199.32.15    199.199.32.15       1
	
	The metric value represents the number of hops a packet must take to its
	destination. Because the new route to the default Gateway is shorter (metric
	value 1), it becomes the preferred path. If you try to use the Route Delete
	command to erase the RAS default gateway, the second line is removed. RAS
	replaces the first line with the RAS default gateway path. As a result, it looks
	like the first line of the table is deleted instead of the second line. For
	example, when you try to delete the second line of the above table, the result
	is:
	
	  Network Address   Netmask   Gateway Address  Interface         Metric
	  0.0.0.0           0.0.0.0   199.199.32.15    199.199.32.15       1
	
	RESOLUTION
	==========
	
	To use TCP/IP utilities, leave the "Use default gateway on remote network"
	selection turned on.
	
	Use the Route Add command to add the route of the subnet you are attempting to
	use and tie that route to the local gateway. For example, if the computer you
	are connecting to has an IP address of 11.1.0.3, add following command to the
	route table:
	
	  Route Add 11.0.0.0 Mask 255.0.0.0 199.199.41.1
	
	
	This addition causes all frames bound for the 11.x.x.x subnet to be processed
	through the local LAN gateway on the local network.
	
	The result is as follows:
	
	  Network Address   Netmask   Gateway Address  Interface         Metric
	  0.0.0.0           0.0.0.0   199.199.41.1     199.199.41.254      2
	  0.0.0.0           0.0.0.0   199.199.32.15    199.199.32.15       1
	  11.0.0.0          255.0.0.0 199.199.41.1     199.199.41.254      1
	
	Additional query words: tcpip dun
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
