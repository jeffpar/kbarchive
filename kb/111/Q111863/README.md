---
layout: page
title: "Q111863: BUG: Driver vs. GDI-Simulated Styled Lines Don't Match"
permalink: kb/111/Q111863/
---

## Q111863: BUG: Driver vs. GDI-Simulated Styled Lines Don't Match

	Article: Q111863
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Lines drawn using the same styled pen may appear slightly different. For
	example, when drawing styled lines with the R2_XORPEN raster operation to draw
	and remove lines quickly, some pixels may be left behind.
	
	CAUSE
	=====
	
	GDI's styled line simulation does not match pixel-for-pixel the display driver's
	styled line drawing. Styled lines are drawn either by GDI or by the display
	driver depending on the driver's line and clipping capabilities. Even if a
	driver supports styled lines, it may not handle styled lines when clipping is
	involved. In the situations not handled by the driver, GDI will simulate the
	styled line, thus exhibiting differences in pixels.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Windows version 3.1. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
