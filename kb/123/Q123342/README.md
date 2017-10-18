---
layout: page
title: "Q123342: PPT: 3-D Pie Chart Is Displayed and Printed with Poor Quality"
permalink: kb/123/Q123342/
---

## Q123342: PPT: 3-D Pie Chart Is Displayed and Printed with Poor Quality

	Article: Q123342
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0,4.0a,4.0c,5.0,7.0; Win95:7.0
	Operating System(s): 
	Keyword(s): kbinterop kbprint kbdta kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft Excel for Windows 95, version 7.0 
	- Microsoft Excel for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you copy a 3-D pie chart from Microsoft Excel and use the Paste or Link
	command to paste it into PowerPoint, the chart printed from PowerPoint is
	different than the chart printed from Excel:
	
	- From PowerPoint the chart's outlines are slightly jagged.
	
	- From Excel, the outlines are smooth.
	
	NOTE: In some cases you may receive the above symptoms for reasons other than
	printing, such as displaying 3-D pie charts.
	
	CAUSE
	=====
	
	When you copy a 3-D pie chart from Microsoft Excel, Microsoft Excel pastes a
	picture of the chart on the Clipboard. In this picture, all the arcs are
	described as a series of small straight lines instead of as smooth curves. When
	you paste the chart into another program and print it, the arcs are printed as
	though they are complex polygons rather than arcs.
	
	WORKAROUND
	==========
	
	These workarounds only reduce the problem. They do not completely correct it.
	
	Method 1: Turn Off the Chart Border
	-----------------------------------
	
	1. Double-click the pie chart.
	
	2. On the Format menu, click Data Series.
	
	3. Click Border, then click None.
	
	4. Click OK.
	
	Method 2: Change the Angle of the Chart
	---------------------------------------
	
	1. Double-click the pie chart in PowerPoint.
	
	2. On the Format menu, click 3-D View.
	
	3. Increase the Elevation to above 30.
	
	4. Click OK.
	
	Method 3: Use Ellipses to Smooth Lines
	--------------------------------------
	
	1. Superimpose an ellipse over the top portion of the pie that has a wider
	  width.
	
	2. Turn off the Snap To Grid feature, so that you can make fine adjustments.
	
	3. Copy and paste the ellipse and move the copy over the bottom edge of the pie.
	  Then send it to the back, behind the pie chart.
	
	4. Make any fine positioning adjustments and print the chart.
	
	MORE INFORMATION
	================
	
	This problem is not exclusive to PowerPoint (this same behavior occurs if you
	paste a 3-D pie chart into Microsoft Word for Windows or Microsoft Write).
	
	
	This problem does not occur with PowerPoint for the Macintosh or Microsoft Excel
	for the Macintosh.
	
	Additional query words: 2.00 3.00 4.00 4.00a 4.00c 7.00 power point powerpt winppt ppt95
	
	======================================================================
	Keywords          : kbinterop kbprint kbdta kbPrinting 
	Technology        : kbExcelSearch kbPowerPtSearch kbExcel95 kbExcel500 kbPowerPt95 kbZNotKeyword2 kbExcel95Search kbExcel400 kbPowerPt95Search kbPowerPt400 kbPowerPt300 kbPowerPt400c kbPowerPt400a kbExcelWinSearch
	Version           : WINDOWS:3.0,4.0,4.0a,4.0c,5.0,7.0; Win95:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
