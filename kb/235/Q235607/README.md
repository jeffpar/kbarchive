---
layout: page
title: "Q235607: XADM: HTML in Subject Field Is Not Converted Properly"
permalink: kb/235/Q235607/
---

## Q235607: XADM: HTML in Subject Field Is Not Converted Properly

	Article: Q235607
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
	
	If you send a Hypertext Markup Language (HTML) message that contains special
	HTML characters in the Subject field, and then a rule is applied that forwards
	the message, the Subject field in the copy of the original message that is
	included in the forwarded message may not be displayed properly. The HTML
	characters may be displayed as HTML, instead of being displayed as text. Note
	that this problem occurs if the message is sent using the Simple Mail Transfer
	Protocol (SMTP) or sent using the Messaging Application Programming Interface
	(MAPI) with the HTML encapsulated as Rich Text Format (RTF).
	
	For example, if you send an HTML message that contains "&lt" in the Subject
	field, the Subject field in the copy of the original message contains the less
	than character (<) instead of "&lt".
	
	CAUSE
	=====
	
	This problem occurs when the forwarded message contains the \fromhtml1 tag in
	the RTF header. When this tag exists, Exchange Server assumes that all HTML
	entities have already been encapsulated as RTF. Therefore, it does not convert
	the HTML characters from the Subject field of the original message (which were
	added to the original RTF when the message was forwarded) into entities, which
	causes the characters to be displayed incorrectly.
	
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
	
	MORE INFORMATION
	================
	
	This behavior represents a potential security concern, because the security
	features enabled on most e-mail servers do not check the Subject field as
	closely as the rest of the message. If malicious HTML code in the Subject field
	of the original message is not detected, the code may be run after the original
	message is forwarded by a rule and the Subject field is included in the
	forwarded message.
	
	Additional query words: eml
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
