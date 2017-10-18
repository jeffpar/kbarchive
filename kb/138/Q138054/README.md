---
layout: page
title: "Q138054: XFOR: Err Msg: Unable to Deliver User Mail... Full Mailbag"
permalink: kb/138/Q138054/
---

## Q138054: XFOR: Err Msg: Unable to Deliver User Mail... Full Mailbag

	Article: Q138054
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When sending mail from Microsoft Exchange Server version 4.0, to a Microsoft
	Mail for PC Networks user through the Microsoft Mail Connector, an error message
	similar to the following is generated in the Microsoft Windows NT System Log (as
	shown in the Event Viewer).
	
	  A mail delivery problem has been detected on 35NET/35PO1.
	
	  MESSAGE DATA:
	  SOURCE MESSAGE ID: \\MailSrv\mailpo\35po1\MAI\MA8\000252B8.MAI
	  FROM: 35NET/35PO2/Admin
	  DATE: 08/14/95
	  TIME: 17:36
	  SUBJECT: Test Message
	  [017] Unable to deliver user mail due to a full mailbag.
	  Message was not delivered to Administrator (35NET/35PO1/Admin)
	
	MORE INFORMATION
	================
	
	The error message is generated when the Microsoft Mail Connector cannot write
	the message record into the mailbag (.KEY and .MBG files) of the Microsoft Mail
	recipient.
	
	Microsoft Mail mailbags (.KEY and .MBG files) have a built-in limit of 4096
	messages. In other words, if a mailbag contains 4096 read and unread messages,
	no more messages can be added to that mailbag until one or more messages are
	deleted from the mailbag.
	
	When the Microsoft Mail Connector tries to deliver mail to a mailbag that already
	contains 4096 read and unread messages, it generates the above error message in
	the Event log.
	
	RESOLUTION
	==========
	
	If you are using Microsoft Mail client for Windows, logon to the mailbox in
	question and download the messages into the your .MMF file. This copies all the
	messages from the mailbag on the postoffice into your mail message file (.MMF)
	and deletes the messages in the mailbag. Make sure that the option for inbox
	synchronization is turned off.
	
	If you are using the Microsoft Mail DOS client, logon to the mailbox and either
	move the messages into a private or public folder, or delete them from the
	inbox.
	
	If you are using the Microsoft Mail Provider with Microsoft Exchange version 4.0,
	Windows clients, logon to the postoffice. This automatically downloads mail from
	your mailbag into your Microsoft Exchange Personal Information Store (.PST file)
	and deletes the mail from the mailbag on the postoffice.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	
