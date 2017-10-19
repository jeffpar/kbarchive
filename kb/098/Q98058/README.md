---
layout: page
title: "Q98058: BUG: Graphics Operations Consume GDI Memory"
permalink: /kb/098/Q98058/
---

## Q98058: BUG: Graphics Operations Consume GDI Memory

	Article: Q98058
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin16
	Last Modified: 18-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Windows graphical operating environment, when a device driver
	has rectangle capabilities (such as the 8514/a display driver) and an
	application draws many large graphic objects, memory in the GDI data segment is
	lost. Eventually, GDI runs out of memory and Windows crashes.
	
	CAUSE
	=====
	
	GDI allocates a block of memory and then checks to see whether the device has
	rectangle capabilities. If the device does have rectangle capabilities, GDI
	calls into the device to let it do the drawing and does not free the allocated
	memory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	If the device does not have rectangle capabilities (for example, the standard
	VGA display driver), GDI performs the drawing and frees the memory. If an
	application is consuming GDI resources, run the application on a machine with a
	VGA display. If GDI resources are not being consumed on a VGA, then it is quite
	likely that the application has encountered this bug.
	
	Under certain circumstances, the following Windows application programming
	interfaces (APIs) may encounter this problem:
	
	  Drawing functions:
	  <B>Arc</B>, <B>Chord</B>, <B>Ellipse</B>, <B>Pie</B>, <B>Rectangle</B>, <B>RoundRect</B>
	
	  Region functions:
	  <B>CreateEllipticRgn</B>, <B>CreateEllipiticRgnIndirect</B>, <B>CreateRoundRectRgn</B>
	
	Third-party display-driver developers can avoid the GDI bug by not claiming
	rectangle capabilities in the display driver. Just do not set the PC_RECTANGLE
	bit in the dpPolygonals member of GDIINFO, and then rebuild the driver.
	
	Applications developers can use several approaches to avoid the problem code. One
	approach is to create a memory device context (DC) and use it instead of the
	display DC in the GDI functions. When complete, BitBlt the memory DC to the
	screen DC. When using a compatible memory DC, the bug is avoided because GDI
	performs the drawing instead of the driver.
	
	The following code fragment demonstrates this approach:
	
	     hMemDC = CreateCompatibleDC(hDC);
	     hBitmap = CreateCompatibleBitmap(hDC, width, height);
	     hOldBitmap = SelectObject(hMemDC, hBitmap);
	     PatBlt(hMemDC, 0, 0, width, height, WHITENESS);
	     /***
	
	     Use hMemDC in all the GDI functions
	     .
	     .
	     .
	
	     ***/ 
	
	     BitBlt(hDC, 0, 0, width, height, hMemDC, 0, 0, SRCCOPY);
	     SelectObject(hMemDC, hOldBitmap);
	     DeleteObject(hBitmap);
	     DeleteDC(hMemDC);
	
	The functions PatBlt, MoveTo/LineTo, Polyline, and FillRect are safe alternatives
	to the drawing functions.
	
	Additional query words: buglist3.10 3.10 8514.DRV 8514 VGA.DRV
	
	======================================================================
	Keywords          : kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
