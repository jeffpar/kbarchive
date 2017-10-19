---
layout: page
title: "Q111653: BUG: Printer Driver Receives &quot;bigfonts&quot; When Not Supported"
permalink: /kb/111/Q111653/
---

## Q111653: BUG: Printer Driver Receives &quot;bigfonts&quot; When Not Supported

	Article: Q111653
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbSDKWin16
	Last Modified: 09-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the installed display driver of a Windows 3.1 installation supports raster
	fonts that are greater than 64K, then any printer driver on the system is
	expected to support the fonts, even if [GetDeviceCaps(hPrnDC, RASTERCAPS) &
	RC_BIGFONT] returns NULL for the printer driver.
	
	CAUSE
	=====
	
	In some cases, the printer driver calls the display driver to perform certain
	GDI operations. Windows expects that 64K and greater fonts will eventually be
	drawn by the display driver instead of the printer driver. This assumption
	causes Windows to believe that a printer driver will support these fonts, even
	if it does not.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: buglist3.10 3.10 bigfonts big fonts
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
