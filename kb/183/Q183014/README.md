---
layout: page
title: "Q183014: XCON: MTA Event 2050 with Badly Encoded X.400 Message"
permalink: kb/183/Q183014/
---

## Q183014: XCON: MTA Event 2050 with Badly Encoded X.400 Message

	Article: Q183014
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc55sp2fix
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A badly encoded X.400 message arriving at an Exchange message transfer agent
	(MTA) from a non-Exchange MTA can cause the MTA to terminate with an Event 2050
	similar to the following:
	
	  16:13:33 2050 MTA
	  A fatal internal MTA error occurred. Contact Microsoft Product Support
	  Services. An illegal PUT to element 8C1FF200 occurred at offset 1. [BASE
	  DISP:FANOUT 15 69] (16)
	
	CAUSE
	=====
	
	The incoming message has a Content Identifier envelope field that has an invalid
	length of 0.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	======================================================================
	Keywords          : kbusage exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
