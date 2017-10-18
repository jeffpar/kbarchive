---
layout: page
title: "Q84984: DOC: List of Functions That Are Valid in Metafiles"
permalink: kb/084/Q84984/
---

## Q84984: DOC: List of Functions That Are Valid in Metafiles

	Article: Q84984
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbSDKWin16
	Last Modified: 26-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Pages 2-41 and 2-42 of the "Microsoft Windows Software Development Kit (SDK)
	Reference Volume 1" for version 3.0 list the subset of Windows GDI functions
	that an application can use in a metafile under Windows 3.0. The list printed in
	the manual is incorrect.
	
	Page 107 of the "Microsoft Windows Software Development Kit: Programmer's
	Reference, Volume 1: Overview," lists the functions that are valid in a metafile
	for Windows 3.1. This list is incomplete.
	
	This article provides a corrected list of functions that an application can use
	in a metafile under Windows 3.1.
	
	MORE INFORMATION
	================
	
	
	The following list of functions that are valid in a Windows 3.1 metafile is taken
	from page 107 of the "Windows SDK: Programmer's Reference, Volume 1: Overview":
	
	AnimatePalette           OffsetViewportOrg   SetBkMode
	Arc                      OffsetWindowOrg     SetDIBitsToDevice
	BitBlt                   PatBlt              SetMapMode
	Chord                    Pie                 SetMapperFlags
	CreateBrushIndirect      Polygon             SetPixel
	CreateDIBPatternBrush    Polyline            SetPolyFillMode
	CreateFontIndirect       PolyPolygon         SetROP2
	CreatePatternBrush       RealizePalette      SetStretchBltMode
	Ellipse                  RestoreDC           SetTextColor
	Escape                   RoundRect           SetTextJustification
	ExcludeClipRect          SaveDC              SetViewportExt
	ExtTextOut               ScaleViewportExt    SetViewportOrg
	FloodFill                ScaleWindowExt      SetWindowExt
	IntersectClipRect        SelectClipRgn       SetWindowOrg
	LineTo                   SelectObject        StretchBlt
	MoveTo                   SelectPalette       StretchDIBits
	OffsetClipRgn            SetBkColor          TextOut
	
	The following table lists additional functions that are valid in a metafile under
	Windows 3.1:
	
	CreateDIBitmap           CreateSolidBrush    Rectangle
	CreateFont               DeleteObject        ResizePalette
	CreateHatchBrush         ExtFloodFill        SetPaletteEntries
	CreatePalette            FillRgn             SetTextAlign
	CreatePen                InvertRgn           SetTextCharacterExtra
	CreatePenIndirect        PaintRgn
	
	Although the following functions might function correctly in a metafile, they
	should not be used in a metafile:
	
	AbortDoc                 EndPage             StartPage
	EndDoc                   StartDoc            ResetDC
	
	Windows has a number of functions that are not supported in metafiles directly
	because they are used to put an object into a metafile. The region functions are
	a common example of this function category. An application can create an
	arbitrary region, either directly or by combining existing regions. When an
	application selects the handle to the region into a metafile DC (display
	context), Windows records a CREATEREGION record into the metafile.
	
	An application can select a bitmap into a memory DC that is compatible with the
	display (not directly into the metafile), and then then call the BitBlt function
	to move the bitmap from the memory DC into the metafile DC. Windows saves the
	bitmap image in the metafile as a Device-Independent Bitmap(DIB).
	
	For more information, please refer to the online documentation for the Windows
	SDK or pages 106-109 of the "Windows SDK: Programmer's Reference, Volume 1:
	Overview" for version 3.1 manual.
	
	* As a general rule, a metafile should be as device-independent as possible.
	Therefore, an application should not record into a metafile a GDI function that
	requires device units. Such functions include BitBlt, FillRgn, SetViewportExt,
	and SetViewportOrg.
	
	Additional query words: 3.00 3.10 docerr
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
