---
layout: page
title: "Q135456: DOCERR: How to Set Column Index Correctly for AddColumn Method"
permalink: /kb/135/Q135456/
---

## Q135456: DOCERR: How to Set Column Index Correctly for AddColumn Method

{% raw %}

	Article: Q135456
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro Language Reference and Help file both list the following
	inaccurate information under the topic for the AddColumn method:
	
	  The existing Columns are moved to the right and are incremented by 1.
	
	Although the columns do move to the right on the screen, the column index is not
	incremented.
	
	NOTE: The Visual FoxPro 3.0b for Windows documentation is correct.
	
	MORE INFORMATION
	================
	
	The column index is an internal array maintained by the grid object. Each column
	is assigned a subscript within the array. New columns are appended to the end of
	this array, and the array element number becomes the index for the column.
	
	The name of the column is determined by concatenating the word "Column" plus the
	index number converted to a string.
	
	If the AddColumn method is used to insert a column between columns 2 and 3 of a
	grid containing four columns, the name of the new column will be Column5. This
	can be confusing when it is necessary to refer to the columns later on because
	the column name does not reflect its position within the grid.
	
	If the Form.SaveAs method is used to save the form and the form is modified, the
	new column will appear at the end of all columns.
	
	Step-by-Step Procedure
	----------------------
	
	The following method can be used to add a new column, set the order
	appropriately, and change the name of each column to reflect the new sequential
	order. If the Form.SaveAs method is used to save the form, the form will
	reappear with the columns in the desired order.
	
	1. Create a new form, and add the C:\VFP\Samples\Mainsamp\Data\Customer.dbf
	  table to the data environment of the form.
	
	2. Add a grid to the form.
	
	3. On the Form menu, click New Method. Name the method grdAddColumn and input
	  the following code for the method:
	
	     PARAMETERS lcMyGridName, lnNewColumnPosition
	        lnExistingColumns=ThisForm.&lcMyGridName..ColumnCount
	        IF lnExistingColumns = -1
	           lnExistingColumns=FCOUNT()
	        ENDIF
	        lcLastColumn = "Column" + ALLTRIM(STR(lnExistingColumns+1))
	        ThisForm.&lcMyGridName..AddColumn(lnNewColumnPosition)
	        ThisForm.&lcMyGridName..&lcLastColumn..ColumnOrder ;
	           = lnNewColumnPosition
	        FOR I = 1 TO lnExistingColumns + 1
	           thisform.&lcMyGridName..Columns(i).Name = ;
	              "Column" + ALLTRIM(STR(i))
	        ENDFOR
	        ThisForm.&lcMyGridName..Refresh
	
	4. Add a command button to the form, and put the following code in its Click
	  event procedure:
	
	        frmAdd.grdAddColumn("grid1", 2)
	
	5. Save the form as frmAdd, and run it.
	
	A new column will be inserted as the second column each time you click the the
	command button. All column names will be changed to reflect their position
	within the grid.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
