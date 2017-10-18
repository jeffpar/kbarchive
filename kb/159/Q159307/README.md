---
layout: page
title: "Q159307: XCON: MTA Stopping with Event ID 2143: Unrecoverable Error"
permalink: kb/159/Q159307/
---

## Q159307: XCON: MTA Stopping with Event ID 2143: Unrecoverable Error

	Article: Q159307
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange message transfer agent (MTA) terminates unexpectedly with
	an event similar to the following (as viewed in the Application Event Log):
	
	  Event ID: 2143
	  Source:MSExchangeMTA
	  Type:Error
	  Category:Internal Processing
	  Description:
	  A fatal MTA database server error was encountered. Call Microsoft Product
	  Support.
	  Unrecoverable error: ODXOINIU - Object does not exist. About to terminate.
	  Called from MTA. Procedure 205. Object ID: 06000072. Attribute ID: 55.
	  Attribute value number: 1. Referenced object: 00000000 (00000000 => N/A).
	  Referenced object error 0. [1 DB Server XFER-IN 22 101] (16)
	
	The following Application Event Log message may be seen as well:
	
	  Event ID: 2186
	  Source:MSExchangeMTA
	  Type:Warning
	  Category:Internal Processing
	  Description:
	  An MTA database server error was encountered while locking an object. Called
	  from MTA. Procedure 100. Database error code: ODXOINIU - Object does not
	  exist.
	  Object at fault: 06000072. [DB Server XFER-IN 22 59] (14)
	
	CAUSE
	=====
	
	When an MTA object is created, its reference count is initialized to one. When
	the object is passed to an entity that can delete the object, the reference
	count must first be incremented. When an object deletion is requested, the
	reference count is decremented (and when the reference count for the object
	reaches zero, the object is physically deleted).
	
	There is a race condition in the MTA, where a newly initialized object (reference
	count of one) is passed to an entity (the Microsoft Exchange Internet Mail
	Connector) before the reference count is incremented. An object deletion is
	requested by the Internet Mail Connector (IMC) (which decrements the reference
	count to zero, and causes the object to be deleted). When the MTA attempts to
	access the object, the object had already been deleted and an "ODXOINIU - Object
	does not exist" complaint is raised by the MTA.
	
	STATUS
	======
	
	The Microsoft MTA has been modified to ensure that the reference count for the
	object is incremented prior to being passed to an entity that could delete it.
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: failure crash deletion spurious ODXOINIU
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
