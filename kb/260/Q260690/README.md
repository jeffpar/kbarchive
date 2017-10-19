---
layout: page
title: "Q260690: XFOR: Event ID 5016 from the GroupWise Calendar Connector"
permalink: /kb/260/Q260690/
---

## Q260690: XFOR: Event ID 5016 from the GroupWise Calendar Connector

	Article: Q260690
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 02-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to view the Free/Busy information of a Novell GroupWise user,
	you may receive the following event in the application log:
	
	  Event ID: 5016
	  Source: MSExchangeGWiseCal
	  Description:
	  Could not receive a returning probe message. Please make sure both Microsoft
	  Exchange Router for Novell GroupWise service and GroupWise API Gateway are
	  running. Probe message checking, Continue.
	
	CAUSE
	=====
	
	This behavior can occur because of an error in the configuration of the
	Microsoft Exchange Calendar Connector. The Calendar Connector is configured to
	point to a GroupWise domain (a format of domain.gateway).
	
	GroupWise supports having multiple domains within a GroupWise environment. In
	many cases, the connector for mail flow resides in a domain separate from the
	domain for GroupWise users. The Calendar Connector must point to the domain
	where the users reside.
	
	RESOLUTION
	==========
	
	To work around this behavior, modify the Calendar Connector to point to the
	domain where the GroupWise users reside.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
