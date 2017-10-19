---
layout: page
title: "Q133080: PPT7: Meaning of 24-bit Rendering Options for WMF Files"
permalink: /kb/133/Q133080/
---

## Q133080: PPT7: Meaning of 24-bit Rendering Options for WMF Files

	Article: Q133080
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbgraphic
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	You can control how PowerPoint for Windows 95, version 7.0 handles
	24-bit graphics when you save slides as Windows metafiles (WMF).
	
	The Advanced tab in the Options dialog box makes the following options
	available:
	
	  Render 24-bit Bitmaps at Highest Quality
	     Export pictures:
	        Best for Printing
	        Best for On-Screen Viewing
	
	To locate the Options dialog box, click Options on the Tools menu.
	
	MORE INFORMATION
	================
	
	If you click Best For Printing in the Export Pictures section and save a slide
	that contains a 24-bit bitmap image as a Windows metafile, the bitmap is
	included in the WMF as a 24-bit (16,777,216 color) image.
	
	If you click Best For On-Screen Viewing and then export the same slide, the
	24-bit bitmap is converted to 8-bit color and included in the Windows metafile
	as a 256-color image.
	
	NOTE: In most cases, there is very little difference between the ways a 24- bit
	color image and an 8-bit color image appear on screen. An 8-bit image takes much
	less time to display than a 24-bit image and about one-third the amount of disk
	space.
	
	If you create a slide that has only a 24-bit color bitmap on it and export it
	once with each choice, you may find that the Best For Printing option gives you
	a WMF that is almost precisely three times larger than the WMF you create if you
	save the slide with the Best For On-Screen Viewing option enabled. The
	difference in size indicates an 8-bit versus a 24-bit image.
	
	In addition, if you copy a PowerPoint slide and paste it into another
	application, 24-bit color bitmaps on the slide appear based on the Export
	Pictures options you selected. Therefore, a slide that contains a 24-bit color
	bitmap pastes into a Word document as a picture that contains an 8-bit color
	bitmap if you select the Best For On-Screen Viewing option.
	
	Additional query words: 7.00 win95 ppt95
	
	======================================================================
	Keywords          : kbgraphic 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	
	=============================================================================
	
