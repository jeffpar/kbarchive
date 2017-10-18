---
layout: page
title: "Q176632: FIX: MSChart Legend Text Gets Truncated"
permalink: kb/176/Q176632/
---

## Q176632: FIX: MSChart Legend Text Gets Truncated

	Article: Q176632
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the ColumnLabel property of an MSChart control at run-time, the
	text in the legend appears truncated.
	
	RESOLUTION
	==========
	
	To work around this property, you can change the legend text at run-time by
	setting the LegendText property of the Series:
	
	     MSChart1.Plot.SeriesCollection(1).LegendText = "My Legend Text"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Click Components on the Project menu, and check "Microsoft Chart Control."
	
	3. Add an MSChart control to Form1.
	
	4. Set the ShowLegend property of MSChart1 to True.
	
	5. Add the following code to the Load event of Form1:
	
	        Dim i as Integer
	        For i = 1 To MSChart1.Plot.SeriesCollection.Count
	           MSChart1.Column = i
	           MSChart1.ColumnLabel = "Legend Text " & i
	        Next
	
	6. Press the F5 key to run the project. Note that the text in the legend is
	  truncated.
	
	To work around the problem with this example, change the following line of code:
	
	     MSChart1.ColumnLabel = "Legend Text " & i
	
	to:
	
	     MSChart1.Plot.SeriesCollection(i).LegendText = "Legend Text " & i
	
	Additional query words: graph charting kbVBp500bug kbVBp600fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
