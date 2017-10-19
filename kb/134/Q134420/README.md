---
layout: page
title: "Q134420: PRB: App Studio Displays Incorrect Colors for Bitmaps"
permalink: /kb/134/Q134420/
---

## Q134420: PRB: App Studio Displays Incorrect Colors for Bitmaps

	Article: Q134420
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): _IK920 kbBitmap kbResource kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Resource Editor, used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you display or paint a bitmap in App Studio or the Resource Editor, the
	colors appear to be correct. However, if you close the bitmap and reopen it,
	some of the colors appear to be incorrect. For example, white may appear to be
	grey.
	
	CAUSE
	=====
	
	The most common reason for this error is the video driver, usually in 64K color
	mode.
	
	RESOLUTION
	==========
	
	Switch to the standard VGA driver that ships with Windows or use a color
	resolution if you need the bitmap to display correctly. You should also contact
	your video card manufacturer to get a newer version of the video driver if it is
	available.
	
	Additional query words: appstudio change
	
	======================================================================
	Keywords          : _IK920 kbBitmap kbResource kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbResourceEd
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
