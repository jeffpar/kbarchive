---
layout: page
title: "Q147145: XCLN: Send from Excel/Word Hangs Client Until Message Sent"
permalink: /kb/147/Q147145/
---

## Q147145: XCLN: Send from Excel/Word Hangs Client Until Message Sent

	Article: Q147145
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Send option in either Microsoft Excel or Microsoft Word, the
	Microsoft Exchange Client will not be operational until the message is sent.
	
	CAUSE
	=====
	
	These applications use the Simple MAPI command File Send to access mail. This
	command is modal and therefore will not allow you to toggle back to use the
	Microsoft Exchange Client until the message is sent.
	
	STATUS
	======
	
	This behavior is by design.
	
	NOTE: You can create an additional (new) message prior to sending the Word or
	Excel document, by choosing New Message on the Compose menu in Microsoft
	Exchange.
	
	
	Additional query words: client winapps faq
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
