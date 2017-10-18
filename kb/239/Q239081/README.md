---
layout: page
title: "Q239081: XADM: Event 1016 Logged During Mailbox Manager Cleanup"
permalink: kb/239/Q239081/
---

## Q239081: XADM: Event 1016 Logged During Mailbox Manager Cleanup

	Article: Q239081
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When Microsoft Exchange Mailbox Manager performs the cleanup, you may see
	several 1016 events similar to the following in the event log:
	
	  1016
	  NT User ExchService logged on to ExUser1 mailbox, and is not the Primary
	  Windows NT Account on this mailbox.
	
	MORE INFORMATION
	================
	
	This is by design. An event with the ID 1016 is logged when you attempt to
	access another user's mailbox or schedule. Mailbox Manager does not disable this
	security logging.
	
	For additional information about 1016 events, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q173692 XADM: Event 1016 Generated When You Open Mailbox or Schedule of
	  Another User
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
