---
layout: page
title: "Q217151: Catalog Corruption Occurs after Indexing Is Complete"
permalink: kb/217/Q217151/
---

## Q217151: Catalog Corruption Occurs after Indexing Is Complete

	Article: Q217151
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Index Server reports that the catalog is corrupt after the index process is
	completed. This can occur as soon as the indexing process has completed, or
	several minutes later.
	
	CAUSE
	=====
	
	This occurs when a file is unfilterable and the Filter Retries is set to a
	number greater than 4. When this happens, the information that the filter
	process sends to the Content Index Service (CISVS) causes the CISVS to report
	that the in-memory catalog information is corrupt, even though the data on the
	drive is fine.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Change the value of the following registry key to a value of 4 or less:
	
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\control\contentindex\FilterRetries
	
	After you change this value, restart Index Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Index Server version 2.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
