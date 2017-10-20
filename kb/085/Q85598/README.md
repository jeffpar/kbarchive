---
layout: page
title: "Q85598: BUG: GetGlyphOutline() Returns Blank Bitmap"
permalink: /kb/085/Q85598/
---

## Q85598: BUG: GetGlyphOutline() Returns Blank Bitmap

{% raw %}

	Article: Q85598
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
	GetGlyphOutline() function to retrieve the bitmap for a glyph and the lpmat2
	parameter points to a matrix that magnifies the glyph, a blank bitmap is
	returned.
	
	RESOLUTION
	==========
	
	Specify the desired glyph size in the lfHeight member of the LOGFONT data
	structure used to create the font. Do not magnify the glyph with the matrix
	specified in the lpmat2 parameter.
	
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
	

{% endraw %}
