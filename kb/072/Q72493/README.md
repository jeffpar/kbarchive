---
layout: page
title: "Q72493: BUG: Complex Graphics Image Partially Printed"
permalink: kb/072/Q72493/
---

## Q72493: BUG: Complex Graphics Image Partially Printed

	Article: Q72493
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbOSWin300 kbSDKWin16
	Last Modified: 04-JUL-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application uses the clipping functions to print a complex graphics
	image on a high resolution output device, the printed output is incomplete;
	portions of the image are missing.
	
	CAUSE
	=====
	
	The clipping region is stored in the Graphics Device Interface (GDI) local heap.
	It is possible for the local heap to run out of memory.
	
	RESOLUTION
	==========
	
	Some of the clipping must be done by the application to reduce the amount of GDI
	local heap used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: buglist3.00 buglist3.10 3.00 3.10
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbOSWin300 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
