---
layout: page
title: "Q118560: How to Indicate Record Continues on Next Page of Report"
permalink: kb/118/Q118560/
---

## Q118560: How to Indicate Record Continues on Next Page of Report

	Article: Q118560
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 2.50b 2.60 2.60a 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Report Writer in FoxPro has limited widow and orphan control. Widows and
	orphans occur when a record is split between two pages. For example, if you have
	a report that prints out data in such a manner that a record stretches beyond
	the bottom of the page, the remainder of the record's data is printed on the
	following page. The part that prints on the first page is the called a widow.
	The part that prints on the second page is called an orphan. This is often
	undesired and potentially confusing behavior.
	
	While there is little that can be done to prevent the record from being split,
	you can have the Report Writer indicate to the reader of the report that the
	record has spilled over to the next page. This will at least lessen the reader's
	confusion.
	
	MORE INFORMATION
	================
	
	To provide this kind of notification, you can create a memory variable that is
	changed to a specific value every time a group changes and is reset to a
	different value at the end of each group. If the variable is not equal to the
	specific value when it is evaluated in the Page Footer band, this means that the
	record continues on the next page. In this case, a message such as "Continued on
	next page..." will notify the reader that the record continues on the next
	page.
	
	The following steps illustrate this method:
	
	1. Open a database such as ARTICLE.DBF, which comes with the FoxPro Distribution
	  Kit.
	
	2. Create a quick report.
	
	3. Create a grouping on ARTICLE.TITLE.
	
	4. Create a variable called NEWGROUP with an initial value of .F., set Value To
	  Store to .T., and select ARTICLE.TITLE for Reset.
	
	5. Create another variable called COUNT with an initial value of 0, set Value To
	  Store to 1, select End Of Report for Reset, and select Count under Calculate.
	
	6. In the Page Footer band of the report, create the following expression:
	
	        IIF(!newgroup,"Continued on next page...","")
	
	7. In the PRINT WHEN clause of this expression, select No for Print Repeated
	  Values, and then select the Print Only When Expression Is True box. Type the
	  following expression in the Expression Builder:
	
	        COUNT < RECCOUNT()
	
	8. From the Report menu, choose Page Preview and examine the bottom of each
	  page. Note that the words "Continued on next page..." appear.
	
	For information about preventing orphans, please see the following Microsoft
	Knowledge Base article:
	
	  Q101297 Widow and Orphan Control in FoxPro Report Writer
	
	Additional query words: VFoxWin FoxWin 2.50 dk
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : 2.50 2.50a 2.50b 2.60 2.60a 3.00
	
	=============================================================================
	
