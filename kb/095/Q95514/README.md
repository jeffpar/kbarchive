---
layout: page
title: "Q95514: FIX: Focus Rectangle Remains When Grid Loses Focus"
permalink: /kb/095/Q95514/
---

## Q95514: FIX: Focus Rectangle Remains When Grid Loses Focus

	Article: Q95514
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 2.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a grid control loses focus, the focus rectangle surrounding the active cell
	incorrectly remains on the cell.
	
	This behavior differs from that of the grid control that shipped with the
	Professional Toolkit for Visual Basic version 1.0. The active cell, with the
	focus rectangle, can be differentiated from other cells in the grid by its wider
	border when GridLines is set to True or by the fact that it is the only cell
	with a border when GridLines is set to False.
	
	WORKAROUND
	==========
	
	To work around the problem, change the active cell to one in a fixed row or
	column so that no cell has a focus rectangle. Selected cells are unaffected by
	changing the active cell. For example, add the following code to the LostFocus
	event of a grid control named grid1:
	
	     Sub Grid1_LostFocus ()
	        Grid1.Row = 0
	        Grid1.Col = 0
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in both the Standard and
	Professional Editions of Microsoft Visual Basic version 2.0 for Windows. This
	problem was corrected in Microsoft Visual Basic version 3.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run Visual Basic, or from the File menu, choose New Project (ALT, F, N) if
	  Visual Basic is already running. Form1 is created by default.
	
	2. From the File menu, choose Add File. In the Files box, select the GRID.VBX
	  custom control file. The grid tool appears in the Toolbox. In Visual Basic
	  version 3.0, GRID.VBX is automatically installed.
	
	3. Add a grid control (Grid1) to Form1 with the following properties:
	
	  Rows: 5
	  Cols: 5
	
	4. Add a text box (Text1) to Form1.
	
	5. From the Run menu, choose Start (ALT, R, S) to run the program. Grid1 gets
	  the focus on startup and the focus rectangle is around R1C1.
	
	6. Tab to the text box. Focus changes from Grid1 to Text1. Even though focus
	  changed to Text1, the focus rectangle on R1C1 on the Grid1 incorrectly
	  remains.
	
	Additional query words: buglist2.00 fixlist3.00 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
