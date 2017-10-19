---
layout: page
title: "Q178911: XADM: Event ID 1160 and Exchange Server Performance"
permalink: /kb/178/Q178911/
---

## Q178911: XADM: Event ID 1160 and Exchange Server Performance

	Article: Q178911
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 17-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following event may be displayed in the Windows NT Event Viewer Application
	log of the Exchange Server computer:
	
	  Event:1160
	  Source:MSExchangeIS
	  Type:Error
	  Category:General
	  Description:
	  Database resource failure error -1011 occurred in function
	  JTAB_BASE::EcPrepareUpdate while accessing the database.
	
	CAUSE
	=====
	
	This error may be reported if the Performance Optimizer is run and, in the
	Memory Usage properties, the value for Limit Memory Usage to <value>MB is
	set to something other than zero (0).
	
	Because this value sets the limit on how much memory all of Microsoft Exchange
	has to use, the lower the value, the more likely this error message is to be
	displayed. If this value is set too low, for example, to 25, the services will
	run, but after a short time the server's performance will degrade. Shutting down
	the service will take a long time as well.
	
	RESOLUTION
	==========
	
	To correct this problem, run Microsoft Exchange Performance Optimizer and reset
	the <value> to zero (0).
	
	MORE INFORMATION
	================
	
	The Description field may contain slightly different text, such as:
	
	  Database resource failure error -1011 occurred in function
	  JTAB_BASE::EcSetColumn while accessing the database.
	
	  Database resource failure error -1011 occurred in function
	  JTAB_BASE::EcConfig while accessing the database.
	
	  Database resource failure error -1011 occurred in function
	  JTAB_BASE::EcRetrieveColumnByPtagId while accessing the database.
	
	  Database resource failure error -1011 occurred in function
	  JTAB_BASE::EcSeek while accessing the database.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q216259 IS Stops Responding Due to Critical Section Leak
	
	  Q195006 Resource Failure Error with More than 800 MB of Ram
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
