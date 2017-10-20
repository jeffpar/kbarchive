---
layout: page
title: "Q183723: Default NNTP Query Form Returns Blank Table Cells"
permalink: /kb/183/Q183723/
---

## Q183723: Default NNTP Query Form Returns Blank Table Cells

{% raw %}

	Article: Q183723
	Product(s): Internet Information Server
	Version(s): WINNT:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you issue queries using the sample NNTP query form that is shipped with
	Index Server 2.0, you may receive a result set that contains blank cells in the
	result table.
	
	CAUSE
	=====
	
	The code for the query form does not take into consideration that the default
	catalog is set to index both newsgroup articles and documents contained on the
	web server. The blank entries in the table are actually documents that were
	found on the web site that match the query. Because non- NNTP documents do not
	have the properties that are displayed on the result page, the cells are
	populated with null data.
	
	RESOLUTION
	==========
	
	To resolve this problem, you either need to create a separate catalog that
	indexes only NNTP articles, or modify the code of the NNTP sample search form so
	that it only returns documents with .nws extensions. The modification to the
	existing code is to modify the Q.Query line as follows:
	
	     Q.Query = "(" & CompSearch & ") and #filename *.nws"
	
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : WINNT:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
