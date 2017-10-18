---
layout: page
title: "Q227264: Index Server Returns Inconsistent Results"
permalink: kb/227/Q227264/
---

## Q227264: Index Server Returns Inconsistent Results

	Article: Q227264
	Product(s): Internet Information Server
	Version(s): winnt:1.0,1.1,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 1.0, 1.1, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Index Server to run a query and you set the sort method to anything
	other than Rank Descending, you do not receive the top matching records and you
	may get a different set of files on subsequent requeries.
	
	CAUSE
	=====
	
	Sorting on Rank Descending is the only way to get the top matching records from
	the catalog when the maximum number of returns is limited. Sorting on anything
	other than Rank Descending returns a subset of the total matching documents.
	
	RESOLUTION
	==========
	
	If it is necessary to get the best matching records out of the total record set,
	change the sort method to Rank Descending.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100 kbIdxServ110 kbIdxServ200
	Version           : winnt:1.0,1.1,2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
