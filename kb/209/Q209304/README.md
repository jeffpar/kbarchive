---
layout: page
title: "Q209304: Index Server Catalog Corruption"
permalink: /kb/209/Q209304/
---

## Q209304: Index Server Catalog Corruption

{% raw %}

	Article: Q209304
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Application log of the Event Viewer, events 4124 and/or 4126 may occur.
	The errors in the Event Viewer report that the catalog is corrupt. In the MMC
	snap-in for Index Server, the statistics for a certain catalog may contain a
	value of n/a instead of numbers.
	
	CAUSE
	=====
	
	Catalog corruption is most commonly caused by the following:
	
	- When you run a backup or virus scan against the Catalog.wci directory when
	  Index Server is started. Because Index Server keeps many of the files in that
	  directory open and mapped into memory, a backup can corrupt them as it may
	  lock them in order to back them up. To work around this, either stop the
	  Index Server (CISVC) or simply remove that directory from the list of
	  directories you back up.
	
	- Anytime you restart a computer without shutting it down from the Start menu,
	  you run the risk of corrupting files, and the Index Server catalog files are
	  no exception.
	
	- If you edit the registry and set the FilterRetries key in the following
	  location to a value above 4 (default is 4):
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ContentIndex
	
	RESOLUTION
	==========
	
	Often the trouble shooting of catalog corruption involves simply stopping and
	starting the Index Server. However, sometimes you will need to rebuild the
	catalog from scratch (stop Index Server, delete or move the contents of the
	Catalog.wci directory, and then restart Index).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
