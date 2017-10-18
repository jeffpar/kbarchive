---
layout: page
title: "Q149708: Printed Text May Be the Wrong Color"
permalink: kb/149/Q149708/
---

## Q149708: Printed Text May Be the Wrong Color

	Article: Q149708
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you print from a program using colored fonts or non-bitmap graphics to a
	color printer, the printed color may not match the color displayed on the
	screen. Bitmap graphics printed from the same program are printed properly.
	
	MORE INFORMATION
	================
	
	The Windows 95 printing subsystem can use Image Color Matching to match colors
	from the screen to printer output for bitmap graphics. It cannot do the same for
	text or non-bitmap graphics unless the program has built-in Image Color Matching
	support. This behavior occurs even if the Print TrueType Fonts As Graphics or
	Use TrueType Fonts As Softfonts options are enabled, because of the printing
	Application Programming Interface (API) calls made to print the document.
	
	Programs that have built-in Image Color Matching capabilities can provide the
	correct printed color output for all colors on a page including text and
	non-bitmap graphics.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
