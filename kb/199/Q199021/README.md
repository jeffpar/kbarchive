---
layout: page
title: "Q199021: 3Com SmartAgent Can Produce High CPU Usage When Using WLBS"
permalink: /kb/199/Q199021/
---

## Q199021: 3Com SmartAgent Can Produce High CPU Usage When Using WLBS

{% raw %}

	Article: Q199021
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	3Com network interface cards (NICs) come with a SmartAgent service that allows
	remote monitoring, administration, and troubleshooting. On some configurations,
	it can produce high CPU usage when used in conjunction with the NIC that has
	Windows NT Load Balancing Service (WLBS) bound to it.
	
	RESOLUTION
	==========
	
	To work around this problem, disable SmartAgent in the Services tool in Control
	Panel.
	
	Additional query words: Convoy
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTLBSSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
