---
layout: page
title: "Q154980: PRB: Non-updateable View Generates Warnings in Form Wizard"
permalink: kb/154/Q154980/
---

## Q154980: PRB: Non-updateable View Generates Warnings in Form Wizard

	Article: Q154980
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a form created using the Form Wizard, the following warning may be
	displayed:
	
	  Edits to one or more of the views may not be permanent. To remedy this,
	  ensure the View's Send SQL Updates checkbox is checked in the View Designer.
	
	CAUSE
	=====
	
	The form was created from one or more views that have not been made updateable.
	
	WORKAROUND
	==========
	
	In order to avoid this warning, you may implement one of the following
	workarounds. It is important to recognize that neither of these two workarounds
	allows changes to be made to the data; they merely provide a method of avoiding
	the warning message.
	
	1. Make at least one field in the view updateable, and check the "Send SQL
	  Updates" checkbox.
	
	2. Modify the txtbtns class (included in Wizstyle.vcx) so that it will not
	  display the warning. Open the txtbtns class in the visual class designer, and
	  comment out the following lines of code in the Initvars method:
	
	     IF !CURSORGETPROP("SendUpdates",.Alias) AND !m.lShowedMess
	        =MESSAGEBOX(C_NOUPDATEVIEW_LOC)
	        lShowedMess = .T.
	     ENDIF
	
	Note: Modifying this class will affect every form that is created with the Form
	Wizard.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Form Wizard was designed to create data-entry forms. It is assumed that you
	will want to make changes to the data that the form is based on. Therefore, as
	the form is loading, it checks to see if any views that are part of its data
	environment are non-updateable (read-only). If non- updateable views are found,
	the above warning is displayed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a local or remote view in the View Designer. Make certain that the
	  "Send SQL Updates" checkbox is not checked.
	
	2. Run the Form Wizard, and create a form based on the view that was just
	  created.
	
	3. Run the newly created form. Note that the warning message is displayed.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
