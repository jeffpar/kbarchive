---
layout: page
title: "Q189493: RTF Translation to Notes Servers May Fail"
permalink: kb/189/Q189493/
---

## Q189493: RTF Translation to Notes Servers May Fail

	Article: Q189493
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Word as the e-mail editor and send mail to a Lotus Notes
	server connected via the Exchange Notes Connector, it is possible that the
	message will be unreadable to the Notes recipient. Sending the same mail to the
	same user is fine if sent from an Exchange or Outlook client.
	
	CAUSE
	=====
	
	The Exchange Notes Connector requires that a Notes client (version 4.5 or later)
	be installed on the same server on which the Exchange Notes Connector is
	installed. The reason is that the Notes client's files are used by the connector
	to perform translations and other tasks involving communicating with the Notes
	server. The Exchange Notes Connector itself does not translate a message; the
	Notes client performs this translation. , Also, the Wordmail translation files
	are not able to perform the appropriate translation into Notes' RTF format.
	
	WORKAROUND
	==========
	
	Do not use Microsoft Word as the e-mail editor when you send messages to Notes
	users via the Notes Connector.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
