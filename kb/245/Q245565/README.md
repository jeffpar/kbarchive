---
layout: page
title: "Q245565: XCON: Msg Delivery Fails Using Internet Mail Service w/NTLM"
permalink: /kb/245/Q245565/
---

## Q245565: XCON: Msg Delivery Fails Using Internet Mail Service w/NTLM

	Article: Q245565
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you receive e-mail over an Internet Mail Service that is configured to use
	NTLM Authentication and Encryption, mail service stops working intermittently,
	and the following event may be logged in the application Event Log.
	
	  Event ID: 4131
	  Source: MSExchangeIMC
	  Type: Information
	  Category: Internal Processing
	
	  Description:
	  An unexpected error occurred in the Internet Mail Service. Information about
	  this error is stored in the data portion of this event.
	
	  Data: * Bytes O Words
	  0000: f3 03 15 00 0f 03 09 80
	
	NOTE: The last four bytes correspond to a DWORD value of 0x8009030f
	(SEC_E_MESSAGE_ALTERED).
	
	CAUSE
	=====
	
	Data is being received in blocks from the remote server and each block is being
	decrypted as it is received. In rare cases, two blocks may be received by the
	server and read in a single input/output (I/O) operation. In these cases, the
	second block is not processed. When the next block arrives, the Windows NT
	security components recognize an issue (absent data) in the encryption stream
	and return an error of SEC_E_MESSAGE_ALTERED.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
