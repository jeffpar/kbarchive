---
layout: page
title: "Q260741: XFOR: Internet Mail Service Won't Deliver to Others w. 552 Code"
permalink: /kb/260/Q260741/
---

## Q260741: XFOR: Internet Mail Service Won't Deliver to Others w. 552 Code

	Article: Q260741
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 19-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a Simple Mail Transfer Protocol (SMTP) mail host responds to an Exchange
	Server 5.5 Service Pack 3 Internet Mail Service with the following message:
	
	  552 mailbox quota limit exceeded
	
	and the original message contained multiple recipients; the 552 message that the
	SMTP host returned is 'stamped' on the remaining messages in the batch and the
	entire batch of outbound messages is not delivered.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
