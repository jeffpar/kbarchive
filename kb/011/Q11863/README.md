---
layout: page
title: "Q11863: INFO: Printer Page Area in Windows"
permalink: /kb/011/Q11863/
---

## Q11863: INFO: Printer Page Area in Windows

{% raw %}

	Article: Q11863
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbDSupport kbSDKWin16
	Last Modified: 29-AUG-2001
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to determine the printable area for a printer in
	Windows.
	
	MORE INFORMATION
	================
	
	Escape(GETPHYSPAGESIZE) specifies the size of the physical sheet of the
	currently selected paper size; for example, 8 1/2 by 11 for letter-sized paper
	on the Epson FX-80.
	
	Escape(GETPRINTINGOFFSET) specifies how far in and how far down the printable
	area starts on the sheet of paper; for example, 1/4 inch in and 1/8 inch down
	for the Epson.
	
	GetDeviceCaps(HORZSIZE) specifies the width of the printable area on the page, in
	millimeters (8 inches for the Epson).
	
	GetDeviceCaps(VERTSIZE) specifies the length of the printable area on the page,
	in millimeters (10 inches for the Epson).
	
	GetDeviceCaps(HORZRES) specifies the width of the printable area on the page, in
	pixels. Note that this value will depend on the currently selected graphics
	resolution (960 for the Epson at 120 x 72 DPI or 120 x 144 DPI, 1920 for the
	Epson at 240 x 144 DPI).
	
	GetDeviceCaps(VERTRES) specifies the length of the printable area on the page, in
	pixels. Note that this value will depend upon the currently selected graphics
	resolution (720 for the Epson at 120 x 72 DPI, 1440 for the Epson at 120 x 144
	DPI or 240 x 144 DPI).
	
	If pixels per inch are desired, GetDeviceCaps(LOGPIXELSX and LOGPIXELSY) gives
	the number of pixels per inch in each direction (120 per inch horizontal, 72 per
	inch vertical for Epson). Please note that these arguments were not documented
	prior to Windows version 3.0.
	
	Device coordinates are returned; therefore, conversion to logical coordinates is
	necessary before drawing with GDI.
	
	The origin of the printable area is 0,0. The rectangle that defines the printable
	area is as follows:
	
	     left = 0
	     top  = 0
	     right = GetDeviceCaps (HORZSIZE)
	     bottom = GetDeviceCaps (VERTSIZE)
	
	Using the above example for the Epson, the paper is 8 1/2 by 11 inches.
	Horizontally, the printable area goes from 1/4 inch to 8 1/4 inches; vertically,
	the printable area goes from 1/8 inch from the top to 10 1/8 inches.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbDSupport kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
