---
layout: page
title: "Q58332: Windows 3.0 WIN.INI &#91;desktop&#93; Section"
permalink: /kb/058/Q58332/
---

## Q58332: Windows 3.0 WIN.INI &#91;desktop&#93; Section

	Article: Q58332
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Microsoft Windows version 3.0
	WININI.TXT README file. The Windows Setup program copies this file to the
	Windows directory.
	
	MORE INFORMATION
	================
	
	[DESKTOP] SECTION
	-----------------
	
	The [desktop] section contains optional settings that control the
	appearance of the screen background (desktop) and the positioning of
	windows and icons on the screen.
	
	The [desktop] section can contain the following settings:
	
	-----------------------------------------------------------------------
	GridGranularity=<integer>
	Default:   0
	Purpose:   Specifies the incremental size (in logical units) of the
	          grid that Windows uses to position icons and windows on the
	          screen. The allowed range is 0 through 49. The grid changes
	          in multiples of eight pixels.
	To change: Choose the Desktop icon from the Control Panel window.
	-----------------------------------------------------------------------
	Pattern=<b1 b2 b3 b4 b5 b6 b7 b8>
	Default:   None
	Purpose:   Specifies a pattern that is used as a brush to paint the
	          screen background. The eight numeric values define a bitmap
	          eight pixels wide and eight pixels high. Each decimal value
	          represents a byte, and each byte represents eight pixels.
	          The following shows the effect of setting a bit:
	
	          Setting   Effect
	          -------   ------
	
	          0         Sets the corresponding pixel to the background
	                    color.
	
	          1         Sets the corresponding pixel to the foreground
	                    color.
	
	To change: Choose the Desktop icon from the Control Panel window.
	-----------------------------------------------------------------------
	TileWallpaper=<0-or-1>
	Default:   0
	Purpose:   If set to 0, the desktop wallpaper is centered on the
	          screen. If set to 1, the wallpaper is tiled across the
	          screen.
	To change: Choose the Desktop icon from the Control Panel window.
	-----------------------------------------------------------------------
	Wallpaper=<bitmap-filename>
	Default:   None
	Purpose:   Supplies the name of a bitmap file in the Windows
	          directory. This bitmap appears on the screen background.
	To change: Choose the Desktop icon from the Control Panel window.
	-----------------------------------------------------------------------
	WallpaperOriginX=<x-coordinate>
	Default:   0
	Purpose:   Adjusts the initial offset of a tiled wallpaper.
	To change: Use Notepad to edit the WIN.INI file.
	-----------------------------------------------------------------------
	WallpaperOriginY=<y-coordinate>
	Default:   0
	Purpose:   Adjusts the initial offset of a tiled wallpaper.
	To change: Use Notepad to edit the WIN.INI file.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30 notcl
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
