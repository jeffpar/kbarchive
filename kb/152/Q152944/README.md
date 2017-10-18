---
layout: page
title: "Q152944: XFOR: IMC Not Receiving Inbound Mail from UNIX Hosts"
permalink: kb/152/Q152944/
---

## Q152944: XFOR: IMC Not Receiving Inbound Mail from UNIX Hosts

	Article: Q152944
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusagekbbuglist
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Service Pack 2 to an Exchange Server running the Internet Mail
	Connector (IMC), connections from previously working SMTP hosts may fail with
	the following:
	
	  Event ID: 4051
	  Source: MSEXCHANGEIMC
	  Description:
	  A time-out occurred while trying to receive mail from <server> and while
	  waiting for the message body.
	
	The SMTP mail is not received by the Exchange IMC and mail destined for the IMC
	backs up in queues on the foreign mail system.
	
	CAUSE
	=====
	
	The Exchange IMC from Service Pack 2 expects a <CRLF>.<CRLF> to
	delineate the end of mail messages in accordance with RFC821, section 3.1. Prior
	to Service Pack 2 the Exchange IMC would accept a message terminated with
	<LF>.<LF>. This change in implementation of the RFC in Service Pack
	2 affects many existing Exchange implementations.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	Many SMTP mail hosts allow for the configuration of this "message termination
	sequence." Consult the specific SMTP mailer's documentation and configure the
	mailer to use <CRLF>.<CRLF> for this sequence.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbbuglist
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
