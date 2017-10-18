---
layout: page
title: "Q164662: XCON: Message Conversion Fails in MIME Uudecoder"
permalink: kb/164/Q164662/
---

## Q164662: XCON: Message Conversion Fails in MIME Uudecoder

	Article: Q164662
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When users from Quikcomm send a message with one or more attachments to
	Microsoft Exchange Server 5.0 users by way of the Microsoft Exchange Internet
	Mail Service, the message comes through as an attachment.
	
	When the message enters the Microsoft Exchange environment, the following error
	message appears:
	
	  The Microsoft Exchange Server received an Internet message that could
	  not be processed.
	  To view the original message content, open the attached message.
	  <Message.txt>
	
	Message.txt contains the actual message and the attachment as uuencoded.
	
	CAUSE
	=====
	
	The Microsoft Exchange Server 5.0 MIME uudecoder is not working to the
	specifications. Specifically, it is not skipping unrecognizable characters after
	the uuencode end line is found.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	
