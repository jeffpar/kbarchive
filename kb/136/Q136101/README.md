---
layout: page
title: "Q136101: Err Msg: Receiver(s) Not Valid for Binary Message"
permalink: /kb/136/Q136101/
---

## Q136101: Err Msg: Receiver(s) Not Valid for Binary Message

	Article: Q136101
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to send Rich Text Format (RTF) mail to an Internet address using the
	CompuServe Mail provider for Microsoft Exchange, you receive the following
	non-delivery report:
	
	  The following recipients could not be reached...
	  Receiver(s) not valid for binary message
	
	CAUSE
	=====
	
	This message is returned by CompuServe. CompuServe's gateway to Internet mail
	does not support sending binary attachments to Internet recipients. Since an RTF
	message is sent as a message with a binary attachment, the message cannot be
	sent.
	
	RESOLUTION
	==========
	
	When you compose new mail for an Internet recipient using the CompuServe Mail
	provider, do not enable the CompuServe Mail provider's "Send using Microsoft
	Exchange rich-text format" option.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange bundles RTF attributes into a special binary attachment file
	called Winmail.dat. If an RTF message is addressed to both CompuServe and
	Internet recipients, all the recipients receive an error message, even though
	the CompuServe recipients may be capable of receiving a message with a binary
	attachment.
	
	Additional query words: XCLNWin95 XProCIS
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
