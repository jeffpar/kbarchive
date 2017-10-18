---
layout: page
title: "Q138655: How to Highlight a Single Grid Field"
permalink: kb/138/Q138655/
---

## Q138655: How to Highlight a Single Grid Field

	Article: Q138655
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to highlight the single grid cell in which the mouse
	pointer is located. Various other Microsoft Knowledge Base articles already
	exist that describe how to produce other grid visual effects, such as
	highlighting an entire row or selecting the entire field (cell) upon entry by
	using the Format property. The technique described in this article allows the
	user to positively identify the cell in which the pointer is currently located.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a form with a data environment, and drag the table onto the form to
	  create a grid.
	
	2. In the Grid.Init event, place the following code:
	
	     This.Column1.Text1.SelectedBackColor = RGB(0,255,0)
	
	3. In the Grid.AfterRowColChange event, place the following code:
	
	     MyColumn="Column"+ALLTRIM(STR(nColIndex))
	     This.&MyColumn..Text1.SelectedBackColor = RGB(0,255,0)
	     This.&MyColumn..Text1.BackColor= This.&MyColumn..Text1.SelectedBackColor
	
	4. Run the Form, and either click a cell or press the TAB key to move into a
	  cell. The cell will exhibit the color of the SelectedBackColor of the text
	  box that usually is shown only on initial entry into the cell. The highlight
	  color generally disappears when you start to type in the cell.
	
	For more information about highlighting an entire row, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q130458 How to Highlight the Entire Row in Grid When User Clicks
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
