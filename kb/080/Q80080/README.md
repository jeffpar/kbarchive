---
layout: page
title: "Q80080: HOWTO: Convert Between Device-Dependent Bitmaps and DIBs"
permalink: /kb/080/Q80080/
---

## Q80080: HOWTO: Convert Between Device-Dependent Bitmaps and DIBs

	Article: Q80080
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 kbDSupport kbOSWin300 kbSDKWin16 kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the basic steps involved in converting between device-
	dependent bitmaps (DDBs) and Windows 3.0 style device-independent bitmaps
	(DIBs). This article assumes some background knowledge of bitmaps, DIBs,
	palettes, and memory allocation.
	
	The SHOWDIB sample application provided in versions 3.0 and 3.1 of the Windows
	SDK, the WINCAP sample application available in the Microsoft Download Center,
	and the DIBVIEW sample application provided in version 3.1 of the Windows SDK
	and in the Professional Edition of Visual C++ each demonstrate the steps
	described in this article.
	
	MORE INFORMATION
	================
	
	Use the following steps to convert a DDB to a DIB:
	
	1. Initialize the BITMAPINFOHEADER data structure.
	  a. Set biSize to sizeof(BITMAPINFOHEADER).
	
	  b. Set biWidth to the width of the bitmap.
	
	  c. Set biHeight to the height of the bitmap.
	
	  d. Set biPlanes to 1.
	
	  e. Set biBitCount to the bitmap bmPlanes multiplied by bmBitsPixel. This
	     value can contain only the values 1, 4, 8, or 24.
	
	  f. Set biCompression to the desired format (usually BI_RGB).
	
	  g. All other fields can be set to zero.
	
	  Code to initialize the BITMAPINFOHEADER data structure might look like the
	  following:
	
	     BITMAPINFOHEADER bmi;
	     BITMAP           bm;
	     .
	     .
	     .
	     bmi.biSize          = sizeof(BITMAPINFOHEADER);
	     bmi.biWidth         = bm.bmWidth;
	     bmi.biHeight        = bm.bmHeight;
	     bmi.biPlanes        = 1;
	     bmi.biBitCount      = bm.bmPlanes * bm.bmBitsPixel;
	
	     if (bmi.biBitCount <= 1)
	       bmi.biBitCount = 1;
	     else if (bmi.biBitCount <= 4)
	       bmi.biBitCount = 4;
	     else if (bmi.biBitCount <= 8)
	       bmi.biBitCount = 8;
	     else
	       bmi.biBitCount = 24;
	
	     bmi.biCompression   = BI_RGB;
	     bmi.biSizeImage     = 0;
	     bmi.biXPelsPerMeter = 0;
	     bmi.biYPelsPerMeter = 0;
	     bmi.biClrUsed       = 0;
	     bmi.biClrImportant  = 0;
	
	2. If there is a logical palette associated with the bitmap, select the palette
	  into the desired device context using SelectObject(), then realize the
	  palette with RealizePalette().
	
	3. Allocate a block of memory large enough to store the BITMAPINFOHEADER
	  structure and the color table for the DIB. The color table is an array of
	  RGBQUAD structures that contain the colors used by the image. The size of the
	  color table is the number of colors multiplied by sizeof(RGBQUAD). The number
	  of colors is found using the biBitCount field in BITMAPINFOHEADER, which
	  specifies the color resolution (bits per pixel). For example, 1 bit-per-pixel
	  means monochrome (2 colors), 4 bits-per-pixel means 16 colors, and 8
	  bits-per-pixel means 256 colors. For a 24-bit color image, however, there is
	  no color table.
	
	4. Call the GetDIBits() function with the desired device context (DC), a pointer
	  to the memory block as lpBitsInfo, and NULL as the lpBits parameter. Doing so
	  instructs the device driver to fill in the biSizeImage field of the
	  BITMAPINFOHEADER structure (this field should have been initialized to 0 in
	  step 1). The biSizeImage field specifies the amount of memory required (in
	  bytes) to store the bits that make up the image of the DIB. If this field
	  remains 0 after calling GetDIBits(), the application must calculate
	  biSizeImage using the following formula:
	
	  ((((biWidth * biBitCount) + 31) & ~31) >> 3) * biHeight
	
	  This formula is required because each scan line of the image is aligned on a
	  DWORD boundary.
	
	5. Reallocate the memory block containing the BITMAPINFOHEADER and color table
	  to provide additional memory to store the bits of the DIB.
	
	6. Call GetDIBits() with the desired DC, a pointer to the memory block as
	  lpBitsInfo, a pointer to the buffer for the bitmap bits as lpBits, and wUsage
	  as DIB_RGB_COLORS. This stores the bits of the DIB with the BITMAPINFOHEADER
	  structure and completes the color table.
	
	In the sample applications listed above, the DibFromBitmap() function in the
	DIB.C file of SHOWDIB, the BitmapToDIB() function in the DIBUTIL.C file of
	WINCAP, and the BitmapToDIB() function in the DIB.C file of DIBVIEW demonstrate
	the process above.
	
	NOTE: The first two samples convert bitmaps into Windows 3.0 style DIBs and do
	not support OS/2-style DIBs. DIBVIEW does support OS/2-style DIBs.
	
	For more information on the Windows 3.0-style DIB format, see the documentation
	for the BITMAPINFO, BITMAPINFOHEADER, and RGBQUAD structures in the "Microsoft
	Windows Software Development Kit Reference Volume 2" version 3.0 manual and in
	the Windows 3.1 SDK "Programmer's Reference, Volume 3: Messages, Structures, and
	Macro's" manual.
	
	To convert a DIB to a DDB, do the following:
	
	1. Create a logical palette from the information in the DIB color table.
	  Complete a LOGPALETTE data structure using the color values found in the
	  color table, then call CreatePalette().
	
	2. Select the logical palette into the desired device context using
	  SelectObject(), then realize the palette using RealizePalette().
	
	3. Call CreateDIBitmap() using the desired DC and the pointer to the DIB as the
	  lpInfoHeader parameter. This function returns a handle to a DDB.
	
	In the sample applications listed above, the BitmapFromDib() function in the
	DIB.C file of SHOWDIB, the DIBToBitmap() function in the DIBUTIL.C file of
	WINCAP, and the DIBToBitmap() function in the DIB.C file of DIBVIEW demonstrate
	the process above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin310 kbDSupport kbOSWin300 kbSDKWin16 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	
