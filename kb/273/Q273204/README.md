---
layout: page
title: "Q273204: SMS: Query-Based Collection Ignores Query If Query Name Typed In"
permalink: /kb/273/Q273204/
---

## Q273204: SMS: Query-Based Collection Ignores Query If Query Name Typed In

{% raw %}

	Article: Q273204
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a collection is based on the results of a query, and if, when you created
	the collection, you typed the query name in the Name box instead of by clicking
	Browse to locate it, the collection membership will not contain the results of
	the query. In fact, the collection will contain the members of the All Systems
	Collection group.
	
	CAUSE
	=====
	
	In Query Rules Properties, the Name box immediately to the left of the Browse
	button is not linked to the Browse button. Actually, when you click Browse, it
	imports the query into the collection.
	
	WORKAROUND
	==========
	
	Do not type in the name of the query for the collection membership. Always click
	Browse for the query you wish to use.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
