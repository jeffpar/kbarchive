---
layout: page
title: "Q246279: XFOR: PAB Addresses Invalid After Migration from MS Mail"
permalink: kb/246/Q246279/
---

## Q246279: XFOR: PAB Addresses Invalid After Migration from MS Mail

	Article: Q246279
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to migrate Microsoft Mail for PC Networks mailboxes to
	Microsoft Exchange Server 5.0 mailboxes, the addresses in any Personal Address
	Book (PAB), including all distribution lists, are invalid. Using them results in
	non-delivery reports.
	
	CAUSE
	=====
	
	Microsoft Mail for PC Networks uses an older addressing format, 10/10/10
	(Network/Postoffice/Mailbox), which is not valid for current Exchange Server
	addressing.
	
	WORKAROUND
	==========
	
	There is no workaround for this issue. You must recreate each PAB and
	distribution list.
	
	MORE INFORMATION
	================
	
	There is no tool that updates your PAB entries as changes are made in the
	Microsoft Exchange Server global address list. Mail bearing a Microsoft Mail for
	PC Networks address goes to the Microsoft Mail Connector, which does not have a
	postoffice configured with that address and therefore returns the mail as
	undeliverable.
	
	When you readdress this undeliverable mail by using the Microsoft Exchange Server
	global address list, it is delivered normally. To prevent mail's being
	undeliverable because of outdated addressing, replace all PAB entries created in
	Microsoft Mail for PC Networks with new ones created in the Exchange Server
	environment.
	
	Additional query words: postoffice
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
