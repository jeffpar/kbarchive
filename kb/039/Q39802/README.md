---
layout: page
title: "Q39802: INFO: Limit of Logical Coordinate System in Windows"
permalink: /kb/039/Q39802/
---

## Q39802: INFO: Limit of Logical Coordinate System in Windows

{% raw %}

	Article: Q39802
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKWin16
	Last Modified: 17-JUN-1999
	
	3.00
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The limits of the logical coordinate system are from -32768 to +32767. An item
	can be drawn anywhere within this coordinate system; however, the window extent
	cannot be set to greater than 32767. (Although this might seem to limit the
	system to the -16384 to 16383 range, this is not the case.) If the viewport and
	window are set up properly, everything will be shown. For example, to set up the
	whole logical coordinate system to be shown within the application's area of the
	screen, the following code works properly:
	
	     /*  Establish viewport to be upper-left quarter of client area */ 
	
	     GetClientRect(hWnd, (LPRECT) &CRect);
	     SetViewportOrg(hDC, 0, 0);
	     SetViewportExt(hDC, (CRect.right - CRect.left) / 2, \ 
	
	                        (CRect.bottom - CRect.top) / 2);
	
	     /*  Set Window Origin and Extent such that total logical */ 
	     /*     coordinate system will cover entire client area   */ 
	
	     SetWindowOrg(hDC, -32767, -32767);
	     SetWindowExt(hDC, 32767, 32767);
	
	Additional query words: mapping modes anisotropic isotropic
	
	======================================================================
	Keywords          : kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
