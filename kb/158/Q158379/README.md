---
layout: page
title: "Q158379: XFOR: MSExchangeMSMI Reports Event IDs 2380 and 2446/2447"
permalink: /kb/158/Q158379/
---

## Q158379: XFOR: MSExchangeMSMI Reports Event IDs 2380 and 2446/2447

{% raw %}

	Article: Q158379
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following event IDs appear in the Application Event log:
	
	  Event ID 2380 MSExchangeMSMI
	
	  A memory access violation has occurred that prevents further processing of a
	  message. The access violation that occurred is an attempt to read from 0.
	  Please refer to the immediately following event(s) logged by MS Mail
	  Connector Interchange for more information on the message that could not be
	  processed.
	
	  Event ID 2446/2447 MSExchangeMSMI
	
	  MS Mail Connector Interchange has failed processing message from Exchange. The
	  message is left in the delivery queue. Use the MS Exchange Administrator to
	  view the details for this message or remove it from the queue. This message
	  entitled "<message subject>" is from <message sender>. This error
	  message will be logged again the next time MS Connector is restarted if the
	  message is not removed from the queue.
	
	The message stays queued in the message transfer agent (MTA) and cannot be
	deleted. Trying to delete one of these messages results in the following error
	message:
	
	  The object is not valid. Microsoft Exchange Administrator ID no: c1035b3c.
	
	The event IDs 2380 and 2446/2447 are logged for each message queued in the MTA,
	each time the MSExchangeMSMI service is restarted.
	
	A zero length ATT file is created and orphaned in the Maildata\Att directory of
	the Microsoft Mail Connector.
	
	CAUSE
	=====
	
	These symptoms occur when you receive a message by means of the Internet Mail
	Connector that contains a REPLY-TO address that cannot be understood by the
	Microsoft Mail Connector.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
