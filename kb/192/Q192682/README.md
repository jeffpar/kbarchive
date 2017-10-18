---
layout: page
title: "Q192682: BUG: Dynamically-Added OCX Event Parameter Is Not Passed ByRef"
permalink: kb/192/Q192682/
---

## Q192682: BUG: Dynamically-Added OCX Event Parameter Is Not Passed ByRef

	Article: Q192682
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When working with an ActiveX control that is added dynamically at run-time, an
	event procedure passes a Variant parameter by reference (ByRef) to the client,
	but any changes made by the client are not returned to the control.
	
	CAUSE
	=====
	
	This occurs when the event procedure is written to pass a Variant, but the
	variable being passed by the control is not a Variant. This causes Visual Basic
	to create a temporary Variant to use as the event parameter. When the client
	code makes changes to the parameter, the changes are made to this temporary copy
	and not to the original variable.
	
	Under normal circumstances, Visual Basic updates the original variable with any
	changes made to the Variant copy. However, this does not occur for event
	procedures in a dynamically-loaded UserControl.
	
	RESOLUTION
	==========
	
	To avoid the problem, make sure the data types of your UserControl event
	procedures are as specific as possible. Also, see that the parameters used
	during a RaiseEvent call match the expected parameter types.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project. Form1 is created by default.
	
	2. Add a UserControl project to the group. This should be Project2.
	
	3. Add a CommandButton to the UserControl and place the following in the code
	  window for UserControl1:
	
	        Event Click(X As Variant)
	
	        Private Sub Command1_Click()
	           Dim MyValue As Long  ' Notice MyValue is declared as Long
	           MyValue = 1
	           MsgBox "Value before event is raised: " & MyValue
	           RaiseEvent Click(MyValue)
	           MsgBox "Value after then event returns: " & MyValue
	        End Sub
	
	4. Close the UserControl designer.
	
	5. In the code window for Form1, add the following:
	
	        Dim WithEvents DynCtl As VBControlExtender
	
	        Private Sub Form_Load()
	           Set DynCtl = Controls.Add("Project2.UserControl1", "Tester")
	           DynCtl.Visible = True
	        End Sub
	
	        Private Sub DynCtl_ObjectEvent(Info As EventInfo)
	           ' Change the ByRef value to 1000000
	           Info.EventParameters.Item(0).Value = 1000000
	           MsgBox "Value after change in ObjectEvent: " & _
	              Info.EventParameters.Item(0).Value
	        End Sub
	
	6. Press the F5 key to run Project1 and click on the CommandButton. You should
	  see a message box showing the value of the original variable before raising
	  the "Click" event. This is followed by another message box showing the value
	  of the parameter after it has been changed by the client. Finally, the last
	  message box shows the value of the original variable after the event has been
	  raised. Note that the changes made by the client are not reflected in the
	  last message box.
	
	7. To correct the problem, change the declaration of the MyValue variable (in
	  Project2.UserControl1's CommandButton code) from a Long to a Variant. Re-run
	  Project1. The code should now work correctly because Visual Basic no longer
	  needs to create a temporary variable for the event parameter.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q190670 : HOWTO: Dynamically Add Controls to a Form with Visual Basic 6.0
	
	Additional query words: kbDSupport kbDSD kbVBp kbCtrl kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
