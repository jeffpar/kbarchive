---
layout: page
title: "Q10212: INFO: Definition of a Region"
permalink: /kb/010/Q10212/
---

## Q10212: INFO: Definition of a Region

	Article: Q10212
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin32 kbSDKWin16
	Last Modified: 19-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbref kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The term "region" is used throughout the Windows documentation; however, the
	term is not defined. This article explains regions, how they are used, and how a
	region is defined or specified.
	
	MORE INFORMATION
	================
	
	Unlike most graphics packages that can manipulate only simple geometric
	structures (usually rectilinear), The Windows Graphics Device Interface (GDI)
	has the unique ability to gather an arbitrary set of spatially coherent points
	into a structure called a region, and perform complex yet rapid manipulations
	and calculations on such structures. This feature not only makes standard
	programs simpler and faster, it also allows operations to be performed that
	would otherwise be nearly impossible (for example, it is fundamental to the
	implementation of the Windows user interface).
	
	Although most GDI function parameters are given in logical units and then are
	converted to device units, region function parameters are given in device
	units.
	
	A region is defined by defining lines, shapes (such as rectangles and ellipses),
	or other regions. The outline of a region should be one or more closed loops. A
	region can be concave or convex, can consist of one area or many disjoint areas,
	and can have "holes" in the middle.
	
	Many calculations can be performed on regions. For example, given any two
	regions, GDI can find their union, intersection, difference, and exclusive.
	There is a set of graphic operations on regions to draw them on the screen.
	
	When a region is selected into a Device Context (DC), a new clipping area is
	created. Any graphics sent to that DC will be clipped to the region created.
	Regions are defined using CreateRectRgn(), CreateEllipticRgn(), and
	CreatePolygonRgn().
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kbSDKWin32 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
