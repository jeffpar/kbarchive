---
layout: page
title: "Q135559: PPT: Using Colors in PowerPoint"
permalink: /kb/135/Q135559/
---

## Q135559: PPT: Using Colors in PowerPoint

	Article: Q135559
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbenv kbgraphic
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information describes how many colors (and what color depths) are
	available in Microsoft PowerPoint.
	
	MORE INFORMATION
	================
	
	Internally, PowerPoint stores color information for every object using 24- bit
	(16.7 million colors) color definitions. Therefore, if you insert a graphic that
	contains 16.7 million colors, and you display it using a 24-bit display driver,
	you see all the colors.
	
	However, when you run a PowerPoint slide show on a system that has a 256- color
	display driver, PowerPoint performs Palette Management. This means that
	PowerPoint sends a palette to the display driver that contains the 256 colors
	that it needs the most at that one time, and that PowerPoint can send a
	different palette to the display driver whenever it deems it necessary (usually
	when changing a slide).
	
	
	As long as you are running a color depth of greater than 256 colors, you won't
	have to worry about running out of colors. If you are running a color depth of
	256 colors, and you have enough different graphics and gradients on a single
	slide so that the slide requires more than 256 separate colors to display, you
	may experience color loss, with or without an error message.
	
	REFERENCES
	==========
	
	For further information, click the Windows 95 Start button, click Help, and
	search on the following words:
	
	  display
	  color palette, changing
	  color, changing the number of
	
	Additional query words: 3.00 4.00 4.00a 7.00 ppt95 power point powerpnt winppt
	
	======================================================================
	Keywords          : kbenv kbgraphic 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search kbPowerPt400 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	
	=============================================================================
	
