---
layout: page
title: "Q132378: MS-DOS Command Prompt May Hang with Standard VGA Driver"
permalink: /kb/132/Q132378/
---

## Q132378: MS-DOS Command Prompt May Hang with Standard VGA Driver

{% raw %}

	Article: Q132378
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the video driver to the standard VGA driver, your computer may
	stop responding (hang) when you start an MS-DOS command prompt session.
	
	CAUSE
	=====
	
	The video adapter in your computer requires special support to run an MS-DOS
	command prompt session reliably.
	
	RESOLUTION
	==========
	
	If you want to run a standard display type (640 x 480 or 800 x 600 resolution
	with 16 colors), you should select the proper video driver for the video adapter
	installed in your computer instead of the standard VGA driver.
	
	Some video adapters require special support in Windows 95 to run MS-DOS- based
	programs reliably. This support is installed when you use the correct driver for
	the display adapter. When you select the standard VGA video driver, Windows 95
	does not install any adapter-specific support.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
