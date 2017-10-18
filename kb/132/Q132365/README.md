---
layout: page
title: "Q132365: PRB: Phantom Grid Column Displayed After Moving to Last Column"
permalink: kb/132/Q132365/
---

## Q132365: PRB: Phantom Grid Column Displayed After Moving to Last Column

	Article: Q132365
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you press the TAB key to move across a row in a grid, after moving into the
	last column, the mouse pointer jumps one column to the left and displays a
	phantom column.
	
	For example, this happens when the grid has these properties:
	
	  .ColumnCount = 4
	  .RecordMark = .F.
	  .DeleteMark = .F.
	  .ScrollBars = 0
	  .Width = 400
	  .Column1.Width = 100
	  .Column2.Width = 100
	  .Column3.Width = 100
	  .Column4.Width = 100
	
	RESOLUTION
	==========
	
	To suppress the horizontal scrolling effect and the display of a phantom column
	after the last column, set the grid's Width property to a value that causes the
	right border of the grid to be displayed in a thicker (bolder) line. This makes
	the edge of the right-most column the same as the border of the grid.
	
	For example, add seven to the sum of the column widths in the example given in
	the "Symptoms" section of this article. This suppresses the horizontal scrolling
	effect:
	
	  .ColumnCount = 4
	  .RecordMark = .F.
	  .DeleteMark = .F.
	  .ScrollBars = 0
	  .Width = 407 && Add 7 to the sum of the column widths
	  .Column1.Width = 100
	  .Column2.Width = 100
	  .Column3.Width = 100
	  .Column4.Width = 100
	
	The addition of seven pixels to the sum of the column widths is based on the
	number of vertical lines in the grid, which includes the right border of the
	grid. When the grid's Width property is set to 407, the right border of the grid
	is shown in bold in the Form Designer. When the form is executed, you will not
	be able to press the TAB key or the CTRL-TAB to move past the last column so
	that the horizontal scrolling of the grid display will not occur.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
