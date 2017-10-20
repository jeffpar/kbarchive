---
layout: page
title: "Q156238: PRB: Form Not Released from Menu Pad or ON KEY LABEL"
permalink: /kb/156/Q156238/
---

## Q156238: PRB: Form Not Released from Menu Pad or ON KEY LABEL

{% raw %}

	Article: Q156238
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
	
	A form released from a procedure or command called from a menu or an ON KEY
	LABEL command is not actually released until the command or procedure has
	completed.
	
	WORKAROUND
	==========
	
	Set the Visible property of the form to .F. - False to hide the form until the
	procedure that releases it has finished executing.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Keypress event of the form intercepts the keystroke, and the form cannot be
	released until the procedure or command called by the keystroke has completed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a .prg:
	
	     ON KEY LABEL F3 DO Release_It
	     oForm = CREATEOBJECT('form')
	     oForm.Caption = "Press F3 to release form, then F3 to Clear Events"
	     oForm.SHOW()
	     READ EVENTS
	     ON KEY LABEL F3
	
	     PROCEDURE Release_It
	         oForm.RELEASE
	         =MESSAGEBOX("Though form has been released, _SCREEN.Formcount = " ;
	           + ALLTR(STR(_SCREEN.FORMCOUNT,1)) + ". Press F3 after OK to " ;
	           + "return to Command Window." ,0)
	         ON KEY LABEL F3 CLEAR EVENTS
	     ENDPROC
	
	2. Press the F3 key. The message box indicates the form still exists since the
	  FormCount property of the _SCREEN system variable still returns 1.
	
	3. Click OK then press F3 to return to the Command window.
	
	Modify the Release_It procedure in the above example as follows to demonstrate
	the workaround. (The form is still not immediately released from memory but
	setting the Visible property to .F. - False makes it appear released.)
	
	     PROCEDURE Release_It
	        oForm.Visible = .F.
	        oForm.RELEASE
	        =MESSAGEBOX("Though form has been released, _SCREEN.Formcount = " ;
	          + ALLTR(STR(_SCREEN.FORMCOUNT,1)) + ". Press F3 after OK to " ;
	          + "return to Command Window." ,0)
	        ON KEY LABEL F3 CLEAR EVENTS
	     ENDPROC
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	

{% endraw %}
