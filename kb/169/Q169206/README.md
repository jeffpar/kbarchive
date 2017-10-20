---
layout: page
title: "Q169206: Using TRACERT With the Loose Source Routing Option"
permalink: /kb/169/Q169206/
---

## Q169206: Using TRACERT With the Loose Source Routing Option

{% raw %}

	Article: Q169206
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Tracert command-line utility can be used to find the route that IP datagrams
	travel from one system to another. You can run this utitily by typing tracert
	<ipaddr> or tracert <hostname>.
	
	However, it can also be used with the -j flag to find the route used to get from
	any specific router IP address to another IP address.
	
	MORE INFORMATION
	================
	
	Usage: tracert [-d] [-h maximum_hops] [-j host-list] [-w timeout] target_name
	
	Options:
	
	  -d                 Do not resolve addresses to hostnames.
	  -h maximum_hops    Maximum number of hops to search for target.
	  -j host-list       Loose source route along host-list.
	  -w timeout         Wait timeout milliseconds for each reply.
	
	The -j option can be used to force the outbound datagram to pass through a
	specific router, by using the IP source route option. For example, if you type
	tracert hosta, and find that the path used is as follows:
	
	* router1
	* router2
	* router3
	* router4
	* hosta
	
	You can find the path to router4 and back to your computer, by typing tracert -j
	router4 <mycomputer>.
	
	The route to router4 and back to your computer will be traced. In this example,
	it would probably be:
	
	* router1
	* router2
	* router3
	* router4
	* router3
	* router2
	* router1
	* <mycomputer>
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA PPC x86
	
	=============================================================================
	

{% endraw %}
