---
layout: page
title: "Q160717: Restricting Access to Custom Recipients/Foreign Mail Addresses"
permalink: kb/160/Q160717/
---

## Q160717: Restricting Access to Custom Recipients/Foreign Mail Addresses

	Article: Q160717
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot restrict who can send to an Exchange client custom recipient. For
	example, an Integra pager account accepts SMTP mail which is then transmitted to
	a text pager.
	
	To add an SMTP address to a recipient container you must make a custom recipient.
	There is currently no way to directly set access restrictions as to who can send
	mail to that address.
	
	CAUSE
	=====
	
	This behavior is by design. The receiving system is responsible for limiting
	incoming mail for specific recipients.
	
	WORKAROUND
	==========
	
	To avoid the problem, set up a restriction on who can send to a foreign mail
	address. To do this, create an Exchange Client user (to be used like an alias)
	and restrict who is allowed to send to it. You must then log on to this account
	(using Exchange Client) and set up a rule that automatically forwards the mail
	to the foreign mail address.
	
	NOTE: Forwards, copies, and moves in rules are applied regardless of whether the
	client is logged on to Exchange Server. All other rules are applied when the
	client connects to the server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
