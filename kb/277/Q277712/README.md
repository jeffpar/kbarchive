---
layout: page
title: "Q277712: HOWTO: Change the Axis Label Font and the Font Size in MSChart"
permalink: /kb/277/Q277712/
---

## Q277712: HOWTO: Change the Axis Label Font and the Font Size in MSChart

	Article: Q277712
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you work with the MSChart control, you can change the font or font size
	programmatically with the Labels collection of each axis.
	
	MORE INFORMATION
	================
	
	The following code changes the font and font size for both axes of an MSChart
	object.
	
	Step-by-Step Example
	--------------------
	
	1. Open a new Standard EXE project in Visual Basic 6.0. Form1 is created by
	  default.
	
	2. On the Project menu, select Components to bring up the Components dialog box.
	  Check Microsoft Chart Control, and then click OK.
	
	3. Add a CommandButton control and an MSChart control to Form1.
	
	4. Add the following code to the code window of Form1
	
	  Private Sub Command1_Click()
	      ' Note that MSChart20Lib is for Visual Basic 6.0
	      ' it should be MSChartLib in Visual Basic 5.0
	      Dim currentaxis As MSChart20Lib.Axis
	      Dim currentlabel As MSChart20Lib.Label
	      ' Get a reference to the x axis
	      Set currentaxis = MSChart1.Plot.Axis(VtChAxisIdX)
	      ' Loop though and set the font of each label
	      For Each currentlabel In currentaxis.Labels
	          currentlabel.VtFont.Name = "Courier"
	          currentlabel.VtFont.Size = 16
	      Next currentlabel
	      ' get a reference to the y axis
	      Set currentaxis = MSChart1.Plot.Axis(VtChAxisIdY)
	      ' loop through and set the font of each label
	      For Each currentlabel In currentaxis.Labels
	          currentlabel.VtFont.Name = "Courier"
	          currentlabel.VtFont.Size = 16
	      Next currentlabel
	  End Sub
	
	5. Run the project, and note the font for the axis labels.
	
	6. Click on Command1, and note that the font changes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
