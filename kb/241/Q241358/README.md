---
layout: page
title: "Q241358: PRB: The GetGlyphOutlineW Function Fails on Windows 95/98/Me"
permalink: /kb/241/Q241358/
---

## Q241358: PRB: The GetGlyphOutlineW Function Fails on Windows 95/98/Me

	Article: Q241358
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbFont kbGDI kbSDKPlatform kbSDKWin32 kbTTFonts kbOSWin95 kbOSWin98 kbGrpDSGDI
	Last Modified: 19-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The GetGlyphOutlineW function fails and the GetGlyphOutlineA function succeeds
	on Microsoft Windows 95, Windows 98, and Windows Millennium Edition (Me).
	
	When the GetGlyphOutlineWfunction fails, the error code returned from the
	GetLastError function is ERROR_CALL_NOT_IMPLEMENTED.
	
	CAUSE
	=====
	
	The GetGlyphOutlineW function, which is a wide-character or Unicode version of
	the function, is not implemented on Windows 95, Windows 98, and Windows Me
	because these operating systems are not Unicode-based.
	
	See the References section of this article for more information on the limited
	subset of wide-character functions that are implemented in the Windows 95,
	Windows 98, and Windows Me operating systems.
	
	RESOLUTION
	==========
	
	To obtain glyph outline data from a character given only the Unicode character
	code, convert the Unicode character into its TrueType glyph index equivalent,
	and use the GGO_GLYPH_INDEX option for the function.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	An application that uses Unicode strings internally may attempt to call the wide
	character (Unicode) version of the GetGlyphOutline function (GetGlyphOutlineW)
	to access its features through a Unicode character code. The function call
	always fails on Windows 95, Windows 98, or Windows Me and returns GDI_ERROR.
	
	On Windows 95 and Windows 98, only the GetGlyphOutlineA function (or simply
	GetGlyphOutline, as defined by Wingdi.h in the Platform SDK) is implemented.
	Calling GetGlyphOutlineW on these platforms returns the error code
	ERROR_CALL_NOT_IMPLEMENTED from the GetLastError function after the function
	fails.
	
	This failure is by design because these operating systems are not Unicode-based
	and cannot normally process Unicode character codes. See the References section
	of this article for more information on the small subset of wide-character
	functions that are implemented in Windows 95 and subsequent versions.
	
	Similar to the ExtTextOut function, the GetGlyphOutline function can also use
	glyph index-based parameters rather than character codes. The workaround is to
	convert the Unicode character code into a glyph index value, and call
	GetGlyphOutlineA using the GGO_GLYPH_INDEX option. See the Help documentation
	for the GetGlyphOutline function for details.
	
	No function exists in the Win32 API for Windows 95 (there is no
	GetCharacterPlacementW implementation) to convert from Unicode to glyph indices.
	Using the WideCharToMultiByte function to first convert to eight-bit or ANSI
	character codes is disadvantaged by filtering the Unicode character codes
	through the current codepage. Any character codes in a Unicode subrange that are
	not represented by the conversion codepage are not translated.
	
	To convert Unicode character codes to glyph indices, the Unicode to glyph index
	character map must be pulled from the TrueType font file by using the
	GetFontData function. It then must be searched to convert the character code to
	a font file glyph index.
	
	
	REFERENCES
	==========
	
	For additional information about Unicode in Windows 95 and Windows 98, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q210341 INFO: Unicode Support in Windows 95 and Windows 98
	
	  Q241020 HOWTO: Translate Unicode Character Codes to TrueType Glyph Indices
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFont kbGDI kbSDKPlatform kbSDKWin32 kbTTFonts kbOSWin95 kbOSWin98 kbGrpDSGDI 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
