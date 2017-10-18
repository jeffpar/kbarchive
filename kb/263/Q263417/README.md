---
layout: page
title: "Q263417: Unable to Make Access Changes for Custom Share Points Packages"
permalink: kb/263/Q263417/
---

## Q263417: Unable to Make Access Changes for Custom Share Points Packages

	Article: Q263417
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a custom Microsoft Windows NT share for a package distribution
	point you cannot make permission modifications for the access account.
	
	CAUSE
	=====
	
	This problem occurs only on previously distributed packages on distribution
	points that are custom-created Windows NT shares. New packages receive the
	correct permissions, but they cannot be modified once they are distributed.
	
	WORKAROUND
	==========
	
	To work around this behavior, you can change permissions if you remove the
	package from the distribution point, adjust the access accounts, and then
	redistribute the package to the distribution point.
	
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
	
