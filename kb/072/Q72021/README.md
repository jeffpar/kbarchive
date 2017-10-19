---
layout: page
title: "Q72021: INFO: Font Rotation Under Microsoft Windows"
permalink: /kb/072/Q72021/
---

## Q72021: INFO: Font Rotation Under Microsoft Windows

	Article: Q72021
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin16
	Last Modified: 26-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions of Microsoft Windows earlier than version 3.1, only the stroke fonts
	supplied with the Windows Graphical Device Interface (GDI) are guaranteed to
	support rotation. Windows 3.1 introduces TrueType fonts, which also support
	rotation. Certain raster fonts and device fonts support rotation also; however,
	an application that rotates fonts on a variety of hardware should use a TrueType
	font or a GDI stroke font.
	
	MORE INFORMATION
	================
	
	Windows supports five types of fonts: GDI raster, GDI stroke, device raster,
	device stroke, and TrueType. The Windows GDI provides the first two font types,
	the hardware device or device driver provides the second two font types, and the
	TrueType rasterizer in Windows 3.1 GDI provides TrueType fonts.
	
	A raster font is a set of bitmaps that represent the different glyphs
	(characters) of the font. A raster font is device-specific because HARDWARE
	devices differ in aspect ratio and resolution. Windows does not support rotating
	a raster font to an arbitrary angle because the fonts are specific to a device.
	Windows provides a number of GDI raster fonts, including MS Sans Serif and MS
	Serif (respectively called Helv and TmsRmn in versions of Windows earlier than
	3.1).
	
	The glyphs in both stroke fonts and TrueType fonts are stored as mathematical
	formulas that describe the direction and length of each line and arc. Therefore,
	these fonts are device-independent and appropriate for any aspect ratio,
	resolution, or rotation. Windows can rotate GDI stroke fonts and TrueType fonts.
	Three stroke fonts are provided with Windows: Modern, Script, and Roman. Windows
	3.1 also includes a number of TrueType fonts, including Arial and Courier New.
	
	An application can determine the attributes of a given font through three Windows
	functions: EnumFonts, EnumFontFamilies, and GetTextMetrics. When an application
	uses the EnumFont or EnumFontFamilies function, it defines a callback function
	that Windows calls with the attributes of each enumerated font. The FontType
	parameter of the callback function indicates the font's type. When an
	application calls the GetTextMetrics function, Windows returns a TEXTMETRIC data
	structure containing font attributes. The tmPitchAndFamily field provides the
	font type.
	
	Some hardware devices can rotate a raster font. To determine whether a device can
	rotate characters (above and beyond what Windows GDI does), call the
	GetDeviceCaps function with the TEXTCAPS parameter.
	
	Additional query words: 3.00 3.10 True Type
	
	======================================================================
	Keywords          : kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
