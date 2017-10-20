---
layout: page
title: "Q178491: HOWTO: Change the TreeView Control Background Color"
permalink: /kb/178/Q178491/
---

## Q178491: HOWTO: Change the TreeView Control Background Color

{% raw %}

	Article: Q178491
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500 kbVBp600
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to change the background color of the TreeView
	control to fit your user interface requirements.
	
	MORE INFORMATION
	================
	
	The Custom Controls Library file, comctl32.dll, version 4.70 or later, is
	required to change the TreeView background color. This file is available by
	installing Internet Explorer version 4.0 or later. Note that this file is not
	currently redistributable. If you need this file, then you must require your
	users to install Internet Explorer 4.0. Please review the information regarding
	the use and redistribution rights for Microsoft Internet Explorer located at:
	
	  http://www.microsoft.com/ie/
	
	  -and-
	
	  http://www.microsoft.com/ie/ieak/
	
	Should you have questions regarding the licensing of Internet Explorer, please
	contact ieak@microsoft.com.
	
	To change the background color of a TreeView control, you can call the following
	Windows API functions:
	
	- SendMessage - sends the specified message to a window or windows.
	
	- GetWindowLong - retrieves information about the specified window.
	
	- SetWindowLong - changes an attribute of the specified window.
	
	The next section shows you how to create a sample project that demonstrates how
	to use these functions to change the background color. The section assumes you
	have the correct version of comctl32.dll installed on your computer.
	
	NOTE: If the display of your copy of Windows is set for 256 colors or less, using
	a dithered color as your background color will produce unsatisfactory results.
	This is because the TreeView and most other Windows controls cannot display text
	over a dithered background. Change the last parameter of the call to SendMessage
	to RGB(200, 255, 200) to view this effect.
	
	NOTE: Microsoft recommends that YOU DO not use this method of changing the
	background color with the mscomctl.ocx version of the TreeView control. If you
	do, it is at your own risk.
	
	
	
	Steps to Create Sample Project
	------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a reference to the Microsoft Common Controls by completing the following
	  steps:
	
	3. From the Project menu, click Components.
	
	4. From the Controls list, check Microsoft Windows Common Controls.
	
	5. Click OK to close the Components dialog box.
	
	6. Add a TreeView control and a CommandButton to Form1.
	
	7. Copy the following code to the Code window of Form1 form:
	
	        Option Explicit
	
	        Private Declare Function SendMessage Lib "User32" _
	           Alias "SendMessageA" _
	           (ByVal hWnd As Long, _
	           ByVal wMsg As Long, _
	           ByVal wParam As Long, _
	           lParam As Long) As Long
	
	        Private Declare Function GetWindowLong Lib "User32" _
	           Alias "GetWindowLongA" _
	           (ByVal hWnd As Long, _
	           ByVal nIndex As Long) As Long
	
	        Private Declare Function SetWindowLong Lib "User32" _
	           Alias "SetWindowLongA" _
	           (ByVal hWnd As Long, _
	           ByVal nIndex As Long, _
	           ByVal dwNewLong As Long) As Long
	
	        Private Const GWL_STYLE = -16&
	        Private Const TVM_SETBKCOLOR = 4381&
	        Private Const TVM_GETBKCOLOR = 4383&
	        Private Const TVS_HASLINES = 2&
	
	        Dim frmlastForm As Form
	
	        Private Sub Form_Load()
	            Dim nodX As Node
	            Set nodX = TreeView1.Nodes.Add(, , "R", "Root")
	            Set nodX = TreeView1.Nodes.Add("R", tvwChild, "C1", "Child 1")
	            Set nodX = TreeView1.Nodes.Add("R", tvwChild, "C2", "Child 2")
	            Set nodX = TreeView1.Nodes.Add("R", tvwChild, "C3", "Child 3")
	            Set nodX = TreeView1.Nodes.Add("R", tvwChild, "C4", "Child 4")
	            nodX.EnsureVisible
	            TreeView1.style = tvwTreelinesText ' Style 4.
	            TreeView1.BorderStyle = vbFixedSingle
	        End Sub
	
	        Private Sub Command1_Click()
	           Dim lngStyle As Long
	   
	           Call SendMessage(TreeView1.hWnd, _
	                             TVM_SETBKCOLOR, _
	                             0, _
	                             ByVal RGB(255, 0, 0))  'Change the background
	                                                    'color to red.
	
	        ' Now reset the style so that the tree lines appear properly
	           lngStyle = GetWindowLong(TreeView1.hWnd, GWL_STYLE)
	           Call SetWindowLong(TreeView1.hWnd, _
	                             GWL_STYLE, _
	                             lngStyle - TVS_HASLINES)
	           Call SetWindowLong(TreeView1.hWnd, GWL_STYLE, lngStyle)
	        End Sub
	
	8. On the Run menu, click Start or press the F5 key to start the program.
	
	9. Click the CommandButton. The TreeView background color changes to red.
	
	REFERENCES
	==========
	
	Platform SDK Documentation on the following functions:
	
	- SendMessage
	
	- GetWindowLong
	
	- SetWindowLong
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp500 kbVBp600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
