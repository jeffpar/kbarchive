---
layout: page
title: "Q79982: PRB: BS_GROUPBOX-Style Child Window Background Painting Wrong"
permalink: kb/079/Q79982/
---

## Q79982: PRB: BS_GROUPBOX-Style Child Window Background Painting Wrong

	Article: Q79982
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbButton kbCtrl kbSDKPlatform
	Last Modified: 11-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbprb kbcode
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a BS_GROUPBOX style window is created, its background does not erase
	correctly.
	
	CAUSE
	=====
	
	The parent window of the BS_GROUPBOX style window has the WS_CLIPCHILDREN style,
	which prevents the parent window from erasing the group box's background.
	
	RESOLUTION
	==========
	
	Subclass the group box window to process the WM_ERASEBKGND message by erasing
	its background. Listed below is a code fragment to demonstrate this procedure.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The WS_CLIPCHILDREN style causes a window to exclude the areas occupied by child
	windows when the window paints its client area. However, a BS_GROUPBOX style
	window is a static control that never erases its background. Erasing the
	background removes any controls or buttons that appear within the group box.
	
	Therefore, when another child window is dropped over a group box and subsequently
	dragged away, portions of that child window remain visible in the group box's
	background. This problem does not occur when the parent window does not have the
	WS_CLIPCHILDREN style.
	
	The following code fragment should be placed in the group box's subclass
	procedure. This code erases the background of the group box.
	
	     case WM_ERASEBKGND:
	
	      {
	      HBRUSH  hBrush, hOldBrush;
	      HPEN    hPen, hOldPen;
	      RECT    rect;
	      HDC     hDC;
	
	      hDC = GetDC(hWnd);
	
	      // Obtain a handle to the parent window's background brush.
	      hBrush = GetClassWord(ghWnd, GCW_HBRBACKGROUND);
	      hOldBrush = SelectObject(hDC, hBrush);
	
	      // Create a background-colored pen to draw the rectangle
	      // borders, where gWindowColor is some globally defined
	      // COLORREF variable used to paint the window's background
	      hPen = CreatePen(PS_SOLID, 1, gWindowColor);
	      hOldPen = SelectObject(hDC, hPen);
	
	      // Erase the group box's background.
	      GetClientRect(hWnd, &rect);
	      Rectangle(hDC, rect.left, rect.top, rect.right, rect.bottom);
	
	      // Restore the original objects before releasing the DC.
	      SelectObject(hDC, hOldPen);
	      SelectObject(hDC, hOldBrush);
	
	      // Delete the created object.
	      DeleteObject(hPen);
	
	      ReleaseDC(hWnd, hDC);
	
	      // Instruct Windows to paint the group box text and frame.
	      InvalidateRect(hWnd, NULL, FALSE);
	
	      // Insert code here to instruct the contents of the group box
	      // to repaint as well.
	
	      return TRUE; // Background has been erased.
	      }
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbButton kbCtrl kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
