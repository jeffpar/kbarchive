---
layout: page
title: "Q157686: XCON: MTA Crashes When Logging Event 321"
permalink: /kb/157/Q157686/
---

## Q157686: XCON: MTA Crashes When Logging Event 321

	Article: Q157686
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Exception e0050802 (and possibly event id 2050) might occur in the Microsoft
	Exchange Message Transfer Agent (MTA) after logging event ID 321.
	
	CAUSE
	=====
	
	This exception can occur when the MTA is attempting to log an event ID 321. It
	is caused by an uninitialized parameter.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
