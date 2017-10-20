---
layout: page
title: "Q270057: Upgrade to Windows 2000 Indexing Service Deletes Custom Catalogs"
permalink: /kb/270/Q270057/
---

## Q270057: Upgrade to Windows 2000 Indexing Service Deletes Custom Catalogs

{% raw %}

	Article: Q270057
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
	
	When you upgrade to Windows 2000 Server Indexing Service, custom catalogs that
	were created by using Index Server version 2.0 and earlier are lost. There are
	only two catalogs (the "Web" and the "System" catalog) that are installed with
	the product by default.
	
	CAUSE
	=====
	
	The method used to build catalogs in Windows 2000 Indexing Service is different
	from the method used in Index Server version 2.0 and earlier. For this reason,
	all custom catalogs are removed during the upgrade.
	
	RESOLUTION
	==========
	
	In Windows 2000 Indexing Service, you must manually re-create each additional
	custom catalog (beyond the default catalogs). You can reuse the previous catalog
	build names, and the content will be re-indexed by using the new Indexing
	Service methods when they are created. You can add additional catalogs to the
	Indexing Service by using the Indexing Service snap-in.
	
	To create a new catalog, open Computer Management under Administrative Tools,
	click the Services and Applications tab, and follow these steps:
	
	1. Right-click Indexing Service, click New, and then click Catalog.
	
	2. Specify the name of the catalog in the Name field, and then enter the
	  location for the catalog file (for example, c:\catalogs).
	
	3. Stop, and then restart Indexing Service by right-clicking Indexing Service,
	  selecting Stop, and then clicking Start.
	
	MORE INFORMATION
	================
	
	The new product name for Index Server 2.0 is Indexing Service. Indexing Service
	is now part of the core operating system, as it is now being used to catalog
	physical directories, as well as Web content information.
	
	
	Additional query words: Index Server 3.0 Lost Disappeared Old W2K
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbIdxServSearch kbAudDeveloper kbIdxServ100
	Version           : :2000
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
