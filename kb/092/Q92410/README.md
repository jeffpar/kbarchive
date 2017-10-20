---
layout: page
title: "Q92410: PRB: Average &amp; Maximum Char Widths Different for TT Fixed Font"
permalink: /kb/092/Q92410/
---

## Q92410: PRB: Average &amp; Maximum Char Widths Different for TT Fixed Font

{% raw %}

	Article: Q92410
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16
	Last Modified: 12-MAY-2001
	
	3.10 4.00 | 3.50 3.51
	WINDOWS   | WINDOWS NT
	kbgraphic kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The tmAveCharWidth and tmMaxCharWidth fields of the TEXTMETRIC structure are not
	equal for a fixed-pitch TrueType (TT) font such as Courier New.
	
	RESOLUTION
	==========
	
	This is by TrueType design. The tmMaxCharWidth denotes the maximum possible ink
	width of the font rather than maximum cell width of the font.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	TrueType fonts use ABC character spacing. The "A" width is the distance that is
	added to the current position before placing the TrueType glyph. The "B" width
	is the width of the black part (ink width) of the TT glyph. The "C" width is the
	distance from the end of the "B" width to the beginning of the next character.
	Advanced width (cell width) is equal to A+B+C.
	
	The physical TT fonts that are passed to drivers have just the "B" part of the
	characters, so all fonts at the level of the driver appear to be proportional
	width fonts. The tmMaxCharWidth is the least width in which the "B" part of all
	characters will fit. The tmAveCharWidth is the average advance width (A+B+C).
	For a fixed-pitch TT font such as Courier New, the A+B+C width is the same for
	all characters; however, the maximum width as defined above can be different.
	
	tmMaxCharWidth is greater than tmAveCharWidth only if A+C is negative. This is
	possible for a fixed-pitch font.
	
	Please see section 18.2.4.1 of the Windows 3.1 SDK "Guide to Programming" for
	more information about ABC character spacing.
	
	Additional query words: 3.10 4.00
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
