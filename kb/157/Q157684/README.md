---
layout: page
title: "Q157684: XFOR: IMC Might Lose Inbound and Outbound Messages"
permalink: kb/157/Q157684/
---

## Q157684: XFOR: IMC Might Lose Inbound and Outbound Messages

	Article: Q157684
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Internet Mail Connector (IMC) might lose mail under
	specific conditions. No events or error messages will be reported if the
	conditions that cause the IMC to lose mail arise. The only symptom of this
	problem is the failure to receive a mail message without the originator ever
	receiving a Non-Delivery Report (NDR).
	
	MORE INFORMATION
	================
	
	There are two possible conditions that can cause the IMC to lose mail. When the
	IMC is receiving inbound messages and has successfully begun creating a message,
	the IMC will make a call to OpenStreamOnFile() for the incoming message. If the
	call to OpenStreamOnFile() fails, the IMC will fail to create the message and
	will delete the inbound message without logging any errors.
	
	The IMC can also lose messages when processing outbound messages. When attempting
	to send a message outbound, the IMC will attempt to open the message residing in
	the store. If the IMC is unable to open the message, the IMC will delete the
	message from the store. No notification of this problem will occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  " SERVPACK" (without the quotation marks)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
