---
layout: page
title: "Q151921: PRB: LoadBitmap GPFaults on Compressed Bitmaps in Windows 3.1"
permalink: /kb/151/Q151921/
---

## Q151921: PRB: LoadBitmap GPFaults on Compressed Bitmaps in Windows 3.1

{% raw %}

	Article: Q151921
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbSDKWin16
	Last Modified: 16-JUL-1999
	
	3.10
	WINDOWS
	kbgraphic kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling LoadBitmap from an application causes a General Protection Fault (GP)
	Fault when attempting to load a compressed bitmap.
	
	CAUSE
	=====
	
	There is a problem with the way the Windows 3.x standard VGA driver handles
	compressed bitmaps. When a bitmap is saved as compressed, non-VGA drivers tend
	to leave the biClrUsed member of the BITMAPINFOHEADER at zero. This behavior
	causes the VGA driver to GPF as it tries to load the bitmap because the VGA
	driver attempts to decode the color table as though it were RLE encoded data.
	This can easily lead to running off the end of the data.
	
	RESOLUTION
	==========
	
	One work around would be to use uncompressed bitmaps. However, if compression is
	absolutely necessary, another way would be to save the bitmap compressed using
	the VGA driver so the biClrUsed member of the BITMAPINFOHEADER structure is
	properly set to the number of colors in the color table. Every other driver that
	then attempts to load the bitmap should be able to do so successfully.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Applications typically save images in compressed format in order to save space.
	This behavior can be accomplished in Microsoft Visual C++ version 1.52 by
	loading the bitmap in App Studio, selecting the Resource.Properties menu item
	and checking the "Save Compressed" checkbox.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
