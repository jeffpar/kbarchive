---
layout: page
title: "Q88154: Hercules TIGA Driver May Cause GP Faults in Paintbrush"
permalink: /kb/088/Q88154/
---

## Q88154: Hercules TIGA Driver May Cause GP Faults in Paintbrush

{% raw %}

	Article: Q88154
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Hercules Graphics Station video card model GB1024 or GB1024+2 and
	the Hercules TIGA driver version 2.0, you may experience general protection (GP)
	faults in the Paintbrush program supplied with Microsoft Windows.
	
	According to Hercules technical support, this problem occurs when you use the
	Hercules 8-bit TIGA driver version 2.0 running at 1024 x 768 x 8 resolution and
	you are working with a large bitmap.
	
	GP faults have occurred in the following two instances:
	
	- When you paste a bitmap into Paintbrush
	
	- Immediately after you use the Scissors tool to select part of the image
	
	WORKAROUND
	==========
	
	Use a standard VGA video driver that is supplied with Windows 3.1.
	
	MORE INFORMATION
	================
	
	The Hercules 8-bit TIGA drivers consist of the following files:
	
	  TIGA.DRV        74576       04-06-92
	  TIGAWIN.RLM     42658       04-06-92
	  VDDHTIGA.386    46093       04-06-92
	  TIGACD.EXE      45248       03-31-92
	
	The Hercules products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: gpf 3.10 3.11 application error bmp super VGA svga windrvr 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
