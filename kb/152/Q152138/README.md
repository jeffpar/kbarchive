---
layout: page
title: "Q152138: Limits on Fonts Used in Arabic Windows 3.1 Edit Control"
permalink: /kb/152/Q152138/
---

## Q152138: Limits on Fonts Used in Arabic Windows 3.1 Edit Control

{% raw %}

	Article: Q152138
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbIntlDev
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Arabic Windows 3.1, simple string functions are used to create, shape,
	layout, and output simple string objects. The string objects internally handle
	information about layout, bounding regions for visually discontinuous selected
	text, and glyph mapping (shaping). Edit control in Arabic Windows uses these
	simple string functions to manage its text.
	
	However, simple string functions only work with ANSI and Arabic character set
	fonts. They do not work with italic fonts, OEM fonts, or SYMBOL fonts. If
	SYMBOL, OEM, or other non-ANSI, non-Arabic font is set for the edit control, the
	characters being typed into the edit control will not be displayed, although the
	characters are still being stored in the edit control, and can be retrieved
	using GetWindowText().
	
	MORE INFORMATION
	================
	
	The API functions used for manipulating bidirectional simple strings include:
	
	     BiDiBounds BiDiGetPrevGlyph
	     BiDiCalcString BiDiGetStringExtent
	     BiDiCalcStringEx  BiDiGlyphLength
	     BiDiCalcTabString BiDiGlyphOut
	     BiDiCalcTabStringEx  BiDiGlyphToPel
	     BiDiCaretPelToString BiDiGlyphToString
	     BiDiCaretStringToPel  BiDiIsStringRTL
	     BiDiCreateString  BiDiJustifyString
	     BiDiCreateStringEx BiDiPelToGlyph
	     BiDiCreateTabString  BiDiSetStringTabs
	     BiDiCreateTabStringEx BiDiStringOut
	     BiDiDeleteString BiDiStringToGlyph
	     BiDiGetNextGlyph
	
	Additional query words: 3.10 ME middle east glyph Arabic
	
	======================================================================
	Keywords          : kbIntlDev 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
