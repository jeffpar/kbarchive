---
layout: page
title: "Q169574: PPT: EPS Graphic with Clipping Path Not Supported"
permalink: /kb/169/Q169574/
---

## Q169574: PPT: EPS Graphic with Clipping Path Not Supported

	Article: Q169574
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:4.0; WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbgraphic kbdta
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Macintosh, version 4.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you import an Encapsulated PostScript (EPS) file into Microsoft PowerPoint
	4.0 for the Macintosh, the graphic appears transparent. If you save the file and
	then open it in PowerPoint for Windows, the graphic no longer appears
	transparent.
	
	CAUSE
	=====
	
	You may experience this problem when the EPS image is saved with a clipping path
	from a photo editing program, such as Adobe Photoshop. PowerPoint does not
	directly support clipping paths. When you import an EPS image that contains a
	clipping path into PowerPoint for the Macintosh, you see a PICT preview of the
	graphic. The way this PICT preview is displayed is dependent on the Macintosh
	operating system.
	
	When you open the presentation in PowerPoint for Windows, PowerPoint translates
	the PICT graphics primitives (commands) into the closest equivalent Windows
	graphics device interface (GDI) primitives.
	
	Clipping paths are converted, but they become invisible and no longer mask the
	image.
	
	For additional information about clipping paths, please see the "More
	Information" section later in this article.
	
	MORE INFORMATION
	================
	
	Some Macintosh-based photo editing programs, such as Adobe Photoshop, can save a
	clipping path when you export images as EPS files. A clipping path is a vector
	description of the edges of a specified element within an image, and it can be
	used to mask or make part of your image transparent.
	
	Photoshop is manufactured by Adobe Systems, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 8.0 PS ppt4 ppt95 pt7 ppt7.0
	
	======================================================================
	Keywords          : kbgraphic kbdta 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt400Mac kbPowerPt400c kbPowerPt400a
	Version           : MACINTOSH:4.0; WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
