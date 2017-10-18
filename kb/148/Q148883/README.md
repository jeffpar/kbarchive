---
layout: page
title: "Q148883: FIX: Setting the Value of a Text Box Adds New Record to Table"
permalink: kb/148/Q148883/
---

## Q148883: FIX: Setting the Value of a Text Box Adds New Record to Table

	Article: Q148883
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
	
	When you programmatically set the Value property of a text box that has its
	ControlSource property set to a field in a table, a new record will be added to
	the table if the record pointer is positioned at the end of file.
	
	WORKAROUND
	==========
	
	If the Value property of a text box is to be set programmatically, use the EOF()
	function to determine if the record pointer is positioned at the end of file
	before setting the Value property.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form.
	
	2. Add a table to the data environment of the form.
	
	3. Drag a character field from the table in the data environment to the form.
	
	4. Add a command button to the form.
	
	5. Add the following code to the Click event of the command button:
	
	     GO BOTTOM
	     SKIP 1
	     This.Parent.Text1.Value='test'
	
	6. Save and run the form.
	
	After you click the command button, a new record is added to the table, and the
	field that was used to create the text box on the form has a value of test.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
