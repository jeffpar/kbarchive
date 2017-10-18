---
layout: page
title: "Q149094: HOWTO: Determine the Contents of a Cell in a DBGrid Control"
permalink: kb/149/Q149094/
---

## Q149094: HOWTO: Determine the Contents of a Cell in a DBGrid Control

	Article: Q149094
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
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
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to determine the contents of a selected cell in a DBGrid
	control.
	
	MORE INFORMATION
	================
	
	The DBGrid control allows you to display the contents of a recordset or a table.
	With this method, you can take the data from a cell in the MouseUp event of the
	DBGrid control.
	
	This example uses a DBGrid control bound to Data control. The Data control uses
	the BIBLIO.MDB database for information. In the MouseUp event of the DBGrid
	control, the column and row positions of the cell are assigned to an integer
	variable. A bookmark is then set using the row position. Executing the CellValue
	method on the Columns collection of the DBGrid control determines the contents
	of the cell. Those contents then appear on a TextBox control.
	
	Sample Code
	-----------
	
	1. Start Visual Basic. If it is already running, on the File menu, click New
	  Project. Add a DBGrid, TextBox, and a Data control to the Form1 form. Set the
	  following controls to the specified properties:
	
	  a. Data control DatabaseName property: <path> BIBLIO.MDB RecordSource
	     property: Titles
	
	  b. DBGrid control DataSource property to Data1.
	
	2. Copy the following code sample to the Form1 code window:
	
	        Option Explicit
	        Dim igColumn As Integer
	        Dim igRow As Integer
	        Dim vargBookmark As Variant
	
	        Private Sub DBGrid1_MouseUp(Button As Integer, Shift As Integer, _
	         X As Single, Y As Single)
	           igColumn = DBGrid1.ColContaining(X)   'Set the Cell Column number
	           igRow = DBGrid1.RowContaining(Y)      'Set the Cell Row number
	
	           vargBookmark = DBGrid1.RowBookmark(igRow) 'Set Bookmark Value
	
	           'Show the contents of the cell in a textbox
	           Text1.Text = DBGrid1.Columns(igColumn).CellValue(vargBookmark)
	
	        End Sub
	
	3. On the Run menu, click Start or press the F5 key. Click on a cell and note
	  that the contents is shown in the TextBox.
	
	Additional query words: kbVBp400 kbVBp600 kbdse kbDSupport kbVBp kbVBp500
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
