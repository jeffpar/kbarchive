---
layout: page
title: "Q121661: How to Use the TrueType Fonts Built into the Printer"
permalink: /kb/121/Q121661/
---

## Q121661: How to Use the TrueType Fonts Built into the Printer

	Article: Q121661
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 Driver Development Kit (DDK) 
	- Microsoft Windows 98 Driver Development Kit (DDK) 
	- Microsoft Windows ME Driver Development Kit (DDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some printers have TrueType (TT) fonts built into the printer. Printer drivers
	can increase their throughput by using the printer's internal TrueType device
	fonts instead of downloading the fonts to the printer.
	
	MORE INFORMATION
	================
	
	To get an accurate representation of printer supported TrueType fonts on the
	display, there must be an associated TT font that is installed on the system.
	The printer manufacturer or driver developer has the responsibility of providing
	TT fonts that match the printer's TT fonts. The TT fonts must be installed by
	using the Control Panel Fonts or by using the respective Windows API
	AddFontResource function.
	
	The printer driver can then use the Enginexxxx functions that are documented in
	the Windows version 3.1 DDK's DDAG31WH.HLP file.
	
	The Enginexxxx functions are:
	
	  EngineDeleteFont
	  EngineEnumerateFont
	  EngineGetCharWidth
	  EngineGetGlyphBmp
	  EngineRealizeFont
	  EngineSetFontContext
	
	The Enginexxxx functions are entry points into the Windows TT rasterizer. These
	functions allow a printer driver to treat TT fonts as device fonts. By using its
	EnumDFonts() function, a printer driver can enumerate all the TT fonts on the
	system, compare them with the printer's TT fonts and return only the TT fonts
	that match. Then in the printer driver's ExtTextOut() function, the Enginexxxx
	realized TT font can be mapped to the printer's TT font and the associated
	printer escapes can be sent to the printer instead of downloading a load of
	raster data.
	
	Additional query words: 3.10 glyph outline
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMEsearch kbAudDeveloper kbWin3xSearch kbWin98search kbWinDDKSearch kbWin98DDKSearch kbWinDDK310 kbWinMEDDK kbWin98DDK
	Version           : :
	
	=============================================================================
	
