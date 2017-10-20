---
layout: page
title: "Q264703: SMS:Queries Missing During Collection Creation"
permalink: /kb/264/Q264703/
---

## Q264703: SMS:Queries Missing During Collection Creation

{% raw %}

	Article: Q264703
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Systems Management Server (SMS) 2.0, if you want to create a new
	collection based on a query membership rule, you can use the Browse button in
	the Query Rule Properties window to import available queries. However, not all
	queries listed under the queries object in the SMS administrator console are
	displayed in the Browse Query window.
	
	MORE INFORMATION
	================
	
	This behavior occurs because the Browse Query window only displays queries based
	on the resource class or object type (for example, System Resource, User Group
	Resource or User Resource).
	
	In addition, queries that contain prompted value statements are not displayed as
	a collection. This kind of query would prompt the user for input at every
	collection update interval.
	
	
	Additional query words: prodsms disappear
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
