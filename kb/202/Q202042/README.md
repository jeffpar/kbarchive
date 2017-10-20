---
layout: page
title: "Q202042: SMS: How to Get Query Operator to Find Items with NULL Values"
permalink: /kb/202/Q202042/
---

## Q202042: SMS: How to Get Query Operator to Find Items with NULL Values

{% raw %}

	Article: Q202042
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbQuery
	Last Modified: 22-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server 2.0, the query operator is not able to find items
	whose value is NULL.
	
	WORKAROUND
	==========
	
	When typing values in Systems Management Server 2.0 to query on, some value must
	be specified. If your intent is to find all computers that have a NULL value for
	a particular instance, an error will be generated when trying to set up the
	query. To get the query to operate properly, type a space character in the
	field. This will act that same as a NULL entry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbQuery 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
