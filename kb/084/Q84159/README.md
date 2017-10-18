---
layout: page
title: "Q84159: Windows: Mouse Trails Only Work at Lower Resolutions"
permalink: kb/084/Q84159/
---

## Q84159: Windows: Mouse Trails Only Work at Lower Resolutions

	Article: Q84159
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Mouse trails makes it easier for you to track the mouse pointer on an LCD
	display. Although they are intended for LCD displays, mouse trails can be used
	with other display types as well.
	
	NOTE: Mouse trails functionality is supplied by the video driver, not the mouse
	driver.
	
	Mouse trails are supported by the Windows version 3.1 EGA, VGA, and Super VGA
	(800 x 600, 16 colors) drivers.
	
	The following two Windows mouse drivers support mouse trails and are shipped with
	Windows 3.1.
	
	Manufacturer        Driver Name    Version
	------------        -----------     -------
	Microsoft Mouse     MOUSE.DRV        8.20
	Microsoft Mouse    MOUSE.DRV        9.00
	Logitech Mouse      LMOUSE.DRV       6.02
	
	MORE INFORMATION
	================
	
	Mouse trails are not supported under VGA with Monochrome display, which is
	provided with Windows 3.1, and mouse trails may not be supported by third- party
	video and/or mouse drivers.
	
	Mouse trails are not supported by the CGA video driver because Windows 3.1 does
	not fully support CGA, and uses the Windows 3.0 CGA video driver. Mouse trails
	are rarely supported by very high-resolution video drivers because these driver
	are rarely used on laptop computers. Currently, mouse trail support is NOT
	provided for XOR-only cursors, such as the I-beam and the cross-hair cursor used
	by Paintbrush.
	
	If your third-party video driver or your Windows mouse driver does not support
	mouse trails, contact your hardware manufacturer regarding the company's support
	for mouse trails.
	
	REFERENCES
	==========
	
	Mouse trail programming is discussed in the Microsoft Software Development Kit
	(SDK) and the Microsoft Device Developer Kit (DDK) guides and manuals.
	
	Additional query words: 3.10 3.11 mousetrails 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
