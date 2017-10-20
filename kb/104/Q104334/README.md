---
layout: page
title: "Q104334: BUG: SetDIBitsToDevice Faults on 24-BPP PM-Style DIBs"
permalink: /kb/104/Q104334/
---

## Q104334: BUG: SetDIBitsToDevice Faults on 24-BPP PM-Style DIBs

{% raw %}

	Article: Q104334
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbOSWin300 kbSDKWin16
	Last Modified: 22-DEC-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SetDIBitsToDevice faults inside GDI when passed a 24-bpp Presentation Manager
	(PM) style device-independent bitmap (DIB) on a device that supports
	RC_DIBTODEV.
	
	CAUSE
	=====
	
	GDI must convert the old style BITMAPCOREINFO structure into a new BITMAPINFO
	structure before passing it to a driver's RC_DIBTODEV function. If the old style
	DIB has no color table, GDI will fault as it attempts to append a zero length
	color table to the end of its temporary BITMAPINFOHEADER.
	
	RESOLUTION
	==========
	
	On devices that support RC_DIBTODEV, do the conversion into the new style DIB
	format for GDI before calling into it when using 24-bpp PM-style DIBs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: buglist3.10 buglist3.00 3.00 3.10
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbOSWin300 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
