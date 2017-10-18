---
layout: page
title: "Q245458: XCON: Notes Delegate Cannot See Meetings from Outlook User"
permalink: kb/245/Q245458/
---

## Q245458: XCON: Notes Delegate Cannot See Meetings from Outlook User

	Article: Q245458
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Microsoft Outlook user sends a meeting request to a Lotus Notes user. The
	Notes user accepts the meeting. A delegate then opens that user's Calendar, and
	is unable to see that the meeting is scheduled.
	
	Similarly, a Notes invitation with sensitivity set to Mark Private, arrives in
	the Outlook mailbox with sensitivity set to Normal. The expected result is that
	the sensitivity should be set by the Exchange Notes Connector as Private when
	the invitation is delivered to the Outlook user's Inbox.
	
	CAUSE
	=====
	
	When the Outlook user sends a meeting with sensitivity set to Private, the
	document is created with the OrgConfidential attribute set to 0. The Exchange
	Notes Connector should honor the organizer's intent by specifying
	OrgConfidential=1 when the sensitivity is set to Private, but does not.
	
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
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
