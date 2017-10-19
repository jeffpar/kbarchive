---
layout: page
title: "Q62740: Changing the Palette of Colors on a Nonpalette Device"
permalink: /kb/062/Q62740/
---

## Q62740: Changing the Palette of Colors on a Nonpalette Device

	Article: Q62740
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text below discusses methods by which an application for the Microsoft
	Windows graphical environment can change the colors displayed on a display
	device that does not support a color palette (a nonpalette device).
	Specifically, this article discusses selecting 16 nondefault colors for a VGA
	16-color driver.
	
	MORE INFORMATION
	================
	
	Windows version 3.0 introduces a set of palette mapping functions that allow an
	application to choose what colors are available in the hardware palette when the
	application is active. However, these functions work only with devices that
	support 256 or more colors, and have drivers designed for palette support.
	
	There are some devices that can show a limited number of colors at one time, but
	choose those colors from a much larger set of available colors. For example, the
	standard VGA screen can display 16 colors at a time, but can choose those 16
	colors from a palette of approximately 256,000 colors. Because it can display
	only 16 colors at once, the VGA driver shipped with Windows does not implement
	the palette functions.
	
	When an output device has a programmable color palette, its device driver can
	implement the SETCOLORTABLE escape through which an application can specify its
	desired colors. Note, however, that the display drivers (EGA, VGA, and so on),
	which Microsoft ships with Windows versions 3.0 and 3.1, do not support this
	escape. A custom device driver is required to provide this functionality. The
	application should send the QUERYESCSUPPORT escape to the driver to determine
	whether the escape is supported.
	
	NOTE: The implementation and use of the SETCOLORTABLE escape in a display drivers
	affects all windows that are displayed. Because changing the color table can
	adversely affect the appearance of standard window attributes, such as the
	caption bar or window frame, using this functionality is not recommended.
	SETCOLORTABLE should be used only after considering how it will affect the user
	interface for all applications.
	
	The Windows Device Driver Kit (DDK) provides sample code and tools required to
	create a new device driver, or to modify an existing device driver to support
	the SETCOLORTABLE escape.
	
	Microsoft has also made available a special version of the VGA driver that
	implements the SETCOLORTABLE escape. This driver is called VGAPAL.DRV; it can be
	found in the Windows Driver Library (WDL). For more information on the WDL,
	search in the Microsoft Knowledge Base on the following word:
	
	  " wdl.txt " (without the quotation marks)
	
	
	Drivers in the WDL can be licensed for redistribution. For more information,
	contact Microsoft Product Support Services.
	
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
