---
layout: page
title: "Q132680: PRB: Hiding a Modal Form Removes Its Modal Attribute"
permalink: /kb/132/Q132680/
---

## Q132680: PRB: Hiding a Modal Form Removes Its Modal Attribute

	Article: Q132680
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
	
	When a modal form is displayed and then hidden, it looses its modal attribute.
	That is, when the form is shown, the user can access other windows if the form
	was hidden by clicking Hide on the Window menu or by using the HIDE WINDOW
	command.
	
	RESOLUTION
	==========
	
	You can prevent users from hiding the form from the interface by removing the
	Hide option from the Window menu with this command:
	
	     RELEASE BAR _Mwi_Hide OF _Mwindow
	
	If you are hiding the form under program control, use the Hide and Show methods
	of the form instead of the HIDE WINDOW and SHOW WINDOW commands. Using these
	methods maintains the modality of the form.
	
	STATUS
	======
	
	This behavior is by design. It avoids the problem of not being able to access
	anything when the modal form is hidden.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following example code to duplicate the issue. It also presents an
	alternative. To run this sample code, copy and paste it to a program file; then
	run it.
	
	      PUBLIC oMyform
	     oMyform=CREATEOBJECT('frmForm')
	     oMyform.CAPTION="Click the Hide command button"
	     oMyform.SHOW()
	
	     =MESSAGEBOX("Click OK to Show the Form")
	     * Uncomment the code below and comment the SHOW WINDOW line to
	     * show the form as modal
	     *oMyform.show()
	
	     SHOW WINDOW (WOUTPUT())
	     ?"Form is not modal"
	
	     DEFINE CLASS frmForm AS FORM
	        WINDOWTYPE=1  && Define a modal form
	        ADD OBJECT cmd1 AS cmdHide
	     ENDDEFINE
	
	     DEFINE CLASS cmdHide AS COMMANDBUTTON
	        CAPTION="Hide"
	
	        PROCEDURE CLICK
	           * To resolve the issue:
	           * Uncomment the code below and comment the HIDE WINDOW line
	           * ThisForm.Hide
	           HIDE WINDOW (WONTOP())
	     ENDDEFINE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
