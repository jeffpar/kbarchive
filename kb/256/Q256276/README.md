---
layout: page
title: "Q256276: Error Message: There Is No Catalog"
permalink: kb/256/Q256276/
---

## Q256276: Error Message: There Is No Catalog

	Article: Q256276
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type in a query, and then click the Go button to execute the query, the
	query does not return. Instead, you receive a page that displays the following
	error message:
	
	  There is no catalog
	
	CAUSE
	=====
	
	The catalog specified in either the code of the query page or the default
	catalog path in the registry is invalid.
	
	RESOLUTION
	==========
	
	If you do not specify a catalog in your code, Index Server finds the path to the
	default catalog using following registry key, and then uses that catalog:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ContentIndex
	
	The path is located under the IsapiDefaultCatalogDirectory value and should be
	the same as the physical path to the directory that contains the Catalog.wci
	directory.
	
	If you choose to specify your catalog in the code of your pages, the method you
	use depends on how you are doing your queries. In an IDQ file, use a command
	line similar to the following:
	
	  CiCatalog=<catalogpath>
	
	where <catalogpath> is the same as the path to the directory that contains
	the Catalog.wci directory. For example, if the physical path to your Catalog.wci
	folder is C:\Inetpub\Catalogs\Catalog.wci, then your CiCatalog line will be
	similar to the following:
	
	  CiCatalog=C:\Inetpub\Catalogs
	
	The CiCatalog variable should be located in the [Query] section of the IDQ file.
	
	In an ASP file, use the Q.Catalog line to specify the name of the catalog to be
	queried.
	
	NOTE: This example uses the IXSSO object and is based on Query.asp, which is
	installed by default with Index Server.
	
	In the Query.asp page, find the section that resembles the following:
	
	  set Q = Server.CreateObject("ixsso.Query")
	          set util = Server.CreateObject("ixsso.Util")
	      Q.Query = CompSearch
	      Q.SortBy = "rank[d]"
	      Q.Columns = "DocTitle, vpath, filename, size, write, characterization, rank"
	      Q.MaxRecords = 300
	
	To specify a catalog in the ASP page, add a Q.Catalog line so that section
	appears follows:
	
	  set Q = Server.CreateObject("ixsso.Query")
	          set util = Server.CreateObject("ixsso.Util")
	      Q.CATALOG="<catalogname>"
	      Q.Query = CompSearch
	      Q.SortBy = "rank[d]"
	      Q.Columns = "DocTitle, vpath, filename, size, write, characterization, rank"
	      Q.MaxRecords = 300
	
	The Q.Catalog line that you add has a value equal to the name of your catalog as
	it appears in the Microsoft Management Console (MMC) for Index Server.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q238791 Specifying a Catalog in ASP Code (IXSSO Query)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
