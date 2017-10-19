---
layout: page
title: "Q222833: XADM: Public Information Store Replication Msg. Size Limit"
permalink: /kb/222/Q222833/
---

## Q222833: XADM: Public Information Store Replication Msg. Size Limit

	Article: Q222833
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv kbExchange kbExchange500 kbExchange550kbfaq
	Last Modified: 29-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During replication, Microsoft Exchange Server public folders communicate changes
	between replicas by sending mail messages.
	
	The Advanced page of the Properties on the server's public information store
	allows you to set a replication message size limit. This limit specifies that
	individual replication messages smaller than the specified size should be
	"batched" in to a single message up to the specified size.
	
	MORE INFORMATION
	================
	
	For example, using the default limit of 300 KB, up to six replication messages
	of 50 KB would be batched before being sent on to other replicas. But a single
	message of 1 MB would go straight through because it exceeds the specified
	limit.
	
	Note that while system messages such as replication messages are unaffected by
	message size limits imposed upon the Message Transfer Agent (MTA) or X.400
	Connectors, any limits set on external connectors such as the Internet Mail
	Service do apply to all messages including replication messages, and can disrupt
	replication.
	
	Additional query words: Replication Size Limit Split Batch exfaq
	
	======================================================================
	Keywords          : kbenv kbExchange kbExchange500 kbExchange550 kbfaq
	Component         : Admin Directory IMC IMS MTA
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
