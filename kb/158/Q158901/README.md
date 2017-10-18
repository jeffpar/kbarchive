---
layout: page
title: "Q158901: XADM: MDB Event 2079: Unable to Submit, Send, or Transfer Msgs"
permalink: kb/158/Q158901/
---

## Q158901: XADM: MDB Event 2079: Unable to Submit, Send, or Transfer Msgs

	Article: Q158901
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
	
	After you apply Microsoft Exchange Server Service Pack 3 (SP3), the following
	event error is logged when the Microsoft Exchange Information Store receives an
	incoming Internet Mail Connector (SMTP) message for an unrecognized recipient:
	
	  Event ID: 2079
	  Source: MsExchagneIS Private
	  Type: Error
	  Category: Transport
	  Description: Unable to submit, send, or transfer out a message. No recipient
	  was found in the envelope.
	
	CAUSE
	=====
	
	The severity of this event was incorrectly set to an Error (red) by the
	Microsoft Exchange Information Store.
	
	RESOLUTION
	==========
	
	Apply the fix referenced below. The Information Store code was corrected to
	display this event as a Warning (yellow) and only when transport diagnostic
	logging is set to maximum.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: IMC
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
