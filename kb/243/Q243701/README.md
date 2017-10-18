---
layout: page
title: "Q243701: XCON: Microsoft Mail Connector Interchange Events 2450 and 2380"
permalink: kb/243/Q243701/
---

## Q243701: XCON: Microsoft Mail Connector Interchange Events 2450 and 2380

	Article: Q243701
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you restart the message transfer agent (MTA), the Microsoft Mail Connector
	interchange may log the following event ID 2450 and 2380 error messages, which
	indicate that a message could not be delivered:
	
	  Event ID 2380
	
	  A memory access violation has occurred that prevents further processing of a
	  message. The access violation that occurred is an attempt to read from 0x1.
	  Please refer to the immediately following event(s) logged by MS Mail
	  Connector Interchange for more information on the message that could not be
	  processed. (Exception address: %2.)
	
	  Event ID 2450
	
	  MS Mail Connector Interchange has failed processing message from Exchange. The
	  message is left in the delivery queue. Use the MS Exchange Administrator to
	  view the details for this message or remove it from the queue. This message
	  is from NET/PO/POSTMASTER. This error message is logged again the next time
	  MS Connector is restarted if the message is not removed from the queue.
	
	CAUSE
	=====
	
	This issue can occur if the message contains an address that contains an
	unresolved Distinguished Name (DN) string.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue, manually remove the message from the MTA queue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
