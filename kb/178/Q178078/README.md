---
layout: page
title: "Q178078: PRB: Events Occur in EXE While a Message Box Is Displayed"
permalink: /kb/178/Q178078/
---

## Q178078: PRB: Events Occur in EXE While a Message Box Is Displayed

	Article: Q178078
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running a project in the IDE that displays a message box prevents events from
	occurring. However, when you compile and run the same project as an executable
	file (EXE), the events occur while the message box is displayed.
	
	CAUSE
	=====
	
	The behavior in the EXE has changed with Microsoft Visual Basic 5.0 and 6.0 so
	that it is different from earlier versions of Microsoft Visual Basic.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add two Command Buttons and one Timer control to Form1.
	
	3. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	        Private Sub Form_Load()
	           Timer1.Interval = 1000
	           Command1.Caption = "Show Message Box"
	           Command2.Caption = "Show Modal Form"
	        End Sub
	
	        Private Sub Command1_Click()
	           MsgBox "Events Do Not Occur"
	        End Sub
	
	        Private Sub Command2_Click()
	          Form2.Show vbModal
	        End Sub
	
	        Private Sub Timer1_Timer()
	          Static intCount
	           intCount = intCount + 1
	           Form1.Print "Event # " & intCount
	        End Sub
	
	4. Add a second form to the Project by completing the following steps:
	
	   - From the Project menu, click Add Form. The Add Form dialog box appears.
	
	   - From the New Tab, click Form.
	
	   - Click OK to close the Add Form dialog box. Form2 is added to the project.
	
	5. On the Run menu, click Start or press the F5 key to start the program.
	
	6. Click Show Message Box after two events occur. Note that the Timer event is
	  no longer triggered.
	
	7. Click Show Modal Form to display a modal form. Note that the events still
	  occur even while the modal form is displayed.
	
	8. Compile the project and run the executable file as shown in step 6. Note that
	  the events still occur despite displaying the message box or form.
	
	Additional query words: RaiseEvent trigger fire
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
