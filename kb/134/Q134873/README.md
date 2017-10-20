---
layout: page
title: "Q134873: PPT7: Shaded Backgrounds Appear Banded in Word or Excel"
permalink: /kb/134/Q134873/
---

## Q134873: PPT7: Shaded Backgrounds Appear Banded in Word or Excel

{% raw %}

	Article: Q134873
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbgraphic kbinterop
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you paste a PowerPoint slide with a shaded fill background from Slide
	Sorter view into a Word document or Microsoft Excel worksheet, the slide object
	appears banded, or color resolution is lost.
	
	CAUSE
	=====
	
	This problem occurs when you are running a display color depth of 256 colors.
	
	PowerPoint displays shaded fill backgrounds differently from Word or Microsoft
	Excel under a 256-color display driver. If your video card supports 32,000,
	64,000, or 16.7 million color display depths, you can switch your display color
	depths to one of those settings, and the gradients will display properly.
	
	NOTE: Even if the gradients display banded, they should print correctly.
	
	RESOLUTION
	==========
	
	You can control how PowerPoint copies graphics to be pasted into other programs.
	To paste the slide object into Word or Microsoft Excel and have it display as it
	appears in Slide Sorter view, follow these steps:
	
	1. In PowerPoint for Windows 95, click Options on the Tools menu.
	
	2. Click the Advanced tab.
	
	3. Under Export Pictures, select the "Best for On-Screen Viewing" option.
	
	Now if you copy a slide object and paste it into Word or Microsoft Excel, the
	object displays the same way it does in Slide Sorter view.
	
	NOTE: While this method might make the shaded slide appear better in the document
	where it is pasted when displayed, the slide might not print correctly. If it is
	more important to print the object than display it, you should leave the Export
	Pictures setting at "Best for Printing" (the default).
	
	STATUS
	======
	
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 7.00 ppt95 ppt7 awful stripes striped ugly
	
	======================================================================
	Keywords          : kbgraphic kbinterop 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
