---
layout: page
title: "Q143311: INFO: Form Events and Sub Procedures Can Be Exposed"
permalink: /kb/143/Q143311/
---

## Q143311: INFO: Form Events and Sub Procedures Can Be Exposed

	Article: Q143311
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Starting with Visual Basic 4.0, forms are public. Therefore, the form events and
	sub procedures are prefaced by the private keyword so they are not publicly
	visible members of the form.
	
	MORE INFORMATION
	================
	
	In Visual Basic 3.0, a form's events and sub procedures were private to the
	form, and could not be accessed outside of the form's scope. Because a form is
	public in Visual Basic 4.0 and higher, its events and sub procedures can be
	exposed by either prefacing it with Public or by removing Private from the
	event.
	
	Step-by-Step Example
	--------------------
	
	The following example works in Visual Basic 4.0 and higher but not in Visual
	Basic 3.0. To create the program, do the following:
	
	1. Start Visual Basic or from the File menu, choose New Project (ALT, F, N) if
	  Visual Basic is already running. Form1 is created by default.
	
	2. In Form1 enter the following code:
	
	        Sub DispMsg ()
	            MsgBox "Inside Sub"
	        End Sub
	
	3. Add a module to the project and in Module1 enter the following code:
	
	        Sub main()
	           'some other code stuff could go here
	           Call Form1.DispMsg
	        End Sub
	
	4. For VB4, select the Tools, Options menu item and the Project tab. Set Startup
	  Form to Sub Main.
	
	5. For VB5/6: Select the Project, Properties menu item and the General tab. Set
	  the Startup Object to Sub Main.
	
	6. Run this program. The Module1 Main sub procedure calls the DispMsg sub
	  procedure in the form.
	
	  NOTE: Invoking an event through code is not good programming practice.
	  However, you can get at routines and form events if needed. Just ensure that
	  they are visible members of the class (the form in this case).
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport KbVBA kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
