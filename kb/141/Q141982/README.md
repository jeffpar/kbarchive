---
layout: page
title: "Q141982: XCLN: REPLY ALL: Inserts Sender's Address"
permalink: /kb/141/Q141982/
---

## Q141982: XCLN: REPLY ALL: Inserts Sender's Address

	Article: Q141982
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Reply All to a message stored in your Sent Folder on a Microsoft
	Exchange, version 4.0, client, the sender's name is included in the Address
	list.
	
	CAUSE
	=====
	
	This is by product design.
	
	MORE INFORMATION
	================
	
	Messages that you receive from other people have your identity stamped on them
	by the transport. On a reply or reply all, the Exchange client always puts the
	sender's name in the address list, then uses your identity as found in the
	original message to strip your name from the address list. Messages in your Sent
	Items folder do not have your identity because they are dropped in the folder by
	the spooler and do not pass through the transport. Therefore, the sender's name
	(yours) is not removed on a reply-all message.
	
	Steps to Reproduce
	------------------
	
	1. Compose a message to someone other than yourself and send it.
	
	2. Go into the Sent Mail folder and Reply All to the message just sent.
	
	The sent message will contain the address of the sender.
	
	Additional query words: reply all compose
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
