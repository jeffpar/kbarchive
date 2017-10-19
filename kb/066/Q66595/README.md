---
layout: page
title: "Q66595: INFO: Using SetDIBitsToDevice() with a Memory Device Context"
permalink: /kb/066/Q66595/
---

## Q66595: INFO: Using SetDIBitsToDevice() with a Memory Device Context

	Article: Q66595
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly kbOSWin310 _IK kbOSWin300 kbSDKWin16
	Last Modified: 22-DEC-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SetDIBitsToDevice() function will set the device-independent bitmap (DIB)
	only to a physical device context, not to a memory device context. To set the
	DIB to a memory device context, use SetDIBits(), or call StretchDIBits() and
	specify the same height and width for both the source and the destination.
	
	It is important to keep in mind that, on a palette device, the palette must be
	set appropriately before transferring the image. The SetDIBitsToDevice() and
	StretchDIBits() functions do not set the palette automatically. To do this,
	perform the following steps:
	
	1. Get the palette from the DIB.
	
	2. Create a logical palette with the palette colors from the DIB.
	
	3. Select the palette into the device context.
	
	4. Realize the palette.
	
	5. Call SetDIBitsToDevice() or StretchDIBits() to transfer the image to the
	  device context.
	
	Additional query words: 3.00 3.10 DC
	
	======================================================================
	Keywords          : kb16bitonly kbOSWin310 _IK kbOSWin300 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Issue type        : kbinfo
	
	=============================================================================
	
