---
layout: page
title: "Q100354: BUG: StretchDIBits() Prints Wrong Part of DIB with PSCRIPT.DRV"
permalink: /kb/100/Q100354/
---

## Q100354: BUG: StretchDIBits() Prints Wrong Part of DIB with PSCRIPT.DRV

	Article: Q100354
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonlykbbuglist
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using StretchDIBits() to print a section of a device-independent bitmap
	(DIB) with the Windows version 3.1 PostScript printer driver, in some cases the
	wrong part of the DIB is printed. When printing the entire DIB, StretchDIBits()
	works correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in version 3.5 of the PostScript
	printer driver (PSCRIPT.DRV) that shipped with Windows 3.1. The problem also
	occurs with version 3.55 of the PostScript driver that is currently available in
	the Windows Driver Library (WDL).
	
	MORE INFORMATION
	================
	
	Below is the function prototype for StretchDIBits():
	
	  int StretchDIBits(hdc, XDest, YDest, cxDest, cyDest, XSrc, YSrc, cxSrc,
	                    cySrc, lpvBits, lpbmi, fuColorUse, fdwRop)
	  HDC hdc;                      // Handle of device context
	  int XDest;                    // X-coordinate of destination rectangle
	  int YDest;                    // Y-coordinate of destination rectangle
	  int cxDest;                   // Width of destination rectangle
	  int cyDest;                   // Height of destination rectangle
	  int XSrc;                     // X-coordinate of source rectangle
	  int YSrc;                     // Y-coordinate of source rectangle
	  int cxSrc;                    // Width of source rectangle
	  int cySrc;                    // Height of source rectangle
	  const void FAR* lpvBits;      // Address of buffer with DIB bits
	  LPBITMAPINFO lpbmi;           // Address of structure with bitmap data
	  UINT fuColorUse;              // RGB or palette indices
	  DWORD fdwRop;                 // Raster operation
	
	To print the entire DIB, set both XSrc and YSrc to 0 (zero). This starting
	location of (0,0) corresponds to the bottom-left corner of the DIB. If you do
	not want to print the bottom portion of the DIB, change the starting location.
	Typically, you increase YSrc to the desired value and leave XSrc at 0 (as well
	as adjusting cySrc appropriately) so that the starting location is at the
	beginning of a scan line in the DIB. If the value of YSrc is such that the
	distance from the beginning of the DIB to (XSrc, YSrc) crosses a 64K segment
	boundary, the wrong part of the DIB will be printed.
	
	To print the top section of the DIB, the printer driver must adjust lpvBits, the
	pointer to the DIB bits. Unfortunately, the segment portion of the huge pointer
	to the DIB bits is not incremented correctly; only the offset portion is
	incremented. Because the pointer to the DIB bits is not adjusted correctly, it
	points to the wrong section of the DIB bits and the wrong part of the DIB is
	printed.
	
	Until the printer driver is fixed, application developers should themselves
	adjust the pointer to the DIB bits. The values of the biHeight and biSizeImage
	fields in the BITMAPINFOHEADER also must be adjusted accordingly. All the
	necessary code to calculate the new value for lpvBits can be obtained from the
	sample program DIBVIEW or WINCAP.
	
	For example:
	
	  // PaletteSize() and WIDTHBYTES can be found in either DIBVIEW or WINCAP
	
	   LPBITMAPINFOHEADER lpDIBHdr;  // Pointer to BITMAPINFO struct
	                                 // casted to LPBITMAPINFOHEADER
	   LPSTR lpDIBBits;              // Pointer to DIB bits
	   char _huge *lpTempDIBBits;    // IMPORTANT - must be a huge pointer
	   DWORD  dwPalSize;             // Number of bytes in DIB color table
	   DWORD  dwNumBytes;            // Number of bytes from beginning of DIB
	                                 // bits to (0, YSrc)
	   DWORD  dwSize;                // Number of bytes from beginning of DIB
	                                 // to (0, YSrc)
	   DWORD  dwSaveHeight;          // Save original DIB biHeight
	   DWORD  dwSaveSizeImage;       // Save original DIB biSizeImage
	  ...
	
	   // Number of bytes in the DIB's color table.
	   dwPalSize = PaletteSize((LPSTR)lpDIBHdr);
	
	   // WIDTHBYTES calculates the number of bytes in one scan line.
	   // dwNumBytes is the number of bytes from the beginning of the DIB
	   // bits to the location (0, YSrc) in the DIB.
	   dwNumBytes = YSrc * WIDTHBYTES(lpDIBHdr->biWidth * lpDIBHdr->biBitCount);
	
	   // dwSize is the number of bytes from the beginning of the DIB to
	   // the location (0, YSrc) in the DIB.
	   dwSize = dwNumBytes + dwPalSize + (DWORD)sizeof(BITMAPINFOHEADER);
	
	   if (dwSize >= 65536)
	   {
	      // Carefully adjust the pointer to the DIB bits.
	      // Important Note: Due to problems with versions 6.0 and 7.0
	      // of the Microsoft C Compiler, manipulating the pointer in one
	      // statement may result in the segment portion of the huge pointer
	      // being adjusted incorrectly or not at all.
	      lpTempDIBBits = (char huge *)lpDIBBits;
	      lpTempDIBBits = lpTempDIBBits + dwNumBytes;
	      dwSaveHeight =  lpDIBHdr->biHeight;
	      dwSaveSizeImage =  lpDIBHdr->biSizeImage;
	      lpDIBHdr->biHeight -=YSrc;
	      lpDIBHdr->biSizeImage= WIDTHBYTES(lpDIBHdr->biWidth *
	                                        lpDIBHdr->biBitCount) *
	                                        lpDIBHdr->biHeight;
	      YSrc = 0;
	   }
	
	   if (!StretchDIBits (hDC,                           // DestDC
	                       XDest,
	                       YDest,
	                       DestWidth,
	                       DestHeight,
	                       XSrc,
	                       YSrc,
	                       SrcWidth,
	                       SrcHeight,
	                       lpTempDIBBits,                 // DIB bits
	                       (LPBITMAPINFO) lpDIBHdr,
	                       DIB_RGB_COLORS,                // wUsage
	                       SRCCOPY))                      // dwROP
	      dwError |= ERR_PRN_STRETCHDIBITS;
	
	   if (dwSize >= 65536)
	   {
	      lpDIBHdr->biHeight = dwSaveHeight;
	      lpDIBHdr->biSizeImage = dwSaveSizeImage;
	   }
	
	For additional information on WINCAP, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q97193 SAMPLE: WINCAP Captures Screens Using DIB API
	
	DIBVIEW can be found in the SAMPLES directory of version 3.1 of the Windows
	Software Development Kit (SDK) and Visual C++ for Windows.
	
	This is not an issue with Windows 95.
	
	Additional query words: no32bit 3.10 buglist3.10
	
	======================================================================
	Keywords          : kb16bitonly kbbuglist
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
