---
layout: page
title: "Q132383: PPT7: Colors and Shaded Fills Dither in PowerPoint"
permalink: /kb/132/Q132383/
---

## Q132383: PPT7: Colors and Shaded Fills Dither in PowerPoint

{% raw %}

	Article: Q132383
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbdisplay
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When working in Slide View, you may notice colors dithering (breaking down into
	pixels or bands of color) when you fill an object with a solid or shaded fill.
	
	This problem occurs when the color depth of your display settings is 256 colors
	or less.
	
	CAUSE
	=====
	
	This behavior occurs because the colors are dithered in Slide View. This
	provides faster screen redraw. When you view the slide show and your display is
	running at 256 colors, the colors and gradients do not dither.
	
	RESOLUTION
	==========
	
	To smooth the shaded fills, start the on-screen slide show.
	
	NOTE: If your display adapter supports color depths greater than 256 colors, you
	can increase your display color setting to prevent colors from dithering in
	Slide View.
	
	For more information about changing the color depth setting in Windows 95, click
	the Index tab in Windows 95 Help, type the following text
	
	  "colors, number of colors, changing" (without the quotation marks)
	
	and then double-click the selected text to go to the "To change the number of
	colors your monitor displays" topic.
	
	Additional query words: PPT95 dotted speckly halftoned
	
	======================================================================
	Keywords          : kbdisplay 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
