---
layout: page
title: "Q260167: XCON: MTA Stops Communicating with Other MTAs in the Same Site"
permalink: /kb/260/Q260167/
---

## Q260167: XCON: MTA Stops Communicating with Other MTAs in the Same Site

	Article: Q260167
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
	
	The Exchange Server message transfer agent (MTA) may stop communicating with
	other MTAs on servers in the same site.
	
	CAUSE
	=====
	
	This issue can occur if the MTA experiences a large number of connection
	failures over an extended period of time and loses connection resources that are
	necessary to connect to other MTAs in the site.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, restart the MTA to reset any connection resources and
	enable the MTA to communicate with other MTAs in the same site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 5.5.
	This problem was first corrected in Exchange Server 5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	This issue does not cause any loss of communication between servers in different
	sites by using any connector (Site, X.400, SMTP, and so on).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
