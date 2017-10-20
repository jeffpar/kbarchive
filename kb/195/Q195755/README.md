---
layout: page
title: "Q195755: BUG: Parent Property Returns Invalid Object Type for UserControl"
permalink: /kb/195/Q195755/
---

## Q195755: BUG: Parent Property Returns Invalid Object Type for UserControl

{% raw %}

	Article: Q195755
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbActiveX kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbCodeSam
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual Basic intrinsic controls support a Parent property that returns the
	object of the parent hosting the control. Currently, this property is typed as
	returning a Form object. However, if the control is hosted on a Visual Basic
	UserControl or UserDocument, a Form object is not returned.
	
	CAUSE
	=====
	
	Because the Parent property is strongly typed as Form, it is possible to
	early-bind to the object and call methods/properties through the vtable, even
	through the object returned may not be a valid Form object. This can cause
	application errors to occur at run-time.
	
	RESOLUTION
	==========
	
	To avoid problems caused by a mismatched object type, always perform late
	binding when calling a method or property of an object returned from the Parent
	property. For example, do not make an early bound call in the following form:
	
	     Command1.Parent.Left = 10
	
	Instead, declare a standard object variable and set a reference first. This
	forces Visual Basic to use late binding and call each function by name rather
	than by vtable position:
	
	     Dim oTmp As Object
	     Set oTmp = Command1.Parent
	     oTmp.Left = 10
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Select Add Project from the File menu and add a new ActiveX Control project.
	  UserControl1 is created by default.
	
	3. Add two CommandButtons to UserControl1, and add the following code to the
	  General Declarations section of UserControl1:
	
	        Option Explicit
	        Private Sub Command1_Click()
	           MsgBox Command1.Parent.ScaleX(12)
	        End Sub
	
	        Private Sub Command2_Click()
	           Dim oTmp As Object
	           Set oTmp = Command2.Parent
	           MsgBox oTmp.ScaleX(12)
	        End Sub
	
	        Public Function ScaleX(Width As Single) As Single
	           ' You need to expose the ScaleX function so that it
	           ' can be called from the Parent property.
	           ScaleX = UserControl.ScaleX(Width)
	        End Function
	
	        Private Sub UserControl_Initialize()
	           Command1.Caption = "Early-Bound"
	           Command2.Caption = "Late-Bound"
	        End Sub
	
	4. Close the UserControl design windows and add an instance of UserControl1 to
	  Form1. Make certain both buttons are visible.
	
	5. Press the F5 key to run the project in the IDE.
	
	6. Press the "Early-Bound" button and note that a run-time error occurs, even
	  though the parent control supports the ScaleX method. The error is caused by
	  Visual Basic calling through the vtable into the ScaleX method of a Form
	  object and not the usercontrol.
	
	7. Press the "Late-Bound" button and note that the method succeeds as expected.
	
	======================================================================
	Keywords          : kbcode kbActiveX kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbCodeSam 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
