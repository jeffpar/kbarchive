---
layout: page
title: "Q176477: XFOR: SMTP Message to More Than 100 Recipients Is Not Delivered"
permalink: kb/176/Q176477/
---

## Q176477: XFOR: SMTP Message to More Than 100 Recipients Is Not Delivered

	Article: Q176477
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a Simple Mail Transfer Protocol (SMTP) message through the Internet
	Mail Service to more than 100 recipients, the message may not be delivered.
	
	CAUSE
	=====
	
	The Request For Comments (RFC) 821 specification limits the number of recipients
	for a single message to a maximum of 100. When an SMTP server that supports RFC
	821 receives a message with more than 100 recipients, it requests that the
	sending system send the original message so that it can be separated into
	multiple messages, each with 100 or fewer recipients. The Internet Mail Service
	does not properly respond to this request.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	When an SMTP server receives a message, it stores the recipients in a buffer
	until all the recipients are processed. When the buffer reaches 100 recipients
	on an SMTP server that supports RFC 821, the server sends a return code of 522.
	This return code indicates that the sending system should send the message text
	before continuing to send recipients. This allows the server to create multiple
	messages, each with 100 or fewer recipients.
	
	Under these circumstances, the Internet Mail Service does not respond to this
	return code properly. It continues to send recipients instead of sending the
	message text first.
	
	Additional query words: ims internet mail connector imc
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
