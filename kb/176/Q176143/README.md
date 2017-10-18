---
layout: page
title: "Q176143: XCON: Non-Delivery Report on Empty P772 Messages"
permalink: kb/176/Q176143/
---

## Q176143: XCON: Non-Delivery Report on Empty P772 Messages

	Article: Q176143
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	P772 messages submitted with an empty body will fail conversion by the message
	transfer agent (MTA) and will generate a non-delivery report (NDR) with the
	following reason code:
	
	  A syntax error was detected in the content of the message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	P772 is the "Military Message Content protocol standard (P772)" that assures
	interoperability in DMS with the existing DoD mail system - Automatic Digital
	Network (AUTODIN), and extends the P22 protocol to suit military needs.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
