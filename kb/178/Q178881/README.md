---
layout: page
title: "Q178881: BUG: MSChart Control Can't Plot Data Points &gt;15 Decimal Places"
permalink: /kb/178/Q178881/
---

## Q178881: BUG: MSChart Control Can't Plot Data Points &gt;15 Decimal Places

	Article: Q178881
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Chart Control is assigned an array of data points containing 16 or more
	decimal places, those data points do not appear when the chart is updated.
	
	RESOLUTION
	==========
	
	There are two ways to deal with this issue:
	
	1. Formatting the number to 15 or fewer decimal places.
	
	2. Using the SetData property on each data point.
	
	Workaround 1
	------------
	
	Before setting the chart to the variant array, "truncate" the decimal values to
	15 places or less as seen in the form_load event below:
	
	     Private Sub Form_Load()
	        Dim data_pts(1 To 3, 1 To 2) As Variant
	        dim i as integer
	
	        data_pts(1, 1) = "R1"
	        data_pts(1, 2) = 5.48487730596136E-02
	        data_pts(2, 1) = "R2"
	        data_pts(2, 2) = 7.04216678154124E-02
	        data_pts(3, 1) = "R3"
	        data_pts(3, 2) = 3.10863837084563E-04
	
	        For i = 1 To 3
	           data_pts(i, 2) = CDbl(Format(data_pts(i, 2), "0.000000000000000"))
	           'Truncate data_pts to 15 decimal places of precision
	        Next
	
	        MSChart1 = data_pts
	
	     End Sub
	
	Workaround 2
	------------
	
	Use the SetData method to add the data to the chart instead of setting the chart
	to the variant array. To use this workaround, rewrite the Form_Load event to
	look like this instead:
	
	     Private Sub Form_Load()
	
	        With MSChart1
	
	           .RowCount = 3
	           .ColumnCount = 1
	
	           .DataGrid.SetData 1, 1, 5.48487730596136E-02, False
	           .DataGrid.SetData 2, 1, 7.04216678154124E-02, False
	           .DataGrid.SetData 3, 1, 3.10863837084563E-04, False
	
	        End With
	
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products noted at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, follow the steps below:
	
	1. Start a new project. Form1 is created by default.
	
	2. Choose Project -> Components from the Visual Basic menu, and then check
	  the Microsoft Chart Control.
	
	3. Add an MSChart control to Form1.
	
	4. Add the following code to the Load event of Form1:
	
	        Dim x(1 To 3, 1 To 2) As Variant
	
	        x(1, 1) = "Value1"
	        x(1, 2) = 5.48487730596136E-02
	        x(2, 1) = "Value2"
	        x(2, 2) = 7.04216678154124E-02
	        x(3, 1) = "Value3"
	        x(3, 2) = 3.10863837084563E-04
	
	        MSChart1 = x
	
	5. Run the project and note that the data does not appear on the chart.
	
	Additional query words: accuracy exponent significant digits kbdse kbDSupport kbVBp kbVBp500bug kbVBp600bug kbControl
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
