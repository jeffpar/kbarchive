---
layout: page
title: "Q92533: Implementing Display Driver Device Bitmaps"
permalink: kb/092/Q92533/
---

## Q92533: Implementing Display Driver Device Bitmaps

	Article: Q92533
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Microsoft Windows 3.1 Device Driver Kit: Device Driver Adaptation Guide"
	(DDAG) documentation on implementing display driver Device Bitmaps is
	inconsistent between chapters 2 and 10.
	
	Chapter 10 information for RealizeObject states that you can fail the call to
	realize a device bitmap (i.e. when the wStyle parameter is OBJ_PBITMAP). This
	information appears to conflict with that found in chapter 2, section 2.1.14.
	The information in chapter 2 is correct, and is more specific to display
	drivers.
	
	MORE INFORMATION
	================
	
	If you implement Device Bitmaps, you can not fail any calls to SelectBitmap(),
	BitmapBits(), or RealizeObject(). If you can't find room in off-screen video
	memory, you must allocate main system memory with GlobalAlloc().
	
	You can use SelectBitmap as the place to lock-down your huge bitmaps that won't
	fit off-screen. However, these bitmaps won't always be selected prior to
	MemoryDIBBits() or BitmapBits() (these are the places where the bitmap is passed
	through GDI directly rather than indirectly via DCs). Furthermore, bitmaps may
	be selected multiple times without being deselected. Additionally, a bitmap may
	be freed while it is still selected.
	
	According to the DDK documentation, GDI will leave you to manage your PBITMAP and
	its header if the first word is non-zero. (The PBITMAP must still be implemented
	as documented on page 504 of the 3.1 DDK DDAG.) There are at least two cases
	where this is not true: GDI will periodically overwrite the dword at the bmBits
	offset (with seg:0020) and it may also overwrite the bmlpPDevice field. Some
	driver developers have used the "reserved" structure members of the PBITMAP to
	store the information that should be in the overwritten fields, thus avoiding
	the overwrite problem (this does however create version dependence.)
	
	There is also a small memory leak which may be specific to device bitmaps: GDI
	will create a bitmap to hold a copy of the bits passed into
	CreatePatternBrush(), but it will never free the copy. Excel makes a lot of
	these calls when it draws charts, resulting in a pile of orphaned 8x8 brush
	copies (which will eventually exhaust GDI's heap!)
	
	Because of these problems, we recommend that Device Bitmaps be implemented as a
	SYSTEM.INI option, allowing users to turn them off if they determine Device
	Bitmaps are causing problems.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK310 kbWinDDK311
	Version           : :3.1,3.11
	
	=============================================================================
	
