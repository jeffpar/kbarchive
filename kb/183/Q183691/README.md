---
layout: page
title: "Q183691: HOWTO: Access UserControl Properties From the Same Project"
permalink: /kb/183/Q183691/
---

## Q183691: HOWTO: Access UserControl Properties From the Same Project

	Article: Q183691
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
	
	SUMMARY
	=======
	
	The properties of a UserControl cannot be accessed from other forms or modules
	in the same project using a syntax such as:
	
	  <UserControl>.<Property>=<Value>
	
	The reference to the UserControl cannot be obtained by specifying the name of the
	UserControl from forms or modules present in the same project. These properties
	can be accessed indirectly, however.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create an ActiveX Control project.
	
	2. Click Add Form on the Project menu to add a form to the project.
	
	3. Add the following code to the UserControl:
	
	        Public CtlProp as string 'user created property
	
	        Private Sub UserControl_Click()
	            CtlProp = "passed value" 'set the property
	            Form1.Show
	        End Sub
	
	        Private Sub UserControl_Initialize()
	            BackColor = vbRed
	        End Sub
	
	4. Add the following code to Form1:
	
	        Private Sub Form_Activate()
	           MsgBox Usercontrol1.CtlProp '<--- Error Occurs Here
	        End Sub
	
	5. Close all of the open forms in the project.
	
	6. Click Add Project on the File menu to add a Standard EXE to the workspace.
	
	7. Place a copy of your Usercontrol on Form1 of Project2.
	
	8. Press the F5 key to run the project and click on the Usercontrol. When the
	  ActiveX control is clicked and the Form is shown, a run-time error 424
	  "Object Required" is generated on the line of code that attempts to directly
	  access a property of the Usercontrol.
	
	Workaround
	----------
	
	To workaround this problem, you can have the UserControl pass a reference to
	itself on the Form by a procedure. The following steps illustrate this
	solution.
	
	1. Create an ActiveX Control project.
	
	2. Click Add Form on the Project menu to add a form to the project.
	
	3. Add the following code to the UserControl:
	
	        Public CtlProp As String 'user created property
	
	        Private Sub UserControl_Click()
	            CtlProp = "passed value" 'set the property
	            Load Form1
	            Call Form1.ControlRef(Me) 'pass the reference before showing
	            Form1.Show
	        End Sub
	
	        Private Sub UserControl_Initialize()
	            BackColor = vbRed
	        End Sub
	
	4. Add the following code to the Form:
	
	        Dim cCtl As UserControl1
	
	        Private Sub Form_Activate()
	            MsgBox cCtl.CtlProp 'this works fine now
	        End Sub
	
	        Sub ControlRef(cC As UserControl1)
	            Set cCtl = cC
	        End Sub
	
	5. Close all of the open forms in the project.
	
	6. Click Add Project on the File menu to add a Standard EXE to the workspace.
	
	7. Place a copy of your Usercontrol on Form1 of Project2.
	
	8. Press the F5 key to run the project. Click on the Usercontrol. No error
	  occurs.
	
	Additional query words: user defined properties access refer kbCtrlCreate kbControl kbVBp500 
	kbVBp600 kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
