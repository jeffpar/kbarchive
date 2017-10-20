---
layout: page
title: "Q85993: PPT: Excel Charts Embed in Black and White"
permalink: /kb/085/Q85993/
---

## Q85993: PPT: Excel Charts Embed in Black and White

{% raw %}

	Article: Q85993
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:2.0,3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbinterop kbole
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 2.0, 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft Excel for Windows, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you embed a chart or spreadsheet object from version 3.0 or 4.0 of Microsoft
	Excel into a PowerPoint presentation, it may be displayed in black and white,
	rather than in color. This problem occurs if the default printer driver for the
	PowerPoint presentation does not support color.
	
	NOTE: This problem may also occur when embedding objects from Microsoft Project
	for Windows.
	
	
	CAUSE
	=====
	
	This behavior is not caused by PowerPoint. When Excel acts as an OLE source
	application, it chooses to either include or not include color with the display
	information it sends to the destination application. Excel makes this decision
	based on the specified printer driver's color support.
	
	NOTE: This behavior also occurs in version 2.0 of PowerPoint for Windows;
	however, it occurs less frequently than in PowerPoint 3.0 because the default
	target driver supplied with PowerPoint 2.0 supports color. In PowerPoint 3.0, no
	special target driver is specified; your default Windows driver remains active.
	
	RESOLUTION
	==========
	
	There are four methods for bringing Excel charts into PowerPoint 3.0 with the
	color information intact. These methods are described below.
	
	NOTE: Except for the second method, these methods also work with PowerPoint 2.0.
	
	Method 1
	--------
	
	Temporarily change the target printer for PowerPoint to a printer that supports
	color before you embed the Excel chart; after you embed the chart, reset the
	original printer driver. To do this, use the following steps:
	
	1. From the File menu in PowerPoint, choose Printer Setup.
	
	2. Select a printer driver such as the HP PaintJet, HP DeskJet 500c,
	  Genigraphics, or a color PostScript printer driver.
	
	3. Embed a chart from Excel (refer to steps 1-5 under Method 3).
	
	4. From the File menu, choose Printer Setup.
	
	5. Select the original printer driver.
	
	NOTE: If this object is edited when the presentation is set up for a
	black-and-white printer, the colors will disappear after you complete the
	editing session.
	
	Method 2
	--------
	
	Link, rather than embed, the Excel file to PowerPoint with the following steps:
	
	1. Start Excel. Create a chart or open an existing chart.
	
	2. From the Chart menu, choose Select Chart. From the Edit menu, choose Copy.
	
	3. Switch to PowerPoint.
	
	4. From the Edit menu, choose Paste Special.
	
	5. Under Data Type, select Microsoft Excel Chart Object, then choose the Paste
	  Link button.
	
	NOTE: This process creates a linked object, rather than an embedded one.
	Therefore, if you transport the PowerPoint file to a different machine, the
	Excel chart file must also be transported. If it is not, the object will not be
	editable.
	
	Method 3
	--------
	
	Disable the ability to strip the color information from the Microsoft Excel chart
	object by setting custom colors with the following steps:
	
	1. From the Edit menu in PowerPoint, choose Insert, then choose Object from the
	  submenu.
	
	2. Under Object type, select Microsoft Excel Chart, and choose the OK button.
	  (Excel will be opened, and a blank chart window titled "Chart in
	  Presentation" [or something similar] will be displayed.)
	
	3. Open an existing chart file, an existing worksheet file, or create a new
	  worksheet.
	
	4. From the Chart menu, choose Select Chart (or highlight a range of cells if
	  you are in a worksheet). From the Edit menu, choose Copy.
	
	5. Switch to the "Chart in Presentation" window. From the Edit menu, choose
	  Paste.
	
	6. Double-click a colored element of the chart to open the Patterns dialog box.
	  Under Area, select the Custom option button. Repeat this process for each
	  element in the chart that has a different color.
	
	7. After you have selected the Custom option button for all the colors, return
	  to PowerPoint by closing the "Chart in Presentation" window.
	
	The chart will now be displayed in color in PowerPoint. The colors will be
	retained, even if the chart is edited. However, if a new data series is added to
	the chart, the colors will not be retained. Although this method is time
	consuming, it is the best method to achieve and maintain a colored chart in
	PowerPoint.
	
	Method 4
	--------
	
	Select the chart in Excel, and copy it into PowerPoint as a picture. To do this,
	use the following steps:
	
	1. Start Excel. Open a pre-existing chart, or create a new chart.
	
	2. From the Chart menu, choose Select Chart.
	
	3. Hold down the SHIFT key and choose Edit from the menu bar. The Edit menu
	  should now include the Copy Picture command; choose Copy Picture.
	
	4. Under Appearance in the Copy Picture dialog box, select the Appearance As
	  Shown On Screen option button. Under Size, select the Size As Shown On Screen
	  option button.
	
	5. Switch to PowerPoint. From the Edit menu, choose Paste.
	
	An image of the chart will be displayed in color. This is the fastest way to
	bring an Excel chart into PowerPoint; however, this object is now a graphic and
	cannot be edited.
	
	
	Additional query words: 2.00 3.00 object linking and embedding winppt 4.00a 4.00c ppt95 server client pattern patterns gray grey b/w ppt20 ppt30 ppt40 excel 7.00
	
	======================================================================
	Keywords          : kbinterop kbole 
	Technology        : kbExcelSearch kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbExcel400 kbPowerPt700Search kbPowerPt400 kbExcel300 kbPowerPt200 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:2.0,3.0,4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
