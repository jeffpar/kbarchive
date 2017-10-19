---
layout: page
title: "Q139097: HOWTO: How to Clean Up DirectDraw Using Release()"
permalink: /kb/139/Q139097/
---

## Q139097: HOWTO: How to Clean Up DirectDraw Using Release()

	Article: Q139097
	Product(s): Miscellaneous Software Development Kits
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbDirectDraw KbDirectX kbFAQ kbDSupport
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Game Software Development Kit (SDK), version 1.0 
	- Microsoft Windows XP Home Edition 
	- Microsoft Windows XP Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DirectDraw object creates DirectDrawSurface, DirectDrawPalette, and
	DirectDrawClipper objects. Typically, an application or game will create the
	following at initialization time:
	
	- The main DirectDraw object.
	
	- A primary DirectDrawSurface with one or more back buffers that are attached
	  to the primary surface and are DirectDrawSurfaces.
	
	- Other miscellaneous DirectDrawSurface(s) as needed.
	
	- DirectDrawPalette(s) to attach to a surface as needed.
	
	- DirectDrawClipper(s) to attach to a surface as needed.
	
	At clean-up time, the application or game should call Release() to release each
	object in reverse order of creation. A typical procedure to cleanup DirectDraw
	would follow this order:
	
	- Release all DirectDrawClipper(s).
	
	- Release all DirectDrawPalette(s).
	
	- Release all miscellaneous DirectDrawSurface(s).
	
	- Release the primary DirectDrawSurface.
	
	- Release the main DirectDraw object.
	
	You don't need to release backbuffers explicitly because back buffers are
	attached to the primary surface, so they would be released with the primary
	buffer.
	
	An application or game can also clean up DirectDraw using a single call to
	Release() on the main DirectDraw object. The DirectDraw object, when released,
	will release all its associated surfaces, palettes, and clipper objects before
	going away.
	
	Additional query words: 1.00 kbinf DDraw
	
	======================================================================
	Keywords          : kbDirectDraw KbDirectX kbFAQ kbDSupport 
	Technology        : kbWinXPHome kbWinXPPro kbAudDeveloper _IKkbbogus kbSDKSearch kbSDKGame kbWinXPProSearch kbWinXPHomeSearch kbWinXPSearch
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	
