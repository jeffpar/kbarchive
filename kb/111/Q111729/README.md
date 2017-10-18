---
layout: page
title: "Q111729: BUG: StretchBlt() Does Not Perform Palette Translations"
permalink: kb/111/Q111729/
---

## Q111729: BUG: StretchBlt() Does Not Perform Palette Translations

	Article: Q111729
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbSDKWin16
	Last Modified: 16-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Normally, the StretchBlt() function performs a palette translation when the
	destination and source bitmaps do not contain the same color format or palette.
	When the destination rectangle is the exact size of the source rectangle (no
	stretching is performed), the palette translation is not performed.
	
	CAUSE
	=====
	
	When the destination and source rectangles are the same size, no stretching is
	performed and BitBlt() is called to perform a straight copy of the source to the
	destination. BitBlt() does not perform the palette translation that StretchBlt()
	does.
	
	RESOLUTION
	==========
	
	You can force StretchBlt() to not call BitBlt() by changing one of the
	destination rectangle coordinates by one unit. Then, the palette translation
	will be performed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem does not occur in Windows NT version 3.1.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
