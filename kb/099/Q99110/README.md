---
layout: page
title: "Q99110: BUG: ETO_CLIPPED Does Not Clip Rotated Text"
permalink: /kb/099/Q99110/
---

## Q99110: BUG: ETO_CLIPPED Does Not Clip Rotated Text

	Article: Q99110
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbGrpDSUser kbOSWin310bug kbWndw
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Windows version 3.1, text output with a rotated TrueType font is
	not clipped when the ETO_CLIPPED flag and a clipping rectangle are specified in
	ExtTextOut().
	
	RESOLUTION
	==========
	
	To work around this problem, create a rectangular clipping region, select it
	into the device context, and do not specify the ETO_CLIPPED flag or pass in a
	clipping rectangle to ExtTextOut(). For example:
	
	     hRegion = CreateRectRgn(rc.left, rc.top, rc.right, rc.bottom);
	     SelectClipRgn(hDC, hRegion);
	     ExtTextOut(hDC, x, y, 0, NULL, szText, lstrlen(szText), NULL);
	     DeleteObject(hRegion);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	Additional query words: ExtTextOut clipping region TrueType
	
	======================================================================
	Keywords          : kb16bitonly kbGrpDSUser kbOSWin310bug kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	
