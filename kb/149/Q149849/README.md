---
layout: page
title: "Q149849: FIX: Report Writer Incorrectly Numbers Pages of Report"
permalink: /kb/149/Q149849/
---

## Q149849: FIX: Report Writer Incorrectly Numbers Pages of Report

{% raw %}

	Article: Q149849
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro versions 3.0 and 3.0b, the first pages of data in a report
	created by Report Writer are numbered incorrectly when the following three
	conditions are met:
	
	- There is a title page.
	
	- Data grouping is set to reset the page number to 1.
	
	- Data grouping is set to start each new group on a new page.
	
	Using the Customer table as an example, if the first City in the table is Adak,
	the Report Writer variable _pageno prints the number 2 instead of the number 1
	for the first page. If the second City is Boston, the first Boston page will be
	correctly numbered 1, and all pages after it will be correctly numbered.
	
	WORKAROUND
	==========
	
	The following workaround applies to the example given in the "More Information"
	section below:
	
	1. Create a report variable named cOldcity. Type cOldcity in Value to Store.
	  Type city in Initial Value.
	
	2. Select Release After Report and Reset: End of Report.
	
	3. Replace the _PAGENO expression in the page footer with
	  IIF(cOldcity=city,_pageno-1,_pageno).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new report. Add the Customer table from the Vfp\Samples\Data
	  subdirectory and order the table by the City field. Click Report, click Quick
	  Report, and accept the defaults.
	
	2. Group the report by City, select Reset Page Number to 1 for each group, and
	  select Reprint Group Header on each page.
	
	3. Click Report, Title/Summary, and select Title band and New Page.
	
	4. Preview the report. Notice that the first page of data after the title page
	  is page 2, instead of page 1. Had there been more than one page for the first
	  city, each page would be numbered incorrectly. Subsequent groups are numbered
	  correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
