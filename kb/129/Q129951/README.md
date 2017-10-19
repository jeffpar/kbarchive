---
layout: page
title: "Q129951: Problems Using Orchid Celsius VLB Display Card in Windows 95"
permalink: /kb/129/Q129951/
---

## Q129951: Problems Using Orchid Celsius VLB Display Card in Windows 95

	Article: Q129951
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Orchid Celsius VLB video adapter, you may experience any
	of the following problems:
	
	- When you use the Orchid Celsius VLB version 1.1 display drivers for Windows
	  version 3.x in 1024 x 768 x 256 mode in Windows 95, your computer may stop
	  responding (hang).
	
	- When you start Windows 95 in Safe mode using the standard VGA display driver,
	  you receive the following error message:
	
	  Explorer executed an invalid instruction in module shell32.dll at
	  0137:79342eb.
	
	- When you install the standard VGA display driver to use with this video
	  adapter, small rectangular boxes appear on the screen at random after the
	  screen is redrawn.
	
	CAUSE
	=====
	
	The Orchid Windows 3.x video drivers do not work properly with Windows 95. Also,
	the Orchid Celsius VLB display adapter (and other adapters using the AGX015
	video chip set) are supported in Windows 95 only with the XGA.DRV and XGA.VXD
	video drivers running in the following resolutions:
	
	- 640 x 480 x 8 BPP (256 colors)
	
	- 640 x 480 x 16 BPP (65536 colors)
	
	- 800 x 600 x 8 BPP (256 colors)
	
	- 800 x 600 x 16 BPP (65536 colors)
	
	- 1024 x 768 x 4 BPP (16 colors)
	
	- 1024 x 768 x 8 BPP (256 colors) (interlaced or 72-Hz monitor types)
	
	RESOLUTION
	==========
	
	Install the XGA video drivers provided with Windows 95, using one of the
	resolutions listed above. Note that to select the XGA driver, you should click
	IBM in the Manufacturers box.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
