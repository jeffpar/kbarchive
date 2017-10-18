---
layout: page
title: "Q261274: SMS: Software Wizard May Not Show All Distribution Points"
permalink: kb/261/Q261274/
---

## Q261274: SMS: Software Wizard May Not Show All Distribution Points

	Article: Q261274
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kbsms200 kbsms200bug
	Last Modified: 21-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a mixed Systems Management Server (SMS) hierarchy where SMS 1.2 primary and
	secondary sites report up to an SMS 2.0 central site, the Distribute Software
	Wizard may not reliably display or distribute packages to all the SMS 1.2
	default package servers configured in the SMS 1.2 sites.
	
	WORKAROUND
	==========
	
	To work around this problem, do not use the Distribute Software Wizard to
	distribute packages in a mixed SMS 1.2 and SMS 2.0 environment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	
	MORE INFORMATION
	================
	
	This behavior is not a problem when you manually distribute packages using the
	SMS Administrator console (right-click the distribution points of the package,
	and then click Update Distribution Points or Manage Distribution Points).
	
	Additional query words: prodsms dsw
	
	======================================================================
	Keywords          : kbenv kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
