---
layout: page
title: "Q149456: FIX: Blank Child Record Added in One-to-Many Wizard Form"
permalink: /kb/149/Q149456/
---

## Q149456: FIX: Blank Child Record Added in One-to-Many Wizard Form

	Article: Q149456
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
	
	If you create a form using the One-to-Many Form Wizard, or the TXTBTNS class in
	a form with a child grid, a blank record is added to the grid when the child key
	field name is different from the parent key field name.
	
	CAUSE
	=====
	
	The code in the TXTBTNS class of Wizstyle.vcx that adds the child record
	incorrectly adds a blank record.
	
	WORKAROUND
	==========
	
	Rename the key field in the child table to give it the same field name as the
	key field in the parent table. Recreate the form with the One-to-Many Form
	Wizard.
	
	-or-
	
	Change a line in the procedure code associated with the cmdAdd.click event in the
	Txtbtns class of Wizstyle.vcx.
	
	The following line:
	
	     IF EMPTY(m.cChildKey) OR TYPE(m.cChildKey)#TYPE('oAddRec.KeyValue')
	
	should be modified to read:
	
	     IF EMPTY(m.cChildKey) OR TYPE('m.cChildKey')#TYPE('oAddRec.KeyValue')
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a table that has the following structure:
	
	  Name:      Table_1
	  Fields:    ID1        Character 10
	             Field2     Character 10
	             Field3     Character 10
	
	  Add two records to Table_1 with the values AA and BB in the ID1 field.
	
	2. Create a table that has the following structure:
	
	  Name:      Table_2
	  Fields:    ID2        Character 10
	             Field2     Character 10
	             Field3     Character 10
	
	  Create an index on Table_2.ID2
	
	3. Run the One-to-Many Form Wizard. In Step 1, choose Table_1 as the Parent
	  table, choose ID1 as a field, and click the Next button. In Step 2, choose
	  Table_2 as the child table, choose the >> button to select all fields,
	  and then click Next. In Step 3, choose ID1 from the left drop-down list and
	  ID2 from the right drop-down list to establish the relationship. Click the
	  Finish button.
	
	4. Click the "Save and run form" button. Then click Finish. Save the form as
	  Table_1.scx. After the form is displayed, click the Add button.
	
	5. In the Add Record dialog box, choose "Add record to child (Grid) only," and
	  click the Add button. No record will appear in the grid. A record has been
	  added to the child table, but the key field (ID2) is blank for the added
	  record.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
