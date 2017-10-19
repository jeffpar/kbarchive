---
layout: page
title: "Q84743: Adobe PostScript Language Levels and Font Types Explained"
permalink: /kb/084/Q84743/
---

## Q84743: Adobe PostScript Language Levels and Font Types Explained

	Article: Q84743
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses the common terminology used when addressing Adobe printer
	and font technologies in the context of Microsoft Windows.
	
	MORE INFORMATION
	================
	
	Adobe PostScript is a page description language (PDL). A PDL has several
	components that allow it to manipulate fonts, raster graphics, vector graphics,
	color, and peripheral support (that is, sheet feeders and other resources).
	There are two levels of the PostScript language: Level 1 and Level 2.
	
	Level 1 PostScript Language
	---------------------------
	
	This is the industry standard used by desktop publishing (DTP) companies, service
	bureaus, and supported by the PostScript printer driver version 3.5 that ships
	with Windows 3.1.
	
	Level 2 PostScript Language
	---------------------------
	
	This is an enhanced version of Level 1 that comes with additional support for
	color imaging, data compression, improved forms handling, and pattern
	manipulation for transferring raster data. This level is currently supported by
	only a few printers, such as the Apple LaserWriter IIF. The PostScript driver
	for Windows 3.1 does not support Level 2.
	
	
	Adobe Type 1 and Type 3 Fonts
	-----------------------------
	
	Both of the two PostScript levels support the Adobe font technology known as Type
	1 and Type 3.
	
	Adobe Type 1
	------------
	
	Adobe Type 1 fonts are scalable typefaces that can be sized to almost any point
	size, and rotated, twisted, bent, and manipulated in other ways either by the
	PostScript interpreter in the printer or by an application that uses the Adobe
	Type Manager (ATM) application programming interface (API) functions that allow
	this. Type 1 fonts are internally represented as mathematical equations. This is
	the industry standard for DTP and service bureaus.
	
	All PostScript printers have a certain number of these fonts built into them,
	most commonly either 17 or 35 fonts, although many high-end PostScript printers
	have hard disks for storing even more fonts. When TrueType fonts are printed to
	a PostScript printer, they are sent to the printer as Type 1 fonts unless small
	point sizes are needed, in which case they are sent as Type 3 fonts.
	
	Adobe Type 3
	------------
	
	Adobe Type 3 fonts are most often bitmaps, but they can be scalable fonts that
	lack the hinting that makes Type 1 fonts look good at all point sizes.
	Therefore, Type 3 fonts are normally used only for small point sizes. When
	Windows 3.1 sends a small point-size TrueType font to a PostScript printer, it
	sends the font as a Type 3 font. This determination is controlled by the
	"minoutlineppem=xxx" setting in the WIN.INI file.
	
	NOTE: If you change the minoutlineppem setting you must quit and restart Windows
	in order for the changes to take effect.
	
	For more information on this setting and other PostScript-related WIN.INI file
	settings, query on the following words in the Microsoft Knowledge Base:
	
	  "postqa" (without the quotation marks) and "postscript" (without the
	  quotation marks) and "minoutlineppem" (without the quotation marks)
	
	NOTE: Adobe Type 2 fonts do not exist.
	
	
	Additional query words: 3.10 post script minoutlineppm minoutlineeppem minoutlineeppm PSL 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
