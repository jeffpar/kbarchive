---
layout: page
title: "Q138252: PPT7: Presentation Contains Blank Boxes If Saved as 4.0"
permalink: /kb/138/Q138252/
---

## Q138252: PPT7: Presentation Contains Blank Boxes If Saved as 4.0

	Article: Q138252
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbinterop kbdta kbconversion
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you save a PowerPoint for Windows 95, version 7.0 as a PowerPoint 3.0 or
	4.0 presentation, two rectangles appear near the bottom of the slide. These
	rectangles are located in approximately the same place as Headers and Footers in
	the PowerPoint 7.0 version of the presentation.
	
	These objects are visible only when you draw a selection box over them or when
	you click Select All on the Edit menu.
	
	CAUSE
	=====
	
	This behavior is a side effect of the translation process. If a slide contains a
	header or footer in these positions, the object is a text box containing the
	text of the header and footer.
	
	RESOLUTION
	==========
	
	You can delete these objects safely. Their presence does not harm the
	presentation and their absence has no effect on the integrity of the
	presentation.
	
	MORE INFORMATION
	================
	
	PowerPoint 7.0 automatically places a page number field on every page when page
	numbers are being used. These fields are translated as text boxes when the
	presentation is saved in an earlier version format. Again, it is safe to edit or
	remove these as necessary after translation to a PowerPoint 4.0 or 3.0 file.
	
	
	Additional query words: 3.00 4.00 4.00a 4.00c Blank Objects w_powerpt powerpnt power point text frame frames extra
	
	======================================================================
	Keywords          : kbinterop kbdta kbconversion 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
