---
layout: page
title: "Q111651: BUG: GetGlyphOutline() with GGO_BITMAP Fails with Large Scale"
permalink: /kb/111/Q111651/
---

## Q111651: BUG: GetGlyphOutline() with GGO_BITMAP Fails with Large Scale

	Article: Q111651
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
	
	Calling GetGlyphOutline() for a bitmap and passing a large X or Y scaling factor
	in the transformation matrix causes the return value to not properly track the
	bitmap size.
	
	For example, Times New Roman Regular 72 point "1", with a scaling factor of 4.0
	in eM11 of the transformation matrix, returns a black box of 100,64. This
	requires a bitmap of at least 800 bytes but GetGlyphOutline() only returns 256.
	The native buffer is returned with no problems.
	
	CAUSE
	=====
	
	A 12-point font on a VGA is marked to use the rasterizer's scan converter.
	However, if the scaling indicated in the transform exceeds the outline
	threshold, GDI's "external" scan converter should be used. Unfortunately, that
	condition is not detected.
	
	NOTE: This problem occurs only with bitmaps; outlines are fine with all
	transformation matrices.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	Additional query words: buglist3.10 3.10 truetype font
	
	======================================================================
	Keywords          : kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
