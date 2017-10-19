---
layout: page
title: "Q77126: INFO: Raster and Stroke Fonts; GDI and Device Fonts"
permalink: /kb/077/Q77126/
---

## Q77126: INFO: Raster and Stroke Fonts; GDI and Device Fonts

	Article: Q77126
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1,95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWin310 kbOSWin95 kbDSupport kbOSWin300 kbSDKWin16
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.0 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NOTE: The information contained in this article does not address TrueType fonts.
	For information on TrueType fonts, please see chapter 18 of "Guide to
	Programming" for the Windows SDK version 3.1.
	
	In Windows version 3.0, there are two different ways that the graphical device
	interface (GDI) can generate characters for a font. For a raster font, GDI
	displays the font by copying bitmaps to the output device. For a stroke font,
	GDI displays the font by drawing lines between a series of points that describe
	each character. Each font is owned by either GDI or by a specific device. Type
	and ownership information can be determined by enumerating the fonts. This
	article discusses the two font types and two font ownership types.
	
	MORE INFORMATION
	================
	
	A raster font stores its characters as a series of bitmaps; a stroke font stores
	its characters as a set of vector operations that describe the characters. When
	a character from a raster font is drawn, the bitmap is copied onto the device.
	When a character from a stroke font is displayed, the lines are drawn connecting
	the points that describe the character. Examples of raster fonts provided with
	Windows are Courier and Helv; examples of stroke fonts are Script and Roman.
	
	Raster fonts are only available in specific sizes. Some devices can scale
	installed raster fonts to integer multiples of their size. Use the
	GetDeviceCaps() function to determine whether the device has this capability.
	The Windows GDI will scale its raster fonts as required regardless of the device
	capability. Stroke fonts can be scaled to any size and can also be rotated.
	
	GDI fonts are owned by the GDI; they are available to all devices. Device fonts
	are fonts that are owned by a particular device; they are available only on that
	device.
	
	By enumerating the fonts, an application can determine which ones are raster or
	stroke fonts, and which are GDI or device fonts. The callback function used with
	EnumFonts() has the parameter nFontType. As stated on page 4-118 of the
	"Microsoft Windows Software Development Kit Reference Volume 1," the bitwise AND
	(&) operator can be used with the constants RASTER_FONTTYPE and
	DEVICE_FONTTYPE to determine the font type. If the RASTER_FONTTYPE bit is set,
	the font is a raster font; otherwise, it is a stroke font. If the
	DEVICE_FONTTYPE bit is set, the font is owned by the device that corresponds to
	the display context handle (HDC) used in the EnumFont() call; otherwise it is a
	GDI font.
	
	Additional query words: 3.00 3.10 3.50 4.00 win16sdk
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWin310 kbOSWin95 kbDSupport kbOSWin300 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.0,3.1,95; winnt:3.5,3.51
	Issue type        : kbinfo
	
	=============================================================================
	
