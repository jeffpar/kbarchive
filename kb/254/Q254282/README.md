---
layout: page
title: "Q254282: XIMS: Memory Leak in MMC and ChatCommand Object of Chat Server"
permalink: /kb/254/Q254282/
---

## Q254282: XIMS: Memory Leak in MMC and ChatCommand Object of Chat Server

{% raw %}

	Article: Q254282
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This article applies to Microsoft Exchange Chat Server. When you use the
	Microsoft Management Console (MMC) snap-in and the chat command, you may
	experience a memory leak. This is evident when the amount of memory that is
	allocated to Chat Server increases over time, but never decreases when other
	processes need that memory. This can occur when the ChatCommand object is
	created in Chat Server.
	
	CAUSE
	=====
	
	When the ChatCommand object is created, allocated memory is not properly freed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
