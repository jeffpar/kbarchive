---
layout: page
title: "Q59208: PPT: Creating Transparent Bitmaps in Paintbrush for PowerPoint"
permalink: kb/059/Q59208/
---

## Q59208: PPT: Creating Transparent Bitmaps in Paintbrush for PowerPoint

	Article: Q59208
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:2.0,3.0,4.0,7.0
	Operating System(s): 
	Keyword(s): kbgraphic kbinterop
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can create transparent bitmaps with Windows Paintbrush to import into
	PowerPoint for Windows by rendering the drawing as black and white. If the
	palette used is monochrome, shades of gray are imported into PowerPoint as
	black. The opaque portion of the picture can be recolored in PowerPoint.
	
	NOTE: Transparent bitmaps don't print well to PostScript printers.
	
	MORE INFORMATION
	================
	
	Method 1: If You Are Using Windows 95 Paint
	-------------------------------------------
	
	To create a transparent bitmap in Windows 95 Paint for importing into PowerPoint
	7.0, follow these steps:
	
	1. In Paint, click Attributes on the Image Menu.
	
	2. In the Colors section, click Black And White. Click OK.
	
	3. Draw the image.
	
	4. Click either the Free-Form Select or Select button and snare the displayed
	  drawing.
	
	5. On the Edit menu, click Copy.
	
	6. Start PowerPoint and shade the slide background.
	
	7. On the Edit menu, click Paste Special and select Device Independent Bitmap.
	  Only the lines of the drawing should appear; the background within the
	  "rectangle fuzz" defining the object should be transparent.
	
	Method 2: If You Are Using Windows 3.11 Paintbursh
	--------------------------------------------------
	
	To create a transparent bitmap in Windows Version 3.11 Paintbrush to import into
	PowerPoint 4.0, 3.0, or 2.0, do the following:
	
	1. In Paintbrush, click Image Attributes on the Options menu.
	
	2. In the Colors section, click Black and White. Click OK.
	
	3. On th eFile menu, click New.
	
	4. Draw the image.
	
	5. Click one of the two Scissor buttons and snare the displayed drawing.
	
	6. On the Edit menu, click Copy.
	
	7. Start PowerPoint and shade the slide background.
	
	8. On the Edit menu, click Paste. Only the lines of the drawing should appear;
	  the background within the "rectangle fuzz" defining the object should be
	  transparent.
	
	Method 3: If Using Paint or Paintbrush, Save File as Monochrome Bitmap
	----------------------------------------------------------------------
	
	Create a drawing in Paint or Paintbrush (in Windows 3.1) and save the file using
	the Save As command or copy the file as a monochrome bitmap using the Copy To
	command. Then, on the Insert menu in PowerPoint, click Picture to insert the
	object as a transparent bitmap.
	
	Additional query words: 2.00 3.00 4.00 7.00
	
	======================================================================
	Keywords          : kbgraphic kbinterop 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt200 kbPowerPt300
	Version           : WINDOWS:2.0,3.0,4.0,7.0
	
	=============================================================================
	
