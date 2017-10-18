---
layout: page
title: "Q170902: SMS: Printed SMS Query Results Do Not Match Screen Results"
permalink: kb/170/Q170902/
---

## Q170902: SMS: Printed SMS Query Results Do Not Match Screen Results

	Article: Q170902
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbprint kbsmsAdmin smsadmin
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Systems Management Server Administrator program to print a hard
	copy of query results, the printed output contains empty lines for some entries.
	
	CAUSE
	=====
	
	The last object in the defined Query Result Format is using an attribute that
	contains an empty or null value.
	
	WORKAROUND
	==========
	
	To work around this problem, move the Query Result Format object up in the
	Format list so that it is no longer the last object queried.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbprint kbsmsAdmin smsadmin 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	
