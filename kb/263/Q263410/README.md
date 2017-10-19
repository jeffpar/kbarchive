---
layout: page
title: "Q263410: SMS: Distribution Manager Orphans Package Share"
permalink: /kb/263/Q263410/
---

## Q263410: SMS: Distribution Manager Orphans Package Share

	Article: Q263410
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Systems Management Server (SMS) package is created and the
	package location is specified rather than using the default package share
	(SMSPKG<driveletter>$), Systems Management Server creates the new share
	and copies the package into it. If the share name is changed while the package
	is being run or if a large application is being accessed by a user, a new
	package share is created. This orphans the old package share and no errors are
	generated to let the administrator know that the Distribution Point's original
	package share could not be updated. If you select Update Distribution Points,
	the problem is not resolved, but the package is copied into the newly specified
	location.
	
	WORKAROUND
	==========
	
	To prevent this issue from occurring, avoid manually renaming the distribution
	point package shares after the package has been created and moved to the
	distribution points.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
