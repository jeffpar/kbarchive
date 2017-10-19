---
layout: page
title: "Q246280: XFOR: Chat Service Does Not Run with PowerChute Installed"
permalink: /kb/246/Q246280/
---

## Q246280: XFOR: Chat Service Does Not Run with PowerChute Installed

	Article: Q246280
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Exchange Server 5.5 Service Pack (SP) 1 with the Chat
	service installed on a Microsoft Windows NT Server 4.0 SP 3-based computer with
	the American Power Conversion PowerChute service installed, the Chat service may
	not start. You may receive an error message about Error 16389, and Event Viewer
	may record Event IDs 14 and 7023 in the application log.
	
	CAUSE
	=====
	
	This behavior can occur because the PowerChute service prevents the Chat service
	from starting properly.
	
	WORKAROUND
	==========
	
	To work around this behavior, start the Chat service first. Follow these steps:
	
	1. Quit the PowerChute and Chat service.
	
	2. Set the PowerChute service startup option to Manual.
	
	3. Start the Chat service, and then start the PowerChute service manually.
	
	  NOTE: You must now remember to start the PowerChute service manually after
	  each startup.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: UPS messaging component
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
