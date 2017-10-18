---
layout: page
title: "Q156035: PRB: Control in Grid w/ When Returning .F. Passes Keys to Form"
permalink: kb/156/Q156035/
---

## Q156035: PRB: Control in Grid w/ When Returning .F. Passes Keys to Form

	Article: Q156035
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clicking on a grid column whose control's When() returns False allows focus to
	be set to the grid column. In this state, keystrokes are passed to the form
	containing the grid, calling the form's KeyPress event and actuating any hotkeys
	on controls on the form.
	
	WORKAROUND
	==========
	
	- Do not return False (.F.) from the control's When(), and conditionally issue
	  a KEYBOARD "{tab}" command in the control's GotFocus() to keep focus off
	  column.
	
	- or -
	
	- Conditionally issue a NODEFAULT in the KeyPress() method of the form.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This is normal behavior for the Grid object. This situation occurs because the
	Grid object must change the record pointer before it can query columns or column
	controls for Enabled = True. Once the record pointer is changed, the grid can't
	go back because the grid does not save a previous record pointer.
	
	Leaving the focus on the prior column before the user switches to the disabled
	column or control may lead to problems when handling two special cases:
	
	- When the grid is entered for the first time and there is no prior column.
	
	- When DynamicCurrentControl is used and the current control for the previous
	  column gets set to a disabled control.
	
	In addition, the grid must behave this way to accommodate the following special
	case:
	
	- If all the columns of a grid are disabled and the RecordMark and DeleteMark
	  properties are set to False, the user needs to have a way to change the
	  record pointer within the grid.
	
	For more information about selection of grid columns with disabled controls, or
	controls whose When() returns False, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q137963 PRB: Disabled Grid Controls Can Be Selected with Mouse
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program file:
	
	     * Start of sample program
	
	     PUBLIC oForm
	     oForm=CREATEOBJECT('form1')
	     oForm.SHOW
	     oForm.grid1.column1.ADDOBJECT('text2','txtTextbox')
	     oForm.grid1.column1.CURRENTCONTROL='text2'
	     oForm.grid1.column1.text2.VISIBLE=.T.
	
	     DEFINE CLASS form1 AS FORM
	
	        ADD OBJECT grid1 AS GRID WITH ;
	        COLUMNCOUNT = 2, ;
	        NAME = "Grid1"
	
	        ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	        CAPTION = "\<Test", ;
	        HEIGHT=25, ;
	        TOP=205, ;
	        NAME = "Command1"
	
	        PROCEDURE LOAD
	           CREATE CURSOR test ( ctest c(10), ctest2 c(10) )
	           INSERT INTO test ( ctest) VALUES ( "    ")
	           INSERT INTO test ( ctest) VALUES ( "    ")
	           GO TOP
	        ENDPROC
	
	        PROCEDURE command1.VALID
	           WAIT WINDOW "Command button valid called" TIMEOUT 1
	        ENDPROC
	
	     ENDDEFINE
	
	     DEFINE CLASS txttextbox AS TEXTBOX
	
	        PROCEDURE WHEN()
	           RETURN RECNO()=1     && Returns .F. if not on first record
	        ENDPROC
	
	     ENDDEFINE
	
	     * End of sample program
	
	2. Click the grid cell in the first column, second row of the grid.
	
	3. Press the "t" (without the quotation marks) key. The Command button click
	  will be called by the "T" hotkey even though the grid has the focus.
	
	Following are two examples of workarounds for this problem:
	
	Method 1
	--------
	
	To prevent the column from getting focus:
	
	1. Change the class definition for the textbox, removing the RETURN statement
	  from the When() and adding code to the GotFocus() method as follows:
	
	     DEFINE CLASS txtTextbox AS TEXTBOX
	
	        PROCEDURE GOTFOCUS()
	
	           IF RECNO()!=1          && Check for condition that was checked
	                                  && in When()
	             KEYBOARD '{tab}'
	           ENDIF
	
	        ENDPROC
	
	     ENDDEFINE
	
	2. Run the program, and click the grid cell in the first column, second row of
	  the grid. Note that the focus will not remain in the first column.
	
	Method 2
	--------
	
	To intercept the KeyPress at the form level:
	
	1. Add the following code in the KeyPress procedure of the class definition for
	  the Form:
	
	     PROCEDURE KeyPress
	        LPARAMETERS nKeyCode, nShiftAltCtrl
	           * Check to see if the ActiveControl is a Grid and that the
	           * ALT key was not pressed. If both of these are true, NODEFAULT
	           * will discard the keystroke. If the ALT key was pressed, you do
	           * want to use the keystroke to actuate any applicable hot-keyed
	           * control on the form.
	        IF this.ActiveControl.BaseClass = 'Grid' and nShiftAltCtrl != 4
	           NODEFAULT
	        ENDIF
	     ENDPROC
	
	2. Run the program, and click the grid in the cell in the first column, second
	  row of the grid. Note that the focus will remain in the first column. Typing
	  "t" will not actuate the Command button but pressing the ALT+T keys will.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	
