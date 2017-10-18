---
layout: page
title: "Q235745: SMS: Setup Doesn't Create SMS Admins on Backup Domain Controller"
permalink: kb/235/Q235745/
---

## Q235745: SMS: Setup Doesn't Create SMS Admins on Backup Domain Controller

	Article: Q235745
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Systems Management Server 2.0 on a backup domain controller, the
	"SMS Admins" local group will not be created in the domain.
	
	WORKAROUND
	==========
	
	Manually create a local group in User Manager for Domains called "SMS Admins."
	Add the users that you want to have rights to the Systems Management Server 2.0
	Administrator Console to this group.
	
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
	
