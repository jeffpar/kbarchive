---
layout: page
title: "Q178754: PRB: Modal Form Does Not Appear in the Taskbar"
permalink: kb/178/Q178754/
---

## Q178754: PRB: Modal Form Does Not Appear in the Taskbar

	Article: Q178754
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
	
	A form displayed modally does not appear in the taskbar.
	
	RESOLUTION
	==========
	
	To have a form appear in the taskbar, show the form as a non-modal form. The
	MORE INFORMATION section below shows how to show a form in the taskbar.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	By Windows user interface design standards, modal forms do not appear in the
	system taskbar. The next section shows you how to create a sample project that
	simulates a modal form so that the form appears in the taskbar.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton to the Form1 form.
	
	3. Add a second Form to the project. Add a CommandButton to the Form2 form.
	
	4. Copy the following code to the Code window of the Form1 form:
	
	        Option Explicit
	        Private Sub Command1_Click()
	            Form1.Enabled = False
	            Form2.Show
	        End Sub
	
	5. Copy the following code to the Code window of the Form2 form:
	
	        Option Explicit
	        Private Sub Command1_Click()
	            Unload Form2
	            Form1.Enabled = True
	            Form1.SetFocus
	        End Sub
	
	6. On the Run menu, click Start or press the F5 key to start the program. On the
	  Form1 form, click the CommandButton to display the Form2 form. Note that the
	  Form2 form also appears in the taskbar.
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbVBA
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
