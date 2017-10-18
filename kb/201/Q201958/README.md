---
layout: page
title: "Q201958: DOC: DataGrid Object Code Example Does Not Work"
permalink: kb/201/Q201958/
---

## Q201958: DOC: DataGrid Object Code Example Does Not Work

	Article: Q201958
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbdocerr kbCtrl kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DataGrid Object code example contains several errors that prevent the sample
	from working correctly. This article contains the correct code example for the
	DataGrid Object.
	
	MORE INFORMATION
	================
	
	The DataGrid Object is part of the Microsoft Chart Control, MSChart.ocx. You can
	search Online Help for "DataGrid Object" and click on the Example hypertext to
	see the faulty code sample that should demonstrate creating a three-dimensional
	bar chart.
	
	The following is the correct DataGrid Object code example:
	
	      Private Sub Command1_Click()
	         Dim rowLabelCount As Integer
	         Dim columnLabelCount As Integer
	         Dim rowCount As Integer
	         Dim columnCount As Integer
	         Dim labelIndex As Integer
	
	         MSChart1.chartType = VtChChartType3dBar
	         With MSChart1.DataGrid
	            ' Set Chart parameters using methods.
	            rowLabelCount = 2
	            columnLabelCount = 2
	            rowCount = 6
	            columnCount = 6
	            .SetSize rowLabelCount, columnLabelCount, _
	            rowCount, columnCount
	
	            ' Randomly fill in the data.
	            .RandomDataFill
	            ' Then assign labels to second Level.
	            labelIndex = 2
	            columnCount = 1
	            .ColumnLabel(columnCount, labelIndex) = "Product 1"
	            columnCount = 4
	            .ColumnLabel(columnCount, labelIndex) = "Product 2"
	            rowCount = 1
	            .RowLabel(rowCount, labelIndex) = "1994"
	            rowCount = 4
	            .RowLabel(rowCount, labelIndex) = "1995"
	         End With
	      End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbCtrl kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	
	=============================================================================
	
