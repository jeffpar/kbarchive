---
layout: page
title: "Q238737: VPath Variable Not Populated in Index Server Results Page"
permalink: kb/238/Q238737/
---

## Q238737: VPath Variable Not Populated in Index Server Results Page

	Article: Q238737
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
	
	When a customer returns results from a query in Index Server, the URL to the
	matching document may be missing the virtual path to the document.
	
	CAUSE
	=====
	
	This problem can occur when a physical directory in the Index Server snap-in for
	the Microsoft Management Console (MMC) is added to the Directories folder
	located under the catalog or by a backslash in the Scope variable in the code of
	the query page.
	
	RESOLUTION
	==========
	
	In the Index Server snap-in in the MMC, find the Directories folder that is a
	subset of your catalog. In the list of directories, any directory there must
	have an icon that has a folder with a globe on it. If it has a plain folder,
	delete it from the list. You may want to rebuild the Index if you make changes
	here (stop Index Server, delete or move the contents of the Catalog.wci
	directory, and then restart Index Server). Index Server considers directories
	that appear in this list with the plain folder icon as "physical" directories,
	which means the results returned from those directories are not virtual paths
	(vpaths), but physical paths. This may cause the vpath variable to be
	unpopulated and links to documents to be missing from the results page.
	
	Also, make sure that in the code for the query page, you have specified the
	correct scope. In the default ASP file, find the following line and make sure it
	appears the same:
	
	  	Formscope="/"
	
	In an IDQ file, make your CiScope line appears as follows:
	
	  	CiScope=/ 
	
	Make sure that you are using a forward slash (or forward slashes for a longer
	path). If you use a back slash, your results will be physical, which may result
	in missing vpaths.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
