---
layout: page
title: "Q177997: HOWTO: Set the FillColor in the MS Chart Control at Run-time"
permalink: /kb/177/Q177997/
---

## Q177997: HOWTO: Set the FillColor in the MS Chart Control at Run-time

	Article: Q177997
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
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
	
	With the Microsoft Chart control, the FillColor property allows you to change
	the color of different objects in the chart such as data points, shadows, walls,
	and markers. The FillColor property has a Red, Blue, and Green property that you
	set to an integer value to control the value of that color component.
	
	This article illustrates how you can set the FillColor property at run-time by
	showing you how to create a project that will change the bar colors of chart.
	This information can be applied to other chart objects that support the
	FillColor property.
	
	MORE INFORMATION
	================
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Click Components on the Project menu and check "Microsoft Chart Control."
	
	3. Add one chart control, three label controls, three text boxes, and one
	  command button to Form1.
	
	4. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           MSChart1.ColumnCount = 1
	
	           Label1.Caption = "Red Value:"
	           Label2.Caption = "Green Value:"
	           Label3.Caption = "Blue Value:"
	
	           Text1.Text = "0"
	           Text2.Text = "0"
	           Text3.Text = "0"
	
	           Command1.Caption = "Change Bar Color"
	
	           Command1_Click
	        End Sub
	
	        Private Sub Command1_Click()
	        'This event changes the bar colors of the graph.
	
	           With MSChart1.Plot.SeriesCollection(1).DataPoints(-1)
	              .Brush.Style = VtBrushStyleSolid
	              .Brush.FillColor.Red = CInt(Text1.Text)
	              .Brush.FillColor.Green = CInt(Text2.Text)
	              .Brush.FillColor.Blue = CInt(Text3.Text)
	           End With
	        End Sub
	
	5. Press the F5 key to run the program. Enter a value from 0 to 255 in any of
	  the text boxes and click Change Bar Color. The color of the bars in the chart
	  changes to the values entered in the text boxes.
	
	REFERENCES
	==========
	
	For additional information on the MS Chart control, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q175212 SAMPLE: CHRTSAMP.EXE Visual Basic 5.0 MSChart Sample
	
	  Q275649 SAMPLE: ChrtSmpl.exe Demonstrates Use of the Visual Basic 6.0 MSChart
	  Control
	
	Additional query words: MSChart charting graph graphing series kbVBp500 kbVBp600 kbVBp 
	kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
