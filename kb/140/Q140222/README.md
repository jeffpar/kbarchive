---
layout: page
title: "Q140222: PRB: Cannot Use _PBPAGE or _PEPAGE to Control Pages for Report"
permalink: kb/140/Q140222/
---

## Q140222: PRB: Cannot Use _PBPAGE or _PEPAGE to Control Pages for Report

	Article: Q140222
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The system variables _PBPAGE and _PEPAGE do not control the range of pages in
	the REPORT FORM command. Further, using this expression:
	
	     REPORT FORM <XXX> FOR _PAGENO > 2 .AND. _PAGENO < 4
	
	does not produce the desired range of pages. However, if you do not specify a
	beginning range, the correct number of pages is printed. Currently, there is no
	way to specify a range of pages to be printed in a report.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create and save a report using the Report Designer.
	
	2. Create a program that contains the following lines:
	
	     PRINTJOB
	       _PBPAGE = 2
	       _PEPAGE = 4
	       REPORT FORM <name of report> PREVIEW
	     ENDPRINTJOB
	
	3. Save and run the program. All pages of the report print.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
