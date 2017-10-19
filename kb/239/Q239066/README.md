---
layout: page
title: "Q239066: XADM: Exchange Mailbox Manager Error Message: Setup Has Failed"
permalink: /kb/239/Q239066/
---

## Q239066: XADM: Exchange Mailbox Manager Error Message: Setup Has Failed

	Article: Q239066
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Microsoft Exchange Mailbox Manager Setup and click Install or
	Remove, you may receive the following error message:
	
	  Setup has failed. You can run the setup program at a later time to install
	  the application again.
	
	CAUSE
	=====
	
	The system attendant service has been stopped.
	
	RESOLUTION
	==========
	
	Start the Exchange Server services before running Mailbox Manager Setup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.5
	Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
