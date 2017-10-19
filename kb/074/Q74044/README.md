---
layout: page
title: "Q74044: INFO: Logical and Physical Coordinate Relationship"
permalink: /kb/074/Q74044/
---

## Q74044: INFO: Logical and Physical Coordinate Relationship

	Article: Q74044
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin32 kb32bitOnly
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
	
	Windows is designed to use a logical coordinate system when doing many of its
	graphics operations. Many of the Windows functions take logical units as
	parameters. Windows translates these units to physical device units based on the
	mapping mode of the device, window origin, window extents, viewport origin, and
	viewport extents.
	
	This article discusses the relationship between logical and physical coordinates.
	
	MORE INFORMATION
	================
	
	The default mapping mode for a device context (DC) is the MM_TEXT mode. The
	point (0,0) is the origin of the logical and physical coordinate systems in this
	mode. It also has a 1 to 1 mapping ratio of logical to physical device units.
	
	The programmer can change the mapping mode of a DC by using the SetMapMode()
	function.
	
	The following six mapping modes have predefined logical to physical mapping
	ratios:
	
	- MM_TEXT
	
	- MM_LOENGLISH
	
	- MM_HIENGLISH
	
	- MM_LOMETRIC
	
	- MM_HIMETRIC
	
	- MM_TWIPS
	
	The following two mapping modes can be set to have user defined ratios of logical
	to physical units:
	
	- MM_ANISOTROPIC
	
	- MM_ISOTROPIC
	
	In the last two modes, coordinates are transformed from logical to physical and
	vice versa based on the current window and viewport extents in the DC. The
	functions SetWindowExt() and SetViewportExt() allow an application to set the
	window and viewport extents. These functions should only be used in the
	MM_ANISOTROPIC and MM_ISOTROPIC mapping modes because they are the only ones in
	which the application can define the mapping ratio.
	
	The formulae used to convert to and from the different coordinate systems are
	documented in section 2.5.3, page 2-18, in the "Microsoft Windows Software
	Development Kit Reference Volume 1" for version 3.0.
	
	REFERENCES
	==========
	
	For more information about the relationship between the logical and physical
	planes, refer to the following:
	
	"Microsoft Windows Software Development Kit Reference Volume 1" version 3.0,
	section 2.5 "Mapping Functions," pages 2-15 through 2-20.
	
	"Programming Windows," first edition, by Charles Petzold Chapter 12, pages
	520-540.
	
	"Programming Windows," second edition, by Charles Petzold Chapter 11, pages
	517-539.
	
	"Peter Norton's Windows 3.0 Power Programming Techniques," by Peter Norton and
	Paul Yao, Chapter 20, c. 1990, Bantam Books.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kbSDKWin32 kb32bitOnly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
