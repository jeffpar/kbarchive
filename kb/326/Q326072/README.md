---
layout: page
title: "Q326072: SMS: First 2,000 Results Are Returned When You Search for Values"
permalink: kb/326/Q326072/
---

## Q326072: SMS: First 2,000 Results Are Returned When You Search for Values

	Article: Q326072
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool kbui kbsms200 kbsms200bug
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you make a query and the value for which you are searching is not known
	ahead of time, you can display a list of known values by clicking the Values
	button in Systems Management Server (SMS) 2.0. This list displays the values
	that might match the query criteria. When you click the Values button, only the
	first 2,000 results are returned.
	
	CAUSE
	=====
	
	This behavior occurs because the 2,000-result limit is set for performance
	reasons. Note that you cannot change this limit.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If a value is not in the list, you can manually add the value.
	
	Additional query words: prodsms smsquery
	
	======================================================================
	Keywords          : kbtool kbui kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
