---
layout: page
title: "Q137963: PRB: Disabled Grid Controls Can Be Selected with Mouse"
permalink: /kb/137/Q137963/
---

## Q137963: PRB: Disabled Grid Controls Can Be Selected with Mouse

	Article: Q137963
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are able to use the mouse to select a disabled grid control. The control
	appears to have the focus, but no editing can be performed.
	
	This can occur when:
	
	- A grid column has an Enabled property set to true.
	
	  -or-
	
	- A control inside the grid column has an Enabled property set to true.
	
	  -or-
	
	- The When event returns a false.
	
	This situation can also arise when you press the UP ARROW or DOWN ARROW key under
	either of these ircumstances:
	
	- The column is disabled, and you select a control on the column by using the
	  mouse. Then you can use the UP ARROW and DOWN ARROW keys to move the focus up
	  and down the disabled column.
	
	  -or-
	
	- The DynamicCurrentControl property is used to set the current control to a
	  disabled control. Then you can use the UP ARROW and DOWN ARROW keys to move
	  up or down from the disabled control.
	
	CAUSE
	=====
	
	This is normal behavior for the Grid object. This situation occurs because the
	Grid object must change the record pointer before it can query columns or column
	controls for enabled = true. Once the record pointer is changed, the grid can't
	go back because the grid does not save a previous record pointer.
	
	It might be argued that the grid should leave the focus on the prior column
	before the user switches to the disabled column or control, but this leads to
	problems when handling two special cases:
	
	- When the grid is entered for the first time, and there is no prior column.
	
	- When DynamicCurrentControl is used and the current control for the previous
	  column gets set to a disabled control.
	
	In addition, the grid must behave this way to accommodate the following special
	case. If all the columns of a grid are disabled and the RecordMark and
	DeleteMark properties are set to false, the user needs to have a way to change
	the record pointer within the grid.
	
	RESOLUTION
	==========
	
	Include code in the AfterRowColChange event to handle cases in which the column
	is being changed to a disabled column or control. Following are two examples of
	code to accomplish this.
	
	Example One
	-----------
	
	The following example demonstrates the simplest case. For this example, assume
	that column one is always disabled, column two is never disabled, and horizontal
	scrolling is disabled.
	
	     LPARAMETERS nColIndex
	
	     * LPARAMETERS statement required and inserted by Visual FoxPro
	
	     * Check to see if you're on column one
	     IF nColIndex = 1
	         * Change the active cell
	         WITH This
	             .ActivateCell(.RelativeRow, 2)
	         ENDWITH
	     ENDIF
	
	NOTE: This example makes use of the RelativeRow property. Do not use the
	ActiveRow property; it will not work properly. Note that the ActiveCell method
	assigns the focus to column two even if column two is disabled or the current
	control in column two is disabled.
	
	Example Two
	-----------
	
	The following example is slightly more robust. It can be used on scrollable
	grids, where the columns or controls may have a variable enabled setting. The
	code first checks to make sure that the current column is valid. If it is not,
	it starts moving through the available columns until it finds a valid column for
	input focus, and then sets the focus. The code wraps from the last column to the
	first, taking into account that several controls may exist within the column.
	The code leaves the focus on the current column if no columns are enabled.
	
	     LPARAMETERS nColIndex
	
	     * LPARAMETERS statement required and inserted by Visual FoxPro
	
	     LOCAL iLoop, iMax, lFocusSet
	
	     WITH This && Grid
	
	        * Initialize Loop Variables
	        iMax = .ColumnCount
	        iLoop = nColIndex + 1
	
	        * Check if current column is valid
	        WITH .Columns(nColIndex)
	           * Column is valid only if the Column's Enabled Property is True
	           * and the CurrentControl's Enabled Property is True
	
	           * Note: The EVAL function (cf. EVALUATE() online help) is used as
	           * as an alternative to macro substitution for accessing the
	           * column's current control
	
	           lFocusSet=.Enabled .AND. EVAL("." + .CurrentControl + ".Enabled")
	
	        ENDWITH
	
	        * Start at next column (to the right) and cycle through all columns
	        * until a valid column is reached or loop returns to current column
	
	        * Note: If the current column is valid, lFocusSet = true and this
	        * loop is skipped
	        DO WHILE iLoop # nColIndex .AND. .NOT. lFocusSet
	           * Wrap to first column if necessary
	           IF iLoop > iMax
	              iLoop = 1
	           ELSE
	
	              WITH .Columns(iLoop)
	                 * If this column is Valid (same criteria as above)
	                 IF .Enabled .AND. EVAL("." + .CurrentControl + ".Enabled" )
	                    * Set focus to column and end loop
	                    .SetFocus
	                    lFocusSet = .T.
	                 ENDIF
	              ENDWITH
	              * Advance to next column
	              iLoop = iLoop + 1
	           ENDIF
	        ENDDO
	     ENDWITH
	
	NOTE: This example does not take into account columns or controls within columns
	that have a When event that returns False.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
