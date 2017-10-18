---
layout: page
title: "Q129140: SMTP: Gateway Hangs While Processing Message"
permalink: kb/129/Q129140/
---

## Q129140: SMTP: Gateway Hangs While Processing Message

	Article: Q129140
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Gateway to SMTP hangs in the middle of processing a message.
	
	CAUSE
	=====
	
	The Cisco Systems IGS router needs Firmware version 9.0.2 or later for SMTP mail
	to move correctly. The IGS is a model of the Cisco Systems router. If a previous
	version of the firmware for this model is used, the Microsoft Mail Gateway to
	SMTP processes until the message is sent through the gateway to the router and
	then hangs.
	
	RESOLUTION
	==========
	
	To enable mail to flow correctly through the gateway, update the firmware on the
	IGS Cisco Systems router. Once the firmware is updated, mail will be processed
	correctly.
	
	MORE INFORMATION
	================
	
	The SMTPGATE.LOG file will contain a portion that resembles the following:
	
	  :
	  :
	  :
	  [tx] MAIL FROM:<user1@company1.com>
	  [rx] 250 <user1@company1.coml>... Sender ok
	  [tx] RCPT TO:<user2@company2.com>
	  [rx] 250 <user2@company2.com>... Recipient ok
	  [tx] DATA
	  [rx] 354 Enter mail, end with "." on a line by itself
	  [tx] ...message body...
	
	After this, the gateway hangs.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q101461 Microsoft Mail SMTPGATE.EXE Version 3.0.9 Update
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
