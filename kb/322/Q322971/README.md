---
layout: page
title: "Q322971: XIMS: Internet Mail Service Counters Don't Work in TS Session"
permalink: /kb/322/Q322971/
---

## Q322971: XIMS: Internet Mail Service Counters Don't Work in TS Session

	Article: Q322971
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Exchange Server 5.5 Internet Mail Service Performance Monitor counters are not
	tracking values properly in a terminal server session. Although the Performance
	Monitor counters are present, they show a value of 0, and do not change during
	typical Internet Mail Service operations.
	
	The counters function properly under either of the following conditions:
	
	- The user is physically logged on at the console.
	
	  -or-
	
	- You use Performance Monitor from another computer and point it at the
	  computer that is running Internet Mail Service.
	
	CAUSE
	=====
	
	Exchange Server 5.5 was originally developed for Microsoft Windows NT 4.0 and
	does not function properly when Performance Monitor is hosting Exchange Server
	5.5 Internet Mail Service counters in a terminal session.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Component         : IMC IMS
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
