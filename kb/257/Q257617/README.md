---
layout: page
title: "Q257617: Terminal Server Service Stops Responding if Other Service Hangs"
permalink: /kb/257/Q257617/
---

## Q257617: Terminal Server Service Stops Responding if Other Service Hangs

{% raw %}

	Article: Q257617
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you start your Windows NT Server, Terminal Server Edition-based computer,
	the Terminal Server service may stop responding (hang) and not permit new
	connections.
	
	CAUSE
	=====
	
	This problem can occur if the License Logging service is not responding. When
	you make a connection to the Terminal Server service, it provides the client
	license information to the License Logging service. If the License Logging
	service is not responding, new connections time out while the Terminal Server
	service waits for a reply from the License Logging service.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	version 4.0, Terminal Server Edition. For additional information, click the
	following article number to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	This problem was first corrected in Windows NT Server version 4.0, Terminal
	Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
