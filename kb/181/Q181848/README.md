---
layout: page
title: "Q181848: XCON: MTA Stops Unexpectedly When Message Volume Is Very High"
permalink: kb/181/Q181848/
---

## Q181848: XCON: MTA Stops Unexpectedly When Message Volume Is Very High

	Article: Q181848
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When message volume is extremely high on a DEC Alpha computer, the message
	transfer agent (MTA) may stop unexpectedly and an event similar to the following
	may appear in the event log:
	
	  Source: MSExchangeMTA
	  Event: 9405
	  Type: Error
	  Category: Field Engineering
	  Description: An unexpected error has occurred which may cause the MTA
	  to terminate. Error: Access violation (0xc0000005) at Address 0x4aff38
	  reading from 0x0. [BASE XFER-IN 16] (16)
	
	CAUSE
	=====
	
	This problem can occur when a Microsoft Exchange function fails. Some Microsoft
	Exchange functions are known to fail under stressful conditions on DEC Alpha
	computers.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
