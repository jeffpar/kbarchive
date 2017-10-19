---
layout: page
title: "Q319506: INFO: Index Server Does Not Support Mounted Volumes"
permalink: /kb/319/Q319506/
---

## Q319506: INFO: Index Server Does Not Support Mounted Volumes

	Article: Q319506
	Product(s): Internet Information Server
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Indexing Service, Index Server does not detect changes to a catalog
	if the data is located on a mounted volume. You must re-scan the catalog for
	Index Server to detect the changes.
	
	MORE INFORMATION
	================
	
	Indexing Service does not support mounted volumes because of limitations in the
	underlying file system notification systems.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper
	Version           : :3.0
	Issue type        : kbinfo
	
	=============================================================================
	
