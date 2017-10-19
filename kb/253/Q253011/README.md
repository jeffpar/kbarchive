---
layout: page
title: "Q253011: XFOR: Exchange Notes Connector Doesn't Use StartDate Property"
permalink: /kb/253/Q253011/
---

## Q253011: XFOR: Exchange Notes Connector Doesn't Use StartDate Property

	Article: Q253011
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Exchange Server user sends a meeting request to Lotus Notes
	user, the date line is missing after the Lotus Notes user accepts the meeting
	request.
	
	CAUSE
	=====
	
	The Microsoft Exchange Connector for Lotus Notes uses the StartDateTime property
	to hold the date and time information. Lotus Notes Server Release 4.6 and later
	use the StartDate property to add an entry to the Notes Calendar folder.
	
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
	
	
	Additional query words: startdate
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
