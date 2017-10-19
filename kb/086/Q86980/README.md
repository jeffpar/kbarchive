---
layout: page
title: "Q86980: X400: How Address Conversion Is Performed by the Gateway"
permalink: /kb/086/Q86980/
---

## Q86980: X400: How Address Conversion Is Performed by the Gateway

	Article: Q86980
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to X.400 performs address conversion on both incoming
	mail and outgoing mail.
	
	On incoming mail, the address conversion is done to the address in the TO: field
	only. The FROM: field is not altered because the X.400 message must be retained.
	If an Microsoft Mail user wants to reply to the incoming message, the unaltered
	address in the FROM: field will be moved into the TO: field so the message can
	be sent back.
	
	On outgoing mail, the FROM: field is changed from Microsoft Mail for PCs format
	to the X.400 format, whereas the TO: field is not altered. This conversion can
	be done by either the address conversion table or by the Advanced Address
	Mapping.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
