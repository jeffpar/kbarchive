---
layout: page
title: "Q259399: XFOR: Cannot Send E-Mail from Notes to Exchange Server"
permalink: /kb/259/Q259399/
---

## Q259399: XFOR: Cannot Send E-Mail from Notes to Exchange Server

	Article: Q259399
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a Czech environment, if you send an e-mail message from Lotus Notes to
	Exchange Server to a user who has a display name that contains American National
	Standards Institute (ANSI) 1250 code page characters, the message may not be
	delivered.
	
	The issue was discovered in a Czech environment, but a system that uses any
	language that uses characters from the ANSI 1250 code page (for example, central
	European or eastern European countries' languages) may encounter the same
	issue.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
