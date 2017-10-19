---
layout: page
title: "Q235751: SMS: Wizard Internal Error: Invalid WBEM Query Result"
permalink: /kb/235/Q235751/
---

## Q235751: SMS: Wizard Internal Error: Invalid WBEM Query Result

	Article: Q235751
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to use the Distribute software wizard by right-clicking on a
	collection and choosing the distribute software item in the all-tasks pop-up
	menu, the following error message appears:
	
	  Wizard internal error: invalid WBEM query result. Please exit the Wizard
	
	After selecting OK the distribute software wizard is displayed but none of the
	existing packages are listed in the table at the bottom of the window.
	
	CAUSE
	=====
	
	This is caused by a problem in the way that the distribute software wizard
	obtains the list of available packages from the site database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
