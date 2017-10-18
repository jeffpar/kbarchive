---
layout: page
title: "Q173344: XFOR: MSMI Cannot Process 256+ Character Recipient Names"
permalink: kb/173/Q173344/
---

## Q173344: XFOR: MSMI Cannot Process 256+ Character Recipient Names

	Article: Q173344
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Microsoft Mail Connector interchange (MSMI) will not process messages
	addressed to recipients if the recipient's address exceeds 256 characters.
	Typically, these messages would have been received by the Internet Mail Service
	and then forwarded to the MSMI. The message will remain in the MTA queue to the
	Microsoft Mail Connector. Additionally, the following errors are logged in the
	Application Event log:
	
	  Event ID 2380
	  Source MSMI
	  A memory access violation has occurred that prevents further processing of a
	  message. The access violation that occurred is an attempt to read from
	  0x632e6262. Please refer to the immediately following event(s) logged by MS
	  Mail Connector Interchange for more information on the message that could not
	  be processed. (Exception address: %2.)
	
	  Event ID 2451
	  Source MSMI
	  MS Mail Connector Interchange has failed processing message from Exchange. The
	  message is left in the delivery queue. Use the MS Exchange Administrator to
	  view the details for this message or remove it from the queue. This error
	  message will be logged again the next time MS Connector is restarted if the
	  message is not removed from the queue.
	
	CAUSE
	=====
	
	The MSMI is unable to parse recipient names longer than 256 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.0.
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	
	MORE INFORMATION
	================
	
	To remove messages stuck in the MTA queue to the Microsoft Mail Connector, you
	must shut down the MSMI service and then delete the item from the MTA queue
	using the Exchange Administrator program.
	
	Additional query words: 5.00 SP1 access violation IMS
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
