---
layout: page
title: "Q170791: Windows 95 TCP Clients Run Out of Ports"
permalink: /kb/170/Q170791/
---

## Q170791: Windows 95 TCP Clients Run Out of Ports

{% raw %}

	Article: Q170791
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbnetwork osr1 osr2 win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running programs in Windows 95 that use excessive numbers of TCP
	ports (more than 3976 simultaneously), Windows may run out of TCP ports before
	the TCP/IP protocol releases closed connections.
	
	CAUSE
	=====
	
	The TCP/IP state dictates that when a connection is closed, the connection is
	not released until two maximum segment lives (MSLs) have passed. This state is
	defined as the TIME-WAIT state. One MSL is defined as 120 seconds, and it takes
	four minutes for a closed connection to be released in TCP/IP.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork osr1 osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	
	=============================================================================
	

{% endraw %}
