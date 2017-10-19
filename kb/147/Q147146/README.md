---
layout: page
title: "Q147146: XCLN: Win: Encrypted Messages Do Not Display Attachment Icon"
permalink: /kb/147/Q147146/
---

## Q147146: XCLN: Win: Encrypted Messages Do Not Display Attachment Icon

	Article: Q147146
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you receive a signed and sealed (encrypted) message with an attachment, the
	icon indicating that the message has an attachment does not appear. However,
	when you forward that message without encryption, the paper clip icon (which
	denotes an attachment) will appear.
	
	CAUSE
	=====
	
	An encrypted message has its properties, including attachments, removed. All
	that remains is the encrypted TNEF (which contains the properties that were
	encrypted). This means that the Exchange client does not know that an encrypted
	message contained attachments because the attachment properties have been
	deleted.
	
	Additional query words: encryption security
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
