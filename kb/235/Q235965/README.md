---
layout: page
title: "Q235965: XADM: Message Forwarded By CHT Client Not Displayed Properly"
permalink: /kb/235/Q235965/
---

## Q235965: XADM: Message Forwarded By CHT Client Not Displayed Properly

	Article: Q235965
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a rule is applied that forwards a message from an English client to a Chinese
	Traditional (CHT) client, and then another rule is applied that forwards the
	message from the Chinese Traditional client to itself (or to another Chinese
	Traditional client on the same server), the second forwarded message may not be
	displayed properly. This message contains a copy of the first forwarded message,
	which contains a copy of the original message. In the copy of the first
	forwarded message, the From, Sent, To, and Subject fields and the "Auto
	forwarded by a Rule" text are all displayed as question marks (?). For example,
	the body of the second forwarded message may appear similar to the following:
	
	  ----------
	  ???:  <recipient1>
	  ????: <time2>
	  ???:  <recipient2>
	  ??:   FW: <subject>
	  ???????
	
	  ----------
	  From: <sender>
	  Sent: <time1>
	  To:   <recipient1>
	  Subject: <subject>
	  Auto forwarded by a Rule
	
	Note that this problem only occurs with plain text messages or with Rich Text
	Format (RTF) messages that do not contain any text in the message body. RTF
	messages with no message body are sent as plain text. The problem does not occur
	with Hypertext Markup Language (HTML) messages.
	
	This problem is known to occur with Outlook 98 and Outlook 2000, but it may also
	occur with other e-mail clients.
	
	CAUSE
	=====
	
	When you send a plain text message, Exchange Server converts the message to RTF
	and adds the \fromplain tag to the RTF header. When this tag exists, Outlook 98
	and Outlook 2000 convert the message back to plain text when it is received.
	
	When the Chinese Traditional client forwards the message, it adds Chinese
	Traditional characters to the body of the message. However, when Outlook 98 and
	Outlook 2000 convert the message to plain text, they use the message's original
	character set. In this case, the original character set does not support the
	Chinese Traditional characters that are added when the message is forwarded.
	Therefore, the characters are not converted properly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Store.exe | 5.5.2637.0 | 
	+------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	
	Additional query words: autoforward
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:98; winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
