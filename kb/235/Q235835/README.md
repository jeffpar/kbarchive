---
layout: page
title: "Q235835: SMS: Users With Restrict Collect View Rights May See Resources"
permalink: /kb/235/Q235835/
---

## Q235835: SMS: Users With Restrict Collect View Rights May See Resources

{% raw %}

	Article: Q235835
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
	
	It may be possible for a user to create a Systems Management Server Collection
	and see "All Systems" even though a user rights to Collections have been
	restricted.
	
	CAUSE
	=====
	
	The "limit to == unlimited" property is not validated and the result is that the
	user can create a collection and see any resource they want to see, even if they
	have been granted rights via a "master" collection to only see certain systems.
	
	RESOLUTION
	==========
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
