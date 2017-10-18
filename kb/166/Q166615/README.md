---
layout: page
title: "Q166615: XFOR: Message Characters Corrupted When Different Locale Used"
permalink: kb/166/Q166615/
---

## Q166615: XFOR: Message Characters Corrupted When Different Locale Used

	Article: Q166615
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a computer running Microsoft Exchange Client or a POP3 client is configured
	with a different code page than the computer running Microsoft Exchange Server
	version 5.0 uses to send a MIME-encoded message, the message body becomes
	corrupted.
	
	An example of this scenario is when the Microsoft Exchange Server computer is
	configured with standard settings (US-ASCII for POP3, ISO-8859-1 for the
	Internet Mail Service) and the client being used has another code page
	installed.
	
	CAUSE
	=====
	
	The message body becomes corrupted because the MIME header does not match the
	message body type. This will affect all outbound MIME messages where the code
	page on the server differs from the client locale.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
