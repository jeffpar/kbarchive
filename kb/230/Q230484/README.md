---
layout: page
title: "Q230484: HOWTO: Label Pie Slices as Percentages in MSChart Pie Chart"
permalink: /kb/230/Q230484/
---

## Q230484: HOWTO: Label Pie Slices as Percentages in MSChart Pie Chart

	Article: Q230484
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When creating a Pie chart using the MSChart control, you might wish to label
	each "slice" of the pie as a percentage of the total. This article demonstrates
	how to do this.
	
	MORE INFORMATION
	================
	
	The following example illustrates how to accomplish this task:
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, choose Components, check Microsoft Chart Control, and
	  click OK.
	
	3. Add an instance of the MSChart control to Form1.
	
	4. Add the following code to Form1:
	
	     Private Sub Form_Load()
	
	        With MSChart1
	           .chartType = VtChChartType2dPie
	
	        For i = 1 To 3
	           .Row = 1
	           .Column = i
	           .Data = i * 100
	        Next
	      
	        With .DataGrid
	           .RowLabelCount = 1
	           .ColumnCount = 3
	           .RowCount = 1
	           For i = 1 To .ColumnCount
	              .ColumnLabel(i, 1) = "Column " & i
	           Next i
	           .RowLabel(1, 1) = "Data as a Percentage"
	        End With
	      
	        For i = 1 To .Plot.SeriesCollection.Count
	           With .Plot.SeriesCollection(i).DataPoints(-1).DataPointLabel
	              .LocationType = VtChLabelLocationTypeOutside
	              .Component = VtChLabelComponentPercent
	              .PercentFormat = "0%"
	              .VtFont.Size = 10
	           End With
	        Next i
	
	        End With
	     End Sub
	
	5. Run the project.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
