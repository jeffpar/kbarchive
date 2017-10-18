---
layout: page
title: "Q130154: PPT: Columns or Rows Missing from Inserted Gantt Chart"
permalink: kb/130/Q130154/
---

## Q130154: PPT: Columns or Rows Missing from Inserted Gantt Chart

	Article: Q130154
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbinterop kbole kbdta
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft Project for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you insert a Microsoft Project Gantt chart into PowerPoint, beginning and
	ending columns or rows may be missing. If you resize the object or try inserting
	the same object again, the results are the same.
	
	CAUSE
	=====
	
	Microsoft Project can only copy to the Clipboard the information in the current
	window. Therefore, if more than one screen of information is selected, only the
	information on the screen at the time the Copy command is executed is copied to
	the Clipboard.
	
	WORKAROUND
	==========
	
	Reduce the total size of the Gantt chart by reducing the text size. To do this,
	follow these steps:
	
	1. In Microsoft Project, click Text Styles on the Format menu.
	
	2. On the Item To Change list, click All.
	
	3. Click a smaller font size. Click OK.
	
	Reduce the font size until the entire project is visible at once. Now if you copy
	and paste the Gantt chart into a PowerPoint slide, it appears in its entirety.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: 4.00a 4.00c cropped chopped macppt winppt ppt95 w_proj
	
	======================================================================
	Keywords          : kbinterop kbole kbdta 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbProjectSearch kbPowerPt700Search kbPowerPt400 kbPowerPt300 kbPowerPt400c kbPowerPt400a kbProject400
	Version           : WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
