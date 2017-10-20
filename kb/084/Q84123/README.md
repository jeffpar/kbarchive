---
layout: page
title: "Q84123: V7VGA.DRV Not Updated in Windows 3.1 Upgrade"
permalink: /kb/084/Q84123/
---

## Q84123: V7VGA.DRV Not Updated in Windows 3.1 Upgrade

{% raw %}

	Article: Q84123
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Video Seven technical support, when you install the Video Seven VGA
	512K driver on a Microsoft Windows version 3.0a system and then upgrade to
	Microsoft Windows operating system version 3.1 and choose the Video 7 512K, 640
	x 480 256 colors driver, the Windows 3.1 V7VGA.DRV, size 99296, date 3/10/92 is
	not placed into the WINDOWS\SYSTEM directory.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Exit Windows and change to the WINDOWS directory.
	
	2. Run Setup and select the current video driver and press ENTER.
	
	3. From the list of available video drivers, choose Video 7 512K 640 x 480 256
	  colors.
	
	4. When asked if you want to use the existing driver or a new one, press the ESC
	  key to install the new V7VGA.DRV file.
	
	Additional query words: 3.10 3.11 video-seven video-7 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
