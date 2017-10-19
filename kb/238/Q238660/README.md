---
layout: page
title: "Q238660: Err Msg: No Documents Matched the Query"
permalink: /kb/238/Q238660/
---

## Q238660: Err Msg: No Documents Matched the Query

	Article: Q238660
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Instead of receiving a list of matching documents when you perform a query using
	Microsoft Index Server, you may receive the following error message:
	
	  No Documents Matched the Query
	
	CAUSE
	=====
	
	This error is one of the most common errors that occurs when you try to query on
	a catalog. This error means that the catalog is responding the way that it
	should; however, there is an incorrect setting somewhere that is causing Index
	Server to determine that it has no documents to return.
	
	WORKAROUND
	==========
	
	To find the incorrect setting, use the following troubleshooting steps in the
	order they are listed, and then test after each step:
	
	1. In the Index Server snap-in in the MMC, right-click the name of the catalog
	  you are working with, and then click Properties. In the Properties dialog,
	  click the Web tab and make sure that Track Virtual Roots is enabled and that
	  the correct site is selected on the drop-down menu. If you had the incorrect
	  site selected, rebuild the catalog from scratch (stop Index Server, delete
	  the contents of the Catalog.wci directory, and then restart Index Server).
	
	2. In the Index Server snap-in, click the Directories folder that is a subset of
	  your Catalog. In that list of directories, any directory listed there must
	  have an icon that has a folder with a globe on it. If it has just a folder,
	  delete it from the list. You may want to rebuild the Index if you make
	  changes here. Index Server considers directories that appear in this list
	  with just a folder icon as "physical" directories, which means results that
	  are returned from those directories are not virtual paths (vpaths), but
	  physical paths. This can cause the vpath variable to be unpopulated.
	
	3. Try the samples in the \INETPUB\IISSAMPLES\ISSAMPLES directory. The only
	  variable that may need to be changed is the pointer to the catalog, if you
	  are not using the default catalog. In an IDQ you should see a line like the
	  following:
	
	  # CiCatalog=d:\inetpub\wwwroot\tmjs_index
	
	  Remove the pound sign (#), as the pound sign comments it out, and make sure
	  the path is pointing to the folder that contains your Catalog.wci. In an ASP,
	  you will need to add the Q.Catalog line in the context below:
	
	  set Q = Server.CreateObject("ixsso.Query")
	          set util = Server.CreateObject("ixsso.Util")
	      Q.Catalog="<catalogname>"
	      Q.Query = CompSearch
	      Q.SortBy = "rank[d]"
	      Q.Columns = "DocTitle, vpath, filename, size, write, characterization, rank"
	      Q.MaxRecords = 300 
	
	  Where <catalogname> is the name of your catalog as it appears in the MMC
	  for Index Server (with the quotation marks around it).
	
	4. In the code of your page, make sure the following is true:
	
	  In an IDQ:
	
	  CiScope=/ 
	  CiRestriction=%CiRestriction%
	  CiCatalog=<path to the directory holding the Catalog.wci folder>
	
	  In an ASP:
	
	  FormScope=/ 
	  Q.Query=compsearch
	  Q.Catalog="<catalogname>"
	
	  Where <catalogname> is the name of the catalog as it appears in the
	  Index Server snap-in in the MMC.
	
	  This will ensure that you are running the widest possible search with the most
	  chances of returning results against the correct catalog, with nothing on the
	  query line to prevent results from appearing. Note that this can be changed
	  later.
	
	5. In the IIS snap-in, right-click the root of your Web site and choose
	  Properties. On the Home Directory tab, make sure that the Index this
	  Directory check box is checked. Now, try your query again.
	
	6. Make sure that the directory you are trying to return results from has its
	  Index this Directory check box checked.
	
	7. Index Server does its indexing as the System account. If the System account
	  does not have at least Read permissions on the files that are to be
	  cataloged, the files will not be indexed. Also, make sure the System account
	  has Full Access permissions on the root of the drive that physically contains
	  the catalog, and on the Catalog.wci directory.
	
	8. You are only allowed to view results that you have permissions to see. If you
	  are accessing the query page as the anonymous user, you need to make sure
	  that the anonymous user has at least Read permissions to the document you are
	  trying to find. This goes for any user that is attaching to the query page.
	
	9. Authenticate coming into the query page as an administrator if possible. Try
	  setting the directory that the query page is located in to Basic/Clear Text
	  authentication only, so that you receive a prompt when you attempt to connect
	  to that page. If you log in as an administrator and still receive a "No
	  Documents Found" message, more than likely, you do not have a permissions
	  issue. If you get results, you do have a permissions issue. As an alternative
	  to this, temporarily add the anonymous user to the Administrators group in
	  User Manager.
	
	10. If you are querying on a specific page and it is returning in a #filename
	  query, but it is not being filtered (abstract is not populated), and it is
	  an HTM, HTML, or ASP page, make sure you do not have a ROBOTS=NOINDEX
	  metatag in the header of the document. This will not prevent indexing, but
	  it will prevent filtering.
	
	11. If the files are on an NTFS partition on a Windows 2000 computer, go into
	  Properties for the folder or drive. On the General tab, click Advanced. Make
	  sure that the "For fast searching, allow Indexing Service to index this
	  file" check box is selected.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
