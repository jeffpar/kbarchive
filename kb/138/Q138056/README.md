---
layout: page
title: "Q138056: FIX: CurrentControl Property of Grid Column Reverts to Default"
permalink: kb/138/Q138056/
---

## Q138056: FIX: CurrentControl Property of Grid Column Reverts to Default

	Article: Q138056
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
	
	On a form that contains a PageFrame with multiple pages, if one of the pages is
	modified, then the CurrentControl property of all the grid columns in some of
	the pages is reset to the default of Text<n>.
	
	WORKAROUND
	==========
	
	Delete the Text object for all the columns for which you want the current
	control to be different from the default of Text<n>.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	This problem occurs when a form that has a PageFrame object that has two or more
	pages with the following setup:
	
	- All pages of the PageFrame object contain a grid.
	
	- For each of the grids, the CurrentControl property for one or more of the
	  columns is set to a control other than the default of Text<n>. For
	  example, it is set to Combo1, List1, or Check1.
	
	- The form has been saved and then run.
	
	If changes are made to any one of the pages, then in all of the subsequent pages,
	the CurrentControl of the grid columns reverts to the default of Text<n>
	if they are not already set to that before the modifications. However, the
	CurrentControl property of the grid columns in the edited page and those pages
	that precede it are not changed.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form and add a table that has at least two fields in it to the data
	  environment.
	
	2. Place a PageFrame object on the form, and set the PageCount property of the
	  PageFrame to 4.
	
	3. Edit the PageFrame, and select the first Page. Place a Grid object on the
	  first page, and set the grid's ColumnCount to 2.
	
	4. Edit the grid to insert a combo box into the first column and an edit box
	  into the second column.
	
	5. Set the CurrentControl property of the first column to the combo box and that
	  of the second column to the edit box.
	
	6. Select and Copy the grid plus any other controls that you may have on the
	  page. Then paste them into the rest of the pages.
	
	7. Save and run the form.
	
	8. Close and then edit the form. Make some changes to the second page of the
	  form. For example change the size or position of the grid or of another form
	  control that you may have on the page.
	
	9. Run the Form.
	
	You will see that the columns of the grids on Pages 3 and 4 do not display the
	combo box or edit box. Whereas, those in pages 1 and 2 still display the two
	controls. If you edit the form, you'll see that the CurrentControl of the
	columns in the grids on Pages 3 and 4 has reverted back to Text<n>.
	
	Example Steps to Work Around Problem
	------------------------------------
	
	1. Select the Text<n> object for the grid column from the Properties
	  dialog box.
	
	2. Click the grid in the form where you have selected the Text<n> object,
	  and then press the DELETE key.
	
	Additional query words: grid pageframe
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
