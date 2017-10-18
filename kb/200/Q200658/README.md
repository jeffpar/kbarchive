---
layout: page
title: "Q200658: XADM: Unrecognizable Chars. Receiving Mail from Japanese IMC"
permalink: kb/200/Q200658/
---

## Q200658: XADM: Unrecognizable Chars. Receiving Mail from Japanese IMC

	Article: Q200658
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message (using TNEF or UUENCODE) with attachments from a
	Japanese Internet Mail Service (Exchange Server 5.0 and 5.5) or Internet Mail
	Connector (Exchange Server 4.0) to an SMTP user, the Kanji characters in the
	tags appeared as extended, unrecognizable characters.
	
	CAUSE
	=====
	
	This happens when the tags are translated from Kanji to extended characters. If
	the recipient does not support the character set being translated to, unreadable
	characters are the result.
	
	WORKAROUND
	==========
	
	Install the appropriate language page.
	
	MORE INFORMATION
	================
	
	This behavior is by product design. It is noted here that this behavior is not
	specific to Exchange Server; language support for applications issues all
	typically exhibit the same symptoms and require the same workaround.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
