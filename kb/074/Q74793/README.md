---
layout: page
title: "Q74793: HOWTO: Simulating CreatePatternBrush() on a High-Res Printer"
permalink: /kb/074/Q74793/
---

## Q74793: HOWTO: Simulating CreatePatternBrush() on a High-Res Printer

	Article: Q74793
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:
	Operating System(s): 
	Keyword(s): kbOSWin95 _IK kbSDKWin16
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a pattern brush is used to fill an area of the page on the printer, the
	printer's high resolution will cause a fine pattern to lose definition and
	appear as a shade of gray.
	
	Brushes that are created with the CreatePatternBrush() function are eight pixels
	by eight pixels (8 x 8 pixels) in size. On a 300 dots-per-inch (dpi) laser
	printer, the pattern will be 0.027 inches wide.
	
	To create a pattern that gives similar effects on the screen as on the printer,
	it is necessary to compare the screen resolution to the printer resolution, and
	to compensate for the differences.
	
	For example, if the video display is 100 dpi (typical of a VGA), and the printer
	is 300 dpi (a typical laser printer), the bit must be three times larger in each
	direction. The following compares a screen bitmap and a printer bitmap:
	
	  10101010          111000111000111000111000
	  01010101          111000111000111000111000
	  10101010          111000111000111000111000
	  01010101          000111000111000111000111
	  10101010          000111000111000111000111     and so forth
	  01010101          000111000111000111000111
	  10101010          111000111000111000111000
	  01010101          111000111000111000111000
	                    111000111000111000111000
	   Video            000111000111000111000111
	                    000111000111000111000111
	                    000111000111000111000111
	                    111000111000111000111000
	                    111000111000111000111000
	                    111000111000111000111000
	                    000111000111000111000111
	                    000111000111000111000111
	                    000111000111000111000111
	                    111000111000111000111000
	                    111000111000111000111000
	                    111000111000111000111000
	
	                            Printer
	
	However, since the pattern brush is always 8 x 8 pixels, a different approach
	must be used when printing:
	
	1. Use the StretchBlt() function to create, from the video bitmap, the 24 x 24
	  pixel bitmap for the printer.
	
	2. Manually "tile" this bitmap into the region to be painted.
	
	Additional query words: 3.00 3.10 4.00 win16sdk
	
	======================================================================
	Keywords          : kbOSWin95 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,95; winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
