---
layout: page
title: "Q107356: PC MAPI: No Subject or Message Text with Return Receipt"
permalink: /kb/107/Q107356/
---

## Q107356: PC MAPI: No Subject or Message Text with Return Receipt

{% raw %}

	Article: Q107356
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message using the Messaging Application Program Interface (MAPI)
	MAPI_RECEIPT_REQUESTED flag in the MAPIMessage structure, the receipt that is
	returned will include a subject field that includes the following text:
	
	  Registered: <sendee>
	
	The message text field will be blank.
	
	CAUSE
	=====
	
	Unlike Microsoft Mail for Windows, MAPI does not provide any information in the
	return-receipt message that was originally supplied in the subject field of a
	sent message. The subject field in the Mail Windows client will be exactly the
	same as the MAPI field above, but also included on the form is the subject line
	that was sent with a return-receipt requested message. MAPI cannot provide a way
	to track unique information other than to whom the return-receipt requested
	message was sent.
	
	Additional query words: 3.00 3.00b 3.20 return receipt
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
