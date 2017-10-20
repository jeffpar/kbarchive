---
layout: page
title: "Q158319: FIX: Printing from Report Designer Gets Error Message in VFP 5"
permalink: /kb/158/Q158319/
---

## Q158319: FIX: Printing from Report Designer Gets Error Message in VFP 5

{% raw %}

	Article: Q158319
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbprint kbui kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error is returned in the Report Designer:
	
	  This program has performed an illegal operation and will be shut down.
	
	This occurs under the following conditions:
	
	- The report is printed while the Report Designer is open.
	
	- The DataEnvironment is opened and the Property sheet is opened.
	
	- The DataEnvironment is closed without first closing the Property sheet.
	
	WORKAROUND
	==========
	
	Do not close the DataEnvironment without first closing the Property Sheet.
	
	STATUS
	======
	
	This problem has been fixed in Visual FoxPro 5.0a.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a short report based on some table, and keep the Designer window open.
	
	2. Print the report using the right-click menu or selecting Print from the File
	  menu.
	
	3. Open the DataEnvironment window.
	
	4. Open the Property Sheet window.
	
	5. Close the DataEnvironment window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbui kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
