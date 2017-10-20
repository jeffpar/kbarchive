---
layout: page
title: "Q196745: Very Slow Paged Pool Leak in Windows NT 4.0"
permalink: /kb/196/Q196745/
---

## Q196745: Very Slow Paged Pool Leak in Windows NT 4.0

{% raw %}

	Article: Q196745
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a Windows NT server has been running at least a week, the following event
	may show up in the System event log:
	
	  EVENT: 2020 SOURCE:SRV
	  TEXT: The server was unable to allocate from the system paged pool because the
	  pool was empty.
	
	Or, by other troubleshooting methods or by using Performance Monitor, you observe
	that the paged pool memory counter is higher than it has been under previous
	observations. Observing for several days, you do not observe any real changes
	but, by observing the system for weeks, the trend is always up.
	
	This leak occurs on servers with many users more than 100 and many groups greater
	than 10 for each user. It is not related to the relative load on the server.
	
	CAUSE
	=====
	
	Under certain conditions, the NetSessionEnum and NetUserGetLocalGroups NET APIs
	leak memory in both the calling application private bytes and paged pool memory.
	This leak is very difficult to track down as it is very slow to show up.
	
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
	NT 4.0 Service Pack 4 and Windows NT Server 4.0, Terminal Server Edition,
	Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
