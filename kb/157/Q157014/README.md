---
layout: page
title: "Q157014: XFOR: IMC Deletes Mail in MTS-OUT if no Code Page on MIME Tab"
permalink: /kb/157/Q157014/
---

## Q157014: XFOR: IMC Deletes Mail in MTS-OUT if no Code Page on MIME Tab

	Article: Q157014
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a code page is chosen that is not configured on the MIME Types tab of the
	Microsoft Exchange Internet Mail Connector's (IMC) property page, outbound mail
	will be deleted from MTS-OUT without a notification to the IMC Administrator or
	the originator. The originator will believe that the message has been delivered,
	but it will never arrive.
	
	CAUSE
	=====
	
	Windows NT has been configured to use a specific code page, but the IMC has not.
	The errors generated cause the IMC to delete the outbound message from
	\exchsrvr\imcdata\out.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
