---
layout: page
title: "Q238756: XFOR: Migration Fails w/Attached Appt. in GroupWise 5.x Msgs."
permalink: /kb/238/Q238756/
---

## Q238756: XFOR: Migration Fails w/Attached Appt. in GroupWise 5.x Msgs.

{% raw %}

	Article: Q238756
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
	
	The Migration wizard generates a Dr. Watson while migrating users' messages from
	a Novell GroupWise 5.x post office.
	
	CAUSE
	=====
	
	A message being migrated has an embedded attachment that is an accepted
	appointment. This appointment is being forwarded to another user and the message
	is saved in the Sent Items folder.
	
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
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
