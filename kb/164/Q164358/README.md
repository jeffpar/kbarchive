---
layout: page
title: "Q164358: PRB: Handling Violation of Field Rules in Forms"
permalink: /kb/164/Q164358/
---

## Q164358: PRB: Handling Violation of Field Rules in Forms

	Article: Q164358
	Product(s): Microsoft FoxPro
	Version(s): 5.0 6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp600
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the REVERT or HELP buttons are not desirable in the dialog box that Visual
	FoxPro 5.0 presents for violations of Field Rules, it is possible to trap the
	error and present a custom dialog box. These errors were not trappable in either
	Visual FoxPro 3.0 or 3.0b.
	
	RESOLUTION
	==========
	
	There are basically three potential workarounds for this situation:
	
	The first can be with or without the use of classes. Using classes, however, is
	recommended and the implementation below allows you to use the workaround on a
	form not using any custom classes.
	
	1. Create a custom Form Property called lFlagError.
	
	2. In the Error Method of the Form, add the following code:
	
	        IF nError = 1582 && Field "name" validation rule is violated
	           THIS.lFlagError = .T.
	        ENDIF
	
	3. In the LOSTFOCUS of any TextBox that is based on a field with a field rule,
	  add the following code:
	
	        IF THISFORM.lFlagError
	           NODEFAULT && Do not move Focus to Next Object
	           THISFORM.lFlagError = .F.
	        ENDIF
	
	The second option involves modifying the Field Rule. Instead of having a field
	rule that is merely an expression or a function that checks the condition and
	then returns a True or False, change the expression into a Function (or modify
	the existing function) so that it checks for the desired condition. In addition,
	if the rule fails, REPLACE the field with a valid value or the DEFAULT VALUE, as
	in the following example:
	
	     Current Rule: .NOT. EMPTY(<fieldname>)
	
	     Modified Rule*: MyCustomRule()
	     *Best placed in Store Procedures of the Database container
	
	     FUNCTION MyCustomRule()
	        IF EMPTY(<fieldname>)
	           REPLACE <fieldname> WITH ;
	           EVAL(DBGETPROP('<alias.fieldname','FIELD','DEFAULTVALUE'))
	        ENDIF
	
	The third option makes use of a Timer. The SETFOCUS of the object that caused the
	Rule violation cannot be called from within the Form's ERROR method due to the
	Visual FoxPro Object Model. At the time of the error the current object is still
	the object that caused the error and its LOSTFOCUS event has not yet occurred;
	therefore, when the ERROR method code is finished, the object's LOSTFOCUS
	occurs, moving it to the next object in the tab order, negating any SETFOCUS()
	command in the ERROR method of the Form. The Timer allows the Object Model to
	progress through normally and then move the focus back to the object that caused
	the rule violation. Use the following steps to implement this workaround:
	
	1. From the File menu, click New, and then click Class.
	
	2. From the "Based On" combo box click Timer (for a name, use ErrTimer).
	
	3. Choose a Class library to store the class in and click OK.
	
	4. From the Class menu, click Property and name it - oObjRef.
	
	5. In the Timer Method, enter the following code:
	
	        && Turn the Timer back off
	        THIS.INTERVAL = 0
	
	        && Tell the user there was an error
	        =MESSAGEBOX(MESSAGE(),48)
	
	        && Put the user back in the control
	        THIS.oObjRef.SETFOCUS()
	        THIS.oObjRef=.NULL.
	
	6. Create a form.
	
	7. Add the following code to the form's ERROR method:
	
	        && Check and see if the error was due to Rule Validation
	        IF nError = 1582
	
	           && Store an object reference of the Current Control to the
	           && custom property oObjRef
	           THIS.Errtimer1.oObjRef = THIS.ACTIVECONTROL
	
	           && The interval can be critical, setting it to low and timing
	           && problems occur, such as the Timer's custom property
	           && not getting set.
	           THIS.Errtimer1.INTERVAL = 100
	        ENDIF
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Issue the following commands in the Command window:
	
	        CREATE DATABASE beakrul
	        CREATE TABLE tTemp ;
	          (cFld1 c(3) CHECK .NOT. EMPTY(cFld1) ERROR 'Cannot be empty!')
	        CREATE FORM breakrul
	
	2. Set the Form's BUFFERMODE to "2 - Optimistic."
	
	3. Right-click on the form and click "Data Environment."
	
	4. Right-click in the DataEnvironment Window and click "Add Table."
	
	5. Select the above table.
	
	6. Click Close to close the "Add Table or View" dialog box.
	
	7. Click on a field in the Data Environment window and drag it onto the form.
	
	8. Add a CommandButton to the Form.
	
	9. Double-Click on the CommandButton.
	
	10. In the CommandButton's CLICK method add the following code:
	
	         APPEND BLANK
	         THISFORM.REFRESH()
	
	11. Save and run the form.
	
	12. Click on the CommandButton.
	
	13. Tab to the TextBox.
	
	14. Type anything in the TextBox and hit Enter
	
	15. Tab back to the TextBox.
	
	16. Delete the contents of the TextBox and press Enter. The Field Validation
	  dialog box appears.
	
	REFERENCES
	==========
	
	For more information about replacing values from field rules, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q158255 How To Modify a Rule's Table to Which It Belongs in VFP 5.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : 5.0 6.0
	
	=============================================================================
	
