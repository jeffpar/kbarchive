---
layout: page
title: "Q241319: INDEX: Certain files not showing up in results"
permalink: kb/241/Q241319/
---

## Q241319: INDEX: Certain files not showing up in results

	Article: Q241319
	Product(s): Internet Information Server
	Version(s): winnt:1.1,2.0
	Operating System(s): 
	Keyword(s): kbprb
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 1.1, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you do a query, you notice that some files do not show up in the results
	page, and when you look at the catalog's statistics you may notice that the
	value in the "Docs to Filter" column is not zero, and never reaches zero.
	
	CAUSE
	=====
	
	There are three reasons that the "Docs to Filter" column would not reach zero or
	that certain files would not be indexed:
	
	- There are so many changes occurring on the site that Index Server is
	  constantly trying to catch up.
	- You are running an anti-virus package on the server, and it is holding open
	  files and preventing them from being indexed.
	- The System account doesn't have at least Read permission to the files.
	
	RESOLUTION
	==========
	
	There is no workaround for this issue. When a file is added to the Web site,
	both the Index Server and the anti-virus software attempt to access the Web site
	in order to complete their tasks. The Index Server will see that the anti-virus
	is there, and will back off the indexing process, unless the anti-virus releases
	the file correctly after scanning the file, it may not get indexed.
	
	- Monitor the server during a more quiet time to determine whether or not Index
	  Server catches up, and the "Docs to Filter" column goes to zero.
	- Disable the anti-virus package to determine whether it is effecting the
	  indexing process. Some anti-virus packages may require uninstallation before
	  Index Server will begin to work correctly.
	- Add the System account specifically to the access control list on the data
	  files. Do not count on the Everyone group containing the System, to make sure
	  to add the System specifically.
	
	MORE INFORMATION
	================
	
	To check the statistics of the catalog and view the "Docs to Filter" column in
	Index Server 2.0 simply open the Microsoft Management Console that contains the
	Index Server snap-in. If you select Index Server on Local Machine (or the
	computer name you are connecting to) you will see in the right-pane of the MMC a
	series of columns one of which is "Docs to Filter".
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprb 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110 kbIdxServ200
	Version           : winnt:1.1,2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
