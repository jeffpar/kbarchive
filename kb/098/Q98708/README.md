---
layout: page
title: "Q98708: Linked Microsoft Excel Graphs Resized in PowerPoint"
permalink: /kb/098/Q98708/
---

## Q98708: Linked Microsoft Excel Graphs Resized in PowerPoint

{% raw %}

	Article: Q98708
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0,4.0a,4.0c,5.0,7.0
	Operating System(s): 
	Keyword(s): kbinterop kbole
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft Excel for Windows 95, versions 4.0, 4.0a, 4.0c, 5.0, 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Microsoft Excel chart is linked to a Microsoft PowerPoint slide, the
	image of the chart changes size depending on the size of the chart window in
	Microsoft Excel at that time.
	
	CAUSE
	=====
	
	Microsoft Excel provides the chart image linked to PowerPoint. The link is
	automatic by default. The chart window in Microsoft Excel dictates the size of
	the chart image in PowerPoint.
	
	WORKAROUND
	==========
	
	Use the following steps to the change the automatic link to a manual one:
	
	1. Create a chart in Microsoft Excel.
	
	2. With the chart window unmaximized, select the Microsoft Excel chart.
	
	3. On the Edit menu, click Copy.
	
	4. Switch to PowerPoint.
	
	5. On the Edit menu in PowerPoint, click Paste Special, and then click Microsoft
	  Excel Chart Object. Click Paste Link.
	
	  Note the size of the chart in PowerPoint.
	
	6. Switch to Microsoft Excel and change the size of the window containing the
	  chart.
	
	7. Switch back to PowerPoint and note the change.
	
	To prevent Microsoft Excel from automatically resizing the chart, perform the
	following additional steps:
	
	1. In PowerPoint, select the Excel Chart object, and then click Links on the
	  Edit menu.
	
	2. In the Edit Links dialog box, select the Manual option.
	
	The size of the chart in PowerPoint is determined by its size in Microsoft Excel.
	If the chart is maximized, it does not have specific dimensions to assign to
	PowerPoint. By setting the links to be updated manually, your charts will not be
	constantly changing size while you use and store your Microsoft Excel files. To
	avoid unwanted size changes, do not update the links while the Microsoft Excel
	chart is maximized or after the chart has been saved in a maximized position.
	
	
	Additional query words: 4.00 4 reduce resize Automatically
	
	======================================================================
	Keywords          : kbinterop kbole 
	Technology        : kbExcelSearch kbPowerPtSearch kbExcel700 kbPowerPt700 kbZNotKeyword2 kbExcel95Search kbPowerPt700Search kbPowerPt400 kbPowerPt300
	Version           : WINDOWS:3.0,4.0,4.0a,4.0c,5.0,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
