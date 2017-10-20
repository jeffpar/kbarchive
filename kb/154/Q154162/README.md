---
layout: page
title: "Q154162: Memory Leak in Perfmon.exe Occurs Monitoring WINS Counters"
permalink: /kb/154/Q154162/
---

## Q154162: Memory Leak in Perfmon.exe Occurs Monitoring WINS Counters

{% raw %}

	Article: Q154162
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool kbWinNT400sp4fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After several days of monitoring your WINS server over the network with
	Performance Monitor, your server may stop responding. The only way to reclaim
	the lost memory is to restart your WINS server.
	
	If you monitor your WINS server by running Performance Monitor locally, you may
	experience a memory leak in Perfmon.exe. You can reclaim the lost memory by
	quitting Performance Monitor.
	
	RESOLUTION
	==========
	
	Perform one of the following to work around this problem:
	
	- Do not monitor WINS counters.
	
	- Run Performance Monitor locally rather than across the network. While you
	  experience a memory leak in this scenario, the memory is returned when you
	  exit Performance Monitor.
	
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
	
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbtool kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
