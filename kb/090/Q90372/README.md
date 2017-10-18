---
layout: page
title: "Q90372: DOC: Clarification of the LOGFONT lfOutPrecision Field"
permalink: kb/090/Q90372/
---

## Q90372: DOC: Clarification of the LOGFONT lfOutPrecision Field

	Article: Q90372
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbSDKWin16
	Last Modified: 24-JUN-1999
	
	3.10
	WINDOWS
	kbtoolkbtoolg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows 3.1, additional symbolic constants have been defined for use in the
	lfOutPrecison field of the LOGFONT data structure. One of the constants,
	OUT_TT_PRECIS, is documented incorrectly on page 101 of the Windows SDK
	"Programmer's Reference, Volume 2" manual, on page 309 of the "Programmer's
	Reference, Volume 3" manual, and in the online help.
	
	The OUT_TT_PRECIS constant is incorrectly documented as follows:
	
	Specifying OUT_TT_PRECIS forces the font mapper to choose a TrueType font
	whenever the specified font name matches a device or raster font, even when
	there is no TrueType font with the same name.
	
	This paragraph should read as follows:
	
	Specifying OUT_TT_PRECIS forces the font mapper to choose a TrueType font
	whenever the specified font name matches both a TrueType font and either a
	device or raster font.
	
	MORE INFORMATION
	================
	
	The OUT_TT_PRECIS, OUT_RASTER_PRECIS, and OUT_DEVICE_PRECIS values are used by
	Windows only when a name collision occurs during font mapping. If more than one
	type of font exists with the same name and the application does not specify one
	of these values, the font mapper will pick one of them randomly. By using one of
	these values, the application can direct the font mapper to the font the
	application wants to use.
	
	Additional query words: 3.10 CreateFont CreateFontIndirect docerr
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
