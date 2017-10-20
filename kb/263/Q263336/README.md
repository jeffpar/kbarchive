---
layout: page
title: "Q263336: &quot;NOT&quot; Operator May Cause Software Distribution to All Computers"
permalink: /kb/263/Q263336/
---

## Q263336: &quot;NOT&quot; Operator May Cause Software Distribution to All Computers

{% raw %}

	Article: Q263336
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The IS NOT EQUAL, IS NOT LIKE and NOT IN operators may not work correctly in a
	multi-site Systems Management Server (SMS) hierarchy where custom classes on
	which the queries are based do not exist throughout the hierarchy. Improperly
	evaluating the NOT statement in sites of the hierarchy where the custom classes
	do not exist could result in software being distributed to all computers.
	
	CAUSE
	=====
	
	This problem can occur when the collection evaluator attempts to evaluate the
	membership of a collection with a NOT statement for which the class does not
	exist. Under these conditions, the collection evaluator incorrectly returns all
	computers.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods:
	
	- Employ any custom MIFs in all sites within the hierarchy.
	
	- Avoid using a NOT operator in Collection Rules.
	
	- Manually edit collection rules to check for the existence of a class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	SMS version 2.0 uses a distributed collection evaluation process in which each
	primary site performs its own evaluations. Custom classes created by custom MIFs
	in one part of the hierarchy flow up to the central site. Collection membership
	rules are replicated from the central site down the hierarchy. If at the central
	site, query-based collections are created by using the custom classes at
	down-level sites that do not employ those custom MIFs, the collections are not
	properly evaluated because the classes do not exist.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
