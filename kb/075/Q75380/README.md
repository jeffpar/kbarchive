---
layout: page
title: "Q75380: INFO: Using the DRAWPATTERNRECT Escape in Windows"
permalink: kb/075/Q75380/
---

## Q75380: INFO: Using the DRAWPATTERNRECT Escape in Windows

	Article: Q75380
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWin95 kbDSupport kbSDKWin16
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DRAWPATTERNRECT escape is implemented by the PCL/HP driver for
	Hewlett-Packard (HP) LaserJet printers and compatibles. The escape is used to
	draw a patterned rectangle without using the graphics banding bitmap. Using this
	escape can enhance the performance for many applications, particularly when a
	majority of users have LaserJet-compatible printers.
	
	MORE INFORMATION
	================
	
	The HP LaserJet Plus and all later LaserJets implement a command called a rule.
	A rule is a rectangle filled with some pattern, such as a black rule, a
	quasi-halftone gray scale, or a hatch pattern.
	
	The output does not go through the graphics banding bitmap (it is actually sent
	to the printer in the text band). The DRAWPATTERNRECT escape can be used to
	print line and block graphics in the text band without using graphics banding at
	all. Because many applications use only horizontal and vertical lines or blocks,
	this is a significant optimization.
	
	An application should determine support for rules using the QUERYESCSUPPORT
	escape. In particular, the application should not check for the PCL/HP driver,
	since other page printer drivers may implement the escape as well.
	
	There are some limitations to the escape. First, rules drawn with DRAWPATTERNRECT
	are not subject to clipping regions in the Device Context (DC). Second, rules
	cannot be opaqued; no white pixel in the graphics band will erase a pixel drawn
	by a rule (the same limitation occurs for PCL text). Once a rule is drawn, it
	cannot be erased.
	
	If these limitations are acceptable, if all graphics on the page are likely to be
	horizontal and vertical lines, and if a significant number of users are expected
	to have LaserJet-type printers (which is the case for most Windows-based
	applications), the DRAWPATTERNRECT escape should be used.
	
	If for any reason DRAWPATTERNRECT cannot be used, then the application should
	generally use the PatBlt function. If the device is a plotter, the Rectangle
	function should be used. In the case of the PatBlt function, if a black
	rectangle is to be printed, the BLACKNESS raster operator (ROP) should be used
	to avoid the overhead of selecting and later deselecting a black brush into the
	printer DC.
	
	Additional query words: 3.00 3.10 3.50 4.00 HPPCL HP-PCL win16sdk
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWin95 kbDSupport kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51
	Issue type        : kbinfo
	
	=============================================================================
	
