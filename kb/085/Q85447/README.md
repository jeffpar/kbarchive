---
layout: page
title: "Q85447: No Draft Mode with TrueType Fonts on a Dot-Matrix Printer"
permalink: /kb/085/Q85447/
---

## Q85447: No Draft Mode with TrueType Fonts on a Dot-Matrix Printer

	Article: Q85447
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On dot-matrix printers, TrueType fonts only print in the graphics mode of the
	printer. Because most dot-matrix printers can only print graphics in near letter
	quality (NLQ) or letter quality (LQ) mode, draft (text) mode is not available
	when printing a document with TrueType fonts.
	
	Although this may slow down printing significantly, this is the only way for a
	dot-matrix printer to use TrueType fonts. A workaround is to use a built-in
	printer font.
	
	MORE INFORMATION
	================
	
	A dot-matrix printer has two modes of printing: text and graphics. When printing
	text, the draft mode is normally available. Because TrueType fonts are sent to a
	dot-matrix printer as bitmaps (that is, .BMP files), the printer uses graphics
	mode to print them. Thus, draft mode does not operate because the printer is
	printing in graphics mode and only prints graphics in NLQ or LQ mode.
	
	To print in draft mode, select a built-in printer font instead of a TrueType
	font.
	
	Additional query words: 3.1 3.11 3.10 draft mode print slow dot ttf matrix true type
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
