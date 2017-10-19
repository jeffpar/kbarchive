---
layout: page
title: "Q183725: Query Form Doesn't Provide Link to NNTP Articles"
permalink: /kb/183/Q183725/
---

## Q183725: Query Form Doesn't Provide Link to NNTP Articles

	Article: Q183725
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
	
	The sample NNTP Query form shipped with Index Server 2.0 returns a table of
	articles found matching the query; however, no link is returned that allows you
	to open the document.
	
	WORKAROUND
	==========
	
	If you want to return a link that the client can use to view the news articles,
	you must modify the Nntpqry.asp file. The following is an example of how you can
	modify the code to return a valid link to the news article:
	
	     <a href="news://news.server.com/<% = Server.HTMLEncode(RS("newsmsgid"))%>">
	
	This returns a link to the article on the server-specified news server.
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : WINNT:2.0
	Issue type        : kbprb
	
	=============================================================================
	
