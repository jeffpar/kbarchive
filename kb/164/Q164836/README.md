---
layout: page
title: "Q164836: XCON: Conditional Reroute on Single Link Bounces Back"
permalink: kb/164/Q164836/
---

## Q164836: XCON: Conditional Reroute on Single Link Bounces Back

	Article: Q164836
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When messages are received from foreign X.400 systems, sometimes the messages
	cannot be resolved against the Directory Service (DS). These messages are marked
	as rerouted and sent back to the foreign X.400 system.
	
	This then starts a ping-pong effect between the two systems.
	
	CAUSE
	=====
	
	Some X.400 systems cannot handle the fact that the message is marked as REROUTED
	up the same link as the message was sent. Because they cannot loop detect the
	message, they consequently resend the message back to Microsoft Exchange,
	starting the ping-pong effect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
