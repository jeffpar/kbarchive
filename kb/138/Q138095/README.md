---
layout: page
title: "Q138095: How to Store the Value of Check Boxes in a Grid to an Array"
permalink: kb/138/Q138095/
---

## Q138095: How to Store the Value of Check Boxes in a Grid to an Array

	Article: Q138095
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes you may find it useful to place a check box on a grid. There will be a
	check box for each record in the grid, so you need a place to store the value of
	each check box. Usually the value of the check box is stored in a field in the
	table that the grid is based on. If a user doesn't want the value of the check
	boxes stored in the table, then an array can be created to store the check box
	values. This works well, but keep in mind that an array can only hold 65,000
	elements. This would not work on a table with more records than that.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. Create a form and add a table to the data environment. Place a grid on the
	  form.
	
	2. Right-click the grid, and then click Builder. Add two fields to the grid.
	
	3. On the Properties sheet, add 1 to the ColumnCount of the grid. This makes the
	  ColumnCount property equal to 3. While in the Properties sheet, select the
	  Text1 object from the third column. Click the form title bar to allow the
	  focus to stay on the Text1 object. Then press the DELETE key to delete the
	  Text1 object from the grid.
	
	4. While the grid is still in edit mode, choose a check box object from the
	  Forms Control toolbar and place it under the third column header where the
	  Text1 object was just deleted. The check box should now be part of the grid.
	
	5. In the Properties sheet, choose the third Column object and change the Bound
	  and Sparse properties to False (.F.).
	
	6. On the Form menu, click New Property. Type "xyz(1) " (without the quotation
	  marks)in the property box, and save it.
	
	7. In the Load event of the form, place this code:
	
	     DIMENSION thisform.xyz(RECCOUNT())
	     FOR x = 1 TO RECCOUNT()
	         thisform.xyz(x) = 0
	     ENDFOR
	
	  This dimensions the array xyz to the number of records in the open table. The
	  FOR loop initializes the elements of the array, which clears the value of the
	  check boxes so that they are not checked.
	
	8. Set the ControlSource for the check box to thisform.xyz(RECNO()). This places
	  a 1 or 0 in the array element that relates to that particular record.
	
	9. To check that this works correctly, place the command WAIT WINDOW
	  STR(thisform.xyz(RECNO())) in the Valid clause of the check box. Every time
	  the check box is selected or cleared, the value of 0 (unchecked) or 1
	  (checked) appears in the wait window.
	
	If the number of records in the grid that are checked need to be counted, use a
	FOR loop to count the number of array elements that contain 1. The following
	code placed in the Click Event of a command button will count the number of
	checked boxes in the grid:
	
	     counter=0
	     FOR x = 1 TO RECCOUNT()
	           IF thisform.xyz(x) = 1
	              counter = counter + 1
	          ENDIF
	     ENDFOR
	     WAIT WINDOW STR(counter)
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
