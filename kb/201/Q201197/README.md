---
layout: page
title: "Q201197: HOWTO: Use a ComboBox to Enter Data into a FlexGrid Control"
permalink: /kb/201/Q201197/
---

## Q201197: HOWTO: Use a ComboBox to Enter Data into a FlexGrid Control

	Article: Q201197
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbComboBox kbCtrl kbGrpDSUser kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 03-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use a ComboBox that appears over the active cell to make it easier to
	enter data into a MSFlexGrid or MSHFlexGrid control. This article demonstrates
	how to do this, as well as how to resize the ComboBox when a column is resized.
	Please note that you can only adjust the width of the ComboBox.
	
	The subclassing (or hook) of the FlexGrid control is optional. Its purpose in
	this article is to resize the ComboBox dynamically when a column in the FlexGrid
	is resized.
	
	MORE INFORMATION
	================
	
	Steps to Create Sample Project
	------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, click Components, select Microsoft FlexGrid Control, and
	  click OK.
	
	3. Add a ComboBox and MSFlexGrid control to Form1.
	
	4. Place the following code into the Form's module:
	
	        Option Explicit
	
	        Private Sub Form_Unload(Cancel As Integer)
	            If IsHooked Then
	               Unhook   ' Stop checking messages.
	            End If
	        End Sub
	
	        Private Sub MSFlexGrid1_MouseUp(Button As Integer, _
	           Shift As Integer, x As Single, y As Single)
	            Static CurrentWidth As Single
	            ' Check to see if the Cell's width has changed.
	            If MSFlexGrid1.CellWidth <> CurrentWidth Then
	                Combo1.Width = MSFlexGrid1.CellWidth
	                CurrentWidth = MSFlexGrid1.CellWidth
	            End If
	        End Sub
	
	        Private Sub Form_Load()
	            gHW = MSFlexGrid1.hWnd
	            Hook   ' Start checking messages.
	            MSFlexGrid1.AllowUserResizing = flexResizeColumns
	            MSFlexGrid1.Cols = 4
	            MSFlexGrid1.Rows = 6
	            MSFlexGrid1.RowHeightMin = Combo1.Height
	            Combo1.Visible = False
	            Combo1.ZOrder (0)
	            Combo1.Width = MSFlexGrid1.CellWidth
	            ' Load the ComboBox's list.
	            Combo1.AddItem "Some text"
	            Combo1.AddItem "Some more text"
	            Combo1.AddItem "Still more text"
	            Combo1.AddItem "Yet even more text"
	            Combo1.AddItem "Way more text than that"
	        End Sub
	
	        Private Sub MSFlexGrid1_Click()
	            ' Position and size the ComboBox, then show it.
	            Combo1.Width = MSFlexGrid1.CellWidth
	            Combo1.Left = MSFlexGrid1.CellLeft + MSFlexGrid1.Left
	            Combo1.Top = MSFlexGrid1.CellTop + MSFlexGrid1.Top
	            Combo1.Text = MSFlexGrid1.Text
	            Combo1.Visible = True
	        End Sub
	
	        Private Sub Combo1_Click()
	            ' Place the selected item into the Cell and hide the ComboBox.
	            MSFlexGrid1.Text = Combo1.Text
	            Combo1.Visible = False
	        End Sub
	
	5. On the Project menu, add a new Module and insert the following code:
	
	        Option Explicit
	
	        Declare Function CallWindowProc Lib "user32" Alias _
	           "CallWindowProcA" (ByVal lpPrevWndFunc As Long, _
	           ByVal hWnd As Long, ByVal Msg As Long, _
	           ByVal wParam As Long, ByVal lParam As Long) As Long
	
	        Declare Function SetWindowLong Lib "user32" Alias _
	           "SetWindowLongA" (ByVal hWnd As Long, _
	           ByVal nIndex As Long, ByVal dwNewLong As Long) As Long
	
	        Private Const GWL_WNDPROC = -4
	        Private IsHooked As Boolean
	        Private Const WM_SIZE = &H5
	        Private Const WM_PAINT = &HF
	        Private lpPrevWndProc As Long
	        Public gHW As Long
	
	        Public Sub Hook()
	            If IsHooked Then
	            ' Do not hook it twice without unhooking,
	            ' or you will not be able to unhook it.
	            Else
	            lpPrevWndProc = SetWindowLong(gHW, GWL_WNDPROC, _
	               AddressOf WindowProc)
	            IsHooked = True
	            End If
	        End Sub
	
	        Public Sub Unhook()
	            Dim temp As Long
	            temp = SetWindowLong(gHW, GWL_WNDPROC, lpPrevWndProc)
	            IsHooked = False
	        End Sub
	
	        Function WindowProc(ByVal hw As Long, ByVal uMsg As _
	           Long, ByVal wParam As Long, ByVal lParam As Long) As Long
	            WindowProc = CallWindowProc(lpPrevWndProc, hw, _
	               uMsg, wParam, lParam)
	            ' The interior of the control is repainted, but not resized.
	            If uMsg = WM_SIZE Or uMsg = WM_PAINT Then
	               Form1.Combo1.Width = Form1.MSFlexGrid1.CellWidth
	               Form1.Combo1.Left = Form1.MSFlexGrid1.CellLeft + _
	                  Form1.MSFlexGrid1.Left
	               Form1.Combo1.Top = Form1.MSFlexGrid1.CellTop + _
	                  Form1.MSFlexGrid1.Top
	            End If
	        End Function
	
	6. On the File menu, click Save and build an executable. Please do not ignore
	  this step. The use of AddressOf in the IDE can cause the system to crash.
	  Please see the REFERENCES section of this article for more information about
	  this issue.
	
	7. Run the EXE and click in a cell of the FlexGrid. The ComboBox should appear
	  and cover the cell. With the ComboBox showing, use the mouse to widen that
	  column. When you release the mouse button the ComboBox should also adjust in
	  size. This is handled by the code that hooks into the Window's messages. When
	  you select from the ComboBox's list, your choice is added to the cell.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q168795 HOWTO: Hook Into a Window's Messages Using AddressOf
	
	  Q241355 HOWTO: Edit and Tab with the MSFlexGrid Control
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Chris E. Jolley, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbComboBox kbCtrl kbGrpDSUser kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
