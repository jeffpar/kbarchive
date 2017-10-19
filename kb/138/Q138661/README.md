---
layout: page
title: "Q138661: PRB: Aliased Field Not Saved in Query Designer"
permalink: /kb/138/Q138661/
---

## Q138661: PRB: Aliased Field Not Saved in Query Designer

	Article: Q138661
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the AS clause is used to rename a field in the Query or View designer, it
	will be lost when the Query or View is reopened. As long as the Query or View is
	created and saved, the AS clause remains and works correctly. If the Query or
	View is modified, then the AS clause will disappear.
	
	WORKAROUND
	==========
	
	A query can be created with FoxPro's SELECT - SQL statement. The following
	example will create a query.
	
	     SELECT <tablename.fieldname> AS custom_name FROM ;
	         <tablename> INTO CURSOR queryname
	
	A view can be created with FoxPro's CREATE SQL VIEW statement. The following
	example will create a local view.
	
	     CREATE SQL VIEW mysqlview AS SELECT <tablename.fieldname> AS ;
	         custom_name FROM <database container.tablename>
	
	Instead of opening the Query or View designer and losing the AS clause, the code
	can be changed in a .prg file.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In the Query or View designer, a field can be assigned another name using the AS
	clause. This is done under the Fields tab in the Functions/Expressions box.
	Typing the field name and adding the AS clause with a name after it gives the
	field the name that follows the AS clause. For example,
	
	     customer.cust_id AS Customer_Id
	
	gives the field customer.cust_id the name of Customer_Id when browsed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Creating a Query:
	
	1. Select the File menu pad and choose New. Click the Query radio button and
	  choose the New File button. Select a table from the "Add Table or View"
	  window.
	
	2. Choose the Fields tab and type the name of a field from the table in the
	  Functions/Expressions box, followed by "AS custom_name" (without the
	  quotation marks).
	
	3. Click the Add button to place the expression In the Selected Output box.
	
	4. Run the query, and note that the field has the title of "custom_name." Save
	  and close the query after giving it a name. Reopen the query and choose the
	  Fields tab. Note that the field in the Selected Output box no longer contains
	  the AS clause.
	
	Creating a View:
	
	1. A database container must be open to create a view and it has to be opened
	  exclusively. So, make sure Exclusive is on by typing "SET EXCLUSIVE ON"
	  (without the quotation marks) in the Command window. Then, open a database
	  container.
	
	2. From the File menu, click New. Click the View radio button, and then click
	  the New File button. Select a table from the "Add Table or View" window.
	
	3. Click the Fields tab and type the name of a field from the table in the
	  Functions/Expressions box, followed by "AS custom_name" (without the
	  quotation marks).
	
	4. Click the Add button to place the expression In the Selected Output box.
	
	5. Run the view and note that the field has the title of "custom_name." Save and
	  close the view after giving it a name. Reopen the view and click the Fields
	  tab. Note that the field in the Selected Output box no longer contains the AS
	  clause.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
