---
layout: page
title: "Q270056: Indexing Service Catalog Updates Take Several Hours/Days to Show"
permalink: /kb/270/Q270056/
---

## Q270056: Indexing Service Catalog Updates Take Several Hours/Days to Show

	Article: Q270056
	Product(s): Internet Information Server
	Version(s): 2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Indexing Service 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you update a catalog to include a new directory for indexing, the newly
	indexed directory's content does not appear for several hours or days. The files
	are eventually indexed, but the time lapse is not acceptable.
	
	CAUSE
	=====
	
	A significant change in Indexing Service, included with Windows 2000, is the
	behavior of instant indexing by default. When originally installed, the setting
	is set to index at regular intervals, but not instantly. In Index Server 2.0,
	this was set to index instantly by default.
	
	RESOLUTION
	==========
	
	To enable instant indexing, Indexing Service needs to be tuned by using the
	Indexing Service snap-in. To do this, follow these steps:
	
	1. Open the Computer Management MMC.
	
	2. Right-click Indexing Service, and then click Stop.
	
	3. Right-click Indexing Service again, click All Tasks, and then select
	  Performance Tune.
	
	4. In the Indexing Service Usage dialog box, select Customize.
	
	5. In Indexing Service Performance Indexing, slide the slider bar to Instant.
	
	6. Right-click Indexing Service, and then click Start.
	
	Additional query words: NT 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbIdxServSearch kbAudDeveloper kbIdxServ100
	Version           : :2000
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
