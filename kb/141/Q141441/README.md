---
layout: page
title: "Q141441: How to Create Validation Rules on Views"
permalink: /kb/141/Q141441/
---

## Q141441: How to Create Validation Rules on Views

{% raw %}

	Article: Q141441
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can easily create field and row level validation rules for Visual FoxPro
	Tables by using the Table Designer. For local and remote views, however, the
	View Designers do not give you a way to visually create validation rules. For
	views, validation rules must be created programmatically by using dbsetprop().
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create an Updatable Local View:
	
	  a. Open the TestData database in Samples\Data under the main Visual FoxPro
	     directory.
	
	  b. On the File menu, click New. Select View as the file type, and then click
	     New File.
	
	  c. Select EMPLOYEE from the Add Table or View list.
	
	  d. In the Fields tab of the View Designer, click Add All to move all fields
	     to selected output.
	
	  e. In the Update Criteria tab, ensure that EMP_ID is marked as the key field
	     and all other fields are marked as Updatable (they should have a check
	     mark in the pencil column). click the Send SQL Updates button.
	
	  f. Under the SQL WHERE clause options, select Key Fields only, and then save
	     the view as EMP_VIEW.
	
	2. Create a row-level Validation Rule to ensure that the Hire_date is later than
	  the Birth_date:
	
	  a. Type the following in the Command window:
	
	        =dbSetProp("Emp_view","View","RuleExpression",;
	            "Hire_date >Birth_date")
	        =dbSetProp("Emp_view","View","RuleText",";
	            'Hire date must be after birth date' ")
	        USE Emp_view
	        BROWSE
	
	  b. Change the value of hire_date to be earlier than birth_date, and then move
	     off the record. The validation rule fires and the error message is
	     displayed.
	
	3. Create a field level Validation Rule to ensure that the Last_name is not
	  empty by typing the following in the Command window:
	
	     =dbSetProp("emp_view.last_name","field","RuleExpression",;
	        "not empty(last_name)")
	     =dbSetProp("emp_view.last_name","field","RuleText",;
	         " 'Last name cannot be blank' ")
	     USE Emp_view
	     BROWSE
	
	Deleting the contents of the last name field and moving to the next field causes
	the validation rule to fire.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: VFoxWin akz
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
