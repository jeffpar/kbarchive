---
layout: page
title: "Q244129: XFOR: Notes Connector Rejects Incoming Msgs w/Apostrophe in SMTP"
permalink: /kb/244/Q244129/
---

## Q244129: XFOR: Notes Connector Rejects Incoming Msgs w/Apostrophe in SMTP

	Article: Q244129
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Notes Connector cannot deliver mail when a Lotus Notes
	user either sends mail that contains an SMTP address with an apostrophe (') in
	the user name or replies to mail that contains an SMTP address with an
	apostrophe in the user name. For example, the user name, user.o'hara, contains
	an apostrophe. The following events are logged in the application event log:
	
	  31500 : MSExchangeNotes : Information : notes to exchange
	  Sender: user/cert@domain, size xxxx, Message id: C=US, a= , p=microsoft,
	  l:messageid date time, notes:domain (servername/cert).
	  (mexe)
	  31501 : MSExchangeNotes: Information : transport to exchange
	  Report generated : sender: system administrator. message id..........etc
	  (mexe)
	  31040 : MSExchangeNotes : Warning : transport to exchange
	  No valid message recipients in message
	  (mexin)
	  31092 : MSExchangeNotes : Information : transport to exchange
	  Message contains empty recipient list, purging item automatically.
	  (mexin)
	
	CAUSE
	=====
	
	The apostrophe character (') is not allowed when checking the user name.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
