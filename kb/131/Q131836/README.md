---
layout: page
title: "Q131836: PRB: Grid Not Refreshing Displaying a Cursor From Query"
permalink: /kb/131/Q131836/
---

## Q131836: PRB: Grid Not Refreshing Displaying a Cursor From Query

	Article: Q131836
	Product(s): Microsoft FoxPro
	Version(s): 3.00 5.00 | 3.00b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp kbvfp300 kbvfp500 kbvfp600
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Grid's RecordSource property is set to a cursor and that cursor is updated
	at run time by using a "SQL Select Into Cursor <CursorName>" command, the
	grid does not display any data even if you Refresh it by using the
	ThisForm.Refresh or ThisForm.<GridName>.Refresh command.
	
	CAUSE
	=====
	
	When you execute a SQL Select statement into the same cursor specified in the
	grid's RecordSource property, the original cursor has to be destroyed before the
	new cursor can be created. When this happens, the grid columns and the
	RecordSource are also cleared and then re-created. The grid's record source is
	set to the new cursor, and the grid automatically creates columns. The new grid
	is working from scratch, so it does not load the data from the cursor.
	
	RESOLUTION
	==========
	
	To refresh the grid in this situation, set the Grid's RecordSource property to
	itself as in this example:
	
	      thisform.grid1.recordsource=thisform.grid1.recordsource
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q140653 PRB: Cursor-Based Grid Goes Blank If SQL SELECT Resets Cursor
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form, and add the CUSTOMER.DBF table (in the \VFP\SAMPLES\DATA
	  directory) to the Data Environment.
	
	2. Place the following code in the Load event of the form: CREATE CURSOR
	  Compdisp (company c(40),city c(15),country c(15))
	
	3. Place the following code in the Destroy event of the form:
	
	     SELECT Compdisp
	     USE
	
	4. Create a grid on the form, and give the grid the following property
	  settings:
	
	     ColumnCount=3
	     RecordSourceType=Alias
	     RecordSource=Compdisp
	
	5. Add a text box to the form.
	
	6. Add a command button with the following code in its Click event:
	
	     SELECT company,city,country;
	        FROM customer;
	        WHERE customer.country=thisform.text1.value;
	        INTO CURSOR Compdisp
	     THISFORM.GRID1.REFRESH
	
	7. Run the Form. Type "France" in the text box, and then click the command
	  button.
	
	The grid should display all records where Customer.Country="France," but it
	doesn't. The grid is blank. THISFROM.GRID1.REFRESH does not seem to update the
	grid. This happens even if the Cursor is not created in the Load event of the
	Form.
	
	To have the grid display the data correctly, place the following command as the
	last line of code for the Click event of the command button:
	
	     ThisForm.Grid1.RecordSource =ThisForm.Grid1.RecordSource
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP500 kbVFP600
	Version           : 3.00 5.00 | 3.00b
	
	=============================================================================
	
