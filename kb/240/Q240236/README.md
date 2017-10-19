---
layout: page
title: "Q240236: XFOR: Ctkeepdays Only Works with a Value of 1 or 7"
permalink: /kb/240/Q240236/
---

## Q240236: XFOR: Ctkeepdays Only Works with a Value of 1 or 7

	Article: Q240236
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The CTKEEPDAYS parameter that can be specified in the Exchconn.ini file may not
	correctly change the number of days you want message information retained in the
	correlation table (CT). If you specify a value ranging from 1-6, CTKEEPDAYS
	retains 1 day's worth of information. If you specify a value of 7, CTKEEPDAYS
	retains 7 days' worth of information.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
