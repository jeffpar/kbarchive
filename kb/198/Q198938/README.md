---
layout: page
title: "Q198938: PRB: MSFLexGrid Redraw May Not Function Correctly"
permalink: /kb/198/Q198938/
---

## Q198938: PRB: MSFLexGrid Redraw May Not Function Correctly

{% raw %}

	Article: Q198938
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp600 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After setting the TopRow property of the MSFlexGrid, setting the Redraw property
	to True does not cause the MSFlexGrid to be automatically redrawn.
	
	CAUSE
	=====
	
	Microsoft is researching this problem and will post new information in the
	Microsoft Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	There are a couple of workarounds to this problem. You can use the code in these
	workarounds in place of the code shown in the MORE INFORMATION section of this
	article
	
	1. If you replace the MSFlexGrid1_Click() event in the MORE INFORMATION section
	  with the following code, it works as expected:
	
	     Private Sub MSFlexGrid1_Click()
	
	       With MSFlexGrid1
	
	         .Redraw = True
	         If .Row = .Rows - 1 Then
	           .TopRow = 2
	           Debug.Print "Right After Setting .Top Row:  " & .TopRow
	
	         End If
	
	       End With
	
	       Debug.Print "After leaving With block: " & MSFlexGrid1.TopRow
	
	     End Sub
	
	-or-
	
	2. Using the above workaround will get the MSFlexgrid to move to the correct
	  position. However, doing so may cause the grid to flicker when filling. To
	  avoid this flickering you can use the LockWindowUpdate API call as noted in
	  the below code. Instead of using the above code, replace the code in the
	  MSFlexGrid_Click() event with the following:
	
	     Private Declare Function LockWindowUpdate Lib "user32" _
	           (ByVal hwndLock As Long) As Long
	
	     Private Sub fgrItemGrid_Click()
	
	       lres = LockWindowUpdate(Me.hWnd) 'Lock repaints
	
	       With fgrItemGrid
	
	         .Redraw = True
	         If .Row = .Rows - 1 Then
	           .TopRow = 2
	           Debug.Print "Right After Setting .Top Row:  " & .TopRow
	
	         End If
	
	       End With
	
	       lres = LockWindowUpdate(0&) 'Release Lock
	
	       Debug.Print "After leaving With block: " & fgrItemGrid.TopRow
	
	    End Sub
	
	NOTE: The LockWindowUpdate API can be used to enable or disable a window from
	repainting. In workaround 2 above, it is used to prevent the window from
	repainting.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic 6.0 standard EXE.
	
	2. From the Project menu, choose Components and add a reference to the Microsoft
	  FlexGrid Control 6.0.
	
	3. Add an MSFlexGrid to the default form.
	
	4. Cut and paste the following code into the form:
	
	     Private Sub MSFlexGrid1_Click()
	
	       With MSFlexGrid1
	
	         .Redraw = False
	         If .Row = .Rows - 1 Then
	           .TopRow = 2
	           Debug.Print "Right After Setting .Top Row:  " & .TopRow
	
	         End If
	         .Redraw = True
	         '.Refresh
	
	       End With
	
	       Debug.Print "After leaving With block: " & MSFlexGrid1.TopRow
	
	     End Sub
	
	     Private Sub Form_Load()
	       With MSFlexGrid1
	         .RowHeightMin = 288
	         .Cols = 10
	         .Rows = 5
	         .TextMatrix(0, 1) = "Row 0"
	         .TextMatrix(1, 1) = "Row 1"
	         .TextMatrix(2, 1) = "Row 2"
	         .TextMatrix(3, 1) = "Row 3"
	         .TextMatrix(4, 1) = "Row 4"
	         .Width = 4095
	         .Height = 1600
	       End With
	     End Sub
	
	5. Click on the "Row 4" cell. The code in the Click event will execute. However,
	  the grid will not refresh and move up so that the TopRow is now 2.
	
	  NOTE: Forcing a refresh with the .Refresh method does not correct this
	  problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
