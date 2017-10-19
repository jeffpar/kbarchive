---
layout: page
title: "Q184994: XFOR: How to Send SMTP Mail to cc:Mail's SMTP Gateway"
permalink: /kb/184/Q184994/
---

## Q184994: XFOR: How to Send SMTP Mail to cc:Mail's SMTP Gateway

	Article: Q184994
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article addresses sending SMTP messages from Exchange 5.0 to cc:Mail's SMTP
	gateway through the Microsoft Exchange Connector for Lotus cc:Mail (CCMC).
	
	MORE INFORMATION
	================
	
	To send messages from Exchange to the Internet through CCMC, perform the
	following steps:
	
	1. Define Internet as a postoffice in the connected postoffice's directory.
	
	2. Compose a message in the Exchange client, and in the TO: field type the
	  following address:
	
	     [ccmail:user@domain at internet]
	
	  Note the space before and after the word 'at'.
	
	This format can also be used to create Exchange SMTP custom recipients.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
