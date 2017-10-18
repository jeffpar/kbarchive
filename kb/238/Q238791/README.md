---
layout: page
title: "Q238791: Specifying a Catalog in ASP Code (IXSSO Query)"
permalink: kb/238/Q238791/
---

## Q238791: Specifying a Catalog in ASP Code (IXSSO Query)

	Article: Q238791
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a server with multiple catalogs, any query page that is not querying the
	default catalog needs to specify in its code the catalog it is querying against.
	This article provides examples of how to specify the catalog within ASP files
	that are using the IXSSO object to query Index Server.
	
	RESOLUTION
	==========
	
	NOTE: This example uses the IXSSO object and is based on Query.asp, which is
	installed by default with the Index Server.
	
	In the Query.asp page, find the section that looks like the following:
	
	  set Q = Server.CreateObject("ixsso.Query")
	          set util = Server.CreateObject("ixsso.Util")
	      Q.Query = CompSearch
	      Q.SortBy = "rank[d]"
	      Q.Columns = "DocTitle, vpath, filename, size, write, characterization, rank"
	      Q.MaxRecords = 300
	
	To specify a catalog in the ASP page, add a line so that section appears
	follows:
	
	  set Q = Server.CreateObject("ixsso.Query")
	          set util = Server.CreateObject("ixsso.Util")
	      Q.CATALOG="<catalogname>"
	      Q.Query = CompSearch
	      Q.SortBy = "rank[d]"
	      Q.Columns = "DocTitle, vpath, filename, size, write, characterization, rank"
	      Q.MaxRecords = 300
	
	The Q.Catalog line that you add will have a value equal to the name of your
	catalog as it appears in the Microsoft Management Console (MMC) for Index
	Server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
