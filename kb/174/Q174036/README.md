---
layout: page
title: "Q174036: XFOR: Exchange 5.0 IMS Won't Deliver Messages from 4.0 Server"
permalink: /kb/174/Q174036/
---

## Q174036: XFOR: Exchange 5.0 IMS Won't Deliver Messages from 4.0 Server

	Article: Q174036
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	This problem occurs when a computer running Microsoft Exchange Server 5.0
	receives an outbound message from a computer that is in the same site and is
	running Exchange Server 4.0. The Internet Mail Service (IMS) does not deliver
	the message and the following events are logged:
	
	  Event ID 4116 MSExchangeIMC Internal Processing An error was returned from
	  the messaging software the Internet Mail Service uses to process messages on
	  the Microsoft Exchange Server. It is possible that the piece of mail being
	  processed at the time will not be delivered. The message that was being
	  processed has been moved to the "BAD" folder. Use the appropriate utilities
	  found in the SUPPORT directory of your Exchange CD to view and manipulate
	  these messages.
	
	  Event ID 12802 MSExchangeIS Content Engine
	  Error 0x8004010f during stream configuration.
	
	CAUSE
	=====
	
	When a 4.0-generated message arrives at a 5.0 IMS via message transfer agent
	(MTA), IMAIL fails during outbound conversion from the computer running Exchange
	Server 5.0. Exchange Server 4.0 messages do not have the native codepage
	property so the Exchange Server 5.0 IMS cannot deliver the message
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
