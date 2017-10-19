---
layout: page
title: "Q89155: PPT: Pattern Shows Through Double Line Style Border"
permalink: /kb/089/Q89155/
---

## Q89155: PPT: Pattern Shows Through Double Line Style Border

	Article: Q89155
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:4.0; WINDOWS:4.0,7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, version 4.0 
	- Microsoft PowerPoint for Macintosh, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft PowerPoint, the pattern of an object fill shows through between the
	lines of a double-line style border.
	
	WORKAROUND
	==========
	
	There is no way to prevent this problem from occurring. However, you can use the
	following workaround to prevent the pattern of an object fill from showing
	between the lines of a double-line style border:
	
	1. Draw a shape (rectangle, square, or circle) and fill it with the pattern fill
	  you want. Set the line style for the Border to No Line, or None.
	
	2. Draw a second object on top of the first object. It should be of the same
	  shape, only slightly larger.
	
	3. Format the second object as unfilled and select the double-line style border
	  you want.
	
	The pattern-filled object should show through the unfilled, framed object. If the
	two are positioned correctly, they should look like a single framed, filled
	object. You can even select both of them and use the Group option in the Arrange
	menu to turn them into a single object. Using this workaround, the pattern will
	not show through between the lines of the double-line style border.
	
	Additional query words: transparent opaque frame macppt ppt 4.0 7.0 8.0
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt400Mac
	Version           : MACINTOSH:4.0; WINDOWS:4.0,7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
