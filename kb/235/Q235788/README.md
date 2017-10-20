---
layout: page
title: "Q235788: SMS: Distribution Mgr Process PKG File and Update Distribution"
permalink: /kb/235/Q235788/
---

## Q235788: SMS: Distribution Mgr Process PKG File and Update Distribution

{% raw %}

	Article: Q235788
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
	
	When distributing packages to child primary or secondary sites the Distribution
	Manager may not process the *.pkg file in the \SMS\Inboxes\DistMgr.box\Incoming
	directory. Distribution Manager will be running and logging but it appears that
	it does not detect this incoming package.
	
	This causes the package not to arrive at any of the Distribution Points for this
	particular site. Do not update the same package on distribution points in a
	close time frame. Allow time for each update to complete before updating the
	distribution points again.
	
	CAUSE
	=====
	
	This is caused by the Distribution Manager and Despooler attempting to update
	the package source files at the same time using different version numbers. This
	usually occurs when Distribution Manager receives a package update while it is
	decompressing the source files for the same package.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
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
	

{% endraw %}
