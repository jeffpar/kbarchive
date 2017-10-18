---
layout: page
title: "Q27225: INFO: Determining Available RGB Values of an Output Device"
permalink: kb/027/Q27225/
---

## Q27225: INFO: Determining Available RGB Values of an Output Device

	Article: Q27225
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The best way to determine the colors supported by a device is to enumerate the
	solid pens from a Device Context (DC) associated with that device. The
	EnumObjects function enumerates the pens supported by a specified device and
	calls a callback function for each pen. To do so, EnumObjects requires three
	parameters: a device context associated with the desired device as the hDC
	parameter, OBJ_PEN as the value of the nOjbectType parameter, and the
	procedure-instance address of a callback function as the lpObjectFunc parameter.
	
	MORE INFORMATION
	================
	
	The first parameter for the callback function, lpLogObject, points to a LOGPEN
	data structure that describes each enumerated pen. When the lopnStyle field of
	the LOGPEN structure contains the PS_SOLID value, the application can retrieve
	and store the value of the lopnColor field.
	
	NOTE: For true color devices (devices that support more than 8 bits- per-pixel of
	color resolution), Windows enumerates only a subset of the supported pens. These
	devices support almost any color.
	
	The following code demonstrates the process:
	
	     int cMaxRGB, nCnt, nSolid; // Global variables for system RGB colors
	     void GetColorList(HWND hWnd)
	      {
	     HDC hdc;
	     FARPROC lpProcCallback;
	     HANDLE hmem;
	     BYTE FAR *lpmem;
	
	     nCnt = nSolid = 0;
	     hdc = GetDC(hWnd);
	     cMaxRGB = GetDeviceCaps(hdc, NUMCOLORS);
	     if (cMaxRGB >= 0x7FFF)
	   
	       return; // All colors available. Enumeration not required.
	     lpProcCallback = MakeProcInstance(Callback, hInst);
	     // Allocate space for color table
	     hmem = GlobalAlloc(GHND, sizeof(COLORREF) * cMaxRGB);
	     lpmem = GlobalLock(hmem);
	
	     EnumObjects(hdc, OBJ_PEN, lpProcCallback, lpmem);
	
	     FreeProcInstance(lpProcCallback);
	
	     // Use the color table stored in the first nSolid entries of a
	     // COLORREF array stored in lpmem.
	
	     GlobalUnlock(hmem);
	     GlobalFree(hmem);
	     ReleaseDC(hWnd, hdc);
	     return;
	     }
	
	The source for the enumeration callback function is below. The callback function
	must be listed in the EXPORTS section of the module definition (DEF) file.
	
	     int FAR PASCAL Callback(LPLOGPEN lpLogPen, LPSTR lpData)
	     {
	     nCnt++;
	     if (lpLogPen->lopnStyle == PS_SOLID) // solid pen
	        {
	        COLORREF FAR *lpDest = (COLORREF FAR *)lpData + nSolid++;
	        *lpDest = lpLogPen->lopnColor; // remember the solid color
	        }
	
	     if (nCnt >= cMaxRGB)
	        return 0;
	     return 1;
	
	     }
	
	Additional query words: 3.00 3.10 3.50 4.00
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
