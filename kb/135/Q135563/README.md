---
layout: page
title: "Q135563: FIX: One-to-Many Report Based on Two Views Causes Errors"
permalink: /kb/135/Q135563/
---

## Q135563: FIX: One-to-Many Report Based on Two Views Causes Errors

{% raw %}

	Article: Q135563
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
	
	If you use the One-to-Many Report Wizard to create a report and specify a view
	for both the parent and the child table, you will be unable to modify or print
	the report after creation.
	
	The following error occurs when the report is modified through the menu, or
	through a MODIFY REPORT command:
	
	  The Child Order property of a relation object in the data
	  environment is no longer valid. The relation is being removed.
	
	The following error occurs when the report is printed through a REPORT FORM
	command:
	
	  Index tag is not found.
	
	CAUSE
	=====
	
	A one-to-many report relies on a relation between the parent and child table. It
	is impossible to create a persistent relationship based on two views in the data
	environment because views are not indexed. This is by design. However, the
	wizard fails to check whether the tables specified in the report are actually
	views. When the report is modified or printed at a later date, the errors occur.
	
	WORKAROUND
	==========
	
	Specify a .DBF table for both the parent and the child table in the wizard. If
	you're using a view to limit the scope of the records included in the report,
	consider using a SET FILTER condition or the FOR clause of the REPORT FORM
	command to limit the records included in the printed report.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the vfp\Samples\Mainsamp\Data\Tastrade database.
	
	2. On the File menu, click New Report and then click the Wizard button.
	
	3. Select "product listing" from the list of available tables as the parent
	  table. Add all fields to the list, and click Next.
	
	4. Select "order history line items" as the child table. Add all fields to the
	  list, and click Finish.
	
	5. Select the Save Report option, and exit the Report Wizard.
	
	6. Attempt to modify or print the report. An error will occur.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
