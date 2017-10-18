---
layout: page
title: "Q86925: DOC: Region Functions Documented Incorrectly"
permalink: kb/086/Q86925/
---

## Q86925: DOC: Region Functions Documented Incorrectly

	Article: Q86925
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbSDKWin16
	Last Modified: 18-JUN-1999
	
	3.10
	WINDOWS
	kbtool kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows graphics device interface (GDI) uses two major categories
	of coordinates units: device units and logical units. The documentation of many
	GDI functions in the "Microsoft Windows Software Development Kit: Programmer's
	Reference, Volume 2: Functions" manual is inconsistent with regard to type of
	coordinates required by the functions that specify positions. This article lists
	these functions and the units they use.
	
	MORE INFORMATION
	================
	
	The documentation for the CreateEllipticRgn (page 97), CreateEllipticRgnIndirect
	(pages 97 and 98), CreateRectRgn (pages 122 and 123), CreateRectRgnIndirect
	(pages 123 and 124), and CreateRoundRectRgn (pages 124 and 125) functions states
	that the parameters to each function are in logical coordinates. However,
	because none of these functions takes a Device Context (DC) as a parameter, the
	parameters have no units. The units are provided by the function that uses the
	region created.
	
	The documentation for CreatePolygonRgn (pages 118 and 119) and
	CreatePolyPolygonRgn (pages 119 through 121) do not mention units; these
	functions are also unitless.
	
	The documentation for the FillRgn (page 302), FrameRgn (pages 314 and 315),
	InvertRgn (pages 544 and 545), and PaintRgn (pages 735 and 736) functions state
	that the functions require device coordinates. However, these functions use
	logical coordinates.
	
	The coordinates for a region used with the SelectClipRgn function must be in
	device units as stated in its documentation (pages 808 and 809).
	
	Additional query words: 3.10 docerr
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
