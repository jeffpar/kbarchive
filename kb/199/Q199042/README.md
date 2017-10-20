---
layout: page
title: "Q199042: XFOR: Calendar Connector Fails with MAPI Error 80004005"
permalink: /kb/199/Q199042/
---

## Q199042: XFOR: Calendar Connector Fails with MAPI Error 80004005

{% raw %}

	Article: Q199042
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Calendar Connector may fail to start on an Exchange
	Server computer that has a local replica of the Free/Busy public folder.
	
	The following event ID messages may be logged in the application event log.
	
	  Event Type:Error
	  Event Source: MSExchangeCalCon
	  Event Category:Connection
	  Event ID:5005
	  Date:12/11/2000
	  Time:1:10:14 PM
	  User:N/A
	  Computer:EXCHANGE-GV
	  Description: The Calendar Connector could not connect to the Public
	  Information Store due to MAPI error 80004005 and is shutting down. Ensure
	  that the information Store service is running and the calendar connector
	  service is configured to use the Exchange Services Account and Password in
	  Services Control Manager before restarting the Calendar Connector.
	
	  Event Type:Error
	  Event Source: MSExchangeCalCon
	  Event Category:Connection
	  Event ID:5006
	  Date:12/11/2000
	  Time:1:10:14 PM
	  User:N/A
	  Computer:EXCHANGE-GV
	  Description: The Calendar Connector is shutting down due to an unrecoverable
	  error.
	
	CAUSE
	=====
	
	These symptoms appear when the public information store is deleted or moved to
	another Exchange Server computer.
	
	RESOLUTION
	==========
	
	Although MAPI mail clients can be re-directed to a public information store
	(Pub.edb), the Exchange Calendar Connector explicitly requires access to the
	local Exchange Server computer's public information store to complete its
	initialization routines.
	
	The Exchange Server administrator must change a configuration setting on the
	server to force the calendar connector to stay focused on the local public
	information store. This can be done by following these steps:
	
	1. Start the Microsoft Exchange Server Administrator program.
	
	2. Go to the current server object and expand the properties to reveal the
	  Private Information Store and Public Information Store objects.
	
	  NOTE: If you do not see the Public Information Store object, it has not yet
	  been added to the Exchange Server. Ensure that this is done before you
	  continue.
	
	3. Click to select the Private Information Store, click File menu, and then
	  click Properties to open its properties.
	
	4. Click the General tab, and look for the public folder server setting near the
	  bottom of the dialog box.
	
	5. Change the server name to now point to itself rather than to a remote
	  server.
	
	  This causes all MAPI clients to access the local replica for F/B information
	  rather than using another server. This also enables the Calendar Connector to
	  successfully sign on to the public information store locally.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5.
	
	Additional query words: error, mapi event id 5005 5006
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
