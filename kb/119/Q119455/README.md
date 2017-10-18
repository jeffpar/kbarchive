---
layout: page
title: "Q119455: PRB: RoundRect() and Ellipse() Don't Match Same Shaped Regions"
permalink: kb/119/Q119455/
---

## Q119455: PRB: RoundRect() and Ellipse() Don't Match Same Shaped Regions

	Article: Q119455
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbSDKWin32 kbOSWin95
	Last Modified: 12-MAY-2001
	
	3.10 4.00 | 3.10 3.50 3.51
	WINDOWS   | WINDOWS NT
	kbgraphic kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When CreateRoundRectrRgn() is used to create a region with the shape of a
	rectangle that has rounded corners and RoundRect() is called with the same
	parameters to draw the same rectangle that has rounded corners, the calculated
	region does not match the drawn rectangle. The same can be said of the ellipses
	created by CreateEllipticRgn() and Ellipse().
	
	CAUSE
	=====
	
	This behavior is because of the design on Windows. The mismatch between fills
	and frames is because of the way that the boundaries and fills must be specified
	in order to get polygons to fit together properly. Windows NT duplicates this
	behavior for compatibility.
	
	RESOLUTION
	==========
	
	Perform the fill first, then draw the frame. Some of the frame pixels will
	overwrite fill pixels and some will not; however, there will be no gap between
	the frame and the fill, and the fill will not extend past the frame. Use
	CreateRoundRectRgn() or CreateEllipticRgn() for the fill and RoundRect() or
	Ellipse, respectively, for the frame. Use the same parameters for both the
	region API and the filled-shape API.
	
	NOTE: If you use a NULL pen when drawing the filled shape, the pixels will match
	those drawn by creating a region through the corresponding region API and then
	calling FillRgn() with the same parameters. It draws the frame with the pen from
	the filled-shape API that causes the discrepancy.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.10 4.00
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbSDKWin32 kbOSWin95 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
