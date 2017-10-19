---
layout: page
title: "Q258173: BUG: Chart Control Axis Label's WordWrap Property Does Not Work"
permalink: /kb/258/Q258173/
---

## Q258173: BUG: Chart Control Axis Label's WordWrap Property Does Not Work

	Article: Q258173
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Chart Control's axis label has a property named WordWrap. If this property
	is set to True, the label should have the word wrap effect. However, it does
	not.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project with a default form. Form1 is created by
	  default.
	
	2. On the Project menu, click to select Components, choose Microsoft Chart
	  Control in the Components dialog box, and click OK.
	
	3. Add an instance of the Chart Control to Form1. Enlarge the Chart Control so
	  that its contents are easily visible, and then resize the form as needed.
	
	4. Add the following code to the Code window of Form1:
	
	  Private Sub Form_Load()
	       MSChart1.RowCount = 5
	       MSChart1.ColumnCount = 1
	
	       With MSChart1.Plot.Axis(VtChAxisIdX).Labels(1)
	           .Auto = False
	           .TextLayout.Orientation = VtOrientationHorizontal
	           .TextLayout.HorzAlignment = VtHorizontalAlignmentFill
	           .TextLayout.WordWrap = True
	       End With
	       
	       Dim i As Long
	       For i = 1 To MSChart1.RowCount
	          MSChart1.Row = i
	          MSChart1.RowLabel = "This is column number " & i
	       Next
	  End Sub
	
	5. Press the F5 key to run the application and note that the labels are not
	  wrapped. Instead, they are overlapped.
	
	Additional query words: WordWrap MSCHRT20.ocx
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
