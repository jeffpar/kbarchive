---
layout: page
title: "Q187921: XADM: Body Part Not Mapped in Multipart/Alternative Message"
permalink: /kb/187/Q187921/
---

## Q187921: XADM: Body Part Not Mapped in Multipart/Alternative Message

	Article: Q187921
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a message with a content type of multipart/alternative to a
	Microsoft Exchange Server computer, but the first body part is not assigned a
	content type, the first body part does not appear in the body of the message
	when you open it in an e-mail client.
	
	CAUSE
	=====
	
	When you send a message with a content type of multipart/alternative, the server
	does not map body parts with a null content type to the message body.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
