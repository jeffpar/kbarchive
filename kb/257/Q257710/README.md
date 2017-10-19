---
layout: page
title: "Q257710: FIX: PointSelected of MSChart May Return Wrong DataPoint Value"
permalink: /kb/257/Q257710/
---

## Q257710: FIX: PointSelected of MSChart May Return Wrong DataPoint Value

	Article: Q257710
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the control type of MSChart is set to Step chart, then the PointSelected
	event does not always return the right DataPoint value.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, choose Components, check Microsoft Chart Control 6.0,
	  and then click OK.
	
	3. Place an MSChart control on Form1.
	
	4. Paste the following code into Form1's code window:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	    Dim i As Integer, j As Integer
	    Dim series As Integer, rows As Integer
	    
	    MSChart1.chartType = VtChChartType2dStep
	    
	    series = 2
	    rows = 5
	    
	    With MSChart1.DataGrid
	        .ColumnCount = series
	        .RowCount = rows
	        For i = 1 To series
	            For j = 1 To rows
	                .SetData j, i, j * i, 0
	            Next j
	        Next i
	    End With
	  End Sub
	
	  Private Sub MSChart1_PointSelected(series As Integer, DataPoint As Integer, MouseFlags As Integer, Cancel As Integer)
	    MsgBox "Column = " & series & " DataPoint = " & DataPoint
	  End Sub
	
	5. Press the F5 key to run the program. You should see two graphics plotted, one
	  red and the other green.
	
	6. Click on the last column (R5) on the green graphic to select it. Click again
	  on the last column R5 (near level 9), and note that there is a message box
	  displaying Column=2 and DataPoint=5. This means that you clicked on the
	  second graphic (the green one) and the 5th point (in this case R5). This is
	  the correct behavior.
	
	7. Now click again on the green graphic and over R5, but this time near level 6.
	  Note that the message box column is still 2 (correct), but DataPoint is 4.
	  This is incorrect; it should be 5. This same problem occurs for R4, but not
	  for R1 to R3.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
