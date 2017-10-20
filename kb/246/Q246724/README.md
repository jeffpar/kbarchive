---
layout: page
title: "Q246724: XFOR: Notes Conversion Fails Processing User-defined Fields"
permalink: /kb/246/Q246724/
---

## Q246724: XFOR: Notes Conversion Fails Processing User-defined Fields

{% raw %}

	Article: Q246724
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Notes Conversion Assistant fails when processing records that contain a very
	large number of user-defined fields (more than 350 or so). Also, the replication
	process may stop and prevent other messages from being saved.
	
	CAUSE
	=====
	
	The Notes Conversion Assistant does not process records with a large number of
	user-defined fields gracefully. When the Notes Conversion Assistant encounters
	such a record, it stops working, generates an error, and does not continue to
	process any further records.
	
	
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
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Component         : MegaMax
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
