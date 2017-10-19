---
layout: page
title: "Q98324: BUG: Excel GP Faults When Passing Intersection"
permalink: /kb/098/Q98324/
---

## Q98324: BUG: Excel GP Faults When Passing Intersection

	Article: Q98324
	Product(s): Miscellaneous Software Development Kits
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Excel Software Development Kit 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Excel causes a general protection (GP) fault when attempting to pass
	an intersection to a DLL/XLL function registered as data type "R". For example,
	consider the following dynamic-link library (DLL) function declaration:
	
	     void __export CALLBACK Test (LPXLOPER lpxl)
	
	Excel causes a GP fault if Test is called with an intersection under the
	following circumstances:
	
	- The references joined by the union operator intersect
	
	- The references are passed using defined names
	
	The following call to Test will crash Excel if range1 and range2 intersect:
	
	     =Test(range1 range2)
	
	CAUSE
	=====
	
	This is caused by a problem in Excel.
	
	RESOLUTION
	==========
	
	There are two possible workarounds for this problem:
	
	- If intersections may be passed to a DLL function, avoid the use of data type
	  "R" (XLOPER) if possible. Use data type "P" (OPER) instead and the
	  intersection will be passed as an array.
	
	- Implement a "wrapper" macro function. For information on this method, query
	  on the following words in the Microsoft Knowledge Base:
	
	  prod(xlsdk) and nonadjacent
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Excel version 4.0. We are
	researching this problem and will post new information here as soon as it
	becomes available.
	
	
	Additional query words: 4.00 3.10 gp-fault gpf buglist4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExcelSearch kbAudDeveloper kbSDKExcelSearch kbSDKSearch
	Version           : :
	
	=============================================================================
	
