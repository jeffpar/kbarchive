---
layout: page
title: "Q274275: Queries with German Wordbreaker Return More Results"
permalink: /kb/274/Q274275/
---

## Q274275: Queries with German Wordbreaker Return More Results

	Article: Q274275
	Product(s): Internet Information Server
	Version(s): 2.0,2000,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	- Microsoft Site Server version 3.0 
	- Indexing Service 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the German Wordbreaker, you may get more documents in your query
	result than expected. The following example demonstrates this by using two
	documents:
	
	  Document A contains the string "Verwaltungsmodernisierung"
	  Document B contains the string "Verwaltungsvorschriften"
	
	When you execute a phrase query for "Verwaltungsmodernisierung," you receive both
	documents in the result, even though only Document A is expected.
	
	CAUSE
	=====
	
	This behavior occurs if the original German noise-word list has been changed,
	and the "1" key has been removed from the list.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	For Index Server::
	
	1. Open the %SystemRoot%\System32\Noise.deu file in Notepad.
	
	2. Add the "1" key.
	
	3. Save your changes, and then perform the steps described in the following
	  Microsoft Knowledge Base article:
	
	  Q247561 How to Edit Index Server Noise-Word Lists
	
	For Site Server::
	
	1. Open the Microsoft Site Server\Data\Search\Config\Noise.deu file in Notepad.
	
	2. Add the "1" key, and then save your changes.
	
	3. Stop and restart the Site Server Search and Site Server Gatherer Services for
	  the changes to take effect. To stop and restart the services, use Service
	  Manager or the following command lines:
	
	  net stop "Site Server Search"
	  net stop "Site Server Gatherer"
	  net start "Site Server Search"
	  net start "Site Server Gatherer"
	
	4. Build the catalog again by using the Site Server MMC snap-in.
	
	5. Propagate the new catalog by using the Site Server MMC snap-in.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbSiteServSearch kbIdxServSearch kbAudDeveloper kbIdxServ100 kbIdxServ200 kbSiteServ300
	Version           : :2.0,2000,3.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
