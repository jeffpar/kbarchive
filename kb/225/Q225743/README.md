---
layout: page
title: "Q225743: PRB: Current Table's Fields Are Not in Report Expression Builder"
permalink: /kb/225/Q225743/
---

## Q225743: PRB: Current Table's Fields Are Not in Report Expression Builder

{% raw %}

	Article: Q225743
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbReportWriter kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbD
	Last Modified: 17-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a table is open in the current work area and it is not in the report's
	DataEnvironment, the Expression Builder for the report fields does not display
	fields from that table.
	
	CAUSE
	=====
	
	Because FoxPro 2.x reports did not have a DataEnvironment, the fields from an
	open table were available from within the Report Writer Expression Builder.
	
	With the introduction of the Report DataEnvironment in Visual FoxPro version 3.0,
	the behavior was changed. All subsequent versions of Visual FoxPro have the same
	behavior as Visual FoxPro version 3.x.
	
	RESOLUTION
	==========
	
	You can use one of the following workarounds:
	
	- Create a Quick Report to get a list of fields in the currently open table
	  that can then be added to the report.
	
	- Add the table to the DataEnvironment of the Report.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a table.
	
	2. Create a new report using the Report Designer.
	
	3. Add a field to the report.
	
	4. When the Report Expression dialog box comes up, click the ellipses button to
	  the right of the Expression box. This should open the Expression Builder
	  dialog.
	
	5. Observe that fields from the open table are not listed in the Fields column.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbReportWriter kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
