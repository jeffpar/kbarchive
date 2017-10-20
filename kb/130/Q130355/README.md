---
layout: page
title: "Q130355: How to Validate Data by Using Customized Error Messages"
permalink: /kb/130/Q130355/
---

## Q130355: How to Validate Data by Using Customized Error Messages

{% raw %}

	Article: Q130355
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When doing field-level validation on a form, you may want to use a custom error
	message and bypass the Visual FoxPro default error message such as "Invalid
	input." This article shows by example how to use custom error messages and turn
	off Visual FoxPro default error messages during field-level validation routines.
	
	MORE INFORMATION
	================
	
	When designing validation routines as one of the active methods for a form's
	text boxes, developers often return a value of false (.F.) when the entered data
	fails the validation routine. Here is an example validation routine:
	
	     If (M.Field <> "TEST")
	        Wait Window "Incorrect Value"
	        Return .F.
	     Endif
	
	A user who enters an invalid value sees the "Incorrect Value" Wait Window and
	also sees another Wait Window put up by Visual FoxPro that says "Invalid
	input."
	
	To suppress the Visual Foxpro message, modify the field-level validation to
	return a value of zero (0). This turns off the FoxPro default error messages.
	Here's an example:
	
	     If (M.Field <> "TEST")
	        Wait Window "Incorrect Value"
	        Return 0
	     Endif
	
	Code Sample
	-----------
	
	The following code example demonstrates this behavior. It uses a form and two
	text boxes. It also serves as a good example of how, in a program, you can
	define objects and add new objects to defined objects.
	
	  *--------------------------------------------------------------*
	  * Program: ValidTst - (C) 1995 - Microsoft Corporation         *
	  * This program demonstrates the difference between returning   *
	  * a value of false (.F.) when a field fails its validation     *
	  * test versus returning a value of zero (0). Note: In order to *
	  * leave the input field, you MUST enter the value of TEST.     *
	  *--------------------------------------------------------------*
	  frmMyForm = CREATEOBJECT('Form')              && Create a Form.
	  frmMyForm.Closable = .F.                      && Disable Control menu.
	
	  frmMyForm.AddObject('txtBox1','NewTextBox')   && Add 1st text box.
	  frmMyForm.AddObject('txtBox2','OldTextBox')   && Add 2nd text box.
	  frmMyForm.AddObject('cmdQuit','cmdQuitButton')&& Quit Cmnd button.
	
	  frmMyForm.SHOW                                && Display the form.
	  READ EVENTS                                   && Start event processing.
	
	  *------------------------------------------------------*
	  * The VALID clause for this text box will use a custom *
	  * error message. The only thing you will see is the    *
	  * message box showing what you typed in.               *
	  *------------------------------------------------------*
	  DEFINE CLASS NewTextBox as textbox
	    Visible = .T.
	    Left    = 125
	    Top     = 20
	
	    PROCEDURE Valid
	      IF (This.Value <> "TEST")
	        =MessageBox("You entered: "+Alltrim(This.Value))
	        RETURN 0                && Invalid data, do NOT return .f.
	      ENDIF
	  ENDDEFINE
	
	  *------------------------------------------------------*
	  * In the second text box, if you don't type in TEST,   *
	  * You will see FoxPro's default error message (Invalid *
	  * input) as well as the message box.                   *
	  *------------------------------------------------------*
	  DEFINE CLASS OldTextBox as textbox
	    Visible = .T.
	    Left    = 125
	    Top     = 70
	
	    PROCEDURE Valid
	      IF (This.Value <> "TEST")
	        =MessageBox("You Entered: "+Alltrim(This.Value))
	        RETURN .F.             && Returning FALSE here.
	      ENDIF
	  ENDDEFINE
	
	  DEFINE CLASS cmdQuitButton AS CommandButton  && Create command button.
	      Caption = '\<Quit'       && Caption on the command button.
	      Cancel  = .T.            && Default Cancel command button (Esc).
	      Left    = 125            && command button column.
	      Top     = 150            && command button row.
	      Height  = 25             && command button height.
	      Visible = .T.
	
	      PROCEDURE Click
	        CLEAR EVENTS           && Stop event processing, close Form.
	  ENDDEFINE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
