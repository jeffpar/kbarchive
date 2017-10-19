---
layout: page
title: "Q199832: XFOR:GWISECAL Doesn't Report Initialization Event During Startup"
permalink: /kb/199/Q199832/
---

## Q199832: XFOR:GWISECAL Doesn't Report Initialization Event During Startup

	Article: Q199832
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During normal operation, when the Calendar Connector and its providers start up,
	an event is logged indicating that initialization has begun. However, the
	GroupWise provider does not record such an event unless there is a problem with
	the probe message to GroupWise.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.5.
	
	MORE INFORMATION
	================
	
	If diagnostic logging for the Calendar Connector is set to maximum, you will see
	the events logged by the GroupWise provider.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
