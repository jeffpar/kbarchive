---
layout: page
title: "Q318323: PRB: Empty Cache Statistics Using Index Server Admin Page"
permalink: /kb/318/Q318323/
---

## Q318323: PRB: Empty Cache Statistics Using Index Server Admin Page

{% raw %}

	Article: Q318323
	Product(s): Internet Information Server
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Index Server Web Admin page, which is located at
	http://localhost/iisadmin/isadmin, all of the cache statistics return with a
	value of 0.
	
	For example:
	
	  Administration - Index Statistics 
	
	     Cache Statistics 
	     # Active queries: 0  % Hits: 0 
	     # Cached queries: 0  % Misses: 0 
	     # Pending queries: 0  Total queries: 0 
	     # Rejected queries: 0  Queries / minute: 0 
	
	     Index Statistics 
	     Total documents: 1,615  # Documents filtered: 181 
	     Total size (MB): 2  # Documents pending: 0 
	     # Persistent Indexes: 5  # Documents changed: 59 
	     # Wordlists: 0  # Directories to be scanned: 0 
	     # Unique keys: 21,746  # Queries executed: 1 
	
	     All filtering is complete. Index is up to date.
	
	MORE INFORMATION
	================
	
	These cache statistics only apply to Internet Data Query (IDQ) queries. To
	obtain a combined query count for all query mechanisms, use the following Index
	Server Performance Monitor counter:
	
	  Total # of queries
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : :2.0,3.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
