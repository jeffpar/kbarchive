---
layout: page
title: "Q269164: Column Headings Change When You Modify Canned Queries"
permalink: /kb/269/Q269164/
---

## Q269164: Column Headings Change When You Modify Canned Queries

{% raw %}

	Article: Q269164
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbMMC kbWBEM kbsms200 kbQuery kbsmsAdmin
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you modify the default queries that exist for a site to include multiple
	Windows Management Instrumentation (WMI) classes, the column headings for each
	column may change to reflect the class name and attribute name.
	
	CAUSE
	=====
	
	The default queries that are included with Systems Management Server (SMS) use
	only a single WMI class. Therefore, they show only the class attribute in the
	column headings. If you add an attribute from a different WMI class to the
	query, the headings change to reflect the WMI class name and the attribute
	because you are using multiple classes in the query. Modifying the query to
	enumerate the attributes from a single WMI class shows only the attribute name
	in the heading. You cannot change this behavior.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbMMC kbWBEM kbsms200 kbQuery kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
