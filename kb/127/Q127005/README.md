---
layout: page
title: "Q127005: PRB: UP/DOWN Arrow Keys Call Click Event in Form"
permalink: kb/127/Q127005/
---

## Q127005: PRB: UP/DOWN Arrow Keys Call Click Event in Form

	Article: Q127005
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pressing the UP or DOWN arrow in a list box triggers the Click event.
	
	CAUSE
	=====
	
	This behavior is by design. When the arrow keys are pressed to navigate through
	a list, the value associated with the list is modified. This triggers the Click
	event.
	
	RESOLUTION
	==========
	
	If you do not want to execute the code in the Click event handler, you can
	verify the value of the last keypress when the Click event is triggered. If the
	LASTKEY() function returns the value of the UP or DOWN arrow keys, issue a
	RETURN in your routine.
	
	MORE INFORMATION
	================
	
	The Click event handler routine is also executed in the following scenarios:
	
	- When the Spacebar is pressed on a command button, check box, or option
	  button.
	
	- When the Enter key is pressed on a command button, check box, text box, or
	  option button.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code will demonstrate that the Click event is triggered when the UP
	or DOWN arrows are pressed in a list box. It also illustrates the alternative of
	verifying the value of the last key pressed.
	
	     ofrm1 = CREATEOBJECT('frm1')
	     ofrm1.show
	     READ EVENTS
	
	     ***********************
	     ** Class definitions **
	     ***********************
	
	     DEFINE CLASS frm1 AS form
	        ScaleMode=3
	        ADD OBJECT lsttest AS lstclick
	        ADD OBJECT cmdtest AS cmdquit
	        Caption = "Press the Up and Down Arrow keys"
	     ENDDEFINE
	
	     DEFINE CLASS lstclick AS listbox
	     * Defines a list with hard coded values
	
	        RowSourceType = 1    && Value
	        RowSource = "1,2,3"  && List of numbers to be displayed
	        Height = 85
	        Left = 84
	        Top = 60
	
	        PROCEDURE Click
	        IF LASTKEY()= 5  OR LASTKEY()=24 &&Traps for the Up or Down arrow
	          RETURN .T.
	        ELSE
	          WAIT WINDOW "Click has been pressed in the list box"
	        ENDIF
	        ENDPROC
	     ENDDEFINE
	
	     * Define a Quit command button that releases the form
	     DEFINE CLASS cmdquit AS Commandbutton
	        Top=150
	        Left=84
	        Caption= "Quit"
	
	        PROCEDURE click
	        RELEASE Thisform
	        CLEAR EVENTS
	        ENDPROC
	     ENDDEFINE
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
