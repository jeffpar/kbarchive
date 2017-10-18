---
layout: page
title: "Q146270: XFOR: Read Receipt to UNIX Client"
permalink: kb/146/Q146270/
---

## Q146270: XFOR: Read Receipt to UNIX Client

	Article: Q146270
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a message is sent with Read Receipt enabled from the IMC Microsoft Exchange
	client to a UNIX client, the Read Receipt is returned to the IMC client from the
	Mail Delivery Subsystem (MAILER-DAEMON@Server.Domain.com) with the original
	message as the embedded message. The embedded message does not contain a header
	and the message body is suppressed.
	
	
	The read receipt is returned by the Mail Delivery Subsystem. There is an embedded
	message (the original message sent). Open that mail and notice that there is no
	header for the original message and the "Message body is suppressed".
	
	At the end of the Read Receipt message, part of the message content states
	"Message header follows", but nothing follows it.
	
	MORE INFORMATION
	================
	
	The IMC is doing no special processing on these messages. It is converting and
	passing on whatever the remote system has chosen to send. This is part of the
	Mailer-Deamon configuration option for handling NDRs and DRs.
	
	Additional query words: return SMTP
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
