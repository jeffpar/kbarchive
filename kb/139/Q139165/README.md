---
layout: page
title: "Q139165: PRB: Memory DC Produces Monochrome Images"
permalink: /kb/139/Q139165/
---

## Q139165: PRB: Memory DC Produces Monochrome Images

	Article: Q139165
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,3.11,95; winnt:3.51
	Operating System(s): 
	Keyword(s): kbcode kbOSWinNT351 kbOSWin2000 kbOSWin310 kbOSWin95 kbDSupport kbSDKWin16
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1, used with:
	   - Microsoft Windows 3.11 
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create and use a memory Device Context (DC) to draw and store GDI
	images, the bitmap displayed when transferred from the memory device context to
	the physical display is monochrome. All colors are converted to either black or
	white.
	
	CAUSE
	=====
	
	When creating a compatible bitmap for the memory DC, the handle to the memory DC
	is used as the first parameter to the call to CreateCompatibleBitmap(). This
	create a monochrome bitmap because a memory DC created with CreateCompatibleDC()
	is given a 1x1 monochrome bitmap as its default bitmap.
	
	For example, the following code creates a monochrome bitmap and selects it into a
	memory DC:
	
	     HDC hdc, hdcMem;
	     HBITMAP hBitmap;
	
	     hdc = GetDC(hWnd);
	     hdcMem = CreateCompatibleDC(hdc);
	     hBitmap = CreateCompatibleBitmap(hdcMem, 400, 400);
	     SelectObject(hdcMem, hBitmap);
	     SetTextColor(hdcMem, RGB(0, 0, 255));
	
	RESOLUTION
	==========
	
	Send a physical screen DC to the CreateCompatibleBitmap() function rather than
	the memory DC that you plan on selecting the bitmap into.
	
	The following example code properly sets up a color memory DC with a color bitmap
	with the same bit depth as the physical display:
	
	     HDC hdc, hdcMem;
	     HBITMAP hBitmap;
	
	     hdc = GetDC(hWnd);
	     hdcMem = CreateCompatibleDC(hdc);
	     hBitmap = CreateCompatibleBitmap(hdc, 400, 400);
	     SelectObject(hdcMem, hBitmap);
	     SetTextColor(hdcMem, RGB(0, 0, 255));
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.10 4.00
	
	======================================================================
	Keywords          : kbcode kbOSWinNT351 kbOSWin2000 kbOSWin310 kbOSWin95 kbDSupport kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWinSDKSearch
	Version           : WINDOWS:3.1,3.11,95; winnt:3.51
	Issue type        : kbprb
	
	=============================================================================
	
