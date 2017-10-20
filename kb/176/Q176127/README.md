---
layout: page
title: "Q176127: XCON: Read Receipts Looping in the Message Transfer Agent"
permalink: /kb/176/Q176127/
---

## Q176127: XCON: Read Receipts Looping in the Message Transfer Agent

{% raw %}

	Article: Q176127
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
	
	When a message is sent to an Enterprise Solutions Limited recipient with a read
	receipt request, the read receipt is received by the originating message
	transfer agent (MTA), but is seen looping within the MTA when it is routed to
	the user. Event logs indicate the following loop detection event:
	
	  Source: MSExchangeMTA
	  Event: 201
	  Description: A loop has been detected in the message being transferred
	  in. A non-delivery report was generated with reason code unable-to-
	  transfer and diagnostic code loop-detected. [MTA XFER-IN 17 104] (14)
	
	A non-delivery report (NDR) event in the form of Event ID 290 is also generated
	in the event logs.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
