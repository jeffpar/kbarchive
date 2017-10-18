---
layout: page
title: "Q113024: PPT: May Have to Scale Cross-Platform Bitmaps for Display"
permalink: kb/113/Q113024/
---

## Q113024: PPT: May Have to Scale Cross-Platform Bitmaps for Display

	Article: Q113024
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:2.0,2.01,3.0,4.0; WINDOWS:2.0,3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbdisplay
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Macintosh, versions 2.0, 2.01, 3.0, 4.0 
	- Microsoft PowerPoint for Windows, versions 2.0, 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may find that a bitmap you have imported into your Microsoft PowerPoint
	presentation looks good when you display it on one computer, but looks bad when
	you display it on another.
	
	The quality with which bitmaps display on the screen depends upon the two
	following conditions:
	
	- the resolution of the bitmap (dots per inch)
	
	- the resolution of the video display driver (dots per inch)
	
	For this reason, if the two computers are using two different display resolution
	settings, the bitmap can look bad when displayed on one, but good when displayed
	on the other.
	
	This problem occurs most commonly when you have transferred files between the
	Macintosh and Windows operating systems, because the standard screen resolutions
	on the two different platforms are quite different. While the most common pixel
	resolution on the Macintosh is 72 dots per inch, the most common pixel
	resolution under Windows is 96 dots per inch.
	
	For your bitmaps to look the same at the same percentage view after you have
	converted your presentation from one platform to another, you may need to scale
	the graphics. In other words, a bitmap in a Macintosh PowerPoint presentation
	will most commonly need to be scaled to 75% to look the same when viewed at the
	same view percentage under Windows PowerPoint. A bitmap in a Windows PowerPoint
	presentation will most commonly need to be scaled to 133.33% to look the same
	when viewed at the same view percentage under Macintosh PowerPoint.
	
	NOTE: If you do not intend to deliver the presentation as an on-screen Slide
	Show, you can ignore the appearance of the bitmap on the screen. Printed output
	is not affected by differences in screen resolutions between platforms, and the
	bitmap should print the same from either platform when using the same quality
	printer.
	
	MORE INFORMATION
	================
	
	In PowerPoint, you can use the Scale command to resize your bitmaps. In
	PowerPoint 2.0, however, you must resize graphics manually. To do this, measure
	the size of the object using the guides, calculate the dimensions of the resized
	picture, and then use the guides to resize it.
	
	If you intend to display the presentation as an on-screen Slide Show, you may
	need to do some additional scaling to prepare the bitmap so that it looks its
	best during the Slide Show. This is because PowerPoint automatically scales the
	presentation to fit within the size of the current display during the Slide
	Show. For this reason, the slide may display at a percentage different than the
	one you are using for editing.
	
	For more information about scaling bitmaps for on-screen slide shows, query on
	the following words in the Microsoft Knowledge Base:
	
	  scaling and bitmaps and movies and slide and shows and powerpoint
	
	Additional query words: 4.00 4.00a 3.00 3.00b macppt winppt 4.00c 7.00 ppt95 2.00 2.01 scale bitmaps resize scrunched mashed movie quicktime avi video bmp dib slideshow
	
	======================================================================
	Keywords          : kbdisplay 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt200Mac kbPowerPt300Mac kbPowerPt201Mac kbPowerPt400Mac kbPowerPt200 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : MACINTOSH:2.0,2.01,3.0,4.0; WINDOWS:2.0,3.0,4.0,4.0a,4.0c,7.0
	Hardware          : MAC x86
	Issue type        : kbinfo
	
	=============================================================================
	
