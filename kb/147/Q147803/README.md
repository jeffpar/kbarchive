---
layout: page
title: "Q147803: HOWTO: Dynamically Create Excel 5.0 Charts in OLE 2.0 Control"
permalink: /kb/147/Q147803/
---

## Q147803: HOWTO: Dynamically Create Excel 5.0 Charts in OLE 2.0 Control

	Article: Q147803
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbtool kb16bitonly kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	- Microsoft Excel for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to create new Excel 5.0 charts at run-time to be
	displayed in the Visual Basic OLE 2.0 container control.
	
	MORE INFORMATION
	================
	
	The Visual Basic OLE container control can be used to embed new OLE objects at
	run-time. One of the objects that you can embed is an Excel chart. It is
	basically a four-step process:
	
	1. To embed a new chart into the OLE control, set the Class property to
	  Excel.Chart or Excel.Chart.5. Both classes (Excel.Chart and Excel.Chart.5)
	  are for Excel charts. But Excel.Chart.5 is version dependent; it specifies an
	  Excel version 5.0 chart object.
	
	2. Create the object by setting the Action property to OLE_CREATE_EMBED. This
	  embeds a default chart (Chart1) from Excel into the OLE control. The chart
	  (Chart1) is part of a default workbook (Book1) that also contains a default
	  worksheet (Sheet1) to provide data for the chart.
	
	3. Set object variables to reference the Excel objects you need to manipulate
	  the chart through OLE Automation. This will make your code smaller and easier
	  to understand.
	
	4. Call the ChartWizard Method to format the chart.
	
	Setting Object Variables to Reference Excel Objects
	---------------------------------------------------
	
	The OLE control provides the Object property to allow you to refer to the object
	you created. For example, the following code creates and embeds a chart into the
	OLE control and then sets the title:
	
	     Const OLE_CREATE_EMBED = 0
	     Ole1.Class = "Excel.Chart.5"
	     Ole1.Action = OLE_CREATE_EMBED
	     Ole1.Object.HasTitle = 1
	     Ole1.Object.ChartTitle.Caption = "Expenses"
	
	You could navigate from the Object property all the time, but it would be
	cumbersome. To make it easier, you can set object variables to reference the
	objects you want. Here is a modified version of the previous example with object
	variables:
	
	     Const OLE_CREATE_EMBED = 0
	     Dim objChart as Object
	     Dim objChartTitle as Object
	     Ole1.Class = "Excel.Chart.5"
	     Ole1.Action = OLE_CREATE_EMBED
	     Set objChart = Ole1.Object
	     Set objChartTitle = Ole1.Object.ChartTitle
	     objChart.HasTitle = 1
	     objChartTitle.Caption = "Expenses"
	
	The example shown at the end of this article uses three object variables:
	
	- One referring to the chart.
	
	- One referring to the worksheet.
	
	- One referring to the application object.
	
	Calling the ChartWizard Method to Format a Chart
	------------------------------------------------
	
	To format a chart quickly, Excel provides the ChartWizard method. With one call
	to the ChartWizard method, you can create a chart in one of many predefined
	formats. The example uses this method, but you could also use direct object
	manipulation of the chart.
	
	Before you can call the ChartWizard method, the worksheet needs to be filled with
	the proper data. The example creates random data. Most of the time you will be
	using more meaningful data that you can manipulate with Excel. In the example,
	the xlRows orientation is used with 1 row for category labels and one column for
	series labels. Here is a diagram showing how the data is put into the
	worksheet:
	
	-----------------------------------------------------------
	|                | Category 1 Label | Category 2 Label |
	-----------------------------------------------------------
	| Series 1 Label | Data Value       | Data Value       |
	-----------------------------------------------------------
	| Series 2 Label | Data Value       | Data Value       |
	-----------------------------------------------------------
	|                |                  |                  |
	
	Once the data (including labels) has been added to the worksheet, you pass the
	entire range to the ChartWizard method along with the other formatting
	parameters.
	
	ChartWizard Syntax, Parameters, and Descriptions
	------------------------------------------------
	
	SYNTAX:
	
	Object.ChartWizard(Source, Gallery, Format, PlotBy, CategoryLabels, SeriesLabels,
	HasLegend, Title, CategoryTitle, ValueTitle, ExtraTitle)
	
	Parameter       Description
	--------------  -------------------------------------------------
	Object          The Chart object.
	Source          Specifies range that contains source data for the chart.
	Gallery         Specifies chart type (see constants in example.)
	Format          Specifies built-in autoformat.
	PlotBy          Specifies orientation of the data (xlRows or xlColumns.)
	CategoryLabels  The number of rows or columns containing category labels.
	SeriesLabels    The number of rows or columns containing series labels.
	HasLegend       Specifies if chart has a legend.
	Title           The title text of the chart.
	CategoryTitle   Category axis title text.
	ValueTitle      Value axis title text.
	ExtraTitle      Additional axis title text for some charts.
	
	The parameters that are most important to the ChartWizard method are:
	
	- PlotBy
	
	- CategoryLabels
	
	- SeriesLabels
	
	These parameters either determine how your data is going to be set up, or they
	are initialized to fit the data you have.
	
	To determine the Gallery and Format parameters, you may want to modify the
	example. Also, you could record the use of the ChartWizard in Excel and see what
	parameters are used.
	
	All that is left after calling the ChartWizard method is closing the application
	and object references.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add an OLE 2.0 control to Form1, and choose the Cancel button on the Insert
	  Object dialog.
	
	3. Add a CommandButton (Command1) to Form1.
	
	4. Put the following code in the CommandButton click event.
	
	         Private Sub cmdPrint_Click()
	            Me.PrintForm
	        End Sub
	
	           Private Sub cmdQ147803_Click()
	
	              ' Excel chart constants (ODK 1.0 XLCONST.BAS or MsgBox
	              ' in Excel):
	              Const xlArea = 1
	              Const xlBar = 2
	              Const xlColumn = 3
	              Const xlLine = 4
	              Const xlPie = 5
	              Const xlRadar = -4151
	              Const xlXYScatter = -4169
	              Const xlCombination = -4111
	              Const xl3DArea = -4098
	              Const xl3DBar = -4099
	              Const xl3DColumn = -4100
	              Const xl3DLine = -4101
	              Const xl3DPie = -4102
	              Const xl3DSurface = -4103
	              Const xlDoughnut = -4120
	
	              ' Excel orientation constants:
	              Const xlRows = 1
	              Const xlColumns = 2
	
	              Dim objChart As Object           'Object reference to Excel
	                                               'Chart
	              Dim objXL As Object              'Object reference for Excel
	                                                App
	              Dim objSheet As Object           'Object reference to Excel
	                                               'Worksheet
	              Dim iRow As Integer              'Index variable for the
	                                               'current Row
	              Dim iCol As Integer              'Index variable for the
	                                               'current Row
	              Dim cRows As Integer             'Number of rows
	              Dim cCols As Integer             'Number of Columns
	              Dim cwSource As String           'Named Range
	              Static cwGallery(15) As Integer  'Array for Chart types
	              Static iGallery As Integer       'Index for Chart type array
	              Dim cwFormat As Integer          'Format of Chart type
	              Dim cwPlotBy As Integer          'How data is taken from
	                                               'Worksheet
	              Dim cwCategoryLabels As Integer  'Rows/Cols with Catagory
	                                               'labels
	              Dim cwSeriesLabels As Integer    'Rows/Cols with Catagory
	                                               'Labels
	              Dim cwHasLegend As Integer       'Display Legend
	              Dim cwTitle As String            'Chart Title
	              Dim cwCategoryTitle As String    'Category Title
	              Dim cwValueTitle As String       'Value Title
	              Dim cwExtraTitle As String       'Extra Title for some Charts
	                                               'disable this button
	              cmdQ147803.Enabled = False
	              ' Fill in array with possible Chart types:
	              cwGallery(1) = xlArea
	              cwGallery(2) = xlBar
	              cwGallery(3) = xlColumn
	              cwGallery(4) = xlLine
	              cwGallery(5) = xlPie
	              cwGallery(6) = xlRadar
	              cwGallery(7) = xlXYScatter
	              cwGallery(8) = xlCombination
	              cwGallery(9) = xl3DArea
	              cwGallery(10) = xl3DBar
	              cwGallery(11) = xl3DColumn
	              cwGallery(12) = xl3DLine
	              cwGallery(13) = xl3DPie
	              cwGallery(14) = xl3DSurface
	              cwGallery(15) = xlDoughnut
	
	              ' Embed a new Excel 5.0 Chart into the OLE control:
	              OLE1.CreateEmbed "", "Excel.Chart.5"
	              'BEGIN FIX FOR DIFFERING OBJECT MODELS BETWEEN VERSIONS 7 & 8
	              ' Set object references to Chart, Worksheet, and Application
	              'objects:
	              If Left(OLE1.object.Application.Version, 1) = "7" Then
	              'Excel 95's object model is different from Excel 97's
	                Set objChart = OLE1.object ' Chart1 default chart
	              Else  'assume all future excel object models are going to be
	                    'the same
	              Set objChart = OLE1.object.ActiveChart 'ole1.object is in
	                                                     'Excel 97 the workbook
	              End If
	              Set objSheet = objChart.Parent.Worksheets(1) ' Sheet1 default
	                                                           ' data
	
	              Set objXL = objChart.Application
	              'END FIX
	              ' Set the number of columns and rows used for data:
	              cCols = 10
	              cRows = 3
	
	              ' Create Series Labels on Worksheet:
	              For iRow = 1 To cRows
	                 objSheet.Cells(iRow + 1, 1).Value = "SL" & iRow
	              Next
	
	              ' Create Category Labels on Worksheet:
	              For iCol = 1 To cCols
	                 objSheet.Cells(1, iCol + 1).Value = "CL" & iCol
	              Next
	              'exiting here leaves the default chart drawn with sample data
	              ' Create random data on Worksheet:
	              Randomize Timer
	              For iRow = 1 To cRows
	                 For iCol = 1 To cCols
	                    objSheet.Cells(iRow + 1, iCol + 1).Value = _
	                 Int(Rnd * 50) + 1
	              Next iCol
	              Next iRow
	
	              ' Name the Range containing the previously added data:
	              objSheet.Range(objSheet.Cells(1, 1), objSheet.Cells(cRows + _
	              1, cCols + 1)).Name = "ChartDataRange"
	              'objSheet.Range(objSheet.Cells(1, 1), objSheet.Cells(cRows + _
	              1, cCols + 1)).Clear
	              ' Set the ChartWizard parameters:
	              cwSource = "ChartDataRange"       'Name of Named Range
	              iGallery = iGallery Mod 15 + 1    'Iterate through 15 Chart
	                                                'types
	              cwFormat = 1                      'Use default format of Chart
	                                                'Type
	              cwPlotBy = xlRows                 'Rows = Series orientation
	              cwCategoryLabels = 1              '1 Row contains Category
	                                                'Labels
	              cwSeriesLabels = 1                '1 Column contains Series
	                                                'Labels
	              cwHasLegend = 1                   'Display the Legend
	              cwTitle = "Embedded Chart"        'Chart Title
	              cwCategoryTitle = "Categories"    'Category Title
	              cwValueTitle = "Values"           'Value Title
	              cwExtraTitle = "Extras"           'Extra Title
	
	              ' Use the ChartWizard method to fill in the Chart:
	              objChart.ChartWizard cwSource, cwGallery(iGallery), cwFormat,
	              cwPlotBy, cwCategoryLabels, cwSeriesLabels, cwHasLegend,
	              cwTitle,cwCategoryTitle, cwValueTitle, cwExtraTitle
	              ' Shut Down Excel and erase objects:
	              Set objXL = Nothing
	              Set objChart = Nothing
	              Set objSheet = Nothing
	              'enable this button
	              cmdQ147803.Enabled = True
	           End Sub
	
	        Private Sub cmdXLView_Click()
	              OLE1.DoVerb vbOLEOpen
	        End Sub
	
	5. Save the project.
	
	6. Run the program, and click the Command1 button. The first chart should be
	  created.
	
	7. Keep clicking the Command1 button to cycle through the 15 Gallery chart types
	  of Format 1.
	
	Notes
	-----
	
	- To modify a chart in the OLE control, you must activate the control by first
	  setting the Verb property to "-1" (without the quotation marks) (Edit) and
	  then setting the Action property to "7" (without the quotation marks)
	  (OLE_ACTIVATE). Then the Object property will refer to an active object.
	
	- The example uses Format 1 with the ChartWizard method. You may want to
	  experiment with other values.
	
	- After using the ChartWizard method, you can still use objects, methods, and
	  properties of the Chart object to modify it.
	
	- Users will be able to edit the chart by double-clicking the OLE control or by
	  clicking the right mouse button and choosing Edit from the pop-up menu. You
	  can eliminate this ability by setting the AutoActivate and AutoVerbMenu
	  properties of the OLE control.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbtool kb16bitonly kbVBp400 
	Technology        : kbVBSearch kbExcelSearch kbAudDeveloper kbZNotKeyword6 kbExcel500 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
