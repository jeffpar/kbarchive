---
layout: page
title: "Q194221: HOWTO: Use the UniformAxis Property to Control Chart Scaling"
permalink: /kb/194/Q194221/
---

## Q194221: HOWTO: Use the UniformAxis Property to Control Chart Scaling

{% raw %}

	Article: Q194221
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When creating an XY Scatter chart using the MSChart control, the resulting chart
	may appear distorted; that is, very tall and narrow or very short and wide. This
	occurs on an XY Scatter chart whose axes have ranges that differ by a large
	amount. For example, an X axis with a range of 0 - 10000 and a Y axis of 0 - 50.
	
	MORE INFORMATION
	================
	
	By default, the scale on the axes of an XY (Scatter) chart is uniform. If the
	x-values are small in comparison to the y-values, or vice versa, the chart may
	appear distorted. To allow the scaling of each axis to be independent, change
	the UniformAxis property of the Plot object to False. The default value of this
	property is True.
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic and create a new Standard EXE project. Form1 is created by
	  default.
	
	2. Click Components from the Project menu and check the "Microsoft Chart
	  Control" component. The MSChart control is made available on the Toolbox.
	
	3. Put an MSChart control on Form1.
	
	4. Copy and paste the following code to the form's code window:
	
	        Private Sub Form_Load()
	           Dim Graph(1 To 10, 1 To 2) As Single
	           Dim x As Integer
	           For x = 1 To 10
	              Graph(x, 1) = x   ' value for X-axis
	              Graph(x, 2) = x * 10 ' value for Y-axis
	           Next x
	           MSChart1.chartType = VtChChartType2dXY  ' set to X Y Scatter chart
	           MSChart1 = Graph ' populate chart's data grid using Graph array
	           ' Leave the following line commented until step 6:
	           'MSChart1.Plot.UniformAxis = False
	        End Sub
	
	5. Press the F5 key to run the project. Note that the chart is not legible (tall
	  and narrow) because both x and y axes are using the same scale and the
	  y-values are larger than the x-values.
	
	6. Stop the project and remove the comment on the last line of code.
	
	7. Press the F5 key to run the project, and note that the chart is legible.
	
	Additional query words: graph appearance height width mschart.ocx kbVBp kbVBp500 kbVBp600 kbCtrl kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
