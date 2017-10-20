---
layout: page
title: "Q189159: HOWTO: Set a Custom Range for Value Axis with MSChart Control"
permalink: /kb/189/Q189159/
---

## Q189159: HOWTO: Set a Custom Range for Value Axis with MSChart Control

{% raw %}

	Article: Q189159
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
	
	When plotting points with the Microsoft Chart control, the scale for the value
	axis is scaled to represent only the range of numbers needed to display the data
	points being charted. For example, if the data points you are charting are
	between 1000 and 1010, the full range of 0 through 1010 is not needed and may
	not be used.
	
	MORE INFORMATION
	================
	
	At times it may be desirable or necessary to specify a custom range for the
	value axis. Microsoft Chart offers properties that allow the user to customize
	this setting. To set a custom range, three properties must be set: Auto,
	Minimum, and Maximum. Below are the steps to create a sample application that
	demonstrates how to configure the chart's scale programmatically.
	
	Step-by-Step Example
	--------------------
	
	1. Open a new Standard EXE project. Form1 is created by default.
	
	2. Choose Components from the Project menu, and add a reference to "Microsoft
	  Chart Control."
	
	3. Add a Chart control to Form1 (sample data is automatically supplied).
	
	4. Add a CommandButton to Form1.
	
	5. Paste the following code into Form1's code module:
	
	        Private Sub Command1_Click()
	           ' Set chart type to 2d bar
	           Form1.MSChart1.chartType = VtChChartType2dBar
	
	           ' Use manual scale to display y axis (value axis)
	           With Form1.MSChart1.Plot.Axis(VtChAxisIdY).ValueScale
	              .Auto = False
	              .Minimum = -100
	              .Maximum = 100
	           End With
	        End Sub
	
	6. Run the sample project.
	
	7. Note that the range of the Y axis is 0 to 100.
	
	8. Click the CommandButton.
	
	9. Note that the range of the Y axis now reflects the -100 to 100 range that was
	  set programmatically.
	
	Additional query words: kbDSupport kbDSD size graph kbVBp kbVBp500 kbCtrl kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
