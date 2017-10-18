---
layout: page
title: "Q255019: XCON: MIXER Maps SMTP Addr. Even w. Global Address List Entry"
permalink: kb/255/Q255019/
---

## Q255019: XCON: MIXER Maps SMTP Addr. Even w. Global Address List Entry

	Article: Q255019
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
	
	If a message is received from SMTP by means of an Exchange Server computer that
	is configured to perform MIME Internet X.400 Enhanced Relay (MIXER) address
	mapping, the address may be encapsulated in the X.400 address of the MIXER
	server, even if the recipient's SMTP address appears in the global address list.
	The recipient's address is displayed as an SMTP address instead of as the
	display name that is listed in the global address list entry (mailbox or custom
	recipient). If you double-click this name, the Address Type is displayed as
	X.400 and the full Address is the X.400 address of the MIXER server, with a
	Request for Comments (RFC) 822 domain-defined attribute (DDA) that contains the
	value of the SMTP Address. If there is more than one such recipient of this
	message, the reply to all option does not work.
	
	For example, if an SMTP message is addressed to exchange.user@microsoft.com, the
	message arrives over a MIXER server that has an X.400 address of "C=us; A= ;
	P=company; O=SMTP-GW," the recipient is known to MIXER and the global address
	list is replicated to this server; the message is not addressed to the SMTP
	address of the mailbox. The address is translated to the following:
	
	  C=us; A= ; P=company; O=SMTP-GW; DDA:RFC-822=exchange.user@microsoft.com
	
	CAUSE
	=====
	
	This issue can occur because the message transfer agent (MTA) only resolves
	incoming addresses to route the message. In this case, the P1 (envelope) address
	is created from the global address list entry so the message can be delivered
	correctly, but the P2 (content) address, which is shown to users, is not
	resolved from the global address list.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue, configure the Internet Mail Service to resolve the P2
	address. For additional information, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q242301 XCLN: Messages Received from Internet Display SMTP Address on the To
	  and Cc Lines
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words: gal
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
