---
layout: page
title: "Q237993: XFOR:Users Can't Reply to SMTP Messages in PST After Migration"
permalink: /kb/237/Q237993/
---

## Q237993: XFOR:Users Can't Reply to SMTP Messages in PST After Migration

{% raw %}

	Article: Q237993
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you migrate users from Lotus Notes directly into personal folder files
	(PSTs), users are unable to reply to messages from SMTP addresses. The messages
	in the PST can be opened correctly, but the recipients on the message To line
	are not resolved and no address is associated with the display name. However,
	when you migrate users directly to an Exchange Server mailbox, the messages
	appear correctly to the user, and they can be replied to correctly.
	
	CAUSE
	=====
	
	The Migration wizard does not set the PR_SENDER_ENTRYID. This is by design, as
	the intent is to have the client resolve the address to the latest one in the
	global address list after the migration is finished. This issue only appears
	when you migrate users directly to PSTs. Migrating the message to the Exchange
	Server information store creates the PR_SENDER_ENTRYID of a one-off address
	type. The Emsmdb32.dll does this, as it is the responsibility of the transport
	to create this property before submitting the message. The Migration wizard now
	sets the PR_SENDER_ENTRYID for the sender when migrating messages directly to
	PSTs.
	
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
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
