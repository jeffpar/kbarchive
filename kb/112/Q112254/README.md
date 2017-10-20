---
layout: page
title: "Q112254: PC MAPI: MAPIReadMail Doesn't Send Return-Receipt Message"
permalink: /kb/112/Q112254/
---

## Q112254: PC MAPI: MAPIReadMail Doesn't Send Return-Receipt Message

{% raw %}

	Article: Q112254
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	The Simple Messaging Application Programming Interface (MAPI) MAPIReadMail function won't respond with a return-receipt message when it is reading return-receipt requested mail messages. It is the responsibility of the
	Mail client application, such as Microsoft Mail for Windows, to return a
	receipt to the sender.
	
	You can use Simple MAPI to find out if a return-receipt request has been
	sent. To do so, use the MAPIReadMail function to check the flags parameter
	of MAPIMessage. If the flags value is equal to or greater than 2, but not
	5, the MAPI_RECEIPT_REQUESTED flag was set. After you determine that a
	return-receipt request message was sent, you can send a custom receipt
	message back to the sender.
	
	Microsoft Mail for Windows will recognize a MAPI return-receipt request and
	send back a return-receipt message to the sender.
	
	Additional query words: 3.00 3.20 return receipt
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
