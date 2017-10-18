---
layout: page
title: "Q133738: How to Display Grid-Based Logical Fields as Other than T or F"
permalink: kb/133/Q133738/
---

## Q133738: How to Display Grid-Based Logical Fields as Other than T or F

	Article: Q133738
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives you two methods you can use in Visual FoxPro to display
	logical fields with values other than true (T) or false (F) in a grid. For
	example, you might want to display values such as yes (Y) or no (N).
	
	NOTE: In FoxPro version 2.x, this display was created using a BROWSE picture
	clause. For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q99908 Making Logicals Show "Y" or "N" in a Browse or Screen
	
	MORE INFORMATION
	================
	
	Preparations for Both Methods
	-----------------------------
	
	Use the following steps to set up Column1 of the grid to display the existing
	logical field for reference.
	
	1. Create a form, and use the VFP\Samples\Data\Products table as the data
	  environment.
	
	2. Drag the table onto the form to create a grid.
	
	3. Set the grid layout ColumnCount property to 2.
	
	4. Set the Column1 ControlSource property to products.discontinu.
	
	Use one of the following two methods to display the logical field with a
	different value.
	
	Method One
	----------
	
	1. Set the Column2 ColumnSparse property to false (.F.).
	
	2. Set the Column2 ControlSource property to products.discontinu.
	
	3. Set the Column2 Text1 InputMask property to Y.
	
	4. Run the Form. Column1 shows the actual table values, and Column2 shows the
	  equivalent Y or N.
	
	Notes:
	
	- The InputMask setting of Y is not documented in the Help menu or the Language
	  Reference.
	
	- Without the ColumnSparse property set to false, the Y or N is visible only if
	  the pointer is in that particular field.
	
	- If the Column2 Read-only property is false, it may be edited, and Y or N can
	  be used instead of T or F.
	
	Method Two
	----------
	
	1. Set the Column2 ControlSource property to:
	
	     IIF(products.discontinu, "Yes", "No ")  && The space after No is an
	                                             && attempt to give the
	                                             && strings the same length.
	
	2. Run the Form. Column1 shows the actual table values, and Column2 shows the
	  equivalent Yes or No value.
	
	Notes:
	
	- Other values may be substituted for the Yes or No.
	
	- This field, whether marked for Read-only or not, is a calculated field, so it
	  cannot be edited directly. However, a method in the Text1 field can be
	  created in order to toggle the field value. To do this, place the following
	  line of code in the DblClick method of Text1:
	
	     REPLACE products.discontinu WITH !products.discontinu This.Refresh
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
