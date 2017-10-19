---
layout: page
title: "Q130489: XCLN: Err Msg: Recipient Options Could Not Be Set..."
permalink: /kb/130/Q130489/
---

## Q130489: XCLN: Err Msg: Recipient Options Could Not Be Set...

	Article: Q130489
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compose a message and click the To button, and then choose the Send
	Options button in the Select Names dialog box, the following error message is
	generated:
	
	  Per-recipient send options could not be set. If your recipient supports send
	  options, you must first select the recipient name in the To, Cc or Bcc box.
	
	  0-(00040380)
	
	  OK
	
	CAUSE
	=====
	
	Currently, the only providers that support Send Options are the Internet and Fax
	drivers. The provider is responsible for using this option, not Microsoft
	Exchange.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
