---
layout: page
title: "Q178545: PRB: Cannot Set Marker Size or Style for MSChart"
permalink: /kb/178/Q178545/
---

## Q178545: PRB: Cannot Set Marker Size or Style for MSChart

	Article: Q178545
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Size or Style properties of the marker object in the Microsoft Chart
	control at run-time does not result in size or style changes.
	
	CAUSE
	=====
	
	The SeriesMarker Auto Property is set to True by default.
	
	RESOLUTION
	==========
	
	Set the SeriesMarker Auto Property to False.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following section demonstrates how to create a sample project that modifies
	properties of Markers on an MSChart control.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Click Components on the Project menu, and then select "Microsoft Chart
	  Control."
	
	3. Add an MSChart control and a CommandButton to Form1.
	
	4. Set the ChartType property of the MSChart control to 3-vtChChartType2dLine.
	
	5. Add the following code to Form1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	           Dim x As Integer, y As Integer
	           Dim s As Series
	           MSChart1.RowCount = 10
	           MSChart1.ColumnCount = 4
	
	           For y = 1 To 4
	              MSChart1.Column = y
	              For x = 1 To 10
	                  MSChart1.Row = x
	                  MSChart1.Data = x * y
	              Next x
	
	              With MSChart1.Plot.SeriesCollection.Item(y)
	                 'The next line is required to change the Marker properties.
	                 .SeriesMarker.Auto = False
	                 .DataPoints.Item(-1).Marker.Visible = True
	                 .DataPoints.Item(-1).Marker.Size = 60
	                 .DataPoints.Item(-1).Marker.Style = VtMarkerStyleX
	                 .DataPoints.Item(-1).Marker.Pen.VtColor.Red = 0
	                 .DataPoints.Item(-1).Marker.Pen.VtColor.Blue = 0
	                 .DataPoints.Item(-1).Marker.Pen.VtColor.Green = 0
	              End With
	           Next y
	
	        End Sub
	
	6. Press the F5 key to run the project.
	
	7. Click Command1. Note that the Marker style and size do not change.
	
	REFERENCES
	==========
	
	The Microsoft Chart control is based on First Impressions by Visual Components.
	You can obtain a trial or full version of First Impressions at the following Web
	site:
	
	  http://www.visualcomp.com/products/fi.htm
	
	First Impressions is manufactured by Visual Components, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: graph chart ms data markers kbVBp500 kbVBp600 kbDSupport 
	kbdsd kbVBp kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
