---
layout: page
title: "Q173348: PRB: ActiveControl Set to &quot;Nothing&quot; on Disabled Form"
permalink: /kb/173/Q173348/
---

## Q173348: PRB: ActiveControl Set to &quot;Nothing&quot; on Disabled Form

{% raw %}

	Article: Q173348
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Visual Basic version 4.0 for Windows, referencing the ActiveControl
	property of a form that has been disabled returns the control. In Visual Basic
	for Windows versions 5.0 and later, referencing the ActiveControl property of a
	form that has been disabled causes run-time error 91 "Object variable or With
	block variable not set" to be displayed.
	
	CAUSE
	=====
	
	In Visual Basic 5.0 and later, the value of the ActiveControl property of a form
	is set to "Nothing" when the form is disabled.
	
	RESOLUTION
	==========
	
	The behavior is correct. This change in behavior may affect Visual Basic 4.0
	applications that have been coded to the old behavior and then converted to
	Visual Basic 5.0 or later. One workaround for this problem is to store the value
	of the ActiveControl property in a variable before a form is disabled. That
	variable can later be used to reference the control. To prevent the run-time
	error from occurring, change the code to the following:
	
	     Public Form2LastControl As Control 'General Declarations of Form1
	     Private Sub Command1_Click()
	     Set Form2LastControl = Form2.ActiveControl
	     Form2.Enabled = False
	     End Sub
	
	     Private Sub Command2_Click()
	     MsgBox Form2LastControl.Text
	     End Sub
	
	     Private Sub Form_Load() 'Form Load Event of Form1
	     Form2.Show vbModeless
	     End Sub
	
	     Private Sub Form_Load() 'Form Load Event of Form2
	     Set Form1.Form2LastControl = Me.Controls(0)
	     End Sub
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add a form to the project (two forms are needed).
	
	3. Place two command buttons on Form1. For example:
	
	        Name: Command1, Caption: Disable Form 2
	        Name: Command2, Caption: Active Control
	
	4. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	        Form2.Enabled = False
	        End Sub
	
	        Private Sub Command2_Click()
	        MsgBox Form2.ActiveControl.Text
	        End Sub
	
	        Private Sub Form_Load()
	        Form2.Show vbModeless
	        End Sub
	
	5. Place a TextBox control on Form2.
	
	6. Run the project, and click on the "Active Control" command button.
	
	7. You should see a message box that says "Text1."
	
	8. Click on the command button labeled "Disable Form2."
	
	9. Click on the command button labeled "Active Control."
	
	10. Run-time error 91 "Object variable or With block variable not set" is
	  displayed.
	
	Additional query words: kbVBp kbdsd kbDSupport kbVBp500 kbVBp600 kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
