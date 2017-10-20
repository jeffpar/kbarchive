---
layout: page
title: "Q248065: How to Search for Unfiltered Documents in a Non Default Catalog"
permalink: /kb/248/Q248065/
---

## Q248065: How to Search for Unfiltered Documents in a Non Default Catalog

{% raw %}

	Article: Q248065
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbIISkbfaq
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use different catalogs on Index Server, you can query only the default
	catalog for "Unfiltered Documents" using the HTML Index Server Administration.
	By default you cannot query for "Unfiltered Documents" from another catalog,
	however, for some administrative issues this query might be useful.
	
	MORE INFORMATION
	================
	
	To search for "Unfiltered Documents" in a catalog different from the default
	catalog you need to change the Unfilt.idq script from HTML Index Server
	Administration, which is located in the following:
	
	<WINNT>\system32\inetsrv\iisadmin\isadmin\unfilt.idq
	
	Proceed the following steps to customize Unfilt.idq:
	
	1. Create a backup copy of Unfilt.idq.
	
	2. Edit and change the following line in Unfilt.idq:
	
	  # CiCatalog=d:\ 
	
	  to
	
	  CiCatalog=<Catalog Location>
	
	  Where <Catalog Location> is the current location of the catalog you want
	  to query. You will find the location value for the catalog in the MMC Snap-in
	  "Index Server on Local Machine" in the right pane under "Location". You are
	  free to use the location value or the catalog name.
	
	  For example:
	
	  The Catalog Location is D:\test and the Catalog Name is testcatalog.
	  Therefore you can use: CiCatalog=D:\test or CiCatalog=testcatalog.
	
	3. Save unfilt.idq.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbIIS kbfaq
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Hardware          : x86
	Issue type        : kbhowto
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
