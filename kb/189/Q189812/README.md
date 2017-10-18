---
layout: page
title: "Q189812: BUG: Unloading a Modal Form's Parent Form Causes VB To Hang"
permalink: kb/189/Q189812/
---

## Q189812: BUG: Unloading a Modal Form's Parent Form Causes VB To Hang

	Article: Q189812
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
	
	In Visual Basic, if one form shows another form modally, and the second form
	tries to unload the first form in either its Unload or Query_Unload event,
	Visual Basic hangs.
	
	CAUSE
	=====
	
	When unloading a modal form's parent form, Visual Basic enters an infinite loop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a new form (Form2) to the project.
	
	3. Add a CommandButton (Command1) to Form1 and add the following code to the
	  Click Event:
	
	        Private Sub Command1_Click()
	           Form2.Show vbModal
	        End Sub
	
	4. Add a CommandButton (Command1) to Form2 and add the following code to Form2's
	  code window:
	
	        Private Sub Command1_Click()
	           Unload Me
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	           Unload Form1
	        End Sub
	
	5. Save and run the project.
	
	6. On Form1, click on Command1 to show Form2 modally.
	
	7. On Form2, click on Command1 to unload Form2, which unloads Form1 in its
	  Unload event. Note that Visual Basic hangs. Use Task Manager to stop the
	  non-responding application.
	
	Additional query words: kbDSupport kbForm kbVBp500bug kbVBp kbdss kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
