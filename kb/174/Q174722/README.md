---
layout: page
title: "Q174722: XFOR: Message Reprocessed Due to Error 80040C15-F0000000"
permalink: /kb/174/Q174722/
---

## Q174722: XFOR: Message Reprocessed Due to Error 80040C15-F0000000

	Article: Q174722
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an Exchange Server computer receives a message with a recognized character
	set, it reprocesses the message to Message.txt. The following warning is written
	to the event log:
	
	  Event ID: 12035
	  Source: MSEchangeNNTP
	  Type: Warning
	  Category: Content Engine
	  Message with subject subject text from name had to be reprocessed due to error
	  80040C15-F0000000.
	
	CAUSE
	=====
	
	It is not possible to assume a default character set (for example, US- ASCII),
	because if the message truly contains some characters that do not map to the
	chosen default character set, then the message is corrupted. The character sets
	here are "x-mac-roman" and "Macintosh."
	
	WORKAROUND
	==========
	
	To work around this problem, create an alias in the MIME database to map the
	unknown character sets to a known character set.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: Character set
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	
	=============================================================================
	
