---
layout: page
title: "Q134437: FIX: Report Wizard Preview Error If View Given as Child Table"
permalink: /kb/134/Q134437/
---

## Q134437: FIX: Report Wizard Preview Error If View Given as Child Table

{% raw %}

	Article: Q134437
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
	
	If you specify a view as the child table in the One-to-Many Report Wizard, and
	then click the Preview button on the final step of the wizard, this error
	occurs:
	
	  Error 1683 in process (0); Index tag is not found
	
	CAUSE
	=====
	
	By design, a view cannot be used as the child table in a one-to-many
	relationship. This is because the child table must have an index tag on the
	parent table key field in order to create the relationship. Because a view
	cannot be indexed, the relationship cannot be created.
	
	The One-to-Many Report Wizard does not check to see if the child table is a view
	or an actual table. When the preview button is clicked, the error occurs.
	
	WORKAROUND
	==========
	
	Be sure to specify an actual table for the child table prior to invoking the
	wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Tastrade.dbc database in the VFP\Samples\Mainsamp\Data directory.
	
	2. On the File menu, click New Report, and then click the Wizard button.
	
	3. Choose the One-to-Many Report Wizard.
	
	4. Specify Products as the parent table, and include all fields.
	
	5. Specify Order History Line Items as the child table, and include all fields.
	
	6. Click Finish.
	
	7. Click the Preview button. The error should occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
