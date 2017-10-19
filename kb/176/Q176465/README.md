---
layout: page
title: "Q176465: XFOR: Information Store Stops Unexpectedly with Null Recipient"
permalink: /kb/176/Q176465/
---

## Q176465: XFOR: Information Store Stops Unexpectedly with Null Recipient

	Article: Q176465
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a message in Universal Transformation Format (UTF) through the
	Internet Mail Service (IMS) to a recipient who does not have a display name, the
	information store may stop unexpectedly when another person attempts to receive
	the message using a post office protocol version 3 (POP3) e-mail client.
	
	CAUSE
	=====
	
	When you send a message to a recipient who does not have a display name, the
	display name is converted to a null value instead of a blank string value.
	Microsoft Exchange Server does not properly process UTF messages with a null
	recipient when they are received using POP3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: connector imc
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
