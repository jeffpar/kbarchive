---
layout: page
title: "Q169891: XFOR: Internet Message Cannot Be Processed"
permalink: kb/169/Q169891/
---

## Q169891: XFOR: Internet Message Cannot Be Processed

	Article: Q169891
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following message:
	
	  The Microsoft Exchange Server received an Internet message that could
	  not be processed. To view the original message content, open the
	  attached message.
	
	CAUSE
	=====
	
	This problem will occur if the Exchange Server computer cannot decode the
	message you received.
	
	WORKAROUND
	==========
	
	The originating mail user must send messages to Exchange Server recipients in
	either MIME or Uuencode format. Exchange Server cannot decode messages in other
	formats, such as UUCP.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbprb
	
	=============================================================================
	
