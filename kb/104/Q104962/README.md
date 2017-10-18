---
layout: page
title: "Q104962: BUG: PALETTEINDEX Not Working for Thin Lines on HP PaintJet"
permalink: kb/104/Q104962/
---

## Q104962: BUG: PALETTEINDEX Not Working for Thin Lines on HP PaintJet

	Article: Q104962
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbSDKWin16
	Last Modified: 09-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Windows 3.1 printing application, calling the PALETTEINDEX macro to select
	a color when drawing lines 1 pixel wide results in the printer drawing black
	lines no matter what color index was selected from the logical palette.
	
	CAUSE
	=====
	
	When the PALETTEINDEX macro is used, a COLORREF value is returned. The
	palette-entry index is placed in the low-order byte and a 1 is placed in the
	high-order byte. When a pen is created with the CreatePen function and a width
	of 0 (1 device unit) is placed in the nWidth field and a COLORREF value returned
	from PALETTEINDEX is placed in the clrref field, the pen is always black. The
	Hewlett-Packard (HP) PaintJet driver does not correctly handle pens with a width
	of 1 pixel when a color is selected with PALETTEINDEX and the high-order word of
	the COLORREF value is one (1).
	
	RESOLUTION
	==========
	
	Instead of using the PALETTEINDEX macro, you can use the PALETTERGB macro to
	reference colors in your currently selected palette. Sometimes, this may not be
	desirable because you would have to know all of the RGB values of all indices in
	your logical palette. In that case, you could use the GetPaletteEntries()
	function to retrieve the RGB values of the desired logical palette index and
	call the PALETTERGB macro with those values.
	
	The following example of how you could implement your own PALETTEINDEX function.
	This function performs the same function as the PALETTEINDEX macro, and works in
	all cases on the HP PaintJet.
	
	     COLORREF MyPALETTEINDEX(HPALETTE hPalette, WORD wPaletteIndex)
	
	     {
	     PALETTEENTRY pe;
	
	     GetPaletteEntries(hPalette, wPaletteIndex, 1, &pe);
	     return (PALETTERGB(pe.peRed, pe.peGreen, pe.peBlue));
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
