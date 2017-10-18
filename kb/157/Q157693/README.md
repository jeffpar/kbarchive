---
layout: page
title: "Q157693: XFOR: IMC Might Lose Messages if Code Pages are not Installed"
permalink: kb/157/Q157693/
---

## Q157693: XFOR: IMC Might Lose Messages if Code Pages are not Installed

	Article: Q157693
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
	
	Inbound messages might be accepted by the Microsoft Exchange Internet Mail
	Connector (IMC), and recorded in the protocol log, and yet not successfully
	submitted to the Microsoft Exchange Information Store (IS). In this case, you
	will not find any mention of the inbound messages in the message tracking log,
	assuming you have message tracking turned on, or the saved in the
	exchsrvr\imcdata\in\archive directory.
	
	CAUSE
	=====
	
	An incoming MIME message might contain embedded messages using character sets
	that are not supported or correctly configured on the IMC server. This only
	happens under certain timing conditions. The message fails to convert due to the
	unsupported character sets, and the IMC performs an extra release of the message
	to the IS. The IS will then error on every subsequent attempt made by the IMC to
	submit messages to the IS, and the IMC will handle the failure by simply
	deleting the message.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
