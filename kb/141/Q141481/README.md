---
layout: page
title: "Q141481: Radius Video Driver Causes General Protection Fault"
permalink: /kb/141/Q141481/
---

## Q141481: Radius Video Driver Causes General Protection Fault

	Article: Q141481
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Wine Guide for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play a video from Microsoft Isaac Asimov's Ultimate Robot or Microsoft
	Wine Guide, you receive the following error message:
	
	  MMTASK caused a General Protection Fault in module GDI.EXE
	
	If you then click Close, you receive the following error message:
	
	  MCI Error: The Device Driver Is Not Ready
	
	
	CAUSE
	=====
	
	Some Radius video display drivers may cause these symptoms. These drivers
	include the following:
	
	- Radius SVGA Multiview 800 x 600, 256 color
	
	- Radius SVGA Multiview 1024 x 768, 256 color (small font)
	
	- Radius SVGA Multiview 1024 x 768, 256 color (large font)
	
	RESOLUTION
	==========
	
	To resolve this problem, use either of the following methods:
	
	Method 1
	--------
	
	Contact Radius technical support and obtain an updated video driver.
	
	Method 2
	--------
	
	NOTE: This does not apply to Wine Guide, which requires a 256-color driver.
	
	Change the video display resolution to Standard VGA. This is the 640 x 480,
	16-colors (Svga.drv) driver included with Microsoft Windows.
	
	If you are using 256 colors or more for your monitor display, you may want to
	lower your video colors to 16.
	
	For more information about how to change your video display properties in
	Windows, see your Windows printed documentation or online Help.
	
	STATUS
	======
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	MORE INFORMATION
	================
	
	Changing the video display driver to the Standard VGA driver is a useful step in
	helping to isolate and determine problems associated with your currently
	installed video card driver.
	
	Your video display driver may require an upgrade from the manufacturer.
	
	REFERENCES
	==========
	
	Radius Technical Support: (408) 541-5700
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbWine100
	Version           : 1.00
	
	=============================================================================
	
