---
layout: page
title: "Q239064: XADM: Cannot Communicate with Exchange Mailbox Manager Service"
permalink: /kb/239/Q239064/
---

## Q239064: XADM: Cannot Communicate with Exchange Mailbox Manager Service

	Article: Q239064
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you configure the Microsoft Exchange Mailbox Manager to perform cleanup on
	a remote server in the site, and click Clean Now, you may see the following
	error message:
	
	  Unable to communicate with the Microsoft Exchange Server Mailbox Manager
	  service. Cannot determine success of cleanup request.
	
	CAUSE
	=====
	
	The Clean Now command cannot start the Microsoft Exchange Mailbox Manager
	service on a remote computer unless the computer is in the same Windows NT
	domain.
	
	WORKAROUND
	==========
	
	Start the Microsoft Exchange Mailbox Manager on the remote computer before
	issuing the Clean Now command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
