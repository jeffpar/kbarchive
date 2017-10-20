---
layout: page
title: "Q177685: HOWTO: Handle Missing DataPoints with MSChart"
permalink: /kb/177/Q177685/
---

## Q177685: HOWTO: Handle Missing DataPoints with MSChart

{% raw %}

	Article: Q177685
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The last argument of the SetData method determines if the data point is a null
	value. When this flag is True, the data point is null and the value is omitted
	from the chart. It is often desirable that a data point is omitted rather than
	treated as zero. This article illustrates how to use the MS Chart control to
	create data points that are omitted, or missing, from the plot.
	
	MORE INFORMATION
	================
	
	The SetData method has four arguments:
	
	- Row - an integer that identifies the row containing the data point value.
	
	- Column - an integer that identifies the column containing the data point
	  value.
	
	- DataPoint - a double that is the data point value.
	
	- NullFlag - an integer flag that indicates if the data point value is a null
	  value.
	
	The last argument determines if the data point is displayed on the chart. If the
	NullFlag is true, the data point is a null value and the data point is omitted
	from the chart. If the NullFlag is set to False or is omitted, the data point is
	displayed as a zero value.
	
	The next section illustrates how you can create a sample project that uses MS
	Chart to plot missing data points.
	
	Steps to Create Sample Project
	------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton, Check box, and an MS Chart Control to Form1.
	
	3. Copy the following code to the Code window of Form1:
	
	          Option Explicit
	          Option Base 1
	          Dim vArray(2, 6) As Variant
	
	          Private Sub Form_Load()
	             Dim i, j
	             For i = 1 To 2
	              For j = 1 To 6
	                  vArray(i, j) = Int((Rnd(10) + Rnd(10) * 10) * 10)
	              Next j
	             Next i
	
	            Command1.Caption = "SetData Method"
	            Check1.Caption = "Null Data Point"
	            Check1.Value = vbChecked
	          End Sub
	
	          Private Sub Command1_Click()
	              Dim intCount As Integer, dataflag As Boolean
	              Dim column As Integer, row As Integer, anumber As Variant
	
	              If Check1.Value = vbChecked Then
	                  vArray(1, 4) = vbNull
	              Else
	                  vArray(1, 4) = 0
	              End If
	
	              With MSChart1
	               .chartType = VtChChartType2dLine
	               .ColumnCount = 2
	               .RowCount = 6
	
	                 For column = 1 To .ColumnCount
	                    For row = 1 To .RowCount
	                    If (vArray(column, row)) <> vbNull Then
	                       dataflag = False
	                    Else
	                       dataflag = True
	                    End If
	                    .DataGrid.SetData row, column, _
	                                      vArray(column, row), _
	                                      dataflag
	                    Next row
	                 Next column
	
	                 With .DataGrid
	                  .ColumnLabelCount = 1
	                  .ColumnLabel(1, 1) = "abc"
	                  .ColumnLabel(2, 1) = "xyz"
	                  .RowLabelCount = 1
	                  .RowLabel(1, 1) = "Jan"
	                  .RowLabel(2, 1) = "Feb"
	                  .RowLabel(3, 1) = "Mar"
	                  .RowLabel(4, 1) = "Apr"
	                  .RowLabel(5, 1) = "May"
	                  .RowLabel(6, 1) = "Jun"
	                 End With
	
	               .ShowLegend = True
	              End With
	          End Sub
	
	4. Click Start on the Run menu, or press the F5 key to start the program. Click
	  SetData Method to display a chart with a missing data point. Uncheck the Null
	  Data Point check box and click SetData Method to display the chart without a
	  Null data point (the data point is zero).
	
	(c) Microsoft Corporation 1997. All Rights Reserved. Contributions by Arsenio
	Locsin, Microsoft Corporation
	
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
