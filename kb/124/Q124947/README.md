---
layout: page
title: "Q124947: INFO: Retrieving Palette Information from a Bitmap Resource"
permalink: /kb/124/Q124947/
---

## Q124947: INFO: Retrieving Palette Information from a Bitmap Resource

	Article: Q124947
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:1.2,1.25a,1.3,3.1,95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbSDKWin32 kbOSWin310 kbOSWin95 kbDSupport
	Last Modified: 11-MAY-2001
	
	1.20 1.25a 1.30 3.10 4.00 | 3.50 3.51
	WINDOWS                   | WINDOWS NT
	kbgraphic
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Win32s versions 1.2, 1.25a, 1.3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may sometime need to create a logical palette from a bitmap resource in
	order to display the bitmap with the maximum number of available colors. For
	example, on an 8 bit-per-pixel display, a logical palette is necessary to draw a
	256-color bitmap on a device context for that display. The LoadBitmap function
	does not return or take a palette as one of its parameters; thus, for example,
	there is no way to incorporate a palette with a 256-color bitmap loaded with
	LoadBitmap. Therefore, an application must load the resource as a
	device-independent bitmap (DIB), rather than a device-dependent bitmap (DDB), in
	order to retrieve the bitmap's color information. An application can use the
	FindResource, LoadResource, and LockResource functions to do this.
	
	The solution differs slightly for Win32s.
	
	MORE INFORMATION
	================
	
	Windows and Windows NT
	----------------------
	
	A bitmap (.BMP file) is stored in an application's resources as a (DIB), along
	with a color table if one exists. When a DIB is loaded from an application's
	resources with the LoadBitmap function, a DDB is returned. This DDB is a bitmap
	compatible with the screen. Routines such as CreateDIBitmap and SetDIBits that
	convert DIBs to DDBs take a handle to a device context as their first parameter.
	This tells the routine what kind of DDB to create. If this device context
	currently has a palette selected into it, then CreateDIBitmap or SetDIBits can
	use this palette to create the DDB. Without a palette, the routines are
	restricted to system colors when matching the DIB's colors to the DDB's colors.
	For example, on an 8 bit-per-pixel display, the resulting DDB can have only up
	to 20 different colors. With a logical palette, the resulting bitmap could have
	had up to 256 different colors.
	
	If the bitmap is loaded as a DIB from the resource, then an application can query
	the DIB's color table and create a logical palette for the DIB. Then, it can
	call either CreateDIBitmap or SetDIBits, along with a device context with that
	palette selected, to obtain a DDB compatible with that palette. To load a bitmap
	from a resource as a DIB, you can use the FindResource function with the
	RT_BITMAP flag set and then use the LoadResource function to load it. You can
	lock the resource with the LockResource function.
	
	The following code demonstrates how to use the above technique to load a DIB from
	an application's resources, create a palette for it, and then create a DDB out
	of it. The LoadResourceBitmap function below can be used in place of the
	LoadBitmap function. The only additional parameter needed is the address of a
	logical palette handle. The palette handle referenced will contain a handle to a
	logical palette after the function is called.
	
	     HBITMAP LoadResourceBitmap(HINSTANCE hInstance, LPSTR lpString,
	
	                             HPALETTE FAR* lphPalette)
	
	     {
	
	     HRSRC  hRsrc;
	     HGLOBAL hGlobal;
	     HBITMAP hBitmapFinal = NULL;
	     LPBITMAPINFOHEADER  lpbi;
	     HDC hdc;
	     int iNumColors;
	
	     if (hRsrc = FindResource(hInstance, lpString, RT_BITMAP))
	        {
	        hGlobal = LoadResource(hInstance, hRsrc);
	        lpbi = (LPBITMAPINFOHEADER)LockResource(hGlobal);
	
	        hdc = GetDC(NULL);
	        *lphPalette =  CreateDIBPalette ((LPBITMAPINFO)lpbi, &iNumColors);
	        if (*lphPalette)
	           {
	           SelectPalette(hdc,*lphPalette,FALSE);
	           RealizePalette(hdc);
	           }
	
	      hBitmapFinal = CreateDIBitmap(hdc,
	                  (LPBITMAPINFOHEADER)lpbi,
	                  (LONG)CBM_INIT,
	                  (LPSTR)lpbi + lpbi->biSize + iNumColors *
	
	     sizeof(RGBQUAD),
	
	                  (LPBITMAPINFO)lpbi,
	                  DIB_RGB_COLORS );
	
	      ReleaseDC(NULL,hdc);
	      UnlockResource(hGlobal);
	      FreeResource(hGlobal);
	      }
	      return (hBitmapFinal);
	
	     }
	
	     HPALETTE CreateDIBPalette (LPBITMAPINFO lpbmi, LPINT lpiNumColors)
	     {
	
	     LPBITMAPINFOHEADER  lpbi;
	     LPLOGPALETTE     lpPal;
	     HANDLE           hLogPal;
	     HPALETTE         hPal = NULL;
	     int              i;
	
	     lpbi = (LPBITMAPINFOHEADER)lpbmi;
	     if (lpbi->biBitCount <= 8)
	
	         *lpiNumColors = (1 << lpbi->biBitCount);
	
	     else
	
	         *lpiNumColors = 0;  // No palette needed for 24 BPP DIB
	
	     if (lpbi->biClrUsed > 0)
	
	         *lpiNumColors = lpbi->biClrUsed;  // Use biClrUsed
	
	     if (*lpiNumColors)
	
	        {
	        hLogPal = GlobalAlloc (GHND, sizeof (LOGPALETTE) +
	                               sizeof (PALETTEENTRY) * (*lpiNumColors));
	        lpPal = (LPLOGPALETTE) GlobalLock (hLogPal);
	        lpPal->palVersion    = 0x300;
	        lpPal->palNumEntries = *lpiNumColors;
	
	        for (i = 0;  i < *lpiNumColors;  i++)
	           {
	           lpPal->palPalEntry[i].peRed   = lpbmi->bmiColors[i].rgbRed;
	           lpPal->palPalEntry[i].peGreen = lpbmi->bmiColors[i].rgbGreen;
	           lpPal->palPalEntry[i].peBlue  = lpbmi->bmiColors[i].rgbBlue;
	           lpPal->palPalEntry[i].peFlags = 0;
	           }
	        hPal = CreatePalette (lpPal);
	        GlobalUnlock (hLogPal);
	        GlobalFree   (hLogPal);
	
	     }
	     return hPal;
	
	     }
	
	Here is an example of how you might use the above function to load a bitmap from
	a resource and display it using a logical palette:
	
	     {
	     HBITMAP hBitmap,hOldBitmap;
	     HPALETTE hPalette;
	     HDC hMemDC, hdc;
	     BITMAP bm;
	
	     hBitmap = LoadResourceBitmap(hInst,"test", &hPalette);
	     GetObject(hBitmap, sizeof(BITMAP), (LPSTR)&bm);
	     hdc = GetDC(hWnd);
	     hMemDC = CreateCompatibleDC(hdc);
	     SelectPalette(hdc,hPalette,FALSE);
	     RealizePalette(hdc);
	     SelectPalette(hMemDC,hPalette,FALSE);
	     RealizePalette(hMemDC);
	     hOldBitmap = SelectObject(hMemDC,hBitmap);
	     BitBlt(hdc,0,0,bm.bmWidth,bm.bmHeight,hMemDC,0,0,SRCCOPY);
	     DeleteObject(SelectObject(hMemDC,hOldBitmap));
	     DeleteDC(hMemDC);
	     ReleaseDC(hWnd,hdc);
	     DeleteObject(hPalette);
	     }
	
	Win32s
	------
	
	On Win32s, LoadResource does not return a true global memory handle. This causes
	CreateDIBitmap to fail. To work around this problem, use GlobalAlloc to create a
	global memory handle.
	
	Here is what LoadResourceBitmap should be on Win32s:
	
	HBITMAP LoadResourceBitmap(HINSTANCE hInstance, LPSTR lpString,
	
	                             HPALETTE FAR* lphPalette)
	
	     {
	
	     HRSRC  hRsrc;
	     HGLOBAL hGlobal, hTemp;
	     DWORD dwSize;
	     HBITMAP hBitmapFinal = NULL;
	     LPBITMAPINFOHEADER  lpbi;
	     LPSTR lpRes, lpNew;
	     HDC hdc;
	     int iNumColors;
	
	     if (hRsrc = FindResource(hInstance, lpString, RT_BITMAP))
	     {
	        hTemp = LoadResource(hInstance, hRsrc);
	        dwSize = SizeofResource(hInstance, hRsrc);
	        lpRes = LockResource(hTemp);
	
	      hGlobal = GlobalAlloc(GHND, dwSize);
	      lpNew = GlobalLock(hGlobal);
	      memcpy(lpNew, lpRes, dwSize);
	      UnlockResource(hTemp);
	      FreeResource(hTemp);
	
	      lpbi = (LPBITMAPINFOHEADER)lpNew;
	
	      hdc = GetDC(NULL);
	      *lphPalette =  CreateDIBPalette ((LPBITMAPINFO)lpbi, &iNumColors);
	      if (*lphPalette)
	      {
	         SelectPalette(hdc,*lphPalette,FALSE);
	         RealizePalette(hdc);
	      }
	
	      hBitmapFinal = CreateDIBitmap(hdc,
	                (LPBITMAPINFOHEADER)lpbi,
	                (LONG)CBM_INIT,
	                (LPSTR)lpbi + lpbi->biSize + iNumColors * sizeof(RGBQUAD),
	                (LPBITMAPINFO)lpbi,
	                DIB_RGB_COLORS );
	
	      ReleaseDC(NULL,hdc);
	      GlobalUnlock(hGlobal);
	      GlobalFree(hGlobal);
	     }
	     return (hBitmapFinal);
	
	     }
	
	REFERENCES
	==========
	
	For more information on DIB-related functions, please review the Microsoft
	Windows SDK sample DIBVIEW.
	
	Additional query words: 1.20 3.10 4.00
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbSDKWin32 kbOSWin310 kbOSWin95 kbDSupport 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:1.2,1.25a,1.3,3.1,95; winnt:3.5,3.51
	Issue type        : kbinfo
	
	=============================================================================
	
