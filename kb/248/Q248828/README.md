---
layout: page
title: "Q248828: XADM: Dirsync Requestor Updates Not Sent After Upgrade to SP3"
permalink: /kb/248/Q248828/
---

## Q248828: XADM: Dirsync Requestor Updates Not Sent After Upgrade to SP3

{% raw %}

	Article: Q248828
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade Exchange Server to Service Pack 3 (SP3), the Exchange
	directory synchronization (dirsync) requestor does not send out updates to the
	dirsync server.
	
	CAUSE
	=====
	
	Service Pack 3 adds a new directory schema object to the Directory
	Synchronization Agent (DXA) that allows additional containers to be selected.
	These new containers are then checked for updates to be sent to the dirsync
	server. However, the Microsoft Exchange Server Administrator program has not
	been properly modified to handle this new attribute, so the containers are
	incorrectly added to the wrong attribute. Therefore, the DXA is unable to obtain
	a list of containers to check for updates.
	
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
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
