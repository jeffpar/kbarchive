---
layout: page
title: "Q132727: How to Use a UDF to Calculate Percentages in a Report"
permalink: kb/132/Q132727/
---

## Q132727: How to Use a UDF to Calculate Percentages in a Report

	Article: Q132727
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To calculate percentages of a group total in report using the Report Writer, you
	must create a UDF (user defined function).
	
	MORE INFORMATION
	================
	
	The FoxPro Report Writer calculates totals in a top down manner. To get a detail
	item's percentage of a total that resides in the group footer band, the total
	must first be calculated in the group header. This can be accomplished by using
	the following code in a UDF:
	
	        SET TALK OFF
	     PUBLIC msum     && initialize variable for sum total
	     msum=0
	     y=RECNO()       && store record number to variable so total from
	     * previous group is not added on
	     x=<field name>  && store field which is grouped to variable
	     SUM <numeric field name> FOR  x=<field name> TO msum
	     GO y
	     RETURN msum     && this will simply display the total in the group
	     * header that appears in the group footer
	
	For more information about UDFs, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q113754 "Syntax Error" When Verifying UDF() in Report Writer
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300
	Version           : WINDOWS:2.6a,3.0
	
	=============================================================================
	
