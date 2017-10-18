---
layout: page
title: "Q120508: Unable to Create a Palette Consisting of More Than 256 Colors"
permalink: kb/120/Q120508/
---

## Q120508: Unable to Create a Palette Consisting of More Than 256 Colors

	Article: Q120508
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Video for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows Palette Manager (an integral part of GDI) was designed specifically
	for 8-bit display adapters with a hardware palette of 256 entries.
	
	MORE INFORMATION
	================
	
	Every pixel on the screen is stored as an 8-bit index in the hardware palette.
	Images created with a color depth of 16 or 24 bits (32K and 16 million colors)
	do not use palettes and control the video output directly. Therefore, the design
	of the Windows Palette Manager designates 256 colors as the maximum number
	allowed for any palette. It is not possible to make different images with
	greater than 256 colors share a common palette; however, it is possible to
	reduce the images to 256 colors and then create a common palette for these
	images.
	
	Additional query words: 1.00 1.10 Paledit Bitedit Palette dithering
	
	======================================================================
	Keywords          :  
	Technology        : kbVideoSearch kbVideo100 kbVideo110
	Version           : WINDOWS:1.0,1.1
	
	=============================================================================
	
