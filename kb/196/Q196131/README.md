---
layout: page
title: "Q196131: BUG: Dynamic Private UserControl Extender Events Do Not Show"
permalink: kb/196/Q196131/
---

## Q196131: BUG: Dynamic Private UserControl Extender Events Do Not Show

	Article: Q196131
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbActivexEvents kbCtrlCreate kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you declare the variable using early-binding syntax when you dynamically add
	an instance of a private UserControl, you cannot see or use any of the control's
	extender properties or events. You are only able to see and use the raw
	properties and events of the control (that is, those declared by the control
	itself).
	
	CAUSE
	=====
	
	Visual Basic 6.0 allows developers to dynamically add ActiveX controls to a form
	at run time. Typically, a VBControlExtender variable is used for the
	dynamically-added control, which performs late binding on the control. However,
	if the type of the control is known at compile time, you can declare the
	variable using early binding syntax like the following:
	
	     Dim WithEvents MyCtl As MyUserControl
	
	However, if MyCtl is a private UserControl, Visual Basic binds directly to the
	interface for the control itself, bypassing the control extender it normally
	adds for ActiveX controls. As a result, your code will not see or be able to use
	any extender properties and events.
	
	RESOLUTION
	==========
	
	Declare the variable for your dynamically-added control as VBControlExtender,
	and Use the extender to access your control late-bound.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new standard .exe project. Form1 is created by default.
	
	2. From the Project menu, add a new UserControl to the project.
	
	3. Add the following code to the User Control:
	
	        Event Click()
	
	        Private Sub UserControl_Click()
	           RaiseEvent Click
	        End Sub
	
	        Public Property Get Color() As OLE_COLOR
	           Color = UserControl.BackColor
	        End Property
	
	        Public Property Let Color(Value As OLE_COLOR)
	           UserControl.BackColor = Value
	        End Property
	
	4. Close the User Control design window and open the code window for Form1.
	
	5. Add the following code to the General Declarations section of Form1:
	
	        Dim WithEvents MyCtl as UserControl1
	
	6. Click on the Event list, and select MyCtl. You will only see the Click event.
	  None of the extender events (for example, GotFocus, LostFocus, DragOver, and
	  so forth) are available. Further, if you try to use any extender properties
	  in code you will get an error. For Example:
	
	         MyCtl.Visible = True 'This will cause a compile error.
	
	7. To make the extender events available, add the following code to Form1:
	
	        Dim WithEvents MyCtl As VBControlExtender
	
	        Private Sub Form_Load()
	           Set MyCtl = Controls.Add("Project1.UserControl1", "myctrl")
	           MyCtl.Move 1, 1
	           MyCtl.Visible = True
	           MyCtl.Color = &HFF0000
	        End Sub
	
	        Private Sub MyCtl_ObjectEvent(Info As EventInfo)
	           MsgBox "This control event was fired: " & Info.Name
	        End Sub
	
	8. Before you run the project, go to the Project menu and select Project1
	  Properties. Click the Make, and clear the "Remove information about unused
	  ActiveX controls" check box.
	
	9. Save and run the project.
	
	RESULT: Click on the user control. You will see a message box indicating that the
	event fired properly.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q190670 : HOWTO: Dynamically Add Controls to a Form with Visual Basic 6.0
	
	  Q190153 : INFO: Remove Information About Unused ActiveX Controls
	
	Visual Basic Books Online: Component Tools Guide; UserControls
	
	======================================================================
	Keywords          : kbActiveX kbActivexEvents kbCtrlCreate kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
