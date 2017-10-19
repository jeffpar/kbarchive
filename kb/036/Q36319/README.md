---
layout: page
title: "Q36319: INFO: Algorithm Creates Window Same Size As Full-Screen Window"
permalink: /kb/036/Q36319/
---

## Q36319: INFO: Algorithm Creates Window Same Size As Full-Screen Window

	Article: Q36319
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): _IK kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The algorithm listed below creates a window the size of the "standard"
	full-screen window.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	      int winBorder, cxBorder, cyBorder,
	          cxMargin, cxBAMargin, cyBAMargin,
	          x, y, cx, cy;
	
	      /* Get the user-defined border width */ 
	      winBorder = GetProfileInt("windows", "BorderWidth", 5);
	      /* It must be in the range of 0 < winBorder < 51 */ 
	      if (winBorder < 1) {
	          winBorder = 1;
	      } else if (winBorder > 50) {
	          winBorder = 50;
	      }
	
	      /* Get some internal system metrics to determine extra scaling */ 
	      cxBorder = GetSystemMetrics (SM_CXBORDER);
	      cyBorder = GetSystemMetrics (SM_CYBORDER);
	      cxMargin = (cxBorder * winBorder) + cxBorder;
	
	      /* Byte align the border */ 
	      cxBAMargin = (((cxMargin + 7) & 0xFFF8) - cxMargin);
	      cyBAMargin = cxBAMargin * cyBorder / cxBorder;
	
	      x  = cxBAMargin;
	      y  = cyBAMargin;
	      cx = CW_USEDEFAULT;
	      cy = 0;
	
	      hWnd = CreateWindow(szAppName, szTitle, WS_OVERLAPPEDWINDOW,
	                          x, y, cx, cy,
	                          NULL, NULL, hInstance, NULL);
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	
