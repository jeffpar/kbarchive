---
layout: page
title: "Q168593: PRB: Query Filter Has No Effect When Output to Report"
permalink: /kb/168/Q168593/
---

## Q168593: PRB: Query Filter Has No Effect When Output to Report

{% raw %}

	Article: Q168593
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a query created by the Query Designer with report as the output
	destination, the filter condition does not take effect in the report.
	
	RESOLUTION
	==========
	
	Remove any view or table in the report's DataEnvironment; otherwise, the report
	uses the table or view instead of the results in the cursor that the query
	creates.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open Tastrade sample project.
	
	2. On the Data tab, select Queries on the project TreeView window, then select
	  New on the right. Click New Query.
	
	3. On the Add Table or View dialog box, add customer table and then click Close.
	
	4. On Fields tab of the Query Designer, choose Add All.
	
	5. Using the Visual FoxPro 3.0 or 3.0b Selection Criteria tab or the Visual
	  FoxPro 5.0 or 5.0a Filter tab, set the filter as follows:
	
	        Customer.region = "WA"
	
	6. From the Query menu, click Query Destination and select Report as the output
	  destination. Click OK.
	
	7. On the Query Destination dialog box, place a check next to Page preview.
	  Click the Wizard icon (with a magic wand) on the right, then click Report
	  Wizard.
	
	8. On Step 1 of the Report Wizard, select Company_name, City, and Region as the
	  report fields. Click Finish to skip the remaining steps.
	
	9. Click Finish again to save the report for later use and return to the Query
	  Destination dialog box.
	
	10. Click OK to close the Query Destination dialog box.
	
	11. From the Query menu, select Run Query.
	
	Notice that the filter condition does not take effect.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
