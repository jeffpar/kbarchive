---
layout: page
title: "Q98379: BUG: xlCoerce() Can Cause GP Fault in EXCEL.EXE"
permalink: /kb/098/Q98379/
---

## Q98379: BUG: xlCoerce() Can Cause GP Fault in EXCEL.EXE

{% raw %}

	Article: Q98379
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
	
	Calling xlCoerce() from a dynamic-link library (DLL) function causes a general
	protection (GP) fault in the following circumstances:
	
	- The source XLOPER is xltypeRef or xltypeSRef
	
	- The destination XLOPER is xltypeMulti
	
	- The source reference contains one or more uncalculated cells
	
	Consider the following code fragment:
	
	     xlDest.xltype = xltypeInt;
	     xlDest.val.w  = xltypeMulti;
	
	     Excel4(
	        xlCoerce,
	        &xlResult,
	        2,
	        (LPXLOPER) &xlSource,
	        (LPXLOPER) &xlDest
	     );
	
	This code causes a GP fault if xlSource is type xltypeSRef or xltypeRef, and
	xlSource references uncalculated cells.
	
	CAUSE
	=====
	
	This is caused by a problem in Excel 4.0.
	
	RESOLUTION
	==========
	
	The workaround for this problem is to use xlCoerce() to individually look up
	cells in xltypeSRef or xltypeRef. The Software/Data Library contains a modified
	version of the Framework library that demonstrates this method. For more
	information, query on the following keywords:
	
	  p_xlsdk and softlib and framewrk
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Excel version 4.0. We
	are researching this problem and will post new information here as it becomes
	available.
	
	MORE INFORMATION
	================
	
	This problem can be reproduced using the FuncSum() function provided by the
	Excel SDK GENERIC sample:
	
	1. Load GENERIC.XLL.
	
	2. Enter these formulae on a worksheet:
	
	  a. A1: =RAND()
	
	  b. A2: =A1
	
	  c. A3: =FuncSum(A1:A2)
	
	  d. A1: =2
	
	Changing cell A1 from 1 to 2 causes FuncSum() to recalculate. Cell A2 is still
	uncalculated at that point, and Microsoft Excel will crash. This behavior
	results from the problem with the xlCoerce() function.
	
	
	Additional query words: crash gp-fault
	
	======================================================================
	Keywords          :  
	Technology        : kbExcelSearch kbAudDeveloper kbSDKExcelSearch kbSDKSearch
	Version           : :
	
	=============================================================================
	

{% endraw %}
