---
layout: page
title: "Q111337: BUG: Pie() and Arc() Functions Fail with a Wide Pen"
permalink: /kb/111/Q111337/
---

## Q111337: BUG: Pie() and Arc() Functions Fail with a Wide Pen

	Article: Q111337
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a wide (multiple pixel) pen and drawing a reasonably large object,
	the drawing function returns 0 (zero) or does not draw anything. Choosing a thin
	(single pixel) pen or choosing a pen smaller than X pixels corrects the problem.
	
	CAUSE
	=====
	
	GDI builds a polygon that basically puts a circle on every point along the pen's
	path and calls Polygon() to fill it. If the point data or the working storage of
	Polygon() exceeds 64K, the call is failed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.0 and 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following are examples that reproduce the problems in Windows version 3.1.
	
	Pie() Function
	--------------
	
	When selecting a bold pen [second parameter of CreatePen() is greater than 7] and
	calling Pie() as follows, nothing is drawn; however, the return value of Pie()
	indicates that it was drawn:
	
	  hPen=CreatePen(PS_SOLID,9,0L);
	  SelectObject(hDC,hPen);
	  Pie(hDC, 96, 11, 839, 754, 440, 12, 479, 11);
	
	Arc() Function
	--------------
	
	The Arc() function returns an error value when called as follows, even though the
	width and height are both within the documented limits of 32767:
	
	  Arc( hDC, -11047, -3493, 806, 8360, 311, 64, 356, 170 );
	               x1      y1   x2    y2   X3  Y3   X4   Y4
	
	Additional query words: buglist3.00 buglist3.10 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
