---
layout: page
title: "Q159179: XCON: Message Body Truncated"
permalink: /kb/159/Q159179/
---

## Q159179: XCON: Message Body Truncated

	Article: Q159179
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The text of a message body is truncated when displayed by any Microsoft Exchange
	client. If the message is edited on the sending system to not include any null
	characters, the message can then be submitted to the Microsoft Exchange message
	transfer agent (MTA) and is displayed correctly.
	
	CAUSE
	=====
	
	The existence of null characters in the X.400 text body of the message seems to
	be in violation of X.400 standards. Null characters are not graphic characters
	and are not part of the ISO 646 graphic character set. The first X.400 text body
	part is handled as the PR_BODY, which is a null- terminate MAPI property. Any
	null characters contained in this body part are treated as terminators and the
	message body was truncated wherever the null characters occurred.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange version 4.0. This
	problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
