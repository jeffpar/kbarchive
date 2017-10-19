---
layout: page
title: "Q201876: XFOR: GroupWise Router Stops Responding with Errors 6064 and 605"
permalink: /kb/201/Q201876/
---

## Q201876: XFOR: GroupWise Router Stops Responding with Errors 6064 and 605

	Article: Q201876
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 12-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Router for Novell GroupWise may stop responding with the
	following errors in the event log.
	
	  Source: MSExchangeGWRtr
	
	  Error:General
	
	  Event:6064
	
	  Message: Error occurred when processing files from API_IN Directory.
	  Return code: 8004010f
	
	  Source:MSExchangeGWRtr
	
	  Error:General
	
	  Event:6052
	
	  Message: The following directory could not be found:
	  \\bad_dog\sys\tiger\wpgate\api\API_OUT\ Please make sure the directory setting
	  is correct and the GroupWise Server is running.
	
	  The system error code is 18
	
	CAUSE
	=====
	
	This behavior may be a result of running out of client licenses on the NetWare
	server.
	
	RESOLUTION
	==========
	
	Ensure that there is at least one available license left for the GroupWise
	Router to log onto the NetWare server, and then attempt the sending process
	through the gateway again.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
