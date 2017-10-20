---
layout: page
title: "Q67714: DOC: CreateCompatibleBitmap() Parameters Documented Wrong"
permalink: /kb/067/Q67714/
---

## Q67714: DOC: CreateCompatibleBitmap() Parameters Documented Wrong

{% raw %}

	Article: Q67714
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly
	Last Modified: 22-DEC-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The nWidth and nHeight parameters to the CreateCompatibleBitmap function are
	incorrectly documented on page 4-37 in the "Microsoft Windows Software
	Development Kit Reference Volume 1" for version 3.0, and on page 79 of the
	"Microsoft Windows Software Development Kit Programmer's Reference, Volume 2:
	Functions" for version 3.1.
	
	The nWidth and nHeight parameters are expressed in pixels, not bits.
	
	The documentation should read:
	
	  Parameter     Type/Description
	  ---------     ----------------
	  hDC           HDC   Identifies the device context.
	
	  nWidth        int   Specifies the width (in pixels) of the bitmap.
	
	  nHeight       int   Specifies the height (in pixels) of the bitmap.
	
	Additional query words: 3.00 3.10 docerr
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	
	=============================================================================
	

{% endraw %}
