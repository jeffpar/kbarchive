---
layout: page
title: "Q111580: BUG: Some ROP Codes Cause Inconsistent Polygon() Line Segments"
permalink: /kb/111/Q111580/
---

## Q111580: BUG: Some ROP Codes Cause Inconsistent Polygon() Line Segments

{% raw %}

	Article: Q111580
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a ROP (raster operation) such as R2_XORPEN or R2_NOT is used with the
	Polygon() function, the line segments may be inconsistent; they may appear
	highlighted or ragged when they should appear smooth. This may be more apparent
	when the polygon is filled with a gray brush (80h).
	
	CAUSE
	=====
	
	The border does not overlap the interior fill precisely. Polygonal filling works
	successfully, but the XOR operation with the pen shows that the overlap between
	border and fill is not completely consistent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows versions 3.0 and 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following function demonstrates the problem:
	
	  int PASCAL TestProc( HWND hWnd )
	  {
	      HDC hDC;
	      HBRUSH hGrayBrush, hOldBrush;
	      POINT aPoints[3];
	
	      hGrayBrush = CreateSolidBrush(RGB(128,128,128));
	
	      aPoints[0].x = 50;
	      aPoints[0].y = 10;
	      aPoints[1].x = 250;
	      aPoints[1].y = 50;
	      aPoints[2].x = 125;
	      aPoints[2].y = 130;
	
	      hDC = GetDC(hWnd);
	
	      // default pen, brush, and ROP2
	      Polygon(hDC, aPoints, sizeof(aPoints) / sizeof(POINT));
	
	      // default pen, gray brush, XORPEN ROP2
	      hOldBrush = SelectObject(hDC, hGrayBrush);
	      SetROP2(hDC, R2_XORPEN);
	      Polygon(hDC, aPoints, sizeof(aPoints) / sizeof(POINT));
	
	      // clean up
	      SelectObject(hDC, hOldBrush);
	      ReleaseDC(hWnd, hDC);
	      return 1;
	  }
	
	Additional query words: buglist3.00 buglist3.10 3.00 3.10 ropcode code uneven
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
