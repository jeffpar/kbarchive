---
layout: page
title: "Q140295: How to Replace a Grid Cell's Value with Previous Cell's Value"
permalink: /kb/140/Q140295/
---

## Q140295: How to Replace a Grid Cell's Value with Previous Cell's Value

{% raw %}

	Article: Q140295
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can replace the value in a grid cell with the value contained in the grid
	cell that lies above it. This article shows by example how to create a command
	button on a form that can perform this operation.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form, and add a table to the data environment.
	
	2. Drag the table from the data environment onto the form to create a new grid.
	
	3. Place a command button on the form, and add the following code to its click
	  event:
	
	     ThisForm.Grid1.SetFocus
	     ThisForm.LockScreen = .T.
	     IF ThisForm.Grid1.RelativeRow = 1
	        =MESSAGEBOX("You cannot do this replacement from the top "+;
	           "of the Grid.",16,"")
	        *: If the active grid cell is in the top row of the grid, this
	        *: will display a message to the user.
	     ELSE
	        RepField = FIELD(ThisForm.Grid1.ActiveColumn)
	        ColumnNumber = "Column"+ALLTRIM(STR(ThisForm.Grid1.ActiveColumn))
	        ThisForm.GRID1.ACTIVATECELL(ThisForm.GRID1.RELATIVEROW-1,;
	           ThisForm.GRID1.RELATIVECOLUMN)
	        RepValue = ThisForm.Grid1.&ColumnNumber..Text1.Value
	        ThisForm.GRID1.ACTIVATECELL(ThisForm.GRID1.RELATIVEROW+1,;
	           ThisForm.GRID1.RELATIVECOLUMN)
	        yesno = MESSAGEBOX("Are you certain that you wish to replace "+;
	           CHR(13)+"Field "+UPPER(repField)+" current value?",36,"")
	        IF yesno = 6
	           REPLACE &RepField WITH RepValue
	           ThisForm.REFRESH
	        ELSE
	           WAIT WINDOW "Replacement Canceled" NOWAIT
	        ENDIF
	     ENDIF
	     ThisForm.LockScreen = .F.
	
	4. Close, Save, and use the DO command to run the form. Place the insertion
	  point in any cell of the grid, and click the command button. If the pointer
	  has been placed in a cell that is in the top row of the grid, you should
	  observe the "You cannot do this replacement from the top of the grid"
	  message. Otherwise, you should see the "Are you certain..." message. If you
	  click Yes, the replacement should occur. If you click No, a wait window
	  indicating "Replacement Canceled" should appear.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
