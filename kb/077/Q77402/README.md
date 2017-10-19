---
layout: page
title: "Q77402: INFO: Do Not Call the Display Driver Directly"
permalink: /kb/077/Q77402/
---

## Q77402: INFO: Do Not Call the Display Driver Directly

	Article: Q77402
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:
	Operating System(s): 
	Keyword(s): kbOSWinNT400 kbDSupport kbSDKWin16
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In general, a Windows-based application cannot call the Windows display driver
	directly to perform graphics primitives. This article details the reasons this
	restriction is in place.
	
	MORE INFORMATION
	================
	
	The Windows display driver communicates with the Graphics Device Interface (GDI)
	to perform primitive graphics operations. The parameters of the entry points (or
	exported functions) in the display driver are set up according to the standard
	interface between GDI and the display driver. The parameters passed by GDI to
	the display driver are only meaningful to GDI and to the display driver. A
	Windows-based application has no way to obtain these parameters. For example,
	the parameter most-commonly passed by GDI to the display driver is a pointer to
	a structure called PDEVICE. Memory for this structure is allocated by GDI, and
	its contents are specified by the display driver during the driver's
	initialization. The pointer to the PDEVICE structure is private to GDI;
	furthermore, the structure of PDEVICE varies among display drivers.
	
	To give another example, when a primitive is to be done to a memory bitmap,
	instead of passing a pointer to PDEVICE, GDI passes to the display driver a
	pointer to a structure; the structure is usually referred to as a physical
	bitmap. Note that this physical bitmap structure is also called "BITMAP"; do not
	confuse it with the BITMAP structure defined in the Windows Software Development
	Kit. Again, this physical bitmap structure is not designed to be used by a
	Windows-based application. Although the information described in this structure
	is somewhat related to the bitmap that the application uses, the pointer to the
	physical bitmap structure is private to GDI and cannot be obtained by the
	application.
	
	Additional query words: nowinnt win16sdk
	
	======================================================================
	Keywords          : kbOSWinNT400 kbDSupport kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:
	Issue type        : kbinfo
	
	=============================================================================
	
