---
layout: page
title: "Q271614: XCON: GroupWise Free and Busy Inf. Doesn't Reflect All Appts"
permalink: /kb/271/Q271614/
---

## Q271614: XCON: GroupWise Free and Busy Inf. Doesn't Reflect All Appts

	Article: Q271614
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
	
	When you use the Calendar Connector for Novell GroupWise from an Exchange Server
	computer to obtain the free and busy information of a GroupWise user, some
	appointments in the near future may not be marked as busy.
	
	CAUSE
	=====
	
	This issue can occur because the Calendar Connector uses a hard-coded time zone
	of +0 for all requests. If a user on the west coast of the United States
	requests free and busy information, the free and busy window that the user
	requested starts at the current time minus eight hours (because -8 is the
	current time zone). In effect, the user receives eight hours of extra free and
	busy information before the user needs that information.
	
	However, if a user on the west coast of Australia requests the same information,
	the free and busy window that the user requested is eight hours in the future
	(because +8 is the current time zone). The next eight hours is displayed as
	free, even though appointments may be scheduled during that time.
	
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
	
