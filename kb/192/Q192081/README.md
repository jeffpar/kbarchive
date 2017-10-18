---
layout: page
title: "Q192081: PRB: Printing Report from Preview Window Causes Nesting Error"
permalink: kb/192/Q192081/
---

## Q192081: PRB: Printing Report from Preview Window Causes Nesting Error

	Article: Q192081
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Printer button on the Visual FoxPro Standard toolbar while a report is
	in Preview mode causes the following error to occur:
	
	  Report contains a nesting error.
	
	RESOLUTION
	==========
	
	- Select the Printer icon on the Print Preview toolbar instead of the Printer
	  icon on the Visual FoxPro Standard toolbar.
	
	  -or-
	
	- Add a NOWAIT clause to the end of the REPORT...PREVIEW command.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a quick report with a table and save the report as MyRpt.
	
	2. Run the following code in Command window:
	
	        USE <tablename>
	        REPORT FORM myRpt PREVIEW
	
	3. When the Report Preview window opens, click the Printer button on the Visual
	  FoxPro Standard toolbar, not the printer button on the Print Preview toolbar,
	  to print the report and you see the following error message appear:
	
	  Report contains a nesting error.
	
	If a report is being edited using the Report Designer, then the error message
	does not occur when that report is printed, as outlined in this article.
	
	Additional query words: kbVFp500a kbVFp500 kbVFp600 kbPrinting kbReportWriter
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
