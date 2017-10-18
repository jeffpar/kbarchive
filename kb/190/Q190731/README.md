---
layout: page
title: "Q190731: BUG: Pageframe Border Disappears When Sparse Set to False"
permalink: kb/190/Q190731/
---

## Q190731: BUG: Pageframe Border Disappears When Sparse Set to False

	Article: Q190731
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the Sparse property of a column in a grid, that is part of a Pageframe,
	to false causes the border of the Pageframe to disappear at run- time. The only
	part of the Pageframe that is visible are the tabs of the Pageframe. A combo box
	needs to be the current control of the column and the Sparse property of the
	column must be set to false before the border of the Pageframe disappears.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	When you run a form that meets the requirements in the SYMPTOMS section, the
	border of the Pageframe appears the first time after any changes have been made
	to the form. If no changes have been made to the form, the border of the
	Pageframe disappears until one of the Pageframe tabs are clicked.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add a table to the Data Environment.
	
	2. Add a Pageframe to the form, then edit the Pageframe and place a grid on
	  Page1. Resize the grid to fit inside the Pageframe.
	
	3. Change the ColumnCount property of the grid to 1.
	
	4. Edit the grid and place a combo box on Column1 of the grid.
	
	5. Change the Grid1.Column1.CurrentControl property to point to the combo box.
	
	6. Set the RowSourceType property of the combo box to "2 - Alias" and add a
	  field name to the RowSource property.
	
	7. Set the Grid1.Column1.Sparse property to false.
	
	8. Run the form and note that the border of the Pageframe appears properly.
	
	9. Run the form a second time without making any changes to it and note that the
	  border of the Pageframe disappears. Click Page2 of the pageframe and the
	  border appears.
	
	Additional query words: kbVFp500abug kbOOP kbvfp500a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
