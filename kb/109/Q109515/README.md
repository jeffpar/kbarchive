---
layout: page
title: "Q109515: Repeating Window Displays with Microsoft 256-Color SVGA Driver"
permalink: /kb/109/Q109515/
---

## Q109515: Repeating Window Displays with Microsoft 256-Color SVGA Driver

{% raw %}

	Article: Q109515
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the generic Microsoft 800 x 600 256-color Super VGA driver with the ATI
	VGA Wondercard (or a comparable card) with only 512 kilobytes video memory
	creates a repeating window at the bottom of the screen.
	
	WORKAROUND
	==========
	
	To work around this problem, use a 16-color video driver or the 256-color driver
	that comes with the video card. The Microsoft 800 x 600 256-color Super VGA
	video driver requires 1 megabyte of RAM on the video card to properly display
	the 800 x 600 resolution with 256 colors.
	
	Additional query words: 3.10 3.1 3.11 svga adapter SVGA256
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
