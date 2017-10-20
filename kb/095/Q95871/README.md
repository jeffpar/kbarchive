---
layout: page
title: "Q95871: Display Dims on Leading Edge Laptops with Phoenix BIOS"
permalink: /kb/095/Q95871/
---

## Q95871: Display Dims on Leading Edge Laptops with Phoenix BIOS

{% raw %}

	Article: Q95871
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The built-in Backlight screen feature on Leading Edge Laptop computers with
	Phoenix BIOS causes the display to dim when Windows is running. The screen
	cannot be restored without running MS-DOS Prompt or exiting Windows and pressing
	any key.
	
	MORE INFORMATION
	================
	
	Some Leading Edge Laptop computers have a Backlight screen feature built into
	the Phoenix BIOS. The screen feature acts like a screen saver and is designed to
	clear the screen after a specific amount of idle time.
	
	Under Windows, the screen saver does not clear the screen; instead, the contrast
	dims. Windows can still be faintly seen. The only way to restore the screen is
	to exit Windows or run MS-DOS Prompt and press any key. This happens in all
	modes of Windows.
	
	The only way to disable the screen saver is through CMOS Setup. On the Leading
	Edge machine the feature is called Backlight Duration. The duration can be set
	from 1 to 30 minutes or to Forever. The Forever setting disables the Backlight
	screen saver feature.
	
	The Leading Edge product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 gray grey dimmed light screensaver back 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
