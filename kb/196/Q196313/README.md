---
layout: page
title: "Q196313: XFOR: Calendar Connector Reports Error Event 5010"
permalink: /kb/196/Q196313/
---

## Q196313: XFOR: Calendar Connector Reports Error Event 5010

	Article: Q196313
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When users of Lotus Notes request Free and Busy (F/B) information for Exchange
	users, the request may time out. The Calendar Connector receives the request
	from the Notes partner provider, as seen in the event logs. The event log,
	however, contains the following error:
	
	  Event 5010, source MSExchangeNotesCal
	
	  Cannot connect to the Notes server Add-in task ExCalCon on <server
	  name>. Ensure that you can connect to the Notes server on <server
	  name> and that the Microsoft Exchange Calendar Connector task on
	  <server name> is running. The Calendar Connector will retry to connect
	  on the next calendar request.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Start the Exchange Server Administrator program.
	
	2. Select Calendar Connector, and then open the property pages.
	
	3. Go to Calendar Connections.
	
	4. Double-click the Notes Connection name.
	
	5. Check to make sure that the Windows NT server name is spelled correctly.
	
	MORE INFORMATION
	================
	
	During the configuration of the Notes provider, there is no check to ensure that
	the Exchange Calendar Connector task is readily available upon startup. Thus, it
	is possible for a wrong server name to be entered.
	
	Additional query words: NOTES calendar provider, FCC, calcon, excalcon
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
