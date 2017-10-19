---
layout: page
title: "Q82867: Simulated Italic Fonts Are Spaced Apart in Persuasion"
permalink: /kb/082/Q82867/
---

## Q82867: Simulated Italic Fonts Are Spaced Apart in Persuasion

	Article: Q82867
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Aldus Persuasion for Windows, simulated italic fonts are spaced wider apart
	than they should be. The problem is in Persuasion and occurs in the Windows 3.0
	and 3.1.
	
	This problem can be observed when Symbol italic is chosen and the PostScript
	printer driver is active.
	
	MORE INFORMATION
	================
	
	Persuasion does not expect device fonts to have an overhang. In the case of a
	symbol TrueType font, GDI has to do the italic simulation of a device symbol
	font. In this case, each character in the device font will be sheared to appear
	italicized. The width of each of these characters includes the amount of
	overhang over the next character.
	
	While composing text with these characters, and when a DX array is specified, the
	application must take out the overhang value from the width of each character.
	Persuasion is not doing this and as a result, the characters appear spaced out.
	
	For additional information regarding Persuasion, contact Aldus Technical
	Support.
	
	The Persuasion product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.00 3.00a true type
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
