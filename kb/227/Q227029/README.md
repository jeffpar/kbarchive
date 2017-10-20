---
layout: page
title: "Q227029: SMS: &quot;All Tasks&quot; List May Be Incomplete When Activated on Query"
permalink: /kb/227/Q227029/
---

## Q227029: SMS: &quot;All Tasks&quot; List May Be Incomplete When Activated on Query

{% raw %}

	Article: Q227029
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 07-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you right-click a resource that appears in the results pane of a query and
	then point to All Tasks, the available tasks differ from those that appear when
	you right-click the same resource from a collection and then point to All Tasks.
	
	CAUSE
	=====
	
	Any query created by the query builder that does not have simple property access
	to the ResourceID property does not have access to some tasks. For example, the
	query returns a subset of the sms_r_system properties, and the subset does not
	contain the ResourceID property or it returns multiple embedded generic objects.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	WORKAROUND
	==========
	
	When possible, include the ResourceID property in your queries.
	
	  -or-
	
	Use queries to locate resources, and then find the same resource in one of the
	collections folders. From the collection results, right-click the object, point
	to All Tasks, and then click your task.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
