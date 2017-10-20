---
layout: page
title: "Q161055: FIX: Property Sheet Changes Causes Illegal Operation Error"
permalink: /kb/161/Q161055/
---

## Q161055: FIX: Property Sheet Changes Causes Illegal Operation Error

{% raw %}

	Article: Q161055
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After printing a report, changing a setting in the Properties sheet causes
	Visual FoxPro 5.0 to terminate. In Windows 95, the following error results:
	
	  This program has performed an illegal operation and will be shut down.
	
	Pressing the Details button reveals the following message:
	
	  VFP caused an invalid page fault in module VFP.EXE at <register
	  address>.
	
	This error does not occur when the report is previewed rather than printed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following commands into the Command window:
	
	        CREATE REPORT Test from HOME()+ "Labels"
	        MODI REPORT Test
	
	2. Minimize the Report Designer and issue the following command to print one
	  record:
	
	        REPORT FORM Test NEXT 1 TO PRINTER
	
	3. After the report prints, maximize the Report Designer, right-click and open
	  the DataEnvironment of the report. Right-click again to open the Properties
	  sheet.
	
	4. In the Properties sheet, change the name of the DataEnvironment to "datatest"
	  (without the quotation marks), and press the up arrow key. An "Invalid Page
	  Fault" occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
