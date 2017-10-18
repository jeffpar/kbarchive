---
layout: page
title: "Q168536: XCON: Event ID: 246 An Internal MTA Error Has Occurred"
permalink: kb/168/Q168536/
---

## Q168536: XCON: Event ID: 246 An Internal MTA Error Has Occurred

	Article: Q168536
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you send a mail message from Microsoft Mail to a Microsoft Exchange Server
	distribution list (DL), you may see the following error message:
	
	  EventID:    246
	  Source:     MSExchangeMTA
	  Type:       Error
	  Category:   Internal Processing
	
	  An internal MTA error occurred. An attempt has been made to read beyond
	  the end of an object. Attribute ID: 30. Object at fault: 060000NN.
	  Offset reached: 1. Contact Microsoft Product Support Services. [MTA
	  DISP:FANOUT 12 223] (14)
	
	The referenced object in the error is not found in the Mtadata directory. The
	referenced object may vary but the attribute ID and offset are the same in most
	cases.
	
	CAUSE
	=====
	
	The error occurs when the message transfer agent (MTA) looks on the message for
	an attribute called Private Extensions. The MS Mail Interchange (MSMI) does not
	create messages with this attribute, because it did not used to exist. The MTA
	sees the value of this attribute has a length of 0 and so it records the error
	246.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	
