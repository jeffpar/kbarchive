---
layout: page
title: "Q64520: INFO: Printing Monochrome and Color Bitmaps from Windows"
permalink: /kb/064/Q64520/
---

## Q64520: INFO: Printing Monochrome and Color Bitmaps from Windows

	Article: Q64520
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin310 kbOSWin95 kbDSupport kbSDKWin16
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), on platform(s):
	   - the operating system: Microsoft Windows NT, versions 3.5, 3.51, 4.0 
	   - Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The format of a display bitmap determines the procedure that an application uses
	to print it. The two display bitmap formats available under Windows are
	Device-Dependent Bitmaps (DDBs) and Device- Independent Bitmaps (DIBs). DIBs and
	DIB functions should be used for printing color bitmaps.
	
	MORE INFORMATION
	================
	
	An application can use the BitBlt() or StretchBlt() function to print or display
	a monochrome bitmap. Both printer drivers and display drivers can process
	monochrome DDBs. However, an application must account for the difference in
	resolution between a typical display and a typical laser printer. The
	StretchBlt() function enables an application to appropriately change the size of
	a monochrome bitmap.
	
	When the display bitmap is a color DDB, printing is more difficult because the
	display DDB format may not match the printer DDB format. Because Windows
	supports a wide variety of devices, this situation is quite common. When the
	formats DDB differ, the application must convert the display DDB into a print
	DDB or a DIB.
	
	DIBs are designed to ease the process of transferring images between devices.
	When an application uses a DIB, the GDI or the output driver performs any
	conversions required for the device. The ShowDIB sample application, provided in
	the Windows SDK and the Win32 SDK, demonstrates converting a DDB to a DIB and
	other common manipulations. The file DIB.C is of particular interest. It
	contains the functions that perform the manipulations. This code can be
	incorporated into other applications.
	
	For more information, please see the Windows SDK 3.1 DIBView sample or the Win32
	SDK WinCap32 sample.
	
	Additional query words: 3.00 3.10 3.50 4.00
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin310 kbOSWin95 kbDSupport kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
