---
layout: page
title: "Q193499: Multiple RRAS Client Disconnects Cause Increased CPU Usage"
permalink: /kb/193/Q193499/
---

## Q193499: Multiple RRAS Client Disconnects Cause Increased CPU Usage

{% raw %}

	Article: Q193499
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Routing and Remote Access Service on a system with clients who
	continuously connect and disconnect over a period of several hours, you notice a
	systematic slowdown on the server with a corresponding increase in CPU usage.
	
	The slowdown can be characterized by using Performance Monitor to view the
	Processor object's % Processor Time counter, which indicates a maximum value of
	100. Monitoring the Network Interface object's Bytes Sent and Bytes Received
	counters will also show consistent spikes during a client's connection period.
	
	
	CAUSE
	=====
	
	During a client's connection, the router will allocate memory on the server to
	perform a query against the interface table, allocating memory for the whole
	table. It does so by looking at the count of interfaces and allocates an amount
	equal to the number of connections multiplied by the number of bytes used by the
	router's interface table. Clients who dial in are counted as an interface by the
	router and are added to the table. However, when a client disconnects, the
	system does not decrement the connection count and subsequent connections
	continue to add to the size of the table. Repeated queries on the increasingly
	large amount of memory allocated to the router interface table results in the
	perceptible slowdown of the server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
