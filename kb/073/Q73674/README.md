---
layout: page
title: "Q73674: Icon and Cursor Size Determined by Display Driver"
permalink: kb/073/Q73674/
---

## Q73674: Icon and Cursor Size Determined by Display Driver

	Article: Q73674
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The display driver determines the display size of an icon or a cursor. Display
	drivers for Microsoft Windows operating system version 3.0 specify icon- and
	cursor-compression factors, which are used to determine the size for a
	particular icon or cursor. Under Windows version 3.1, the method that the
	display driver uses for storing icon and cursor dimensions is different. The
	text below details the two methods of storing icon and cursor dimensions.
	
	MORE INFORMATION
	================
	
	Each compression factor is the ratio of 64 to the icon or cursor size. In other
	words, the icon-width compression factor is 64 divided by the final width of an
	icon. Because each factor must be a whole number, the height or the width of an
	icon or a cursor must be 64, 32, or 16 pixels.
	
	Four compression factors are stored as a resource in each display driver. The
	following table shows typical values:
	
	  Display             Icon/Cursor        Compression Factors
	  Drivers             Dimensions         Width       Height
	  ----------------------------------------------------------
	  CGA                  32 x 16             2           4
	  EGA, VGA, 8514       32 x 32             2           2
	
	In Windows version 3.1, the display driver stores the actual icon dimensions.
	Therefore, for an icon 32 pixels wide, the driver stores 32 instead of 2. This
	removes the limitation that 64 by 64 is the largest possible icon size.
	
	Display drivers for versions of Windows earlier than version 3.0 will continue to
	be supported. If Windows encounters an icon dimension less than 11, it treats
	the dimension as a compression factor and calculates the dimension accordingly.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
