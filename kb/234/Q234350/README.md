---
layout: page
title: "Q234350: XFOR: Cannot Send Message with Brackets in Subject to cc:Mail"
permalink: /kb/234/Q234350/
---

## Q234350: XFOR: Cannot Send Message with Brackets in Subject to cc:Mail

	Article: Q234350
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message with square brackets ([ and ]) in the Subject field
	through the Microsoft Exchange Connector for Lotus cc:Mail, the message may not
	be delivered. The message remains in the outbound message queue, which prevents
	any other messages from being sent through the Connector for cc:Mail.
	
	This problem only occurs when the Subject field contains both brackets; the
	problem does not occur if the Subject field contains one bracket, but not the
	other.
	
	CAUSE
	=====
	
	This problem occurs when Import.exe version 8.3 is running on the Exchange
	Server computer. Import.exe version 8.3 does not support brackets in the Subject
	field.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Connector for cc:Mail
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Ccmc.exe  | 5.5.2611.0 | 
	+------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: ccmc stuck stop
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
