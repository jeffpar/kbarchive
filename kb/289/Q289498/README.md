---
layout: page
title: "Q289498: PRB: Form Cannot Get Focus After Using SetParent to Move Control"
permalink: kb/289/Q289498/
---

## Q289498: PRB: Form Cannot Get Focus After Using SetParent to Move Control

	Article: Q289498
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbCtrl kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the SetParent function to move a TextBox control from one form to
	another and then click the TextBox on the new parent form, you cannot click the
	original parent form to set the focus back to it.
	
	RESOLUTION
	==========
	
	To work around this problem, use the SetWindowLong function to change the
	TextBox control's window style to WS_CHILD, either before or after the call to
	SetParent, and then make the control visible. For example, if Text1 is moved
	from Form1 to Form2, use the following code to resolve this problem:
	
	  SetParent Text1.hwnd, Form2.hwnd
	  SetWindowLong Text1.hwnd, GWL_STYLE, WS_CHILD
	  Text1.Visible = True
	
	For additional information, see the code sample in the "More Information"
	section.
	
	MORE INFORMATION
	================
	
	This problem only occurs for certain controls. For example, the Frame, Toolbar,
	Tabstrip, Statusbar, Progressbar, Dbgrid, Mmcontrol, Sstab, Coolbar, Updown and
	Flatscrollbar controls do not require the SetWindowLong workaround. Other
	controls, such as the Label, Image, Timer, Data, Shape, Imagelist, Adodc,
	Calender, and Forms 2.0 controls do not have a window handle and, thus, cannot
	be moved. All of the other controls exhibit the same behavior as the TextBox
	control.
	
	Important: It is much more complicated to change a control and its container
	relationship than to change the windows relationship. Thus, Microsoft does not
	recommend that you use the SetParent function to change the relationship of
	controls or the parent window in Visual Basic.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add a Frame control, TextBox control, and two command buttons (Command1 and
	  Command2) to Form1.
	
	3. On the Project menu, click Add Form to add another form (Form2) to the
	  project.
	
	4. On the Project menu, click Add Module to add a new module (Module1) to the
	  project.
	
	5. Copy the following code into Module1:
	
	  Public Declare Function SetParent Lib "user32" Alias "SetParent" _
	     (ByVal hWndChild As Long, ByVal hWndNewParent As Long) As Long
	
	  Public Declare Function SetWindowLong Lib "user32" Alias "SetWindowLongA" _
	     (ByVal hwnd As Long, ByVal nIndex As Long, ByVal dwNewLong As Long) _
	     As Long
	
	  Public Const GWL_STYLE = (-16)
	  Public Const WS_CHILD = &H40000000
	
	6. Copy the following code in the general declarations for Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	      SetParent Frame1.hwnd, Form2.hwnd
	  End Sub
	
	  Private Sub Command2_Click()
	      SetParent Text1.hwnd, Form2.hwnd
	      ' Uncomment these two lines to work around the problem.
	      'SetWindowLong Text1.hwnd, GWL_STYLE, WS_CHILD
	      'Text1.Visible = True
	  End Sub
	
	  Private Sub Form_Load()
	      Form2.Show
	  End Sub
	
	7. Press the F5 key to run the project.
	
	8. Click Command1 to move the Frame control from Form1 to Form2.
	
	9. Click Command2 to move the TextBox control to Form2.
	
	10. Click the Frame control on Form2, and then try to click Form1. Notice that
	  Form1 gets the focus.
	
	11. Click the TextBox control on Form2, and then try to click Form1. Notice that
	  Form1 does not get the focus.
	
	12. On the IDE toolbar, click Stop to stop the project.
	
	13. To work around this problem, uncomment the two indicated lines in
	  Command2_Click, and repeat the test. When you click the TextBox, Form1 gets
	  the focus.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q253814 PRB: SetParent Does Not Change Standard Forms into Child Windows
	
	Additional query words: API
	
	======================================================================
	Keywords          : kbAPI kbCtrl kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
