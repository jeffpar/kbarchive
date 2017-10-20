---
layout: page
title: "Q241411: &quot;Session Name Is Already in Use&quot; with Multiple Concurrent Logons"
permalink: /kb/241/Q241411/
---

## Q241411: &quot;Session Name Is Already in Use&quot; with Multiple Concurrent Logons

{% raw %}

	Article: Q241411
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on, the following error message may occur on the client
	and server:
	
	  The system can not log you on (C0000XXX). Please try again or consult you
	  system administrator.
	
	You may also receive the following additional error message on the client:
	
	  Because of a network error, the session will be disconnected. Please try to
	  reconnect.
	
	CAUSE
	=====
	
	This problem occurs only if you are attempting to establish a connection by
	using a batch file. This problem does not occur if connections are created
	individually without using a batch file
	
	STATUS
	======
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0,
	Terminal Server Edition. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
