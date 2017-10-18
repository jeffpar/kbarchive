---
layout: page
title: "Q130387: PRB: CLEAR EVENTS in Modal Form Does Not Clear a READ"
permalink: kb/130/Q130387/
---

## Q130387: PRB: CLEAR EVENTS in Modal Form Does Not Clear a READ

	Article: Q130387
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A modal form is run from a program with a DO FORM command followed by a READ
	EVENTS. A command button on the form has the following method in its Click
	event:
	
	     RELEASE THISFORM
	     CLEAR EVENTS
	
	When the button is clicked, the form is released but the READ EVENTS is not
	cleared.
	
	CAUSE
	=====
	
	When a modal form is displayed, execution of a program is suspended. Modal forms
	do not require a READ EVENTS. In the case described in this article, the READ
	EVENTS command has not yet been executed when the CLEAR EVENTS is issued.
	Program execution is suspended.
	
	RESOLUTION
	==========
	
	Do not use the READ EVENTS command if you have a modal form or form set. To
	verify the modality of your form, check the value of the WindowType property.
	When a form is modal, the WindowType property is equal to 1. For more
	information about displaying modal forms or form sets, search for the WINDOWTYPE
	property or the SHOW method in the Visual FoxPro Help menu.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code displays a modal form. When the form is displayed and
	the command button is clicked, the form is released, but control does not return
	to the Command window. To correct this sample, remove the READ EVENTS and CLEAR
	EVENTS commands from the code.
	
	     omyform=CREATEOBJECT('myform')
	     omyform.Show(1)       && Displays a modal form
	     READ EVENTS
	
	     DEFINE CLASS myform AS form
	       WindowType=0
	       ADD OBJECT mycmd AS CommandButton
	       PROCEDURE mycmd.Click
	         RELEASE Thisform
	         CLEAR EVENTS
	       ENDPROC
	     ENDDEFINE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
