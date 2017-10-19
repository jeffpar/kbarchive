---
layout: page
title: "Q235740: SMS: ODP Incorrectly Identifies User Name for Targeted Ads"
permalink: /kb/235/Q235740/
---

## Q235740: SMS: ODP Incorrectly Identifies User Name for Targeted Ads

	Article: Q235740
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Systems Management Server 2.0 to advertise a program to a user, the
	user might not receive the advertisement. This problem might occur if the
	Windows NT machine account for the machine the user is logged into resides in a
	domain other than the user's domain (typically the accounts domain).
	
	CAUSE
	=====
	
	The workstation domain name was being retrieved rather than the logged-in user
	domain name.
	
	WORKAROUND
	==========
	
	Create a Global group in the Windows NT domain where the user account resides.
	Add the users you want to have receive the advertisement to this group.
	Advertise the program to the user group in place of directly advertising the
	program to the user.
	
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
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
