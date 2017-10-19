---
layout: page
title: "Q192209: BUG: Cannot Do OLEDrag from a MultiColumn ListBox"
permalink: /kb/192/Q192209/
---

## Q192209: BUG: Cannot Do OLEDrag from a MultiColumn ListBox

	Article: Q192209
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After setting the Columns property of the ListBox to two or more columns, the
	OLEDragDrop functionality only works with data in the first column. This occurs
	with the OLEDragMode property set to Automatic.
	
	RESOLUTION
	==========
	
	Add the following statement in the MouseMove event of the ListBox:
	
	     List1.OLEDrag
	
	Sample code is shown in the MORE INFORMATION section below.
	
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
	
	2. Add a ListBox, and a TextBox (use the default names) to Form1.
	
	3. Open the properties window for List1, and set the Columns property to 2.
	
	4. Add the following code to the Form1 module:
	
	        Private Sub Form_Load()
	           Dim i As Integer
	           Text1.Text = ""
	        '   List1.Columns = 2 ' Cannot be set to multicolumn at runtime
	           List1.OLEDragMode = 1
	           Text1.OLEDropMode = 2
	           For i = 1 To 130
	              List1.AddItem Str$(i)
	           Next i
	        End Sub
	
	5. Save and run the Project.
	
	6. Try to drag a member of the first visible column to the TextBox. The result
	  is that this data can be dragged from the ListBox and dropped in the TextBox.
	
	7. Now attempt to drag a member of the second column into the TextBox. The
	  result is that the item in the second row cannot be dragged.
	
	8. In order to work around the problem, return to design mode and add the
	  following code to the MouseMove event of the ListBox:
	
	        Private Sub List1_MouseMove(Button As Integer, Shift As Integer, _
	                    X As Single, Y As Single)
	           If Button = 1 Then
	              List1.OLEDrag
	           End If
	        End Sub
	
	9. Save and run the project again.
	
	10. Attempt to drag items from either column. Items can now be dragged from both
	  columns of the ListBox.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbVBp500bug kbListBox
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
