---
layout: page
title: "Q141633: PRB: Form with Subclassed Combo Looks for RowSource from Class"
permalink: /kb/141/Q141633/
---

## Q141633: PRB: Form with Subclassed Combo Looks for RowSource from Class

	Article: Q141633
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to run a form, an error occurs if the form cannot locate the
	table or fields specified in the rowsource of the parent class. This is the
	result of a class based on a combo box being used as a template to design a new
	combo box. Within the class, the RowSource property of the combobox is set to:
	
	  Select xxx.field1,xxx.field2 from xxx into cursor query
	
	In the Form Designer a combo box from this class is used and the RowSource is
	changed to a different value.
	
	WORKAROUND
	==========
	
	Do not specify a value of the RowSource in the parent class of the combo box.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new class based on Combobox.
	
	2. Set the following properties of the combo box within the Class Designer:
	
	     RowSource        =  Select * from xxx into cursor yyy
	     RowSourceType    =  3 - SQL STATEMENT
	
	3. Save the combo box class.
	
	4. Create a new form.
	
	5. Place a combo box from the newly created class onto the form.
	
	6. Change the Rowsource of the combo box to:
	
	     Select * from customer into cursor query
	
	7. Add Vfp\Samples\Data\Customer.dbf to the Data Environment.
	
	8. Run the form. An open table dialog box appears for you to select the table
	  because table xxx cannot be located. After you select a table, the following
	  error occurs:
	
	  Error loading file - parent - record number ???. SQL Column 'Field1' is not
	  found
	
	NOTE: If the select statement is removed from the RowSource property of the
	combobox class, the error does not occur.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
