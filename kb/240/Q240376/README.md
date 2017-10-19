---
layout: page
title: "Q240376: Err Msg: HTTP 500 - Internal Server Error"
permalink: /kb/240/Q240376/
---

## Q240376: Err Msg: HTTP 500 - Internal Server Error

	Article: Q240376
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you do a query in Index Server, an error message similar to the following
	may occur:
	
	  HTTP 500 - Internal server error
	  Internet Explorer
	
	Generally, this error occurs after you click the Go button to execute the query.
	
	CAUSE
	=====
	
	There is no default application Starting Point defined for the folder that
	contains the query pages.
	
	RESOLUTION
	==========
	
	In the Microsoft Management Console for Internet Information Server, right-click
	the root of the site that contains the query pages and choose Properties from
	the list. On the Home Directory tab, click the Create button on the lower part
	of the page. Click OK and retry the query.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
