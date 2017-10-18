---
layout: page
title: "Q82258: Page Color Turns Black in PageMaker 4.0"
permalink: kb/082/Q82258/
---

## Q82258: Page Color Turns Black in PageMaker 4.0

	Article: Q82258
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Aldus PageMaker 4.0 with Microsoft Windows versions 3.1 or 3.11 and
	a Windows 3.0 high-resolution video driver, the page color turns to black after
	you minimize and then maximize PageMaker. This only occurs when you use a
	256-color driver.
	
	WORKAROUND
	==========
	
	To return the page color, do the following:
	
	1. From the Element menu, choose Define Colors.
	
	2. Select Paper.
	
	3. Choose the OK button.
	
	
	MORE INFORMATION
	================
	
	The following drivers were tested and reproduced the above problem:
	
	- Winspeed Tseng 800 by 600 by 256 colors
	
	- Dell PVGA600.DRV 800 by 600 by 256
	
	- Orchid 800 by 600 by 256 that comes with the ProDesigner II
	
	The high resolution video drivers below that are supplied with the standard
	Windows 3.1 disks work correctly with PageMaker 4.0:
	
	- Video 7 640 by 480 by 256
	
	- Video 7 800 by 600 by 256
	
	- Video 7 1024 by 768 by 256
	
	Additional query words: 3.10 PM4 Pagemaker 4.0 black svga 3.11 aldus pm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : :3.1,3.11
	
	=============================================================================
	
