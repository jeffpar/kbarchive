---
layout: page
title: "Q134251: BUG: Run-Time Changes to the Grid Not Saved Correctly"
permalink: /kb/134/Q134251/
---

## Q134251: BUG: Run-Time Changes to the Grid Not Saved Correctly

	Article: Q134251
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The AddColumn method allows a column to be added to a grid at runtime. However,
	if a column is added between two existing columns and the form is saved using
	the Thisform.Saveas method, the column order of the grid is not saved correctly.
	Altough, at runtime the column appears in the correct order. The column added
	between the existing columns becomes the last column on the grid when the saved
	screen is modified.
	
	WORKAROUND
	==========
	
	Use this command:
	
	     Thisform.<gridname>.column(n).colunmnorder = <number>
	
	Here <number> is the column position you want the newly created column to
	be. Issue this command after you have inserted the column and before using the
	ThisForm.SaveAs command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form called x.
	
	2. In the data environment, add any table.
	
	3. Drag the table from the data environment to the form to create a grid on the
	  form. Set the Name property of the Grid to Grid1.
	
	4. Save the form.
	
	5. Create a program called Testobj.prg, and add this code:
	
	        set safety off
	        do form x
	        x.grid1.name='mygrid'    && change the default grid name to "mygrid"
	        x.mygrid.columncount=2     && dimension the column count to 2
	        x.mygrid.column1.width=8
	        x.mygrid.addcolumn(2)    && add a new column between existing columns
	        x.mygrid.column3.header1.name='HdrItem' && change the header name
	        x.mygrid.column3.name='colItem'         && change the column name
	        x.mygrid.colItem.hdrItem.caption='Item' && change the caption name
	        x.saveas('y')                           && save the Form as "y"
	        modify form y
	
	6. Run the program. When the program is running, observe the difference between
	  the grid column order of the running form (x) and the modified form (y). The
	  running form contains the new column (ColItem) in the correct order as
	  required by the program, but the modified form does not.
	
	Example Workaround
	------------------
	
	To correct the problem, add the following line of code to Testobj.prg before the
	x.savas('y') command. Then run the program again.
	
	     x.mygrid.colItem.columnorder = 2
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
