---
layout: page
title: "Q87350: BUG: GetGlyphOutline() Returns Partial Glyph"
permalink: kb/087/Q87350/
---

## Q87350: BUG: GetGlyphOutline() Returns Partial Glyph

	Article: Q87350
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin16
	Last Modified: 24-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Windows graphical environment, when an application calls the
	GetGlyphOutline function to retrieve the bitmap for a rotated glyph (the lpmat2
	matrix points to a nonidentity rotation matrix) and the glyph is larger than 75
	pixels, the returned bitmap contains a partial, nonrotated, glyph.
	
	RESOLUTION
	==========
	
	To work around this problem, perform the following five steps:
	
	1. Select the font into an appropriate device context (DC).
	
	2. Determine the size of the bitmap required to hold the rotated glyph by
	  performing the following three steps:
	  1. Call the GetCharABCWidths() function to determine the (nonrotated) width
	     of the black part of glyph. This information is returned in the abcB
	     member of an ABC data structure.
	  2. Call the GetTextMetrics() function to fill a TEXTMETRICS data structure
	     with information about the font. Use the value of the tmHeight member of
	     the TEXTMETRICS structure as the height.
	  3. Use the angle of rotation to compute the width and height of the rotated
	     glyph based on the information above.
	
	3. Create a bitmap of the size calculated in step 2 and select it into a memory
	  DC.
	
	4. Create a rotated version of the font by specifying the rotation angle in the
	  lfOrientation member of the LOGFONT data structure and select it into the
	  memory DC.
	
	5. Call the TextOut() function to write the desired glyph into the memory DC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          : kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
