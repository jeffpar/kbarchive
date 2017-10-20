---
layout: page
title: "Q172537: BUG: Grid Clip Property Contains Remnants of Former Values"
permalink: /kb/172/Q172537/
---

## Q172537: BUG: Grid Clip Property Contains Remnants of Former Values

{% raw %}

	Article: Q172537
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
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
	
	SYMPTOMS
	========
	
	Under most circumstances, the Microsoft Grid control's Clip property will
	contain only the values of all the currently-selected cells in the grid.
	However, in Visual Basic 4.0 16-bit, if a cell in a selected range contains a
	null value, previously selected values will show through in the Clip property at
	the position of the cell containing a null value. In Visual Basic 4.0 16- and
	32-bit, if the last cell in a selected range contains a null value then all
	previously selected cell values at that position and beyond will be added to the
	Clip property.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This behavior does not occur with the newer MSFlexGrid that ships with Microsoft
	Visual Basic version 5.0.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic 4.0.
	
	2. Choose Custom Controls from the Tools menu. Select " Grid Control."
	
	3. Add one CommandButton (Command1).
	
	4. Add one grid control (Grid1), large enough to show a 5 x 5 grid.
	
	5. Add the following code to Form1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	           Dim x as Integer, y as Integer
	           ' Create a 5 by 5 grid.
	           Grid1.Cols = 5
	           Grid1.Rows = 5
	           ' Fill the grid with some sample values.
	           For x = 1 To 4
	              Grid1.Col = x
	              For y = 1 To 4
	                 Grid1.Row = y
	                 Grid1.Text = x + y
	              Next y
	           Next x
	           ' Select a range of cells.
	           Grid1.SelStartCol = 1
	           Grid1.SelStartRow = 1
	           Grid1.SelEndCol = 4
	           Grid1.SelEndRow = 1
	           ' Show the clip property contents.
	           MsgBox "The contents of the clip property: " & Grid1.Clip
	           ' Select a new range of cells.
	           Grid1.SelStartCol = 2
	           Grid1.SelStartRow = 3
	           Grid1.SelEndCol = 3
	           Grid1.SelEndRow = 3
	           ' Set current cell to the last cell in the selected range.
	           Grid1.Col = 3
	           Grid1.Row = 3
	           MsgBox "Now clearing last selected cell."
	           ' Set the cell to a null value.
	           Grid1.Text = ""
	           ' Show the new contents of the clip property.
	           MsgBox "NOW Notice the contents of the clip property" & _
	             Chr(13) & Chr(10) & "compared to the selected cells: " & _
	             Grid1.Clip
	        End Sub
	
	6. Press the F5 key to run the project.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q150229 BUG: Setting Grid Clip Property to Empty Text Box Causes GPF
	
	Additional query words: msgrid grid16.ocx grid32.ocx kbControl kbVBp400bug kbVBp500bug kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
