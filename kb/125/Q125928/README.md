---
layout: page
title: "Q125928: HOWTO: How to Mix GDI and WinG"
permalink: /kb/125/Q125928/
---

## Q125928: HOWTO: How to Mix GDI and WinG

{% raw %}

	Article: Q125928
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	1.00    | 1.00
	WINDOWS | WINDOWS NT
	kbprg kbwebcontent
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft WinG API, used with:
	   - Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	   - the operating system: Microsoft Windows NT 
	   - Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	BitBlt(), WinGBitBlt(), StretchBlt(), and WinGStretchBlt(), can all be used to
	move bits in an image from one DC to another. However, there are different
	restrictions on what the source and destination DC can be for each of the
	functions. In addition, the platform that the application is running on also
	affects what the source and destination DCs can be.
	
	Possible Source and Destination DC Combinations
	-----------------------------------------------
	
	The following two tables list some of the possible source and destination DC
	combinations for each function:
	
	The following two tables apply to:
	
	- 16-bit Windows-based application running under Windows version 3.1.
	
	  -or-
	
	- 32-bit Windows-based application running under Windows version 3.1 with
	  Win32s.
	
	  BitBlt(), StretchBlt()
	
	     From                 To: WinGDC    To: Screen/Memory DC
	     -------------------------------------------------------
	     WinGDC               Yes           *No
	     Screen/Memory DC     *No           Yes
	
	    *On a memory DC, the blt's return value will indicate success
	     but the function will not perform as expected.
	
	  WinGBitBlt(), WinGStretchBlt()
	
	     From                 To: WinGDC    To: Screen/Memory DC
	     -------------------------------------------------------
	     WinGDC               No            Yes (screen only)
	     Screen/Memory DC     No            No
	
	The following two tables apply to:
	
	- 16-bit or 32-bit Windows-based application running under Windows NT or
	  Windows 95:
	
	  BitBlt(), StretchBlt()
	
	     From                 To: WinGDC    To: Screen/Memory DC
	     -------------------------------------------------------
	     WinGDC               Yes           Yes
	     Screen/Memory DC     Yes           Yes
	
	  WinGBitBlt(), WinGStretchBlt()
	
	     From                 To: WinGDC    To: Screen/Memory DC
	     ----------------------------------------------------
	     WinGDC               Yes           Yes
	     Screen/Memory DC     Yes           Yes
	
	MORE INFORMATION
	================
	
	Mixing GDI and WinG
	-------------------
	
	There are two ways to use GDI and WinG together. You can mix GDI and custom
	drawing operations into WinGBitmaps, and you can mix GDI operations and WinG
	blts to the screen. Both have their caveats.
	
	Drawing into WinGBitmaps
	------------------------
	
	WinG allows drawing onto the DIB surface of a WinGDC with GDI, but there are some
	anomalies to keep in mind.
	
	- Most importantly, GDI does NOT regard WinGDCs as palette devices. WinGDCs are
	  actually 256-color RGB devices. You can modify the device color table using
	  the WinGSetDIBColorTable API.
	
	- Drawing with GDI on a WinGDC surface does not always produce a pixel-perfect
	  duplicate of the image you would see using GDI on a display device. The
	  images will be acceptably similar, but some stray pixels will remain if you
	  XOR the two images together.
	
	- Brushes realized in a WinGDC will be aligned to the upper-left corner of the
	  WinGDC whereas brushes used in screen DCs are aligned to the upper-left
	  corner of the screen. This means that when you blt a WinGDC that has been
	  filled with a pattern into a screen DC that has been filled with the same
	  pattern, the patterns will not necessarily align correctly.
	
	  If you have this problem, you can either change the brush origins and
	  re-realize the brushes in either DC (see the section "1.6.8 Brush Alignment"
	  in the Windows SDK Programmer's Reference Volume 1, also available on the
	  Microsoft Developer Network CD) or you can make off-screen brushes align
	  correctly with on-screen brushes by blting the WinGDC to a brush-aligned
	  position on the screen. For example, an 8x8 brush pattern can be correctly
	  aligned to the screen by blting the WinGDC to an x, y position when x and y
	  are both multiples of 8.
	
	- BitBlt does not blt between DCs owned by different devices. You can't blt
	  from a Printer DC to a Display DC, for example. A WinGDC is a new type of
	  device context, and just as with other DCs, you can't use BitBlt to blt
	  between a WinGDC and any other type of DC (such as a WinGDC to a Display DC
	  or a Memory DC to a WinGDC). To blt from a WinGDC to a DisplayDC, use
	  WinGBitBlt or WinGStretchBlt. Again, you can't use BitBlt to blt from a
	  Display DC to a WinGDC on Windows version 3.x or Win32s, and you can only use
	  WinGBitBlt or WinGStretchBlt to blt from a WinGDC to the screen.
	
	  To blt from the screen into a WinGDC on Windows version 3.x, you will need to
	  create a compatible bitmap, BitBlt the screen rectangle into this bitmap, and
	  then GetDIBits from the bitmap into the WinGDC's DIB surface. On Windows 95
	  and Windows NT version 3.5, BitBlt into a WinGDC will work properly.
	
	  Win32-based applications that use GDI and custom drawing routines to draw on
	  the surface of a WinGBitmap should call GDIFlush after calling GDI functions
	  and before calling custom functions. Win32 GDI batches drawing commands,
	  including WinGBitBlt and WinGStretchBlt. This guarantees that all GDI drawing
	  is completed before custom drawing begins. Without this call, drawing may be
	  done in an incorrect order.
	
	Drawing to the Screen
	---------------------
	
	Win32-based applications should call GDIFlush after blting to the screen from a
	WinGDC.
	
	REFERENCES
	==========
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinGSearch
	Version           : :3.x
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
