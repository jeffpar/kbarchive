---
layout: page
title: "Q267834: &quot;Terminal Service Client Disconnected&quot; Message Connecting to TS"
permalink: /kb/267/Q267834/
---

## Q267834: &quot;Terminal Service Client Disconnected&quot; Message Connecting to TS

{% raw %}

	Article: Q267834
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to log on to a Terminal Server client session, you may receive the
	following error message:
	
	  Terminal Service Client Disconnected
	  The connection to the server has timed out. Try connecting to the terminal
	  server again.
	
	When this issue occurs, you see a computer with a state of "Down" on the Sessions
	tab in the Terminal Server Administration tool on the server.
	
	CAUSE
	=====
	
	This behavior can occur if there is a mapped network drive letter as the first
	entry in the PATH environment variable. For example, this behavior can occur if
	a network drive is mapped as drive X, and the PATH statement is:
	
	  PATH=x:\<sharename>;c:\winnt;...
	
	WORKAROUND
	==========
	
	Change the PATH variable so that the mapped network drive letter is not the
	first entry.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words: services ts
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
