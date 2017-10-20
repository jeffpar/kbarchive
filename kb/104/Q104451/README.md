---
layout: page
title: "Q104451: PPT: Copy Picture from Excel Automatically Paste Links"
permalink: /kb/104/Q104451/
---

## Q104451: PPT: Copy Picture from Excel Automatically Paste Links

{% raw %}

	Article: Q104451
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0,4.0a,4.0c,5.0,7.0
	Operating System(s): 
	Keyword(s): kbinterop kbole kbdta
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft Excel for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you paste link a picture of an Excel chart to a PowerPoint slide, it is
	linked to the original worksheet by default, rather than linking the picture to
	the chart. This behavior occurs if you place the chart in its own chart window
	before selecting Edit Copy Picture.
	
	You can see that the picture has been linked rather than embedded by going to the
	PowerPoint Edit menu and selecting Links, which is available only if the slide
	contains linked object(s).
	
	RESOLUTION
	==========
	
	Follow these steps to paste the picture as an embedded object:
	
	1. In Excel, select the chart on the worksheet.
	
	2. Holding down the SHIFT key, on the Edit menu click Copy Picture.
	
	3. Switch to PowerPoint, and on the Edit menu click Paste.
	
	After following these steps, you should have an embedded picture of the Excel
	chart on your PowerPoint slide.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a chart in an Excel spreadsheet.
	
	2. Double-click the chart so that it is in its own chart window (it does not
	  have to be maximized).
	
	3. Hold down the SHIFT key and click the Edit menu.
	
	4. Click Copy Picture.
	
	5. Switch to PowerPoint, then click Paste on the Edit menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft
	PowerPoint 97 for Windows.
	
	Additional query words: 3.00 4.00 4.00a 4.00c power point powerpt 7.00 w_excel winppt macppt ppt95
	
	======================================================================
	Keywords          : kbinterop kbole kbdta 
	Technology        : kbExcelSearch kbPowerPtSearch kbExcel500 kbPowerPt700 kbZNotKeyword2 kbExcel400 kbPowerPt700Search kbPowerPt400 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:3.0,4.0,4.0a,4.0c,5.0,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
