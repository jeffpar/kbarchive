---
layout: page
title: "Q163376: XADM: Invalid Message Embedded in Internet Message Causes NDR"
permalink: kb/163/Q163376/
---

## Q163376: XADM: Invalid Message Embedded in Internet Message Causes NDR

	Article: Q163376
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive a nondelivery report (NDR) message if all of the following
	conditions are true:
	
	- A precomposed message with an invalid SMTP recipient is saved in the inbox.
	
	- This invalid message is embedded in a message with a valid SMTP recipient.
	
	- The valid message is sent through Microsoft Exchange Server 4.0 Internet Mail
	  Connector (IMC).
	
	CAUSE
	=====
	
	During the MIME content conversion, the address of embedded message is
	processed; thus, an NDR is generated.
	
	WORKAROUND
	==========
	
	To work around this problem, check the name of the embedded message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
