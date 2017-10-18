---
layout: page
title: "Q119764: Capturing a Palette from an Intel Indeo-Compressed .AVI File"
permalink: kb/119/Q119764/
---

## Q119764: Capturing a Palette from an Intel Indeo-Compressed .AVI File

	Article: Q119764
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
	
	Microsoft Video for Windows allows palettes to be stored inside each .AVI file.
	A unique palette is created for individual video files. Microsoft Video for
	Windows applications, such as Vidcap, Videdit, and Paledit, have the ability to
	capture the palette from an .AVI file. The palette can then be edited. .AVI
	files compressed with Intel Indeo compression, however, have a fixed palette
	that is not stored in the .AVI file. To obtain the palette from an .AVI file
	compressed with Indeo, the palette must be extracted from the Indeo AVI driver,
	not the .AVI file.
	
	MORE INFORMATION
	================
	
	Because the palette resides in the Indeo codec, the Indeo driver has to be
	loaded to access the palette. This can be done by opening an Indeo .AVI file
	with Media Player and then executing the Edit menu command Copy Object. The
	current video frame is placed on the Clipboard along with the palette. The
	palette can then be pasted into Paledit or any other Windows- based program
	designed to edit and or modify palettes. The video display graphics card and
	driver must be in 256-color mode in order for this procedure to work correctly.
	
	Indeo is manufactured by Intel, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 1.00 1.10 compressor
	
	======================================================================
	Keywords          :  
	Technology        : kbVideoSearch kbVideo100 kbVideo110
	Version           : WINDOWS:1.0,1.1
	
	=============================================================================
	
