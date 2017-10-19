---
layout: page
title: "Q77282: Bit2Mono.exe Changes Color Bitmaps to Monochrome"
permalink: /kb/077/Q77282/
---

## Q77282: Bit2Mono.exe Changes Color Bitmaps to Monochrome

	Article: Q77282
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbBitmap kbGDI kbDSupport kbSDKWin16
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Bit2Mono.exe is a sample application that demonstrates how to convert a color
	bitmap to a monochrome bitmap. It also demonstrates the effect of changing the
	background and text color on a monochrome bitmap. It is often desirable to
	convert a color bitmap into a monochrome bitmap so that it can be used to
	dynamically create a cursor (or icon). The procedure is relatively simple and is
	described in this article.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Bit2Mono.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Converting a color bitmap to a monochrome bitmap basically involves three steps:
	
	1. Select the color bitmap into a compatible memory DC (display context).
	
	2. Use GetDIBits to retrieve the bitmap information and create a color DIB
	  (device independent bitmap).
	
	3. Use SetDIBits to move the color DIB into a monochrome bitmap, performing the
	  "smart" conversion from color to monochrome.
	
	The resulting monochrome bitmap has the same bitmap "pattern," in a monochrome
	format.
	
	The following code sample demonstrates this process:
	
	       hbmLoaded = LoadBitmap(hInst, "mybitmap");
	
	       // convert color bitmap to monochrome
	       hbmMono = ColorDDBToMonoDDB(hbmLoaded, 0, 0, NULL);
	
	       DeleteDC(hDCMem);
	       ReleaseDC(hWnd, hDC);
	
	The DibNumColors, PaletteSize, and ColorDDBToMonoDDB following listed functions.
	They are based on code found in the SHOWDIB example provided with the Windows
	Software Development Kit (SDK).
	
	Sample Code
	-----------
	
	     #define WIDTHBYTES(bits)  (((bits) + 31) / 32 * 4)
	
	     WORD DibNumColors (pv)
	     VOID FAR * pv;
	     {
	
	         int                bits;
	         LPBITMAPINFOHEADER lpbi;
	         LPBITMAPCOREHEADER lpbc;
	
	         lpbi = ((LPBITMAPINFOHEADER)pv);
	         lpbc = ((LPBITMAPCOREHEADER)pv);
	
	         // With the BITMAPINFO format headers, the size of the palette is
	         // in biClrUsed. In the BITMAPCORE-style headers, it depends on
	         // the bits per pixel (2 raised to the power of bits/pixel).
	
	         if (lpbi->biSize != sizeof(BITMAPCOREHEADER))
	         {
	             if (lpbi->biClrUsed != 0)
	                 return (WORD)lpbi->biClrUsed;
	             bits = lpbi->biBitCount;
	         }
	         else
	             bits = lpbc->bcBitCount;
	
	         switch (bits)
	            {
	             case 1:
	                 return 2;
	             case 4:
	                 return 16;
	             case 8:
	                 return 256;
	             default:
	                 // A 24 bit DIB has no color table
	                 return 0;
	             }
	
	     }
	
	     WORD PaletteSize(pv)
	     VOID FAR * pv;
	     {
	
	         LPBITMAPINFOHEADER lpbi;
	         WORD               NumColors;
	
	         lpbi      = (LPBITMAPINFOHEADER)pv;
	         NumColors = DibNumColors(lpbi);
	
	         if (lpbi->biSize == sizeof(BITMAPCOREHEADER))
	             return NumColors * sizeof(RGBTRIPLE);
	         else
	             return NumColors * sizeof(RGBQUAD);
	
	     }
	
	     HBITMAP ColorDDBToMonoDDB(hbm, biStyle, biBits, hpal)
	
	     HBITMAP      hbm;
	     DWORD        biStyle;
	     WORD         biBits;
	     HPALETTE     hpal;
	     {
	
	         BITMAP               bm;
	         BITMAPINFOHEADER     bi;
	         BITMAPINFOHEADER FAR *lpbi;
	         DWORD                dwLen;
	         HANDLE               hdib;
	         HANDLE               h;
	         HDC                  hdc;
	         HBITMAP              hbmMono;
	
	         if (!hbm)
	             return NULL;
	
	         if (hpal == NULL)
	             hpal = GetStockObject(DEFAULT_PALETTE);
	
	         GetObject(hbm, sizeof(bm), (LPSTR)&bm);
	
	         if (biBits == 0)
	             biBits = bm.bmPlanes * bm.bmBitsPixel;
	
	         bi.biSize          = sizeof(BITMAPINFOHEADER);
	         bi.biWidth         = bm.bmWidth;
	         bi.biHeight        = bm.bmHeight;
	         bi.biPlanes        = 1;
	         bi.biBitCount      = biBits;
	         bi.biCompression   = biStyle;
	         bi.biSizeImage     = 0;
	         bi.biXPelsPerMeter = 0;
	         bi.biYPelsPerMeter = 0;
	         bi.biClrUsed       = 0;
	         bi.biClrImportant  = 0;
	
	         dwLen = bi.biSize + PaletteSize(&bi);
	
	         hdc = GetDC(NULL);
	         hpal = SelectPalette(hdc, hpal, FALSE);
	         RealizePalette(hdc);
	
	         hdib = GlobalAlloc(GHND, dwLen);
	
	         if (!hdib)
	             {
	             SelectPalette(hdc, hpal, FALSE);
	             ReleaseDC(NULL, hdc);
	             return NULL;
	             }
	
	         lpbi = (VOID FAR *)GlobalLock(hdib);
	
	         *lpbi = bi;
	
	         // Call GetDIBits with a NULL lpBits parameter; it will calculate
	         // the biSizeImage field.
	         GetDIBits(hdc, hbm, 0, (WORD)bi.biHeight,
	             NULL, (LPBITMAPINFO)lpbi, DIB_RGB_COLORS);
	
	         bi = *lpbi;
	         GlobalUnlock(hdib);
	
	         // If the driver did not fill in the biSizeImage field,
	         // calculate it.
	         if (bi.biSizeImage == 0)
	             {
	             bi.biSizeImage = WIDTHBYTES((DWORD)bm.bmWidth * biBits)
	                 * bm.bmHeight;
	             if (biStyle != BI_RGB)
	                 bi.biSizeImage = (bi.biSizeImage * 3) / 2;
	             }
	
	         // Reallocate the buffer big enough to hold all the bits.
	         dwLen = bi.biSize + PaletteSize(&bi) + bi.biSizeImage;
	         if ((h = GlobalReAlloc(hdib, dwLen, 0)))
	             hdib = h;
	         else
	             {
	             GlobalFree(hdib);
	             hdib = NULL;
	
	             SelectPalette(hdc, hpal, FALSE);
	             ReleaseDC(NULL, hdc);
	             return hdib;
	             }
	
	         // Call GetDIBits with a NON-NULL lpBits parameter, to actually
	         // get the bits this time.
	         lpbi = (VOID FAR *)GlobalLock(hdib);
	
	         if (GetDIBits(hdc, hbm, 0, (WORD)bi.biHeight,
	                  (LPSTR)lpbi + (WORD)lpbi->biSize + PaletteSize(lpbi),
	                  (LPBITMAPINFO)lpbi, DIB_RGB_COLORS) == 0)
	              {
	              GlobalUnlock(hdib);
	              hdib = NULL;
	              SelectPalette(hdc, hpal, FALSE);
	              ReleaseDC(NULL, hdc);
	              return NULL;
	              }
	
	         // Finally, create a monochrome DDB, and put the DIB into it.
	         // SetDIBits does smart color conversion.
	         hbmMono = CreateBitmap((WORD)lpbi->biWidth, (WORD)lpbi->biHeight,
	                                1, 1, NULL);
	         SetDIBits(hdc, hbmMono, 0, lpbi->biHeight,
	                   (LPSTR)lpbi + lpbi->biSize + PaletteSize(lpbi),
	                   (LPBITMAPINFO)lpbi, DIB_RGB_COLORS);
	
	         bi = *lpbi;
	         GlobalUnlock(hdib);
	         GlobalFree(hdib);
	
	         SelectPalette(hdc, hpal, FALSE);
	         ReleaseDC(NULL, hdc);
	         return hbmMono;
	
	     }
	
	An application can create a cursor from the monochrome bitmap produced by
	ColorDDBToMonoDDB. The application can use the bitmap as either the ANDbitPlane
	or the XORbitPlane parameter to CreateCursor. The following code demonstrates
	this procedure:
	
	     // Get only the bitmap's bits, and load into a BYTE array of
	     // correct size.
	     // In this example, the bitmap created happens to have the
	     // dimensions needed for a cursor or icon. This may not always be
	     // the case. It may be necessary to "stretch" or "compress" the
	     // bitmap to the correct size, using StretchDIBits or StretchBlt
	     // (depending at what point the change in size is done).
	
	     xsize = GetSystemMetrics(SM_CXCURSOR);
	     ysize = GetSystemMetrics(SM_CYCURSOR);
	     GetObject(hbmMono, sizeof(BITMAP), (LPSTR)&bm);
	     GetBitmapBits(hbmMono, (bm.bmWidthBytes * bm.bmHeight),
	                      (LPSTR)XORbitPlane);
	
	     // The call above uses bm.bmWidthBytes instead of planes and
	     // bitsPixel because the former takes into account the fact that
	     // some drivers might pad scan lines for speed reasons.
	
	     hBitCursor = CreateCursor(ghInstance, 0, 0, xsize, ysize,
	                                             ANDbitPlane, XORbitPlane);
	
	The above procedure also applies to the CreateIcon function.
	
	The following two notes should be considered when an application uses this
	procedure:
	
	- It is always wise to call GetSystemMetrics to determine the appropriate size
	  of cursors or icons for the installed display. This removes the assumption
	  that the size is always 32 x 32, and allows the application to create the
	  cursor or icon appropriately.
	
	- Monochrome merely means one drawing color (in addition to the background
	  color). The system uses the current background and text colors chosen for the
	  application (or defaults to the system-wide choices). An application can use
	  SetBkColor, SetBkMode, and SetTextColor to modify the choice of colors in
	  each display context (DC) if desired.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbBitmap kbGDI kbDSupport kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWinSDKSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
