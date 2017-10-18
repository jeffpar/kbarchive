---
layout: page
title: "Q22538: Information About Clipping, GetDeviceCaps() and GDI"
permalink: kb/022/Q22538/
---

## Q22538: Information About Clipping, GetDeviceCaps() and GDI

	Article: Q22538
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the GetDeviceCaps(hDC,CLIPCAPS) function is used on an Epson FX-80 printer,
	it returns zero (0), which means that the printer does not support clipping. The
	explanation below describes how the GetDeviceCaps() function, the Windows
	Graphics Device Interface (GDI), and clipping interact with each other.
	
	The GetDeviceCaps() function reports what subset of the GDI services the device
	directly supports. The complete list of GDI services is available in the
	documentation. The GDI will simulate functions that the device does not directly
	support using those functions that are available on the device.
	
	The Epson FX-80 printer does not support clipping to any particular portion of
	the page, even in graphics mode, which is precisely what the GetDeviceCaps()
	function indicates.
	
	GDI provides at least a minimum level of services for all devices. In particular,
	if a clipshape is set while a document is being printed, the programmer can be
	assured that GDI will honor that clipshape. GDI works with the information
	returned in the GetDeviceCaps() function to determine what services GDI must
	provide on behalf of the device. In this case, the printer does not perform
	clipping; clipping is provided by GDI. The GetDeviceCaps() function can indicate
	how much additional work GDI must perform to accomplish a particular function.
	The programmer may want to modify a request to speed processing.
	
	Also note that DC stands for device context. The most interesting DC is for the
	display [and, in fact, it is the device context for the display that is returned
	by GetDC(), and in the PAINTSTRUCT structure returned by BeginPaint()]. Printer
	DCs are NEVER contexts for the display; they are device contexts.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
