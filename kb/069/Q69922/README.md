---
layout: page
title: "Q69922: Monochrome Limitations with IBM 8514/a Video Card"
permalink: /kb/069/Q69922/
---

## Q69922: Monochrome Limitations with IBM 8514/a Video Card

{% raw %}

	Article: Q69922
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Monochrome monitors using the IBM 8514/a graphics card to achieve high
	resolution modes (1024 x 768) cannot use the Windows version 3.0 8514/a driver
	because the driver is for color monitors only.
	
	To install correctly, use the Windows video driver for VGA with monochrome
	display. The drawback is that this driver only supports 640 x 480 resolution.
	
	MORE INFORMATION
	================
	
	Symptoms of an incorrect installation are screen shadows and random black
	squares on screen. Though some mouse problems create a similar screen
	appearance, these symptoms occur even if a mouse is not installed. They can
	sometimes appear as soon as the Windows Setup program finishes copying the Setup
	Disk 2.
	
	The IBM 8514/a video card displays at 1024 x 768 (interlaced) in either 16 or 256
	colors, depending on the amount of memory on the card. The IBM 8514/a is
	register compatible with VGA and can be used in VGA resolution (640 x 480).
	
	The Windows 3.00 8514/a display driver is a "color only" driver and does not work
	properly on systems with a monochrome monitor.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
