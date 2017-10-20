---
layout: page
title: "Q114471: INFO: Drawing a Rubber Rectangle"
permalink: /kb/114/Q114471/
---

## Q114471: INFO: Drawing a Rubber Rectangle

{% raw %}

	Article: Q114471
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbSDKWin32 kbOSWin95
	Last Modified: 12-MAY-2001
	
	3.10 4.00 | 3.50 3.51
	WINDOWS   | WINDOWS NT
	kbgraphic
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Most drawing software uses what is termed a "rubber rectangle". This term is
	used to describe the situation where
	
	1. the left mouse button is held down, defining one corner of the rectangle
	
	2. the mouse is dragged and released at the point defining the opposite corner
	  of the rectangle
	
	3. the rectangle is drawn while the mouse is being dragged, so that it looks
	  like the rectangle is being stretched and contracted, like a rubber band
	
	MORE INFORMATION
	================
	
	The key to making this work is in the following call, which should be made in
	the WM_LBUTTONDOWN case:
	
	  <CALL>
	     SetROP2( hDC, R2_NOT )
	
	On each WM_MOUSEMOVE message, the rectangle is redrawn in its previous position.
	Because of the ROP code, the rectangle appears to be erased. The new position
	for the rectangle is calculated and then the rectangle is drawn.
	
	Note that Windows will only let you draw in the invalid area of the window if you
	use a DC returned from BeginPaint(). If you want to use the DC returned from
	BeginPaint(), you must first call InvalidateRect() to specify the region to be
	updated.
	
	With the DC returned from GetWindowDC(), Windows will restrict your drawing to
	the client and non-client areas. With the hDC returned from CreateDC(), you can
	write on the entire display, so you must be careful.
	
	Additional query words: 3.10 4.00
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbSDKWin32 kbOSWin95 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
