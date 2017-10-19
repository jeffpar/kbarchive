---
layout: page
title: "Q155855: PPT: Orange Text Prints Yellow on HP DeskJet 1200c"
permalink: /kb/155/Q155855/
---

## Q155855: PPT: Orange Text Prints Yellow on HP DeskJet 1200c

	Article: Q155855
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,7.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint kbdta kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to print orange text to a Hewlett-Packard (HP) DeskJet 1200c, the
	text will be printed as yellow rather than orange. If you have graphic objects
	that are the same shade of orange on the same slide, the objects will be printed
	as orange.
	
	CAUSE
	=====
	
	Many DeskJet printers cannot dither text. They can only print text in their
	primary ink colors or colors made be mixing 50% of their primary ink colors.
	DeskJets are limited to the following text colors: cyan, magenta, yellow, black,
	white, red, green, and blue. Whenever you print text that is not one of these
	colors, the printer prints the text as the color in the list above that is
	closest to the actual text color.
	
	RESOLUTION
	==========
	
	If you need text that is another color, you can create the text as a WordArt
	object. WordArt objects appear to be text, but are actually pictures that
	contain complex polygon shapes. These WordArt objects do not share this printer
	limitation.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 7.00 orange deskjet ppt7 powerpt green purple mismatched shift color different
	
	======================================================================
	Keywords          : kb3rdparty kbprint kbdta kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search kbPowerPt400
	Version           : WINDOWS:4.0,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
