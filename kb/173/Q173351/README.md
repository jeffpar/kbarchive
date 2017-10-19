---
layout: page
title: "Q173351: BUG: Custom OCX Not Unloaded When Client Application Ends"
permalink: /kb/173/Q173351/
---

## Q173351: BUG: Custom OCX Not Unloaded When Client Application Ends

	Article: Q173351
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
	
	If a variable is set to reference a UserControl or one of its constituent
	controls in the InitProperties and ReadProperties events of the UserControl, the
	reference is not released when the client application ends; therefore, the OCX
	remains loaded. Because the OCX does not unload, its Terminate event is not
	triggered when the application ends.
	
	RESOLUTION
	==========
	
	You can work around this problem by using a variable that saves the Name
	property of the control rather than an actual reference to the control. For
	example, if you are using the following code in a UserControl in which the
	Terminate event is not triggered:
	
	       Dim o As Object
	
	       Private Sub UserControl_InitProperties()
	         Set o = Label1
	       End Sub
	
	       Private Sub UserControl_ReadProperties(PropBag As PropertyBag)
	         Set o = Label2
	       End Sub
	
	replace the code with the following:
	
	       Dim s As String
	
	       Private Sub UserControl_InitProperties()
	         s = Label1.Name
	       End Sub
	
	       Private Sub UserControl_ReadProperties(PropBag As PropertyBag)
	         s = Label2.Name
	       End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new "ActiveX Control" project.
	
	2. Add two Label controls to UserControl1.
	
	3. Add the following code to UserControl1:
	
	        Option Explicit
	
	        Dim o As Object
	
	        Private Sub UserControl_InitProperties()
	           Set o = Label1
	           MsgBox "InitProperties"
	        End Sub
	
	        Private Sub UserControl_ReadProperties(PropBag As PropertyBag)
	            Set o = Label2
	            MsgBox "ReadProperties"
	        End Sub
	
	        Private Sub UserControl_Terminate()
	            MsgBox "Terminate"
	        End Sub
	
	4. Save the project and Make the OCX.
	
	5. Start a new "Standard EXE" project.
	
	6. Click Components on the Project menu. Check the custom OCX you built in step
	  4.
	
	7. Add the custom control to Form1. Note that the InitProperties event fires as
	  expected.
	
	8. Press the F5 key to run the program. Note that the ReadProperties event
	  fires. However, you would expect to receive a Terminate event and then the
	  ReadProperties event.
	
	9. Click End on the Run menu. Note that only ReadProperties fires, not Terminate
	  and then ReadProperties as expected.
	
	10. Exit the IDE. Note that the OCX now unloads and the Terminate events are
	  triggered.
	
	Additional query words: kbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport KBCONTROL KBCTRLCREATE
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
