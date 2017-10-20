---
layout: page
title: "Q137761: PPT7: Color Mapping Errors Between Windows 95 and NT 3.51"
permalink: /kb/137/Q137761/
---

## Q137761: PPT7: Color Mapping Errors Between Windows 95 and NT 3.51

{% raw %}

	Article: Q137761
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Slides may appear to be blank if a PowerPoint for Windows 95, version 7.0,
	presentation created in Windows 95 with a display setting of 16 colors is opened
	in PowerPoint 7.0 running on Windows NT 3.51. If you select the Title or Body
	text areas, all that is revealed is the text and slide background in the text
	box areas. The remainder of the slide still appears to be blank.
	
	CAUSE
	=====
	
	This problem occurs when the computer running Windows NT 3.51 uses the Cirrus
	Logic 16-color display driver.
	
	
	RESOLUTION
	==========
	
	Change the Windows NT 3.51 display driver to 256 colors or higher.
	
	MORE INFORMATION
	================
	
	This issue appears to apply only to the Cirrus Logic display drivers supplied
	with Windows 95 and NT 3.51, and only in the 16-color display mode. A PowerPoint
	7.0 presentation created under Windows NT 3.51 with a 16-color display setting
	does not exhibit this behavior running under Windows 95.
	
	Additional query words: 7.00 97 8.00 ppt95 ppt7 text blank invisible w_powerpt powerpnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}
