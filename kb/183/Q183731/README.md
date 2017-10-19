---
layout: page
title: "Q183731: How to Index and Create a Catalog for a New Web Site"
permalink: /kb/183/Q183731/
---

## Q183731: How to Index and Create a Catalog for a New Web Site

	Article: Q183731
	Product(s): Internet Information Server
	Version(s): WINNT:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	- Indexing Service 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create a new Web site, the site is not automatically marked as indexed
	when you create a catalog for it.
	
	MORE INFORMATION
	================
	
	To correctly index a new Web site, follow these steps:
	
	For Index Server 2.0
	
	1. Make sure that the Web site has been created in the Internet Information
	  Server snap-in.
	
	2. In the Index Server snap-in, create a new catalog. After the catalog has been
	  created, view the properties for it. On the Web tab, select the Web site that
	  you want to index, and click OK.
	
	3. Go back to the Internet Information Server snap-in, and select Properties on
	  the Web site you are indexing.
	
	4. On the Home Directory tab, select the Index This Directory check box, and
	  click OK.
	
	5. Stop the Index server, and then restart it. The new catalog should come
	  online and begin indexing the new Web site.
	
	For Windows 2000 Indexing Service
	
	1. Make sure that the Web site has been created in the Internet Information
	  Server snap-in.
	
	2. In the Index Server snap-in, create a new catalog. After the catalog has been
	  created, view the properties for it. On the Tracking tab, select the Web site
	  that you want to index from the WWW Server pull-down menu, and then click OK.
	
	3. Go back to the Internet Information Server snap-in, and select Properties on
	  the Web site you are indexing.
	
	4. On the Home Directory tab, select the Index This Resource check box, and
	  click OK.
	
	5. Stop the Index Service, and then restart it. The new catalog should come
	  online and begin indexing the new Web site. In Windows 2000, Indexing Service
	  does not need to be restarted. Stopping and restarting the catalog is enough.
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100 kbIdxServ200
	Version           : WINNT:2.0
	Issue type        : kbhowto
	
	=============================================================================
	
