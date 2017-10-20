---
layout: page
title: "Q132626: Mouse Pointer Disappears with S3 Video Adapter"
permalink: /kb/132/Q132626/
---

## Q132626: Mouse Pointer Disappears with S3 Video Adapter

{% raw %}

	Article: Q132626
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv win95
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using an S3 video adapter with a resolution higher than 1024 x 768
	x 256 colors or any resolution with more than 256 colors, the mouse pointer may
	disappear.
	
	CAUSE
	=====
	
	The S3 video driver has two sources for generating the pointer. The driver can
	use either the digital-to-analog converter (DAC) on the adapter or the S3 chip
	itself. The S3 driver uses the appropriate source based on the color depth and
	resolution.
	The problem described in this article can occur if the DAC on the adapter is not
	working correctly.
	
	
	RESOLUTION
	==========
	
	To work around this problem, use software pointers instead of hardware pointers.
	To do so, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the System icon.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the Hardware Accelerator slider one notch to the left (to the Most
	  Accelerator Functions setting).
	
	5. Click OK.
	
	Additional query words: cursor
	
	======================================================================
	Keywords          : kbdisplay kbenv win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
