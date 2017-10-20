---
layout: page
title: "Q234791: Using Index Server to Achieve Hit Highlighting in Site Server Se"
permalink: /kb/234/Q234791/
---

## Q234791: Using Index Server to Achieve Hit Highlighting in Site Server Se

{% raw %}

	Article: Q234791
	Product(s): Internet Information Server
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Site Server version 3.0 
	- Microsoft Site Server version 3.0, Commerce Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Site Server Search does not provide hit-highlighting capabilities. If you desire
	this functionality and you meet at least the following requirements, you can use
	Index Server to implement this functionality:
	
	   - You are performing a file crawl on local documents.
	
	- You have IIS installed and running on the document server.
	
	- You are already familiar with coding Search Server ASP and Index Server HTW
	  pages.
	
	MORE INFORMATION
	================
	
	To enable hit-highlighting, do the following:
	
	1. Create a new Web site on the document server that points to the document
	  data.
	
	2. Create an HTW file as a template for your hit highlighting and place this
	  file in a directory on your document server. Grant this file Script
	  permissions.
	
	3. Modify your search results page to reference the HTW file on the document
	  server, passing in at least the following parameters: CiWebHitsFile,
	  CiRestriction, CiHiliteType, CiBeginHilite, CiEndHilite.
	
	At this point, clients can perform a search using the Search Server search and
	results pages. When they click on a result, they can forward to the
	hit-highlighted version of the document as constructed by the HTW page.
	
	NOTES:
	
	- No catalogs need to be generated in Index Server. You are only using the
	  hit-highlighting functionality.
	
	- No additional security problems should arise because the Web sites introduced
	  do not have default pages or directory browsing. Additionally, they will be
	  protected by using NTCR. No additional configuration is needed for this
	  beyond the initial creation of the Web site.
	
	- The document server may reside on the Search server itself.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSiteServSearch kbAudDeveloper kbSiteServ300 kbSiteServ300Search
	Version           : winnt:3.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
