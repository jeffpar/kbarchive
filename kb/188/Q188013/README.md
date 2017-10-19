---
layout: page
title: "Q188013: XFOR: Application Error With Multipart/Alternative Message"
permalink: /kb/188/Q188013/
---

## Q188013: XFOR: Application Error With Multipart/Alternative Message

	Article: Q188013
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Internet Mail Service is configured so that outbound messages containing
	attachments are encoded using Multipurpose Internet Mail Extensions (MIME), an
	application error similar to the following may occur if a message with a content
	type of multipart/alternative causes a non-delivery report (NDR) to be sent:
	
	  The instruction at "0x00439585" referenced memory at "0xcccccc34". The
	  memory could not be "read".
	
	CAUSE
	=====
	
	When the Internet Mail Service is configured in this manner, the NDR is encoded
	using MIME. The header of the original message is used to encode the NDR, but
	the message body is not used. This causes a problem when the original message
	has a content type of multipart/alternative.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: ims internet mail connector imc
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
