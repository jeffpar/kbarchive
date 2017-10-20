---
layout: page
title: "Q111822: PPT: How to Scale Bitmaps and Movies for Better Slide Shows"
permalink: /kb/111/Q111822/
---

## Q111822: PPT: How to Scale Bitmaps and Movies for Better Slide Shows

{% raw %}

	Article: Q111822
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:3.0,3.0b,4.0; WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbgraphic
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Macintosh, versions 3.0, 3.0b, 4.0 
	-------------------------------------------------------------------------------
	
	
	For a Microsoft PowerPoint 2001 for Mac version of this article, see Q279026.
	
	For a Microsoft PowerPoint 2000 version of this article, see Q251202.
	
	For a Microsoft PowerPoint 98 Macintosh version of this article, see Q188946.
	
	For a Microsoft PowerPoint 97 version of this article, see Q189971.
	
	SYMPTOMS
	========
	
	If you run a PowerPoint slide show that contains imported bitmaps or video
	clips, the bitmaps may appear distorted and/or the movies may play irregularly.
	In both cases, they look and show as expected when you edit the slide in
	100-percent view.
	
	When running an on-screen slide show in PowerPoint, the slides and their contents
	are scaled proportionally to use as much of the screen as possible. Because
	bitmaps do not scale well, it is important to pre-scale bitmaps (including
	QuickTime and AVI movies) so that they are rescaled to their original imported
	proportions during the slide show. Improper scaling can result in choppy/jerky
	playback of movies or distorted bitmaps during a slide show.
	
	RESOLUTION
	==========
	
	To avoid distortion of bitmapped graphics, follow these steps:
	
	1. Select the imported graphic, and then click Scale on the Draw menu.
	
	2. In the Scale dialog box, click "Best Scale for Slide Show" and select the
	  resolution of the video driver on the computer system that will display the
	  slide show.
	
	3. Click OK.
	
	MORE INFORMATION
	================
	
	You can use the following procedure to help you choose the appropriate scaling
	factor:
	
	1. Determine the width/height ratio of the target display and the slide using
	  the following table. (The dimensions for display drivers are listed in
	  pixels.)
	
	     Display/Driver    Width   Height   Ratio
	     ----------------  -----   ------   -------
	     Standard VGA      640     480      1.33333
	     Macintosh Plus    512     384      1.33333
	     Macintosh E-Mac   832     624      1.33333
	     Macintosh PBook   640     400      1.6
	     PP3 Letter Paper  10.5    7.5      1.33333
	     PP3 On-Screen     10.5    7.5      1.33333
	     PP3 35 mm         11.25   7.5      1.5
	
	  If you do not know the width/height ratio of your target display, you can do
	  the following:
	
	     Windows:   Use the Microsoft Paint utility to examine the default
	                Image Attributes on the target computer. Consult
	                your "Microsoft Windows User's Guide" or the Help
	                utility in Paint for additional information.
	
	     Macintosh: Consult the display hardware documentation or the
	                manufacturer of your display card, or use a
	                third-party utility, such as TattleTale, to get this
	                information.
	
	2. Determine the pixel resolution (pixels per display inch) of the display.
	
	  NOTE: For the following calculations, the horizontal pixel resolution and
	  vertical pixel resolution are assumed to be identical (square pixels).
	  Standard values are:
	
	     Windows:   Pixel resolution = 96 dpi
	     Macintosh: Pixel resolution = 72 dpi
	
	3. Determine the scaling factor by comparing the width/height ratios of the
	  target display and slide size (you can find the slide size by clicking Slide
	  Setup on the File menu) and using one of the following formulas.
	
	  If target display ratio is greater than or equal to the slide ratio, use the
	  following formula:
	
	                                       Pixel resolution(pixels/inch)
	  Scale % = 100 * Slide Height(inch) * -----------------------------
	                                           Display Height(pixels)
	
	  Example for VGA: 150% = 100 * 7.5 * (96 / 480)
	
	  If the target display ratio is less than or equal to the slide ratio, use the
	  following formula:
	
	                                      Pixel Resolution(pixels/inch)
	  Scale % = 100 * Slide Width(inch) * -----------------------------
	                                          Display Width(pixels)
	
	  Example for Mac Plus: 197% = 100 * 10.5 * (72 / 384)
	
	4. Make sure that the object to be scaled is at its original proportions by
	  doing the following:
	
	  Windows:   Hold down SHIFT and double-click one of the object's
	             resize handles.
	
	  Macintosh: Hold down SHIFT+OPTION and double-click one of the
	             object's resize handles.
	
	5. Use the Scale command to scale the object using the scaling percentage
	  calculated in step 3.
	
	NOTE: You can use these instructions to create a presentation on one platform
	intended for display on another platform as long as you know the display size
	and resolution of the target display.
	
	Additional query words: 3.00b 4.00a 4.00c power point powerpt scale movie bitmap macppt ppt95 winppt
	
	======================================================================
	Keywords          : kbgraphic 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt300Mac kbPowerPt400Mac kbPowerPt300bMac kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : MACINTOSH:3.0,3.0b,4.0; WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
