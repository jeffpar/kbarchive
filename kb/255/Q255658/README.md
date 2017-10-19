---
layout: page
title: "Q255658: SMS: Manage SMS Users Does Not Remove Users from SMS Admins"
permalink: /kb/255/Q255658/
---

## Q255658: SMS: Manage SMS Users Does Not Remove Users from SMS Admins

	Article: Q255658
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbSecurity kbsms200 kbsms200bug kbsmsAdmin kbsms200preSP3
	Last Modified: 26-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Manage SMS Users Wizard to grant rights to a user, the user is
	added to the SMS Administrators group in the domain. However, when you use the
	wizard to remove the user's rights, the user is not removed from the SMS
	Administrators group.
	
	WORKAROUND
	==========
	
	When you remove permissions from a user account, manually remove the user
	account from the SMS Administrators local group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbSecurity kbsms200 kbsms200bug kbsmsAdmin kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
