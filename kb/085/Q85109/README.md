---
layout: page
title: "Q85109: VB3 How to Edit Grid Cells in VB Using Overlapped Text Box"
permalink: kb/085/Q85109/
---

## Q85109: VB3 How to Edit Grid Cells in VB Using Overlapped Text Box

	Article: Q85109
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Grid custom control does not provide any text editing capability. The
	example program below shows how you can use a text box to perform text editing
	in the current cell of a grid.
	
	MORE INFORMATION
	================
	
	The example program shown below enables you to edit the contents of a grid cell.
	When you press a key, the grid moves a text box to the position of the current
	cell and sets the focus to the text box. When you press the ENTER key or change
	focus away from the current cell, the program transfers the text in the text box
	back to the grid.
	
	Steps to Create Example Program
	-------------------------------
	
	1. Start Visual Basic or from the File menu, choose New Project (ALT, F, N) if
	  Visual Basic is already running. Form1 is created by default.
	
	2. From the File menu, choose Add File. Then select the GRID.VBX file. The Grid
	  tool appears in the Toolbox.
	
	3. Place a grid (Grid1) and a text box (Text1) on Form1. Set the Grid1 Cols and
	  Rows properties both to 4. Then size the grid to show all the cells. Set the
	  Text1 BorderStyle property to None (0) and the Visible property to False (0).
	
	4. Enter the following declarations in the general Declarations section:
	
	     Const ASC_ENTER = 13        ' ASCII code of ENTER key.
	     Dim gRow As Integer
	     Dim gCol As Integer
	
	5. Enter the following code in the Grid1_KeyPress procedure:
	
	     Sub Grid1_KeyPress (KeyAscii As Integer)
	        ' Move the text box to the current grid cell:
	        Call grid_text_move(Grid1, Text1)
	
	        ' Save the position of the grids Row and Col for later:
	        gRow = Grid1.Row
	        gCol = Grid1.Col
	
	        ' Make text box same size as current grid cell:
	        Text1.Width = Grid1.ColWidth(Grid1.Col) - 2 * Screen.TwipsPerPixelX
	        Text1.Height = Grid1.RowHeight(Grid1.Row) - 2 * Screen.TwipsPerPixelY
	
	        ' Transfer the grid cell text:
	        Text1.Text = Grid1.Text
	
	        ' Show the text box:
	        Text1.Visible = True
	        Text1.ZOrder 0
	        Text1.SetFocus
	
	        ' Redirect this KeyPress event to the text box:
	        If KeyAscii <> ASC_ENTER Then
	           SendKeys Chr$(KeyAscii)
	        End If
	     End Sub
	
	6. Add the following code to the Text1_KeyPress procedure:
	
	     Sub Text1_KeyPress (KeyAscii As Integer)
	        If KeyAscii = ASC_ENTER Then
	           Grid1.SetFocus  ' Set focus back to grid, see Text_LostFocus.
	           KeyAscii = 0    ' Ignore this KeyPress.
	        End If
	     End Sub
	
	7. Add the following code to the Text1_LostFocus procedure:
	
	     Sub Text1_LostFocus ()
	        Dim tmpRow As Integer
	        Dim tmpCol As Integer
	
	        ' Save current settings of Grid Row and col. This is needed only if
	        ' the focus is set somewhere else in the Grid.
	        tmpRow = Grid1.Row
	        tmpCol = Grid1.Col
	
	        ' Set Row and Col back to what they were before Text1_LostFocus:
	        Grid1.Row = gRow
	        Grid1.Col = gCol
	
	        Grid1.Text = Text1.Text  ' Transfer text back to grid.
	        Text1.SelStart = 0       ' Return caret to beginning.
	        Text1.Visible = False    ' Disable text box.
	
	        ' Return row and Col contents:
	        Grid1.Row = tmpRow
	        Grid1.Col = tmpCol
	     End Sub
	
	8. In the general Declarations section or in a separate .BAS file, add the
	  following Sub routine:
	
	     Sub grid_text_move (Grid As Control, TextBox As Control)
	
	        ' Move a text box to the position of the current cell in a grid:
	        Dim X As Single   ' x position of current grid cell.
	        Dim Y As Single   ' y position of current grid cell.
	        Dim i As Integer  ' Column/row index.
	
	        ' Skip grid border:
	        X = Grid.Left
	        Y = Grid.Top
	        If Grid.BorderStyle = 1 Then
	           X = X + Screen.TwipsPerPixelX
	           Y = Y + Screen.TwipsPerPixelY
	        End If
	
	        ' Skip fixed columns and rows:
	        For i = 0 To Grid.FixedCols - 1
	           X = X + Grid.ColWidth(i)
	           If Grid.GridLines Then
	              X = X + Screen.TwipsPerPixelX
	           End If
	        Next
	        For i = 0 To Grid.FixedRows - 1
	           Y = Y + Grid.RowHeight(i)
	           If Grid.GridLines Then
	              Y = Y + Screen.TwipsPerPixelY
	           End If
	        Next
	
	        ' Find current data cell:
	        For i = Grid.LeftCol To Grid.Col - 1
	            X = X + Grid.ColWidth(i)
	            If Grid.GridLines Then
	                X = X + Screen.TwipsPerPixelX
	            End If
	        Next
	        For i = Grid.TopRow To Grid.Row - 1
	            Y = Y + Grid.RowHeight(i)
	            If Grid.GridLines Then
	                Y = Y + Screen.TwipsPerPixelY
	            End If
	        Next
	
	        ' Move the Text Box, and make small adjustments:
	        TextBox.Move X + Screen.TwipsPerPixelX, Y + Screen.TwipsPerPixelY
	     End Sub
	
	9. Press the F5 key to run the program. Press a key to begin entering text into
	  a cell. Type in some text. Press the ENTER key to finish editing the cell.
	  Use the arrow keys to move to another cell. You can press the ENTER key to
	  begin editing a cell without changing the contents of the cell.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVBSearch kbAudDeveloper kbVB300Search kbVB300
	Version           : :3.0
	
	=============================================================================
	
