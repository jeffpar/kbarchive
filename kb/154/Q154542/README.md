---
layout: page
title: "Q154542: XFOR: IMC Delivery Restrictions Only Work for Outbound Mail"
permalink: kb/154/Q154542/
---

## Q154542: XFOR: IMC Delivery Restrictions Only Work for Outbound Mail

	Article: Q154542
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail from foreign senders is accepted by the Internet Mail Connector (IMC),
	despite having delivery restrictions configured to only accept messages from
	senders in the Exchange Server directory.
	
	CAUSE
	=====
	
	The IMC delivery restrictions property page is misleading in that it appears as
	if restrictions can be placed on inbound messages. This is not the case.
	Restrictions can only be placed on outbound messages. The IMC can be configured
	to accept outbound messages from or reject outbound messages from any sender in
	the Exchange directory.
	
	This is by design in Exchange 4.0 and is described in the online help.
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
