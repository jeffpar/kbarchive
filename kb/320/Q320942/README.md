---
layout: page
title: "Q320942: Wildcard Searches Unsuccessful on Indexing Service 3.0"
permalink: /kb/320/Q320942/
---

## Q320942: Wildcard Searches Unsuccessful on Indexing Service 3.0

{% raw %}

	Article: Q320942
	Product(s): Internet Information Server
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Site Server version 3.0 
	- Indexing Service 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Indexing Service 3.0 to query a catalog on a server, if the query
	contains the wildcard function (for example, micro*), the query does not return
	the expected results.
	
	CAUSE
	=====
	
	By default, when the query contains the wildcard function, the query for that
	string is interpreted literally.
	
	RESOLUTION
	==========
	
	The default dialect for Indexing Service 3.0 is Dialect 2, which is free-text
	mode. In free-text mode, the wildcard character (*) represents itself instead of
	the wildcard function. To enable wildcard functionality, you must change the
	dialect to Dialect 1, or phrase mode. To do this, add the following line in your
	Active Server Pages (ASP) search page, where <Query> is the name of your
	instantiation of the Index Server Query server-side object:
	
	  <Query>.Dialect = 1
	
	MORE INFORMATION
	================
	
	For more information about the Dialect property, see the following Microsoft
	Developer Network (MSDN) Web site:
	
	  Query.Dialect
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/indexsrv/ixrefobj_31ro.asp
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSiteServSearch kbIdxServSearch kbAudDeveloper kbIdxServ100 kbSiteServ300
	Version           : :3.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
