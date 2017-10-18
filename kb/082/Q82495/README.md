---
layout: page
title: "Q82495: TrueType Clipping Related to Complex Clipping Regions"
permalink: kb/082/Q82495/
---

## Q82495: TrueType Clipping Related to Complex Clipping Regions

	Article: Q82495
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the introduction of TrueType fonts, many characters have negative "a"
	spacing. That is, these characters have an underhang such that a portion of
	these characters is under the body of the preceding character. An example of
	this is an italic "f". The bottom of the "f" is below the "i" in "if."
	
	When the visible area of the window is not a complete rectangle (another
	application's windows might be covering a corner of the window), the bottom of
	the character that is supposed to be displayed to the left of the starting
	position is chopped off. This effect is called a "complex clipping region."
	
	
	MORE INFORMATION
	================
	
	To view this, do the following:
	
	1. Open Write and maximize it.
	
	2. Open up Clock and choose "Always On Top."
	
	3. Return to Write. The window will now have a complex clipping region because
	  of Clock's window being on top of it.
	
	4. Choose Times New Roman Italic, 36 point, and type in "f" (without the
	  quotation marks). Note that the bottom left of the "f" is clipped off. This
	  doesn't happen if the clock isn't on top.
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
