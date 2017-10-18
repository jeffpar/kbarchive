---
layout: page
title: "Q147666: HOWTO: Set the Column Width of Columns in a ListView Control"
permalink: kb/147/Q147666/
---

## Q147666: HOWTO: Set the Column Width of Columns in a ListView Control

	Article: Q147666
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
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The width of a column in a ListView control cannot be set by using a property
	and/or method when the View property is set to List. This article provides a
	generic procedure that can be used to set the width of a column in a ListView
	control when in List view. This function can also be used to set the column
	width when in Report view, although this is unnecessary because the column width
	can be set via the Width property of the ColumnHeader object when in Report
	view.
	
	MORE INFORMATION
	================
	
	The ListView_SetColumnWidth procedure sets the column width by sending a
	LVM_SETCOLUMNWIDTH message to the ListView control that is passed as its first
	argument. The comment section preceding the function body in step 5 explains the
	required and optional parameters.
	
	To use this procedure, follow these steps:
	
	1. Start Visual Basic. Form1 is created by default.
	
	2. Add a single ListView control and one command button to the form.
	
	3. Add this declaration to the General Declarations section of the form:
	
	        Private Declare Function
	           SendMessage Lib "USER32" Alias "SendMessageA" ( _
	                  ByVal hwnd As Long, _
	                  ByVal Msg As Long, ByVal wParam As Long, _
	                  ByVal lParam As Long) As Long
	
	4. Add the following code to the command button's Click event. This demonstrates
	  a sample call to the ListView_SetColumnWidth procedure and the addition of
	  items that demonstrate the change in width:
	
	        Private Sub Command1_Click()
	           Dim Item As ListItem
	           ListView1.View = lvwList
	           Set Item = ListView1.ListItems.Add
	           Item.Text = "This is a very long line of text"
	           Doevents
	           ListView_SetColumnWidth ListView1
	
	           ' To Run this in Visual Basic 4.0, comment out the above lines
	           ' and uncomment the following lines
	           '
	           ' Dim Item As ListItem
	           ' ListView1.View = lvwList
	           ' ListView_SetColumnWidth ListView1
	           ' Set Item = ListView1.ListItems.Add
	           ' Item.Text = "This is a very long line of text"
	        End Sub
	
	5. Add the following ListView_SetColumnWidth procedure to the form:
	
	  '=====================================================================
	  ' Title: ListView_SetColumnWidth
	  '
	  ' Purpose: Sends a LVM_SETCOLUMNWIDTH message to the listview control to
	  ' set its column width
	  ' for List and Report views
	  '
	  ' Parameters:
	  '      lvw  - ListView control object where the column width will be set
	  '
	  '     [iCol] - Specifies the column for which the width will be set
	  '              only valid in Report view. Ignored for List view.
	  '
	  '     [vTxt] - Optional variant containing either a numeric value
	  '              representing the desired column width (in pixels) or a text
	  '              string where the column width will be set to match the width
	  '              of the passed in text string.
	  '
	  '              If in List view this parameter is not provided, then the
	  '              column width is set to the width of the ListView (lvw)
	  '              control.
	  '
	  '              If in Report view this parameter is not provided, the column
	  '              width is not set.
	  '=====================================================================
	
	     Sub ListView_SetColumnWidth(ByVal lvw As ListView, _
	                                 Optional ByVal iCol As Variant, _
	                                 Optional ByVal vTxt As Variant)
	
	     Const LVSCW_AUTOSIZE = -1
	     Const LVSCW_AUTOSIZE_USEHEADER = -2
	
	     Const LVM_FIRST = &H1000
	     Const LVM_GETCOLUMNWIDTH = LVM_FIRST + 29
	     Const LVM_SETCOLUMNWIDTH = LVM_FIRST + 30
	
	     Dim sm As Integer
	     Dim lWidth As Long
	
	     '
	     ' Abort if the control's hWnd isn't set or if is not in
	     ' the List or Report views.
	
	     If lvw.hwnd = 0& Or (lvw.View <> lvwList And lvw.View <> lvwReport) Then
	     Exit Sub
	     End If
	
	     '
	     ' Remember the ScaleMode of the Form
	     ' and set Form.ScaleMode to Pixels to match the ListView's intrinsic
	     ' ScaleMode
	     '
	     sm = lvw.Parent.ScaleMode
	     lvw.Parent.ScaleMode = vbPixels
	
	     If IsMissing(iCol) Then
	     If lvw.View = lvwList Then
	           iCol = 0
	          ElseIf lvw.View = lvwReport Then
	               '
	               'iCol must be provided in report view
	               '
	               lvw.Parent.ScaleMode = sm
	               Exit Sub
	           End If
	     End If
	
	     '
	     ' Set the desired column width
	     ' If a text string is provided set the column width
	     ' based on the text
	     '
	     If IsMissing(vTxt) Then
	
	     vTxt = ""
	          If lvw.View = lvwList Then
	               '
	               ' 5 millimeters (via the ScaleX statement) is tacked on to
	               ' compensate for the 5 millimeter border that the parent
	               ' class applies to the column width.
	               '
	               lWidth = lvw.Width + ScaleX(5, vbMillimeters, vbPixels)
	          ElseIf lvw.View = lvwReport Then
	               '
	               ' The vTxt parameter must be provided in Report view
	               '
	               lvw.Parent.ScaleMode = sm
	               Exit Sub
	          End If
	     Else
	     '
	          ' 5 millimeters (via the ScaleX statement) is tacked on
	          ' to compensate for the 5 millimeter border that the parent class
	          ' applies to the column width
	          '
	          If IsNumeric(vTxt) Then
	           '
	           ' Numeric width is provided
	           '
	               lWidth = vTxt + ScaleX(5, vbMillimeters, vbPixels)
	          Else
	               lWidth = TextWidth(vTxt) + ScaleX(5, vbMillimeters, vbPixels)
	          End If
	     End If
	
	     SendMessage ListView1.hwnd, LVM_SETCOLUMNWIDTH, CLng(iCol), lWidth
	     lvw.Parent.ScaleMode = sm
	
	     End Sub
	
	6. Press the F5 key or select Start from the Run menu to run the application.
	  Click the command button to execute the ListView_SetColumnWidth subroutine.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
