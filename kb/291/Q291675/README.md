---
layout: page
title: "Q291675: SMS: Advertisements Incorrectly Go to All Computers"
permalink: /kb/291/Q291675/
---

## Q291675: SMS: Advertisements Incorrectly Go to All Computers

	Article: Q291675
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new collection in the Systems Management Server (SMS)
	Administrator Console, the collection is created based on a query. In the Query
	box, only a name is displayed; the query statement stays in its default state,
	which results in the collection returning the results of all systems. The
	default query statement is:
	
	  SELECT * FROM SMS_R_SYSTEM
	
	CAUSE
	=====
	
	This behavior is by design.
	
	WORKAROUND
	==========
	
	To work around this behavior, when you create a new query, make sure to generate
	the proper query statement and do not leave the default settings.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
