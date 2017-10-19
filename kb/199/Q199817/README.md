---
layout: page
title: "Q199817: XFOR: Notes CALCON May Cause Session Leak on Notes Server"
permalink: /kb/199/Q199817/
---

## Q199817: XFOR: Notes CALCON May Cause Session Leak on Notes Server

	Article: Q199817
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may notice that the number of session handles opened by the Lotus Notes
	Calendar Connection (CALCON) may continually rise and not properly close out
	during normal operation of the Microsoft Exchange Calendar Connector.
	
	MORE INFORMATION
	================
	
	This problem is due to the incorrect configuration of the Notes client profile
	used by the Microsoft Exchange Calendar Connector for Notes. If the location
	document for the Calendar Connector's Notes profile is anything other than
	Office, this problem will surface and potentially cause a failure on the Notes
	server.
	
	To ensure the correct operation of both the Microsoft Exchange Calendar Connector
	for Notes and the Lotus Notes server, start up the Notes client using the same
	Notes.ini\Profile as designated on the Calendar Connector Property page for
	Notes. Ensure that the location document is set to Office. The location can be
	found on the bottom right corner of the Notes desktop. Values such as Home
	(modem), Internet, Island (Disconnected), or Travel (modem) are possible in
	addition to Office. If the location document is set incorrectly, you will not be
	able to access databases on the Notes server.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
