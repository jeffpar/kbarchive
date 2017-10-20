---
layout: page
title: "Q32667: INFO: Font Metrics and the Use of Negative lfHeight"
permalink: /kb/032/Q32667/
---

## Q32667: INFO: Font Metrics and the Use of Negative lfHeight

{% raw %}

	Article: Q32667
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): _IK kbSDKWin16
	Last Modified: 15-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The following illustrations show the most commonly used font metrics, including
	Character Height, which is selected with negative values of each illustration is
	followed by notes describing the metrics.
	
	_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
	
	                    O    O
	_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
	
	                      /\ 
	                     /  \ 
	                    /    \ 
	_ _ _ _ _ _ _ _ _  /______\ _ _ _ ___   _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
	                  /        \     /   \|
	                 /          \   |     |
	_ _ _ _ _ _ _ _ /_ _ _ _ _ _ \ _ \___/| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
	                                      |
	                                      |
	_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\___/_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
	                                                     |
	                                                     |- External Leading
	_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|_ _ _ _ _ _ _ _ _ _
	                                                     |
	                    O    O                           |- Internal Leading
	_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|_ _ _ _ _ _ _ _ _ _
	             |        /\ 
	             |       /  \ 
	             |      /    \ 
	             |     /______\ _ _ _ ___   _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
	Char Height -|    /        \     /   \|
	             |   /          \   |     |
	             |  /_ _ _ _ _ _ \ _ \___/| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
	             |                        |
	             |                        |
	_ _ _ _ _ _ _|_ _ _ _ _ _ _ _ _ _\___/_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
	
	_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
	
	             |                                           |
	             |      O    O                               |
	             |                                           |
	             |        /\                                 |
	             |       /  \                                |
	             |      /    \                               |- Ascent
	Cell Height -|     /______\       ___                    |
	             |    /        \     /   \|                  |
	             |   /          \   |     |                  |
	             |  /_ _ _ _ _ _ \ _ \___/| _ _ _ _ _ _ _ _ _|_ _ _ _ _ _ _ _
	             |                        |                  |
	             |                        |                  |- Descent
	_ _ _ _ _ _ _|_ _ _ _ _ _ _ _ _ _\___/_ _ _ _ _ _ _ _ _ _|_ _ _ _ _ _ _ _
	
	Cell Height
	-----------
	
	This is the height selected on positive lfHeight in the LOGFONT. It is the height
	of the font bitmap for raster fonts. It is returned as tmHeight in the
	TEXTMETRIC structure from GetTextMetrics().
	
	Character Height (Also Known as Em)
	-----------------------------------
	
	This is the height selected on negative lfHeight in the LOGFONT. (That is, the
	mapper will try to match a font whose character height matches the absolute
	value of the requested height.)
	
	NOTE: By definition, the Em is equal to Cell Height minus Internal Leading. The
	Em defines the point size of a font. In MM_TEXT mapping mode, the Em is related
	to the point size as follows:
	
	     Em=dpiY*point_size/72;  // where dpiY is dots per inch in Y direction
	
	The dpiY of a font is equal to tmDigitizedAspectY in the TEXTMETRICS structure.
	
	Internal Leading
	----------------
	
	This is returned as tmInternalLeading in the TEXTMETRIC structure from
	GetTextMetrics() and often, but not necessarily, describes how much space has
	been left inside the font bitmap for diacritical marks (accents).
	
	External Leading
	----------------
	
	This is returned as tmExternalLeading in the TEXTMETRIC structure from
	GetTextMetrics() and describes how much extra space the font designer expects
	the application to leave between rows of the font. It is not included in the
	bitmap and is not modified by TextOut()/ExtTextOut(), even in OPAQUE mode. When
	outputting multiple lines of text, the lines should be separated by (tmHeight +
	tmExternalLeading).
	
	Character Width                       Character Width
	       |                                     |
	|-------------|                       |-------------|
	|          |                         /          /   |
	|          |                        /          /    |
	|          |                       /          /     |
	|          |                      /          /      |
	|----------|                     /----------/       |
	|          |                    /          /        |
	|          |                   /          /         |
	|          |                  /          /          |
	|          |                 /          /           |
	                                           |________|
	|_____________|              |_____________|    |
	       |                            |           Overhang
	  Character width        Character width
	(including white space)  (including white space)
	  Overhang = 0                  Overhang > 0
	
	Overhang
	--------
	
	tmOverhang specifies the per string extra width that may be added to some
	synthesized fonts. When synthesizing some attributes such as bold or italic, GDI
	or a device may have to add width to a string on both a per character and per
	string basis. For example, GDI synthesizes embolding by expanding the
	intercharacter spacing and overstriking with an offset and italicizes a font by
	skewing the string.
	
	In either case, there is an overhang past the basic string. For bold strings, it
	is the distance by which the overstrike is offset. For italic strings, it is the
	amount the top of the font is skewed past the bottom of the font. tmOverhang
	allows the application to determine how much of the character width returned by
	a GetTextExtent() call on a single character is the actual character width and
	how much is the per string extra width. The actual width is the extent less the
	overhang. In other words, tmOverhang is the difference between the width of a
	character when it is output singly versus its width when it is in the interior
	of a string.
	
	For more information, look up the following topics in the Windows Software
	Development Kit reference:
	
	- CreateFont() (in Volume 1 of the version 3.0 reference)
	
	- TEXTMETRIC (in Volume 2 of the version 3.0 reference)
	
	Additional query words: fonts metrics lfHeight height TEXTMETRIC EXTTEXTMETRIC LOGFONT 3.00 3.10
	
	======================================================================
	Keywords          : _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
