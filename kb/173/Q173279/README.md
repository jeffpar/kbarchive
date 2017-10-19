---
layout: page
title: "Q173279: XFOR: IMC Issues Incorrect Event ID"
permalink: /kb/173/Q173279/
---

## Q173279: XFOR: IMC Issues Incorrect Event ID

	Article: Q173279
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Microsoft Exchange Internet Mail Service is configured to refuse
	connections based on IP addresses, the Internet Mail Service issues Event ID 220
	rather than Event ID 521. The message originator will not receive a non-delivery
	receipt (NDR) immediately with the message:
	
	  521 access denied
	
	Instead, the message delivery will be retried until it times out, and then an NDR
	is returned.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: IMC IMS
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
