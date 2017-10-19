---
layout: page
title: "Q157702: XCON: MTA Stopping with Event ID 2143: Unrecoverable Error"
permalink: /kb/157/Q157702/
---

## Q157702: XCON: MTA Stopping with Event ID 2143: Unrecoverable Error

	Article: Q157702
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) stops with the following
	error in the Windows NT Event Log:
	
	  Event id: 2143
	
	  A fatal MTA database server error was encountered. Call Microsoft Product
	  Support. Unrecoverable error: ODXEOLST - Value Number too large. About to
	  terminate. Called from MTA. Procedure 233. Object ID: 06000045. Attribute ID:
	  2. Attribute value number: 1. Referenced object: 06000041 (00000000 => N/
	  ). Referenced object error ODXBMFUL - Bitmap full. [1 DB Server DISP:RESULT
	  18 101] (16)
	
	CAUSE
	=====
	
	The MTA terminates with Event Id 2143 during rerouting. An attempt is made to
	read a message beyond its boundary condition. This depends on whether the MTA
	was reading from cached data or not.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	
	Additional query words: MTA 2143
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
