---
layout: page
title: "Q157633: BUG: Report Form Fields Appear to Be Selected After Printing"
permalink: /kb/157/Q157633/
---

## Q157633: BUG: Report Form Fields Appear to Be Selected After Printing

	Article: Q157633
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing from Visual FoxPro 5.0 or 6.0, the Report Form fields appear
	selected after the print job has finished.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	When printing from Visual FoxPro 5.0 or 6.0, the Report Form fields appear to
	have selection handles on them after the print job has been spooled; however,
	the fields are not actually selected. Refreshing the Report Form by moving it
	off and then back onto the desktop removes the selection handles.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Quick Report using a table of your choice.
	
	2. Print the report to the selected printer.
	
	3. Observe that all fields on the Report Form appear to be selected.
	
	4. When you move the Report Form from and then back to the desktop, the form
	  refreshes.
	
	Additional query words: kbdss VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
