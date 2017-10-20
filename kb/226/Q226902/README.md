---
layout: page
title: "Q226902: SMS: User Wizard Doesn't Delete a User Group from Another Domain"
permalink: /kb/226/Q226902/
---

## Q226902: SMS: User Wizard Doesn't Delete a User Group from Another Domain

{% raw %}

	Article: Q226902
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Microsoft Systems Management Server User Wizard to
	remove a user group from another domain, the user group is not deleted.
	
	WORKAROUND
	==========
	
	To work around this issue, manually select and delete the user group from within
	the Systems Management Server Console. To do so, follow these steps:
	
	1. Navigate to the Security Rights window.
	
	2. Select "Domain A\Domain Users" and manually delete it from this group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
