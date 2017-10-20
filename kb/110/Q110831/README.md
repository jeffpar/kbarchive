---
layout: page
title: "Q110831: PPT: Slides Look Bad When Pasted into Other Programs"
permalink: /kb/110/Q110831/
---

## Q110831: PPT: Slides Look Bad When Pasted into Other Programs

{% raw %}

	Article: Q110831
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:2.0,2.0e,3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbgraphic kbinterop kbole kbdta
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 2.0, 2.0e, 3.0, 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Slides and graphics from PowerPoint for Windows may not look as good when pasted
	into other Windows-based programs. For example, a gradient- filled slide may not
	be as clear when pasted into Word version 6.0 for Windows or Microsoft Excel
	version 5.0 for Windows, or you may notice that a slide or graphic looks fine
	when pasted into Word version 2.0 for Windows, but when that Word document is
	opened in Word 6.0, it doesn't look as good.
	
	CAUSE
	=====
	
	This problem occurs because of the different methods in which programs handle
	color palettes under Windows when running with a 256-color display driver.
	
	WORKAROUND
	==========
	
	Depending on the desired results and capabilities of the system displaying the
	graphics, there are several possible workarounds.
	
	Method 1: Use an Enhanced Display Driver or Card
	------------------------------------------------
	
	If your display card supports the simultaneous display of 32,000 or 16.7 million
	colors (16 bit or 24 bit) you can install a display driver for your card that
	supports either of these color modes.
	
	Method 2: Switch to 16-color Mode
	---------------------------------
	
	Reducing the number of colors that Windows displays simultaneously can often make
	complex color images actually look better when viewed in some programs. Windows
	can still dither the colors for which there aren't exact matching colors
	available.
	
	NOTE: If the color graphics are bitmaps (such as *.BMP, *.TIF, *.PCX, and so on),
	this is generally not a good workaround because Windows cannot dither bitmaps.
	
	Method 3: Ignore It
	-------------------
	
	If you plan to print the document that contains the PowerPoint slide, don't worry
	about how it looks on the screen. How it appears on the screen does not affect
	the print quality.
	
	Method 4: Don't Use Gradient Fills
	----------------------------------
	
	The most common cause of this problem is using gradient fills because many very
	similar colors have to be available. By eliminating gradient fills and using
	solid backgrounds and fills, you have a much better chance that the palette in
	the target application can provide all the colors that you want.
	
	MORE INFORMATION
	================
	
	There are several different methods of palette management used by Windows-based
	programs running under a 256-color video driver.
	
	Static Palette Management
	-------------------------
	
	Static palette management is what Word for Windows, version 6.0 and Microsoft
	Excel for Windows, version 5.0 use. They have a fixed rainbow palette that they
	use at all times. They do not look at the objects embedded or pasted into them
	to see what colors they are using. They simply assume all pictures can be
	displayed reasonably with the rainbow palette. This is often true for bitmaps
	and most generic metafiles such as clip art because their colors are usually
	spread across a broad spectrum. The rainbow palette is designed to have colors
	that are relatively close to any arbitrary color.
	
	This does not work well with gradient fills (such as PowerPoint shaded
	backgrounds). This is because a gradient fill needs to have many very similar
	colors (varying only slightly from the previous color) for it to display
	properly. A gradient fill from a blue color to black requires approximately
	30-50 shades of blue. Because the static rainbow palette must contain a mix of
	all colors and is limited to 256 colors total, it cannot have 30-50 shades of
	blue. Therefore, each of the 30-50 shades of blue map to one of the 6-12 nearest
	shades of blue that are available in the rainbow palette. What would have been
	many color bands shrinks down to a half dozen or so.
	
	Dynamic Palette Management
	--------------------------
	
	Dynamic palette management is the process of taking into account the color
	content of all objects native or foreign to your program and creating a palette
	that best suits that combination of objects. This is the method PowerPoint (all
	versions) employs. To do this, the program must scan the objects that are pasted
	or embedded for colors.
	
	Because the combination of many objects may have more colors than can fit in the
	palette, there are many algorithms for choosing the best colors to omit from the
	palette. These colors map to other colors in the palette. This allows pictures
	with many similar colors (such as gradient fills) to get a better rendering.
	PowerPoint uses this method of palette management. It is more complex than
	static palette management. Applications that are not graphically driven may not
	employ this technique.
	
	No Palette Management
	---------------------
	
	The final method is to have no palette management at all. This causes your
	program to behave as it would on a 16-color VGA system. It allows for 16
	system-defined pure colors with every other color used being dithered. This is
	what Word version 2.0 for Windows does.
	
	One thing to note about PowerPoint pictures is that PowerPoint actually includes
	a palette that matches the picture in its exported pictures. For this reason, a
	PowerPoint slide embedded or pasted in Word 2.0 looks quite good. This is
	because the picture itself would tell the system what colors to put in the
	palette when the picture is displayed. However, multiple pictures on one page
	could cause degradation between each other because there is no code to manage
	the different pictures' palettes. Word 6.0 and Microsoft Excel 5.0 now override
	these palettes with their own palette management, and therefore the pictures
	themselves have no control of the system palette.
	
	Microsoft applications that implement static palette management include:
	
	- Word version 6.0 for Windows
	
	- Microsoft Excel 97 for Windows
	
	- Microsoft Excel version 5.0 for Windows
	
	- Microsoft Access versions 1.0 and 1.1
	
	- Works versions 3.0 and 4.0 for Windows
	
	- Publisher version 2.0
	
	Microsoft applications that don't implement any palette management include:
	
	- Microsoft Word 97 for Windows
	
	- Word version 2.0 for Windows
	
	- Works version 2.0 for Windows
	
	- Publisher versions 1.0 and 97
	
	Additional query words: 2.00e 4.00a 4.00c ppt95 ppt7 word6 winword2 W_Winword W_Excel W_Access winppt W_MSPub W_Works banding ugly pallete palete poor macppt looks appears distorted cut garbage fuzzy dirty
	
	======================================================================
	Keywords          : kbgraphic kbinterop kbole kbdta 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search kbPowerPt400 kbPowerPt200 kbPowerPt300 kbPowerPt200e kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:2.0,2.0e,3.0,4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
