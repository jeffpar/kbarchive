---
layout: page
title: "Q74291: INFO: Microsoft Windows Caches Five Display Contexts"
permalink: kb/074/Q74291/
---

## Q74291: INFO: Microsoft Windows Caches Five Display Contexts

	Article: Q74291
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKWin16
	Last Modified: 16-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows graphical environment maintains an internal cache of five
	display contexts (DCs) which are shared by all applications in the system. An
	application retrieves one of these DCs when it calls the BeginPaint(), GetDC(),
	or GetWindowDC() functions. When an application retrieves a DC, Windows marks
	the DC as in use and does not allow another application to retrieve it. When an
	application has finished using a DC, it must return the DC to the cache which
	makes the DC available to another application. Two APIs return a DC to the
	cache: EndPaint() function (to match BeginPaint() and the ReleaseDC() function
	(to match GetDC() or GetWindowDC()).
	
	If an application fails to return DCs to the DC cache correctly, the cache
	becomes empty, and subsequent calls to BeginPaint(), GetDC(), and GetWindowDC()
	fail. Because most applications do not check to be sure that the DC they
	retrieve is valid, they attempt to use an invalid DC in a graphics device
	interface (GDI) call, which causes a FatalExit error.
	
	To avoid this problem, be sure to return DCs to the cache correctly and check the
	value returned by BeginPaint(), GetDC(), and GetWindowDC() to ensure that a
	valid DC is available.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
