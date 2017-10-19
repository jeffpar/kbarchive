---
layout: page
title: "Q157235: XCON: MTA Stops When Receiving Mail from HP X.400 MTA"
permalink: /kb/157/Q157235/
---

## Q157235: XCON: MTA Stops When Receiving Mail from HP X.400 MTA

	Article: Q157235
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
	
	The Microsoft Exchange Server Message Transfer Agent (MTA) may stop unexpectedly
	with the following Event ID error when receiving mail from the HP X400 MTA:
	
	  Event ID:9405
	  Source:MSExchangeMTA
	  Type:Error
	  Category:Field Engineering
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Exception c0000005 occurred at Address 6d515422. [BASE DISP:ROUTER 12] (16)
	
	In addition, there may be other events logged, due to difficulties stemming from
	the HP MTA interoperability. You may encounter either of the following events:
	
	  Event ID:2170
	  Source:MSExchangeMTA
	  Type:Warning
	  Category:Internal Processing
	  Description:
	  An MTA database server error was encountered while appending an attribute.
	  Called from MTA.
	  Procedure: 101. Database error code: ODXFATAL - Internal or Application Error.
	  Object at fault: 06000118. Attribute identifier: 73. Value number: 1.
	  Referenced object: 06000118 (00000000 => N/A). Referenced object error
	  2103. [DB Server XFER-IN 20 19] (14)
	
	-or-
	
	  Event ID:2143
	  Source:MSExchangeMTA
	  Type:Error
	  Category:Internal Processing
	  Description:
	  A fatal MTA database server error was encountered. Call Microsoft Product
	  Support. Unrecoverable error: ODXEOLST - Value Number too large. About to
	  terminate. Called from MTA. Procedure 223. Object ID: 06000074. Attribute ID:
	  28. Attribute value number: 1.
	  Referenced object: 00000000 (00000000 => NA). Referenced object error 0. [1
	  DB Server DISP:ROUTER 15 101] (16)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
