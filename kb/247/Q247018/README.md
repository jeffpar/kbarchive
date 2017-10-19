---
layout: page
title: "Q247018: XFOR: Using DBCS with the Exchange Connector for Lotus cc:Mail"
permalink: /kb/247/Q247018/
---

## Q247018: XFOR: Using DBCS with the Exchange Connector for Lotus cc:Mail

	Article: Q247018
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send a message from an Exchange Server user to a Lotus cc:Mail user
	through the Microsoft Exchange Connector for Lotus cc:Mail, when the messages
	are received they may be unintelligible, or they may include corrupted
	characters. If you inspect the sent message, you find that it includes
	double-byte character set (DBCS) characters.
	
	CAUSE
	=====
	
	You must define the language of the recipient cc:Mail post office on Exchange
	Server and apply the particular language code page on the connector server and
	on any additional servers that handle the DBCS messages. The code pages are
	required for the messages to arrive at the cc:Mail destination mailbox in the
	proper format.
	
	RESOLUTION
	==========
	
	To change the post office language:
	
	1. Start the Exchange Server Administrator Program, click the Configuration
	  container, and then click Connections.
	
	2. Double-click cc:Mail Connector.
	
	3. Click the Post Office tab, and make sure that the value of the Post Office
	  Language list reflects the language of the cc:Mail post office that you
	  connect to.
	
	MORE INFORMATION
	================
	
	English (US ASCII) characters still translate properly if a DBCS language is
	defined in the post office property page.
	
	Only one DBCS language post office can be selected for each Exchange Connector
	for Lotus cc:Mail. If you need more than one DBCS post office language, you must
	create a second Exchange Connector for Lotus cc:Mail and configure it without a
	second language.
	
	Additional query words: dbcs doube byte ccmc
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
