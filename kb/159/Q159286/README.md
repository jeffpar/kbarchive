---
layout: page
title: "Q159286: XCON: Messages Sent w/AppleSingle File Attachments Get Stuck"
permalink: kb/159/Q159286/
---

## Q159286: XCON: Messages Sent w/AppleSingle File Attachments Get Stuck

	Article: Q159286
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There are two symptoms caused by the same problem; the symptom you see depends
	on how the message is sent from the Microsoft Exchange Macintosh client.
	
	Messages sent with an AppleSingle file attachment and no other text get stuck in
	the IMC Outbound Delivery Queue. The sender does not receive a non- delivery
	receipt (NDR).
	
	Messages sent with an AppleSingle file attachment without a resource fork, such
	as a text file created with the Teach Text application, generate the following
	error message:
	
	  Event ID: 4081
	  Source: MSExchangeIMC
	  Type: Error
	  Category: SMTP Interface
	  Description: Message could not be processed
	
	CAUSE
	=====
	
	The Internet Mail Connector (IMC) omits one carriage return/line feed sequence
	(CRLF).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
