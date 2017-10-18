---
layout: page
title: "Q191147: How to Resolve Catalog Corruption"
permalink: kb/191/Q191147/
---

## Q191147: How to Resolve Catalog Corruption

	Article: Q191147
	Product(s): Internet Information Server
	Version(s): 1.0,1.1,2.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 17-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 1.0, 1.1, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may see the error "the catalog is corrupt" when you issue a query in the
	browser. You may also see catalog corruption errors in the application event
	log. These messages will vary depending on the type of corruption detected.
	
	CAUSE
	=====
	
	Index Server catalog corruption can be caused by unsafe computer shutdowns,
	system crashes, or applications that write to or lock the catalog files while
	Index Server is active.
	
	RESOLUTION
	==========
	
	Normally, Index Server attempts to fix any corruption automatically; however,
	sometimes it is necessary to manually fix the corruption. To do manually fix
	corruption, stop and restart the Content Index service (for Index 1.x, stop and
	restart the World Wide Web service.) This normally causes Index Server to
	rebuild the catalog. If this does not work, stop Index Server again, locate the
	Catalog.wci folder, and delete the contents of the folder. This manually deletes
	the catalog. When you restart Index Server, the catalog is re-created.
	
	Note: If the Web Server is using the FrontPage Server Extensions, make sure the
	catalog is not inside the Web.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100 kbIdxServ110 kbIdxServ200
	Version           : :1.0,1.1,2.0
	Issue type        : kbprb
	
	=============================================================================
	
