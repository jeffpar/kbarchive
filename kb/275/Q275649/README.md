---
layout: page
title: "Q275649: SAMPLE: ChrtSmpl.exe Demonstrates Use of the VB 6.0 MSChart Ctrl"
permalink: /kb/275/Q275649/
---

## Q275649: SAMPLE: ChrtSmpl.exe Demonstrates Use of the VB 6.0 MSChart Ctrl

{% raw %}

	Article: Q275649
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbchart kbVBp kbVBp600 kbDSupport
	Last Modified: 24-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ChrtSmpl.exe sample demonstrates how to use the Visual Basic 6.0 version of
	the MSChart control to graphically display numeric information. The MSChart
	control allows you to plot data in charts according to your specifications. To
	create a chart, you can set data in the control's Properties page, or you can
	retrieve data from an external source, such as a Microsoft Excel spreadsheet. To
	reference the path to the Excel workbook that contains the worksheet, use the
	GetObject method.
	
	The MSChart control has many visible parts, all of which can be programmed. You
	can use the MSChart control's three-dimensional (3D) chart features to enhance
	the appearance of a report. To see these features, either set the ChartType
	property to a valid 3D type or set the Chart3D property to True. Note that you
	cannot create a 3D pie chart, because the MSChart control does not contain a
	ChartType property for 3D pie charts.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  ChrtSmpl.exe
	  (http://download.microsoft.com/download/vb60pro/Ctrl/2.0/W98NT42KMe/EN-US/ChrtSmpl.exe)
	
	Release Date: August 24, 2001
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The ChrtSmpl.exe file contains the following files:
	
	+----------------------+
	| File name    | Size  | 
	+----------------------+
	| Project1.vbp | 2Kb   | 
	+----------------------+
	| Form1.frm    | 13Kb  | 
	+----------------------+
	| Form1.frx    | 9Kb   | 
	+----------------------+
	| Gas.xls      | 17Kb  | 
	+----------------------+
	| Modchart.bas | 8Kb   | 
	+----------------------+
	| Mschart.hlp  | 296Kb | 
	+----------------------+
	| Readme.txt   | 2Kb   | 
	+----------------------+
	
	NOTE: The ChartType property (VtChChartType) only has constants for the
	following:
	
	+---------------------------------------------+
	| Constant                   | Description    | 
	+---------------------------------------------+
	| VtChChartType3dBar         | 3D Bar         | 
	+---------------------------------------------+
	| VtChChartType2dBar         | 2D Bar         | 
	+---------------------------------------------+
	| VtChChartType3dLine        | 3D Line        | 
	+---------------------------------------------+
	| VtChChartType2dLine        | 2D Line        | 
	+---------------------------------------------+
	| VtChChartType3dArea        | 3D Area        | 
	+---------------------------------------------+
	| VtChChartType2dArea        | 2D Area        | 
	+---------------------------------------------+
	| VtChChartType3dStep        | 3D Step        | 
	+---------------------------------------------+
	| VtChChartType2dStep        | 2D Step        | 
	+---------------------------------------------+
	| VtChChartType3dCombination | 3D Combination | 
	+---------------------------------------------+
	| VtChChartType2dCombination | 2D Combination | 
	+---------------------------------------------+
	| VtChChartType2dPie         | 2D Pie         | 
	+---------------------------------------------+
	| VtChChartType2dXY          | 2D XY          | 
	+---------------------------------------------+
	
	REFERENCES
	==========
	
	For additional information about the MSChart control, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q175212 SAMPLE: CHRTSAMP.EXE Visual Basic 5.0 MSChart Sample
	
	  Q177997 HOWTO: Set the FillColor in the MS Chart Control at Run-time
	
	For further information on this sample, please refer to the included Help file
	(Mschart.hlp).
	
	Additional query words: ms chart charting example graph piechart chrtsmpl
	
	======================================================================
	Keywords          : kbfile kbSample kbchart kbVBp kbVBp600 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
