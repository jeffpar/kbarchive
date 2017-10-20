---
layout: page
title: "Q241355: HOWTO: Edit and Tab with the MSFlexGrid Control"
permalink: /kb/241/Q241355/
---

## Q241355: HOWTO: Edit and Tab with the MSFlexGrid Control

{% raw %}

	Article: Q241355
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default behavior of the MSFlexGrid is to tab directly into and out of the
	control. This article demonstrates how to tab and move through the cells of the
	MSFlexGrid control using the Tab key. The ability to edit has also been
	included, by placing a Textbox over the active cell.
	
	Later in this article there is an example that demonstrates this functionality.
	
	MORE INFORMATION
	================
	
	Step by step example
	--------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Site three Textboxes and one MSFlexGrid control on Form1.
	
	3. Add the following Code to the General Declarations of Form1:
	
	  Option Explicit
	
	  Private UsingMouse As Boolean  ' Flag for using the Mouse in the Grid.
	
	  Private Sub Form_Load()  ' Set Control Property Values
	     Text1.TabIndex = 1
	     Text2.TabIndex = 2
	     Text2.BorderStyle = 0
	     Text3.TabIndex = 3
	     MSFlexGrid1.Cols = 5
	     MSFlexGrid1.Rows = 5
	     MSFlexGrid1.TabStop = False
	  End Sub
	
	  Private Sub Text1_LostFocus()
	     MSFlexGrid1.Col = 1
	     MSFlexGrid1.Row = 1
	  End Sub
	
	  Private Sub Text2_GotFocus()
	     MSFlexGrid1.Text = Text2.Text
	     If MSFlexGrid1.Col >= MSFlexGrid1.Cols Then MSFlexGrid1.Col = 1
	     ChangeCellText
	  End Sub
	
	  Private Sub MSFlexGrid1_EnterCell()  ' Assign cell value to the textbox
	     Text2.Text = MSFlexGrid1.Text
	  End Sub
	
	  Private Sub MSFlexGrid1_LeaveCell()
	  ' Assign textbox value to grid
	
	     MSFlexGrid1.Text = Text2.Text
	     Text2.Text = ""
	  End Sub
	
	  Private Sub MSFlexGrid1_MouseDown(Button As Integer, Shift As Integer, _
	                                    x As Single, y As Single)
	     UsingMouse = True
	     MSFlexGrid1.Text = Text2.Text
	     ChangeCellText
	  End Sub
	
	  Private Sub Text2_LostFocus()
	     If UsingMouse = True Then
	        UsingMouse = False
	        Exit Sub
	     End If
	     
	     If MSFlexGrid1.Col <= MSFlexGrid1.Cols - 2 Then
	        MSFlexGrid1.Col = MSFlexGrid1.Col + 1
	        ChangeCellText
	     Else
	        If MSFlexGrid1.Row + 1 < MSFlexGrid1.Rows Then
	          MSFlexGrid1.Row = MSFlexGrid1.Row + 1
	          MSFlexGrid1.Col = 1
	          ChangeCellText
	        End If
	     End If
	  End Sub
	
	  Public Sub ChangeCellText() ' Move Textbox to active cell.
	     Text2.Move MSFlexGrid1.Left + MSFlexGrid1.CellLeft, _
	     MSFlexGrid1.Top + MSFlexGrid1.CellTop, _
	     MSFlexGrid1.CellWidth, MSFlexGrid1.CellHeight
	     Text2.SetFocus
	     Text2.ZOrder 0
	  End Sub
	
	4. Run the project. Notice that you are now able to move through all of the
	  cells of the MSFlexGrid. When you reach the end, it will tab to the next
	  control in the tab order.
	
	REFERENCES
	==========
	
	For additional information on using the MSFlexGrid and MSHFlexGrid controls,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q201197 HOWTO: Use a ComboBox to Enter Data into a FlexGrid Control
	
	  Q187834 HOWTO: Select and Unselect a Range of Cells in MSFlexGrid
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
