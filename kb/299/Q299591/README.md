---
layout: page
title: "Q299591: BUG: Item Is Not Highlighted in a FullRowSelect ListView Control"
permalink: /kb/299/Q299591/
---

## Q299591: BUG: Item Is Not Highlighted in a FullRowSelect ListView Control

{% raw %}

	Article: Q299591
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbCtrl kbListView kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB _IK
	Last Modified: 19-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you select a row in a ListView control that has the FullRowSelect property
	set to True, right-aligned columns that do not contain any data are not
	highlighted.
	
	RESOLUTION
	==========
	
	To resolve this problem, add data to the empty column. If you add a space
	character to the column, it is highlighted when selected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, select Components, select the Microsoft Windows Common
	  Controls 6.0 library check box, and then click OK.
	
	3. Add a ListView control to Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	      Dim i As Integer
	      Dim o As Object
	
	      ListView1.View = lvwReport
	      ListView1.FullRowSelect = True
	
	      For i = 1 To 2
	          ListView1.ColumnHeaders.Add , , "Column " & i
	      Next i
	
	      ' Set the alignment of column two to the right.
	      ListView1.ColumnHeaders(2).Alignment = lvwColumnRight
	
	      Set o = ListView1.ListItems.Add(, , "Item1")
	      
	      ' Place a blank space in column two of row two.
	      Set o = ListView1.ListItems.Add(, , "Item2")
	      o.ListSubItems.Add , , " "
	  End Sub
	
	5. Press the F5 key to run the program. Notice that when you select row one in
	  the ListView control, column two is not highlighted. However, when you select
	  row two, column two is highlighted because it contains a space.
	
	Additional query words: field listitem
	
	======================================================================
	Keywords          : kbCmnCtrls kbCtrl kbListView kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB _IK 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
