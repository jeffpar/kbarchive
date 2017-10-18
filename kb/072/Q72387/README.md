---
layout: page
title: "Q72387: HOWTO: How to Determine If a Device Is Palette Capable"
permalink: kb/072/Q72387/
---

## Q72387: HOWTO: How to Determine If a Device Is Palette Capable

	Article: Q72387
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On a device that supports the Windows palette management function, an
	application can create a logical palette, select the palette into a Device
	Context (DC), and realize the palette, which maps its colors into the system
	(hardware) palette. The GetDeviceCaps() API informs an application whether a
	given device is capable of performing palette manipulation and, if so, the size
	of the palette. This article discusses the GetDeviceCaps() API and how it is
	used.
	
	MORE INFORMATION
	================
	
	To determine whether a device can perform palette operations, call the
	GetDeviceCaps() API with the RASTERCAPS parameter. If the RC_PALETTE bit of the
	return is set, the device supports the palette management functions.
	
	To determine how many colors in the system palette are available for the
	application to use, the following parameters can be used in a GetDeviceCaps()
	call:
	
	  Parameter      Description
	  ---------      -----------
	  SIZEPALETTE    Total number of entries in the system palette
	  NUMRESERVED    Number of reserved (static) colors in the system palette
	
	This functionality is demonstrated in the MyPal sample code that is included on
	the Windows version 3.x Software Development Kit (SDK) Source Code 2 disk. For a
	demonstration, start MyPal and click the right mouse button.
	
	The reserved colors are entries in the system palette that are used by Windows
	and cannot be changed by an application [except by using SetSystemPaletteUse(),
	which is not recommended]. The reserved colors are used for the following
	purposes:
	
	  Active border
	  Active caption
	  Background color MDI applications
	  Desktop background color
	  Push button faces
	  Push button edges
	  Push button text
	  Caption text
	  Disabled (gray) text
	  Highlight color in controls (to highlight items in the control)
	  Highlight text color
	  Inactive border
	  Inactive caption
	  Inactive caption text (new to Windows version 3.1)
	  Menu background
	  Menu text
	  Scroll-bar gray area
	  Window background
	  Window frame
	  Window text
	
	Additional query words: 3.00 3.10 3.50 4.00 win16sdk
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
