---
layout: page
title: "Q117774: How to Identify the Font Types Available on a Macintosh"
permalink: /kb/117/Q117774/
---

## Q117774: How to Identify the Font Types Available on a Macintosh

	Article: Q117774
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Macintosh uses three types of fonts: bitmap, TrueType, and PostScript.
	TrueType and PostScript fonts are scalable fonts. Bitmap fonts are fixed- size
	raster fonts.
	
	In System 7.1, all fonts are located in the System Folder:Fonts folder.
	
	  Font type       Icon                     File kind/type
	  --------------------------------------------------------
	
	  Bitmap          Document with "A"        Font
	  TrueType        Document with 3 "A"s     Font
	  PostScript      Printer                  PostScript Font
	
	NOTE: The bitmap and TrueType font files may actually be located in a "font
	suitcase" file. You will need to open the "font suitcase" file to view the
	individual font files.
	
	MORE INFORMATION
	================
	
	You can see an example of any font by double-clicking the font file.
	
	Bitmap Fonts
	------------
	
	Bitmap fonts always have a specific font size included in their names (a
	different bitmap font file is needed for each point size.) Their icons are the
	document icon (a page with the top left corner turned over) containing a single
	letter "A." Their file kind/type is Font. In System 7.0, they are located in the
	System file; in System 7.1, they are in the System Folder:Fonts folder.
	
	TrueType Fonts
	--------------
	
	TrueType fonts also use document icons (a page with the top left corner turned
	over). However, the icons contain three letter "A"s of different sizes, which
	represents that the font is scalable. Their file kind/type is Font. In System
	7.0, they are located in the System file; in System 7.1, they are in the System
	Folder:Fonts folder. TrueType fonts are located in the same place as bitmap
	fonts.
	
	PostScript Fonts
	----------------
	
	PostScript fonts use an icon of a printer, which shows a page coming out of the
	top. The page will contain the number "1" or "3," which indicates whether it is
	a Type 1 or Type 3 PostScript font. Their file kind/type is PostScript Font. In
	System 7.0, they are located in the System Folder:Extensions folder; in System
	7.1, they are in the System Folder:Fonts folder.
	
	Additional query words: VFoxMac FoxMac tt typefaces downloadable vector outline akz
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	
