---
layout: page
title: "Q132594: Signature Font Printed Incorrectly to PostScript Printer"
permalink: /kb/132/Q132594/
---

## Q132594: Signature Font Printed Incorrectly to PostScript Printer

	Article: Q132594
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print text with a personalized font created by Signature Software, text
	formatted with a "running-hand" font may not be printed as it should be.
	"Running-hand" fonts are designed to resemble your handwriting.
	
	CAUSE
	=====
	
	Signature Software ships a TrueType version as well as a PostScript version of
	these personalized fonts. However, they specify different character sets for
	these fonts. The TrueType version is marked ANSI and the PostScript version is
	marked Symbol. The PostScript font mapper chooses the TrueType version for
	printing.
	
	RESOLUTION
	==========
	
	If the program from which you are printing is character set-aware, specify the
	Symbol character set for the font before printing.
	
	If the program is not character set-aware, remove the TrueType font in the Fonts
	folder. This causes the fonts displayed on the screen to be in the Symbol
	character set. You can use a different font while you are typing the text and
	then change the font before you print the document.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
