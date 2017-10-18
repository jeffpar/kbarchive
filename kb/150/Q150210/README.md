---
layout: page
title: "Q150210: FIX: DBCombo Control Does Not Allow Selection on Modal Form"
permalink: kb/150/Q150210/
---

## Q150210: FIX: DBCombo Control Does Not Allow Selection on Modal Form

	Article: Q150210
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp600fix kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a DBCombo control is placed on a form that is shown modally, then the user is
	unable to click a selection of the drop-down list. This behavior only occurs in
	an EXE file, it does not occur in the Design Environment of Visual Basic.
	
	WORKAROUND
	==========
	
	To work around this problem, the function below can be used to simulate showing
	a form modally. The workaround allows the DBCombo control to be used.
	
	Instead of showing a form modally, show the form using a method such as the one
	documented below. For example, to simulate invoking Form1 modally, call the
	method as shown below:
	
	     ShowModalForm Form1
	
	The subroutine ShowModalForm is shown below, and can be placed in a Form or
	standard code module:
	
	     Public Sub ShowModalForm(frmTarget As Form)
	        Dim ofrm As Object
	        'Disable all the forms
	        For Each ofrm In Forms
	          ofrm.Enabled = False
	        Next ofrm
	
	        'Now show the target form non-modal
	        frmTarget.Show
	        'If the frmTarget was disabled by the loop above
	        'make sure it is now enabled
	        frmTarget.Enabled = True
	
	        'Sit in a loop until the target form is dismissed
	        Do While frmTarget.Visible = True
	        DoEvents
	        Loop
	
	        'We have left the loop, so the dialog has been dismissed
	        'Now Enable the forms, and exit the procedure
	        For Each ofrm In Forms
	         ofrm.Enabled = True
	        Next ofrm
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce the Problem
	------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Insert a new form into the project by choosing Insert...Form.
	
	3. On the new Form (Form2), place a Data control and a DBCombo control.
	
	4. Set the Databasename property of the Data control to Biblio.mdb, found in the
	  vb directory. Set the Recordsource property to Authors.
	
	5. Set the RowSource property of the DBCombo control to Data1, and the ListField
	  property of the DBCombo control to Author.
	
	6. In the Click event for Form1, place the following code to invoke Form2
	  modally:
	
	        Form2.Show vbModal
	
	7. Compile an EXE by choosing File...Make EXE from the menu.
	
	8. Using File Manager, or Windows Explorer invoke the EXE for the project.
	
	9. Click Form1 so that Form2 is shown. Choose the drop-down list for the DBCombo
	  control, and note that a selection of the list cannot be made.
	
	To work around this problem above using the workaround, the ShowModalForm routine
	can be placed into the project and the line of code in the Click event of Form1
	can be changed to:
	
	     ShowModalForm Form2
	
	Additional query words: kbVBp400bug kbVBp600fix kbVBp kbdsd kbDSupport kbNoKeyWord
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp600fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
