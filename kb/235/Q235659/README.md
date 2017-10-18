---
layout: page
title: "Q235659: XFOR:Lsmexnts Access Violation Sending Recurring Meeting Request"
permalink: kb/235/Q235659/
---

## Q235659: XFOR:Lsmexnts Access Violation Sending Recurring Meeting Request

	Article: Q235659
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
	
	If a recurring meeting request is sent by an Exchange Server user, and a Lotus
	Notes user is invited to the meeting, you may get an access violation in the
	Lsmexnts process. The access violation will only occur if the client settings of
	the Exchange Server user are defined so that the client does not adjust for
	daylight savings time. In Outlook, this is equivalent to clearing the "Adjust
	for daylight savings time" setting, or being in a time zone that does not have
	daylight savings time, such as Harare, Zimbabwe (GMT+2:00).
	
	CAUSE
	=====
	
	This problem was caused by a processing error in a time zone conversion utility
	function.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Exchange Notes Connector
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Lsmexhc.dll | 5.5.2641.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 2. This problem was first corrected in Exchange Server
	5.5 Service Pack 3.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
