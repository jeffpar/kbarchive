---
layout: page
title: "Q111865: BUG: StretchBlt()/StretchDIBits() Fail with Very Large Stretch"
permalink: kb/111/Q111865/
---

## Q111865: BUG: StretchBlt()/StretchDIBits() Fail with Very Large Stretch

	Article: Q111865
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbOSWin300 kbSDKWin16
	Last Modified: 22-DEC-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the stretching factor is large, for example, when stretching from a very
	small to a large height, StretchDIBits() and StretchBlt() may return zero (0)
	and display nothing. The same bitmap with a smaller stretch is displayed
	correctly.
	
	CAUSE
	=====
	
	Most display drivers do not implement their own StretchBlt() or StretchDIBits()
	so GDI must simulate these calls. Part of the GDI simulation involves allocating
	temporary work buffers, which are limited to 64K. If the size of the work buffer
	is calculated to be greater than 64K, then the height of the source and
	destination rectangles are halved until they are less than 64K. The problem is
	that if GDI must continue to divide the height by two (2) to get a buffer less
	than 64K, the source or destination height could eventually reach one scan line.
	At this point, the call fails because it cannot break up a scan line into
	subunits.
	
	StretchBlt() and StretchDIBits() are not designed to provide unlimited
	stretching. However, they may fail a bit more prematurely than their design
	limitation.
	
	RESOLUTION
	==========
	
	If StretchBlt() or StretchDIBits() fails on a large stretch, an application can
	divide up the source bitmap, stretch the pieces individually, and position them
	correctly once stretched. Another alternative is to do a smaller stretch. There
	is no formula to determine exactly what bitmaps will fail at what stretch size.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, create a bitmap approximately 2048 pixels wide by 16
	pixels high. Then, display the bitmap with the DIBVIEW sample from the Windows
	3.1 SDK. Choose Stretch To Window from DIBVIEW's Options menu, so that the
	bitmap is stretched according to the size of the client window. When the height
	is more than about 200 pixels, the bitmap will not be displayed.
	
	Additional query words: buglist3.00 buglist3.10 3.00 3.10 fail zoom
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbOSWin300 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
