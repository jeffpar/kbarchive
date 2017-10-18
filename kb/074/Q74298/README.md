---
layout: page
title: "Q74298: INFO: Calculating Text Extents of Bold and Italic Text"
permalink: kb/074/Q74298/
---

## Q74298: INFO: Calculating Text Extents of Bold and Italic Text

	Article: Q74298
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	GetTextExtent() can be used to calculate the extent of a string. The value
	returned may need to be adjusted, depending upon the style of the font. When an
	italic or bold font is requested and none are available, the Graphics Device
	Interface (GDI) may simulate those styles using an existing raster or vector
	font.
	
	MORE INFORMATION
	================
	
	GDI-simulated bold and italic fonts both include overhangs. The overhang is
	specified in a TEXTMETRIC structure obtained by calling the GetTextMetrics
	function. The proper method for calculating the extent of a line of italic or
	bold text is shown below:
	
	     dwExtent = GetTextExtent(hDC, lpString, nCount);
	     GetTextMetrics(hDC, &tm);
	     xExtent = LOWORD(dwExtent) - tm.tmOverhang;
	
	Listed below are examples of italic text alignment. If the next character is not
	italic, the overhang should not be subtracted from the advance width returned
	from the GetTextExtent function. The overhang needs to be subtracted only when
	the next for text alignment character has the same style.
	
	                                       GetTextExtent yields
	                                       this as the extent:
	
	                                             ||
	      /   /                                  \/ 
	     /   /           /   / /   /         /   /|   |
	    /---/           /   / /   /         /   / |   |
	   /   /           /---/ /---/         /---/  |---|
	  /   /           /   / /   /         /   /   |   |
	      -----      /   / /   /         /   /    |   |
	        ^            /\                      /\ 
	     Overhang        ||                      ||
	              Because the next        Start the nonitalic H
	              character is italic,    here because it does not
	              start the next          slant and would partially
	              character within the    overwrite the previous
	              overhang of the         italic character.
	              current character
	
	The overhang for bold characters synthesized by GDI is generally 1 because GDI
	synthesizes bold fonts by outputting the text twice, offsetting the second
	output by one pixel, effectively increasing the width of each character by one
	pixel. Calculating the advance width of the bold text is similar to the method
	for italic text. The GetTextExtent function always returns the extent of the
	text plus 1 for bold text. Thus by subtracting the tmOverhang(1), the proper
	advance is achieved.
	
	       ||   ||
	       ||   ||
	       ||===||
	       ||   ||
	       ||   ||
	             ---<= This line represents the "extra" overhang of 1.
	               /\ 
	               ||
	            GetTextExtent yields
	            this as the extent of the
	            bold H.
	
	NOTE: This article applies only to Raster and Vectory Fonts. The GetTextExtent()
	family of functions always return advance widths of strings for TrueType fonts
	as described by ABC widths structure. For more information on ABC advance
	widths, see the GetCharABCWidths() function documentation.
	
	Additional query words: 3.00 3.10 3.50 4.00 win16sdk test advance width
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
