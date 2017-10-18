---
layout: page
title: "Q183057: XADM: Private Information Store Has High Disk Size Item Numbers"
permalink: kb/183/Q183057/
---

## Q183057: XADM: Private Information Store Has High Disk Size Item Numbers

	Article: Q183057
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 13-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click an Exchange Server, version 5.5, in the left pane of the
	Microsoft Exchange Administrator program, get Properties for the private
	information store, and click the Mailbox Resources tab, you may see
	exceptionally high disk space size occupied by unfamiliar mailbox names. For
	example, a mailbox called Admin or Internet Mail Service may occupy a disk space
	of 40,967 KB with 520 items. When you check the Internet Mail Service queues,
	you find them empty or with very few items.
	
	CAUSE
	=====
	
	The Internet Mail Service uses MAPI in much the same way as do user clients, for
	delivering and receiving messages to and from the information store. Exchange
	creates seven mailboxes when it is started; one of them is for the Internet Mail
	Service. These mailboxes are not valid users' mailboxes, and you cannot create a
	profile or log on as one of those mailboxes. These mailboxes are for regular
	message transactions.
	
	Exchange Server version 5.5 has optimized the way the information store works
	with connectors and gateways by using these mailboxes. That the Exchange
	Administrator program, however, does not "maintain" current counters for such
	mailboxes is the expected behavior of the this function. When the connector's
	queues are empty, the messages are not using additional disk space; we only
	commit the transactions to the local Information Store that have originated from
	or are destined for our local store.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	After you apply the fix, the information store attempts to determine whether
	each mailbox listed on the Mailbox Resources tab is a connector mailbox. If the
	information store is able to determine that a mailbox is a connector mailbox, it
	lists a 0 (zero) in the Total K and Total No. Items columns for that mailbox.
	
	Connector mailboxes are mailboxes used by connectors to send and receive
	messages. The following Exchange Server 5.5 connectors use this type of mailbox
	to send and receive messages:
	
	- Connector for Lotus cc:Mail
	
	- Internet Mail Service
	
	- Notes Connector, SNADS Connector, and PROFS Connector
	
	Some other Exchange Server connectors send and receive messages by communicating
	directly with the message transfer agent (MTA). These connectors include the
	X.400 Connector and the Microsoft Mail Connector.
	
	For additional information about a similar problem in which the Mailbox Resources
	tab reports information that appears inaccurate, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q152458 XADM: Mailbox Resources Reporting Usage Not Seen by Client
	
	On rare occasions, disk space counters for regular users, other than these seven
	mailboxes, may also become inaccurate. This would indicate a problem with the
	Mailbox or with the Information Store; ISInteg has been known to correct many of
	these issues.
	
	Additional query words: ims is imc/ims imc
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
