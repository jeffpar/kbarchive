---
layout: page
title: "Q259933: HOWTO: Use an MSChart Control with Visual FoxPro"
permalink: kb/259/Q259933/
---

## Q259933: HOWTO: Use an MSChart Control with Visual FoxPro

	Article: Q259933
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 22-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use an MSChart OCX control (MSCHRT20.OCX) to
	create a three-dimensional chart with eight columns and rows of data. This
	article also illustrates setting the legend parameters.
	
	MORE INFORMATION
	================
	
	The MSChart control (MSCHRT20.OCX) supports the following features:
	
	- true three-dimensional representation
	
	- support for all major chart types
	
	- data grid population through random data and data arrays
	
	The MSChart control is associated with a data grid, the DataGrid object. The
	DataGrid object is a table that holds the data being charted. The data grid may
	include labels used to identify series and categories on the chart. The data
	grid may be filled with information by inserting data or by importing data from
	a spreadsheet or array.
	
	1. Create a program file named "MyChart.prg" (without the quotation marks) by
	  using the following code:
	
	  PUBLIC chartdemo
	  chartdemo=CREATEOBJECT('chartdemo')
	  chartdemo.SHOW
	
	  DEFINE CLASS chartdemo AS FORM
	
	     TOP = 0
	     LEFT = 0
	     HEIGHT = 250
	     WIDTH = 360
	     DOCREATE = .T.
	     CAPTION = "MSChart Control"
	     NAME = "Form1"
	
	     ADD OBJECT olecontrol1 AS OLECONTROL WITH ;
	        TOP = 24, ;
	        LEFT = 42, ;
	        HEIGHT = 181, ;
	        WIDTH = 277, ;
	        VISIBLE = .F., ;
	        NAME = "Olecontrol1", ;
	        OLECLASS="MSChart20Lib.MSChart.2"
	
	     ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	        TOP = 216, ;
	        LEFT = 24, ;
	        HEIGHT = 24, ;
	        WIDTH = 121, ;
	        CAPTION = "\<Show Chart", ;
	        NAME = "Command1"
	
	     ADD OBJECT command2 AS COMMANDBUTTON WITH ;
	        TOP = 216, ;
	        LEFT = 216, ;
	        HEIGHT = 24, ;
	        WIDTH = 120, ;
	        CAPTION = "E\<xit", ;
	        NAME = "Command2"
	
	     PROCEDURE command1.CLICK
	        WITH THISFORM.olecontrol1
	           *!* Display a 3d chart with 8 columns and 8 rows of data.
	           .ChartType = 0 && VtChChartType3dBar
	           *!* Set the number of columns to 8
	           .COLUMNCOUNT = 8
	           *!* Set the number of rows to 8
	           .RowCount = 8
	
	           *!* Populate the DataGrid Object.
	           FOR lnCol = 1 TO 8
	              FOR lnRow = 1 TO 8
	                 .COLUMN = lnCol
	                 .ROW = lnRow
	                 .DATA = lnRow * 10
	              NEXT ROW
	           NEXT COLUMN
	           *!* Use the chart as the backdrop of the legend.
	           .ShowLegend = .T.
	           *!* Select Chart Part 1
	           .SelectPart(1,1,1,1,1) && VtChPartTypePlot, index1, index2, index3, index4)
	           *!*	Copy the chart to the clipboard in Windows Metafile format.
	           .EditCopy
	           *!* Select Chart Part 1
	           .SelectPart(1,1,1,1,1) && VtChPartTypeLegend, index1, index2, index3, index4)
	           *!*  Paste the Windows Metafile graphic from the clipboard into the chart
	           .EditPaste
	           *!* Set the chart object visible
	           .VISIBLE=.T.
	           *!* Refresh the chart object
	           .REFRESH
	        ENDWITH
	        THISFORM.REFRESH
	     ENDPROC
	
	     PROCEDURE command2.CLICK
	        WITH THISFORM
	           .RELEASE
	        ENDWITH
	     ENDPROC
	
	  ENDDEFINE
	
	2. Save and run the .prg file.
	
	3. Click the command button with the caption Show Chart.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information regarding ActiveX Controls supported with Microsoft
	Visual FoxPro 6.0, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q191222 INFO: ActiveX Controls Supported by Visual FoxPro 6.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
