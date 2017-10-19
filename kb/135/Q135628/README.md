---
layout: page
title: "Q135628: PRB: Disabled Grid Column Allows Focus with Mouse Click"
permalink: /kb/135/Q135628/
---

## Q135628: PRB: Disabled Grid Column Allows Focus with Mouse Click

	Article: Q135628
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
	
	If the Enabled property of a grid column is set to False (.F.), the insertion
	point is not allowed to enter the column if accessed from the keyboard. However,
	clicking the column moves the insertion point to the cell beneath the mouse
	pointer. Even though no changes can be made, this behavior may be perceived as
	confusing, and is inconsistent with other controls.
	
	WORKAROUND
	==========
	
	To prevent the mouse click from activating a disabled column, check for the
	nColIndex in the AfterRowColChange event to determine if the column is one which
	should reject focus. If it is, reset focus back to the current cell by calling
	the ActivateCell method.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To determine the last active cell, you need to ensure that the row and column
	values are stored as a property of the form. Create two new properties named
	OldRow and OldCol. To set the values, add the following lines of code to the
	GotFocus event for each object in the grid that should receive focus:
	
	     * code in Grid1.Column<n>.<Object>.GotFocus
	     THISFORM.OldRow = THIS.PARENT.PARENT.ActiveRow
	     THISFORM.OldCol = THIS.PARENT.PARENT.ActiveColumn
	
	In the following example, the second column is disabled:
	
	     * code in Grid1.AfterRowColChange event
	     LPARAMETERS nColIndex      && supplied by method
	     IF nColIndex = 2
	         THIS.ActivateCell( THISFORM.OldRow, THISFORM.OldCol )
	     ENDIF
	
	Now when clicked, the disabled column will flash briefly. Then focus will return
	to the last active cell selected.
	
	Additional query words: VFoxWin browse
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
