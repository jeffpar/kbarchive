---
layout: page
title: "Q240745: XCLN: Event Script Cancelled After Exceeding 900-second Limit"
permalink: kb/240/Q240745/
---

## Q240745: XCLN: Event Script Cancelled After Exceeding 900-second Limit

	Article: Q240745
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2
	Last Modified: 12-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using event scripting on an Exchange Server computer, an event
	script may stop with the following entry in the application log:
	
	  Script execution is cancelled because it exceeded the maximum time allowed.
	  Time allowed is 900 seconds.
	
	This event error causes the event script to stop working.
	
	RESOLUTION
	==========
	
	To restart the script, restart the event service in the Services utility in
	Control Panel.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
