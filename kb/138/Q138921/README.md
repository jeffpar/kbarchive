---
layout: page
title: "Q138921: PRB: Form's Visible Property Does Not Respect Modal WindowType"
permalink: kb/138/Q138921/
---

## Q138921: PRB: Form's Visible Property Does Not Respect Modal WindowType

	Article: Q138921
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using <formobject>.visible to display a form having WindowType=1
	(modal), the modal attributes are not applied to the form; you can click to move
	off the form, and program execution continues.
	
	CAUSE
	=====
	
	Setting the Visible property of the form does not apply modal attributes to the
	form.
	
	WORKAROUND
	==========
	
	Instead of using the Visible property of the form to display it, use the Show
	method. The Show method properly applies modal attributes to the form.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Code Sample to Reproduce Problem
	--------------------------------
	
	    * The following example uses DEFINE CLASS and CREATEOBJECT()
	     * to create two custom classes named FormChild and FormGrandChild from
	     * the Visual FoxPro Form base class. ACLASS() is used to create an
	     * array named gaNewarray containing the class names, which is
	     * then displayed.
	
	     CLEAR
	     PUBLIC frmMyForm
	     frmMyForm = CREATEOBJECT("FormGrandChild")
	     frmMyForm.visible=.t.
	     * frmMyForm.show     && uncomment this for proper behavior
	     WAIT WINDOW 'After calling the form' TIMEOUT 2
	
	     DEFINE CLASS FormChild AS FORM
	     ENDDEFINE
	
	     DEFINE CLASS FormGrandChild AS FormChild
	            Caption='Hi'
	            Left   = 10
	            Top    = 10
	            Height = 54
	            Width  = 99
	            WindowType = 1     && modal
	            PROCEDURE Init
	                     THIS.AddObject("Cmd1", "MyCmdBtn")
	                     this.cmd1.left = (thisform.width - this.width) /2
	                     this.cmd1.top = (thisform.height - this.height) /2
	                     this.cmd1.visible = .t.
	            ENDPROC
	     ENDDEFINE
	
	     DEFINE CLASS MyCmdBtn AS CommandButton
	            Caption='Bye' && Caption on the Command button
	            Left   = 10   && Command button column
	            Top    = 10   && Command button row
	            Height = 18   && Command button height
	            Width  = 60   && Command button height
	            PROCEDURE Click
	                     THISFORM.Release
	                     CLEAR EVENTS
	            ENDPROC
	     ENDDEFINE
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	
