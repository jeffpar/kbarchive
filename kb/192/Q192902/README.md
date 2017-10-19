---
layout: page
title: "Q192902: HOWTO: Change Colors to Patterns with the MSChart Control"
permalink: /kb/192/Q192902/
---

## Q192902: HOWTO: Change Colors to Patterns with the MSChart Control

	Article: Q192902
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the MSChart control uses colors to differentiate between data sets.
	This works well on a color monitor or printer, but if a printout to a monochrome
	printer is created, the colors may be hard to distinguish. Using the code
	provided, you can programmatically change the MSChart control to use patterns
	instead of colors.
	
	MORE INFORMATION
	================
	
	Modifying some properties is all that needs to be done to get the MSChart
	control to use patterns.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Choose Components from the Project menu to show the Components Dialog.
	
	3. In Visual Basic 5.0, select "Microsoft Chart Control." In Visual Basic 6.0,
	  select "Microsoft Chart Control 6.0 (OLEDB)."
	
	4. Place an instance of the Chart control and a CommandButton on Form1.
	
	5. Place the following code in the General Declaration Section of Form1:
	
	       Private Sub Command1_Click()
	       MSChart1.Plot.SeriesCollection(1).DataPoints(-1).Brush.Style _
	          = VtBrushStylePattern
	       MSChart1.Plot.SeriesCollection(1).DataPoints(-1).Brush.Index _
	          = VtBrushPatternBoldDownDiagonal
	       MSChart1.Plot.SeriesCollection(1).DataPoints(-1).Brush.FillColor.Set _
	          255, 255, 255
	
	       MSChart1.Plot.SeriesCollection(2).DataPoints(-1).Brush.Style _
	          = VtBrushStylePattern
	       MSChart1.Plot.SeriesCollection(2).DataPoints(-1).Brush.Index _
	          = VtBrushPatternBoldHorizontal
	       MSChart1.Plot.SeriesCollection(2).DataPoints(-1).Brush.FillColor.Set _
	          255, 255, 255
	
	       MSChart1.Plot.SeriesCollection(3).DataPoints(-1).Brush.Style _
	          = VtBrushStylePattern
	       MSChart1.Plot.SeriesCollection(3).DataPoints(-1).Brush.Index _
	          = VtBrushPatternBoldUpDiagonal
	       MSChart1.Plot.SeriesCollection(3).DataPoints(-1).Brush.FillColor.Set _
	          255, 255, 255
	
	       MSChart1.Plot.SeriesCollection(4).DataPoints(-1).Brush.Style _
	          = VtBrushStylePattern
	       MSChart1.Plot.SeriesCollection(4).DataPoints(-1).Brush.Index _
	          = VtBrushPatternBoldVertical
	       MSChart1.Plot.SeriesCollection(4).DataPoints(-1).Brush.FillColor.Set _
	          255, 255, 255
	       End Sub
	
	6. Run the project and click Command1 and note that the chart now uses
	  monochrome patterns instead of colors.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q168749 HOWTO: Print the Contents of the MS Chart Control
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
