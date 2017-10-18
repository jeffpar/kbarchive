---
layout: page
title: "Q151707: XCLN: Replying With Exchange and MS Mail Services in Profile"
permalink: kb/151/Q151707/
---

## Q151707: XCLN: Replying With Exchange and MS Mail Services in Profile

	Article: Q151707
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install both the MS Mail service and Microsoft Exchange Server service
	in a Microsoft Exchange client for Windows and they reply to messages originated
	by an MS Mail user, the reply address is determined by the Microsoft Exchange
	client service that was first able to deliver the message back to MS Mail.
	
	MORE INFORMATION
	================
	
	When you reply to an MS Mail message using the Microsoft Exchange client, the
	client service that will deliver that message is chosen by the delivery order.
	
	The order can be modified by choosing Options from the Tools menu in the
	Microsoft Exchange client, selecting the Delivery tab, and modifying the
	delivery order.
	
	If the first service listed in the order is the Microsoft Exchange Server
	service, then messages to MS Mail addresses will be sent through the Microsoft
	Exchange Server MS Mail Connector, thus making the reply address a Microsoft
	Exchange proxy address. If the MS Mail service is listed first, then the reply
	address will be the MS Mail address configured for the MS Mail service in the
	Microsoft Exchange client.
	
	Additional query words: 4.00 reply default transport re
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
