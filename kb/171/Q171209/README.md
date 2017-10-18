---
layout: page
title: "Q171209: BUG: Pop-up Menus May Cause Application Error in IDE"
permalink: kb/171/Q171209/
---

## Q171209: BUG: Pop-up Menus May Cause Application Error in IDE

	Article: Q171209
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When working in the Microsoft Visual Basic IDE, you may receive one of the
	following messages:
	
	In Visual Basic 5.0:
	
	  "Application Error:
	  The instruction at "0x0f019262" references memory at "0x00000000".
	  The memory could not be "read."
	
	In Visual Basic 6.0:
	
	  The instruction at "0x0f039a7d" referenced memory at "0x00835006". The memory
	  could not be "read".
	
	This occurs when testing applications in the Visual Basic IDE that pass menus to
	custom ActiveX controls.
	
	RESOLUTION
	==========
	
	The error does not occur once the container application is compiled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In a new ActiveX Control project, add the following code to the control:
	
	        Option Explicit
	
	        Dim oMnu As Object
	
	        Private Sub UserControl_MouseDown _
	            (Button As Integer, Shift As Integer, X As Single, Y As Single)
	            Select Case Button
	            Case vbRightButton
	                If Not oMnu Is Nothing Then
	                    PopupMenu oMnu
	                End If
	            End Select
	        End Sub
	
	        Public Sub newMenu(mnu As Object)
	            Set oMnu = mnu
	        End Sub
	
	2. Name the control "PopupMenuCtl."
	
	3. Name the control project by clicking Project Properties from the Project
	  menu. Set the Project Name field to "TestControl" (without the quotes).
	
	4. Save the project and compile the control.
	
	5. In a new Standard EXE project, add the control to the project by clicking
	  Component from the Project menu and turn on the option for the new control
	  called "TestControl."
	
	6. In Form1, draw an instance of TestControl.
	
	7. Add a menu to the form by displaying the form and selecting Menu Editor from
	  the Tools menu. Add the following menus:
	
	  Indent       Caption         Name
	
	  none         "&File"         "FileMenu"
	  1            "&Test"         "FileMenuTest"
	
	8. Add the following code to Form1:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           PopupMenuCtl1.newMenu FileMenu
	        End Sub
	
	9. In the Visual Basic IDE, press the F5 key to bring up Form1.
	
	10. Right-click in the area occupied by the ActiveX control.
	
	Additional query words: KBCONTROL KBCTRLCREATE kbIDE kbVBp kbdsd kbDSupport kbVBp500bug kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbbug
	
	=============================================================================
	
