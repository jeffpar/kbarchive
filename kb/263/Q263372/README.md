---
layout: page
title: "Q263372: SMS: Advertisements Can Run Multiple Times"
permalink: /kb/263/Q263372/
---

## Q263372: SMS: Advertisements Can Run Multiple Times

	Article: Q263372
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200preSP3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a package and program that runs only when a user is logged on, and
	you assign the "Run once for every user who logs on" property, and you advertise
	the package and program on a reoccurring schedule, the advertisement runs
	multiple times at each scheduled interval. The number of times the advertisement
	runs depends on the number of users who have logged in and run the advertisement
	initially.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
