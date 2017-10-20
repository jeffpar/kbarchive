---
layout: page
title: "Q178127: HOWTO: Adjust RowHeight of MSFlexGrid to Accommodate WordWrap"
permalink: /kb/178/Q178127/
---

## Q178127: HOWTO: Adjust RowHeight of MSFlexGrid to Accommodate WordWrap

{% raw %}

	Article: Q178127
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbControl
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MSFlexGrid included with Visual Basic 5.0 has a WordWrap property that
	allows the user to determine whether text in a cell of the MSFlexGrid should be
	continued on a new line in the same cell if one or more words extends beyond the
	edge of the cell. However, the MSFlexGrid does not automatically adjust the
	RowHeight to accommodate the extra lines. This article illustrates how you can
	adjust the RowHeight of cells in the MSFlexGrid to accommodate text that wraps.
	
	MORE INFORMATION
	================
	
	This example uses the SendMessage API function with the EM_GETLINECOUNT constant
	as an argument. When you use the EM_GETLINECOUNT message, SendMessage returns
	the number of lines an edit control (or TextBox) is currently displaying. This
	does not work directly on the MSFlexGrid because the MSFlexGrid is not intrinsic
	to Windows, as is the edit box. However, by using an edit box with the
	MSFlexGrid, you can use SendMessage to extend the functionality of the
	MSFlexGrid.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard EXE project.Form1 is created by default.
	
	2. Click Components on the Project menu and check "Microsoft FlexGrid Control
	  5.0."
	
	3. Add a Data control, a TextBox, an MSFlexGrid control and a CommandButton to
	  the default form.
	
	4. Set the following properties for the controls on the default form:
	
	  Name               Property                       Value
	  ----               --------                       -----
	  Data1              DatabaseName                   NWIND.MDB
	  Data1              RecordSource                   Employees
	  MSFlexGrid1        AllowUserResizing              3 - flexResizeBoth
	  MSFlexGrid1        DataSource                     Data1
	  MSFlexGrid1        WordWrap                       True
	  Text1              MultiLine                      True
	  Text1              Visible                        False
	
	  NOTE: The database NWIND.MDB is installed into your Visual Basic directory.
	
	5. Add the following code to the code window of the default form:
	
	        Option Explicit
	
	        Private Declare Function SendMessage Lib "user32" Alias _
	           "SendMessageA" _
	           (ByVal hwnd As Long, _
	            ByVal wMsg As Long, _
	            ByVal wParam As Long, _
	            lParam As Any) As Long
	
	        Const EM_GETLINECOUNT = &HBA
	
	        Private Sub Command1_Click()
	           Dim ColLoop As Long
	           Dim RowLoop As Long
	
	           'Turn off redrawing to avoid flickering
	           MSFlexGrid1.Redraw = False
	
	           For ColLoop = 0 To MSFlexGrid1.Cols - 1
	              MSFlexGrid1.ColWidth(ColLoop) = 2500
	
	              For RowLoop = 0 To MSFlexGrid1.Rows - 1
	                 ReSizeCellHeight RowLoop, ColLoop
	              Next RowLoop
	           Next ColLoop
	
	           'Turn redrawing back on
	           MSFlexGrid1.Redraw = True
	        End Sub
	
	        Public Sub ReSizeCellHeight(MyRow As Long, MyCol As Long)
	           Dim LinesOfText As Long
	           Dim HeightOfLine As Long
	
	           'Set MSFlexGrid to appropriate Cell
	           MSFlexGrid1.Row = MyRow
	           MSFlexGrid1.Col = MyCol
	
	           'Set textbox width to match current width of selected cell
	           Text1.Width = MSFlexGrid1.ColWidth(MyCol)
	
	           'Set font info of textbox to match FlexGrid control
	           Text1.Font.Name = MSFlexGrid1.Font.Name
	           Text1.Font.Size = MSFlexGrid1.Font.Size
	           Text1.Font.Bold = MSFlexGrid1.Font.Bold
	           Text1.Font.Italic = MSFlexGrid1.Font.Italic
	           Text1.Font.Strikethrough = MSFlexGrid1.Font.Strikethrough
	           Text1.Font.Underline = MSFlexGrid1.Font.Underline
	
	           'Set font info of form to match FlexGrid control
	           Me.Font.Name = MSFlexGrid1.Font.Name
	           Me.Font.Size = MSFlexGrid1.Font.Size
	           Me.Font.Bold = MSFlexGrid1.Font.Bold
	           Me.Font.Italic = MSFlexGrid1.Font.Italic
	           Me.Font.Strikethrough = MSFlexGrid1.Font.Strikethrough
	           Me.Font.Underline = MSFlexGrid1.Font.Underline
	
	           'Put the text from the selected cell into the textbox
	           Text1.Text = MSFlexGrid1.Text
	
	           'Get the height of the text in the textbox
	           HeightOfLine = Me.TextHeight(Text1.Text)
	
	           'Call API to determine how many lines of text are in text box
	           LinesOfText = SendMessage(Text1.hWnd, EM_GETLINECOUNT, 0&, 0&)
	
	           'Check to see if row is not tall enough
	           If MSFlexGrid1.RowHeight(MyRow) < (LinesOfText*HeightOfLine) Then
	              'Adjust the RowHeight based on the number of lines in textbox
	              MSFlexGrid1.RowHeight(MyRow) = LinesOfText * HeightOfLine
	           End If
	        End Sub
	
	6. Press the F5 key to run the project.
	
	7. Click Command1.
	
	  RESULT: Before clicking the button, all cells of the MSFlexGrid are the
	  default size. Clicking the button runs code that processes each cell of the
	  MSFlexGrid and increases the cell's height if necessary to display all of
	  it's text. In this example, this is most apparent in the "Notes" column of
	  the MSFlexGrid control.
	
	  NOTE: In order to receive the best results, you may also need to adjust the
	  ColWidth property.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
