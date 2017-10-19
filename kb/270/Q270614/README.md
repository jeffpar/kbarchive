---
layout: page
title: "Q270614: PRB: Exchange Server 5.5 Rejects POP3 Messages in Base64"
permalink: /kb/270/Q270614/
---

## Q270614: PRB: Exchange Server 5.5 Rejects POP3 Messages in Base64

	Article: Q270614
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you submit a message that has a Base64 body part to Exchange versions 5.5 and
	earlier by using Post Office Protocol 3 (POP3), and the body part contains
	extraneous characters after the termination sequence, you may receive the
	following error message even if the extraneous characters are otherwise valid:
	
	  The Microsoft Exchange Server received an Internet message that could not be
	  processed. To view the original message content, open the attached message.
	  <<message.txt>>
	
	CAUSE
	=====
	
	Exchange only accepts Base64 encodings that are multiples of 4 in size. The
	extraneous characters cause the encoding size to not be a multiple of 4, so
	Exchange rejects the encoding.
	
	RESOLUTION
	==========
	
	Do not append extra characters to the end of a Base64 sequence that is submitted
	to Exchange.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
