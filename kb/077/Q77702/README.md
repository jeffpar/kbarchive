---
layout: page
title: "Q77702: INFO: Processing WM_PALETTECHANGED and WM_QUERYNEWPALETTE"
permalink: kb/077/Q77702/
---

## Q77702: INFO: Processing WM_PALETTECHANGED and WM_QUERYNEWPALETTE

	Article: Q77702
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
	
	An application that manipulates the system palette should process the
	WM_PALETTECHANGED and WM_QUERYNEWPALETTE messages to maintain its appearance
	during system palette and input focus changes.
	
	MORE INFORMATION
	================
	
	The WM_PALETTECHANGED message informs all windows that the window with input
	focus has realized its logical palette, thereby changing the system palette.
	This message allows a window without input focus that uses a color palette to
	realize its logical palettes and update its client area.
	
	This message is sent to all windows, including the one that changed the system
	palette and caused this message to be sent. The wParam of this message contains
	the handle of the window that caused the system palette to change. To avoid an
	infinite loop, care must be taken to check that the wParam of this message does
	not match the window's handle. The following sample code demonstrates how to
	process WM_PALETTECHANGED:
	
	     case WM_PALETTECHANGED:
	         {
	         HDC hDC;           // Handle to device context
	         HPALETTE hOldPal;  // Handle to previous logical palette
	
	         // If this application did not change the palette, select
	         // and realize this application's palette
	         if (wParam != hWnd)
	            {
	            // Need the window's DC for SelectPalette/RealizePalette
	            hDC = GetDC(hWnd);
	
	            // Select and realize hPalette
	            hOldPal = SelectPalette(hDC, hPalette, FALSE);
	            RealizePalette(hDC);
	
	            // When updating the colors for an inactive window,
	            // UpdateColors can be called because it is faster than
	            // redrawing the client area (even though the results are
	            // not as good)
	            UpdateColors(hDC);
	
	            // Clean up
	            if (hOldPal)
	               SelectPalette(hDC, hOldPal, FALSE);
	            ReleaseDC(hWnd, hDC);
	            }
	         }
	         break;
	
	NOTE: The WM_PALETTECHANGED message is sent to all top-level and overlapped
	windows; therefore, if any child window uses a color palette, this message must
	be passed on to it.
	
	The WM_QUERYNEWPALETTE message informs a window that it is about to receive input
	focus. In response, the window receiving focus should realize its palette as a
	foreground palette and update its client area. If the window realizes its
	palette, it should return TRUE; otherwise, it should return FALSE. The following
	sample code demonstrates processing WM_QUERYNEWPALETTE:
	
	     case WM_QUERYNEWPALETTE:
	         {
	         HDC hDC;           // Handle to device context
	         HPALETTE hOldPal;  // Handle to previous logical palette
	
	         // Need the window's DC for SelectPalette/RealizePalette
	         hDC = GetDC(hWnd);
	
	         // Select and realize hPalette
	         hOldPal = SelectPalette(hDC, hPalette, FALSE);
	         RealizePalette(hDC);
	
	         // Redraw the entire client area
	         InvalidateRect(hWnd, NULL, TRUE);
	         UpdateWindow(hWnd);
	
	         // Clean up
	         if (hOldPal)
	            SelectPalette(hDC, hOldPal, FALSE);
	         ReleaseDC(hWnd, hDC);
	
	         // Message processed, return TRUE
	         return TRUE;
	         }
	
	NOTE: The WM_QUERYNEWPALETTE message is sent to all top-level and overlapped
	windows; therefore, if any child window uses a color palette, this message must
	be passed on to it.
	
	Additional query words: handtag
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
