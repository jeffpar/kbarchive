---
layout: page
title: "Q199540: BUG: Memory Leaks When Using Bitmaps in VC++ Mac 4.0b 68K Apps"
permalink: kb/199/Q199540/
---

## Q199540: BUG: Memory Leaks When Using Bitmaps in VC++ Mac 4.0b 68K Apps

	Article: Q199540
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:4.0b
	Operating System(s): 
	Keyword(s): kbgraphic kbHWMAC kbVC kbVC400bug kbDSupportkbbuglist
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, version 4.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When selecting a bitmap into a device context, SelectObject may return NULL.
	
	CAUSE
	=====
	
	When a bitmap is deleted, the memory allocated for it is not released from the
	application heap space. This problem occurs only for bitmaps that are not
	read-only (see SetBitmapReadOnly) and only with 68K applications developed using
	Visual C++ for Macintosh 4.0b.
	
	RESOLUTION
	==========
	
	Following are five different resolutions:
	
	- Set the bitmaps as read-only using SetBitmapReadOnly(hBitmap, BRO_READONLY)
	  before selecting them into the DC.
	
	- Reuse the same bitmap object.
	
	- Develop using Visual C++ for Macintosh 4.0.
	
	- Call the undocumented internal function _FreeGWorldCache().
	
	- Increase memory requirements.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When a bitmap is created and selected into a device context on the Macintosh
	using the Windows Portability Library (WPL), a new GWorld object is created (if
	needed) and stored in a cache of four GWorlds. This cache is also used when
	deleting bitmap objects. Unfortunately the cache is filled but never
	automatically cleared. Additionally QuickDraw allocates memory for each GWorld,
	which is also not released.
	
	One workaround involves clearing the cache (which also clears the QuickDraw
	overhead information) using _FreeGWorldCache(). When using this function
	manually, enter the function prototype:
	
	     void _FreeGWorldCache(void);
	
	Sometimes the problem can be reduced by using CreateBitmapIndirect() instead of
	CreateBitmap() when creating the bitmap.
	
	As a debugging aid, the Macintosh application's heap space can be viewed using
	ZoneRanger, which can be obtained from Metrowerk's web site:
	
	  http://www.metrowerks.com
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Adam Kim,
	Microsoft Corporation.
	
	
	Additional query words: DeleteObject Bitmap SelectObject leak CreateBitmap CreateBitmapIndirect
	
	======================================================================
	Keywords          : kbgraphic kbHWMAC kbVC kbVC400bug kbDSupport kbbuglist
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev400bMac
	Version           : MACINTOSH:4.0b
	Issue type        : kbbug
	
	=============================================================================
	
