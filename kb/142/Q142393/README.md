---
layout: page
title: "Q142393: PRB: Cannot Create a Quick Report/Wizard Report from a Cursor"
permalink: /kb/142/Q142393/
---

## Q142393: PRB: Cannot Create a Quick Report/Wizard Report from a Cursor

	Article: Q142393
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
	
	Cursors based on tables that are part of a database and cursors based on free
	tables whose select statements include "where" clauses cannot be used to create
	a Quick Report or a Wizard-generated Report based on that cursor.
	
	STATUS
	======
	
	This behavior is by design. Microsoft FoxPro version 2.6 allowed you to create a
	Quick Report or a Wizard-generated Report based on a cursor. In Microsoft Visual
	FoxPro this functionality is still available if the table from which the cursor
	was created is not part of a database.
	
	MORE INFORMATION
	================
	
	Steps to Demonstrate Behavior
	-----------------------------
	
	The following procedure demonstrates that under certain conditions, a cursor
	cannot be used to create a Quick Report or a Wizard-generated Report in Visual
	FoxPro.
	
	1. Open or switch to Microsoft Visual FoxPro.
	
	2. Open a free table (one that is not part of a database), and type the
	  following command in the Command window -- where <TableName> is the
	  name of the free table:
	
	     SELECT * FROM <TableName> INTO CURSOR MyCursor
	
	3. On the Tools Menu, click Wizards - Report. Then in the Wizard Selection
	  dialog box, click Report Wizard, and then click OK.
	
	4. Note that the cursor MYCURSOR is listed in the Databases/Tables list box and
	  is therefore available for the creation of the report. Click Cancel, and then
	  close the table and the cursor.
	
	5. Open a table that is part of a database, and type the following command in
	  the Command window -- where <TableName> is the name of the table you
	  just opened:
	
	     SELECT * FROM <TableName> INTO CURSOR MyCursor
	
	6. On the Tools Menu, click Wizards - Report. Then in the Wizard Selection
	  dialog box, click Report Wizard, and then click OK.
	
	7. Note that the cursor MyCursor is not listed in the Databases/Tables list box
	  and is therefore not available for the creation of the report. Click Cancel,
	  and then close the table and the cursor.
	
	8. Open a free table and type in the following command in the Command window:
	
	        SELECT * FROM <TableName> INTO CURSOR MyCursor where ;
	           fieldname="some variable"
	
	9. On the Tools menu, click Wizards-Report. Then in the Wizard Selection dialog
	  box, click Report Wizard, and then click OK.
	
	10. Note that the cursor MyCursor is not listed in the Databases/Tables list box
	  and is therefore not available for the creation of the report. Click Cancel,
	  and then close the table and the cursor.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
