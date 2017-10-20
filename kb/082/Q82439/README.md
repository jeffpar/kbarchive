---
layout: page
title: "Q82439: Small TrueType Fonts"
permalink: /kb/082/Q82439/
---

## Q82439: Small TrueType Fonts

{% raw %}

	Article: Q82439
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	At small point sizes, TrueType fonts look like simple Serif or Sans Serif fonts
	on the screen but print as you would expect. This is due to automatic bitmap
	font substitution, which is done to preserve readability at small sizes when
	fonts are displayed on the screen.
	
	MORE INFORMATION
	================
	
	At very small point sizes (4 to 7 points on standard VGA video resolutions),
	most Type 2 fonts are substituted with a hand-tuned bitmap font to preserve
	readability. This can cause the style of the font to change. For example, the
	Lucida Blackletter font shipped with the FontPack appears as a simple Serif font
	at sizes 4 - 7 pts rather than the Gothic appearance is has at larger sizes.
	When the document containing the font is printed, however, the font appears
	correct even at very small sizes.
	
	
	REFERENCES
	==========
	
	Microsoft Programming Guide for Windows 3.1, page 393
	
	KBCategory: kbprint kbdisplay
	KBSubcategory: win31
	
	Additional query words: 3.10 style FontPack true type 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
