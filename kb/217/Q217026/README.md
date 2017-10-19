---
layout: page
title: "Q217026: PRB: IIPF from UserControl with a User-Defined Validate Event"
permalink: /kb/217/Q217026/
---

## Q217026: PRB: IIPF from UserControl with a User-Defined Validate Event

	Article: Q217026
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActivexEvents kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a control that contains:
	
	  event Validate(Cancel as Boolean)
	  event Change()
	
	You get an Invalid Page Fault (IPF) when the control fires the Change event.
	
	CAUSE
	=====
	
	When you put a control on the Visual Basic form, Visual Basic creates an
	extended control that provides some extended properties. The extended control
	has several events reserved, such as:
	
	  event DragDrop(Source As Control, X As Single, Y As Single)
	  event DragOver(Source As Control, X As Single, Y As Single, State As Integer)
	  event GotFocus()
	  event LostFocus()
	  event Validate(Cancel As Boolean)
	
	When a Visual Basic client tries to sink an event, the extended control's events
	and the control's events will be combined into the same vtable. However, if your
	control also defines a Validate event, Visual Basic cannot distinguish between
	them and considers them to be one, so that the vtable structure for the sink is
	incorrect.
	
	Furthermore, if you define other events used in the extended control, you may get
	an error message when you try to load the control to your project. A typical
	error message would be: "xxx control could not be loaded."
	
	RESOLUTION
	==========
	
	Change the Validate event to another name, such as:
	
	  event ValidateData(Cancel as Boolean)
	
	You can also use the same event name with a different argument list, but then you
	cannot get to the event entry from the combo box in the integrated development
	environment (IDE).
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX control project in Visual Basic. Change the project name
	  to "MyOCX".
	
	2. Add a CommandButton to the usercontrol.
	
	3. Add the following code to the code window of the usercontrol:
	
	  Option Explicit
	  Event Validate(Cancel As Boolean)
	  Event Change()
	
	  Private Sub Command1_Click()
	      RaiseEvent Change
	  End Sub
	
	4. Compile the project, and it will be registered automatically. Close this
	  project.
	
	5. Create a new Standard EXE project. Form1 is created by default.
	
	6. From the Project menu, select Components, select MyOCX from the list, and
	  click OK. MyOCX is now available in the Toolbox.
	
	7. Add a MyOCX control to Form1.
	
	8. Add the following code to the code window of Form1.
	
	  Option Explicit
	
	  Private Sub UserControl11_Change()
	      MsgBox "OK"
	  End Sub
	
	9. Press the F5 key to run the project. Click CommandButton and you get an IPF.
	
	Additional query words: GPF
	
	======================================================================
	Keywords          : kbActivexEvents kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
