---
layout: page
title: "Q137411: BUG: HalfHeight Forms Closable Even If Closable = False"
permalink: kb/137/Q137411/
---

## Q137411: BUG: HalfHeight Forms Closable Even If Closable = False

	Article: Q137411
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbprogramming kbcode kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbvfpkbbuglist
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a form with a halfheight title bar and set the Closable property
	of the form to false (.F.), you can still close the form.
	
	WORKAROUND
	==========
	
	To avoid the problem, use the QueryUnload event. Put a NODEFAULT in its code to
	make it impossible to close the form:
	
	     x = CREATEOBJECT( 'myform' )
	     x.Show
	     READ EVENTS
	
	     DEFINE CLASS myform AS Form
	
	       HalfHeightCaption = .t.
	
	       Add Object cmdclose AS CommandButton
	       cmdclose.Caption = "Close"
	
	       PROCEDURE cmdclose.click
	            thisform.release
	       ENDPROC
	
	       PROCEDURE QueryUnload
	            NODEFAULT
	       ENDPROC
	
	       PROCEDURE Destroy
	            CLEAR EVENTS
	       ENDPROC
	
	     ENDDEFINE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem seems to occur more often when Visual FoxPro is run in Windows 95
	rather than Windows NT 4.0. However, the problem may still occur in Windows NT
	4.0, usually in Visual FoxPro 5.x. Visual FoxPro 3.0b rarely, if ever, exhibits
	the problem when run under Windows NT 4.0.
	
	
	Steps to Reproduce Problem
	--------------------------
	
	Execute the following in the Command window:
	
	     oForm = CREATEOBJECT('Form')
	     oForm.HalfHeightCaption = .T.
	     oForm.Closable = .F.
	     oForm.Show()
	     READ EVENTS
	
	Double-click the form's control box to close the form. Although the form appears
	to close, the READ EVENTS is still in effect. To clear the READ EVENTS and
	return to the Command window, choose Cancel from the Program menu.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbcode kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbvfp kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	
	=============================================================================
	
