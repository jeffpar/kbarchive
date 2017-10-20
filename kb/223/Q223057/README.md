---
layout: page
title: "Q223057: XCON: PROFS Connector Fails to Remove .att Files from Objects"
permalink: /kb/223/Q223057/
---

## Q223057: XCON: PROFS Connector Fails to Remove .att Files from Objects

{% raw %}

	Article: Q223057
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After a message is delivered to the Exchange Server recipient from the Microsoft
	PROFS Connector, the .att file is not removed from the
	Exchsrvr\Connect\Exchconn\Q\Objects folder.
	
	CAUSE
	=====
	
	The dequeue function call does not process multiple .att files.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Microsoft PROFS Connector
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Lsdiamex.exe | 5.5.2579.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
