---
layout: page
title: "Q158706: Netmon Performance Counters Support a Maximum of Eight Adapters"
permalink: /kb/158/Q158706/
---

## Q158706: Netmon Performance Counters Support a Maximum of Eight Adapters

{% raw %}

	Article: Q158706
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbWinNT400sp4fix
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have a server with more than eight network interfaces installed and you
	use the Network Segment object in Performance Monitor to monitor all your
	network interfaces, you are only able to monitor the first eight bound
	interfaces.
	
	CAUSE
	=====
	
	There is a hard-coded limit of eight supported Network Segment interfaces in the
	Netmon performance counter DLL.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: This hotfix supports monitoring a maximum of 16 interfaces on one computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words: 4.00 bh perfmon
	
	======================================================================
	Keywords          : kbenv kbtool kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
