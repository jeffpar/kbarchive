---
layout: page
title: "Q134297: Redraw Problems with Cirrus Logic SVGA 5402 Adapters"
permalink: /kb/134/Q134297/
---

## Q134297: Redraw Problems with Cirrus Logic SVGA 5402 Adapters

{% raw %}

	Article: Q134297
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
	
	When you are using a Cirrus Logic SVGA 5402 video adapter and you drag a window
	to a new location on the screen with the mouse, the screen may not be redrawn
	correctly.
	
	CAUSE
	=====
	
	The Windows 95 Cirrus Logic video drivers are not fully compatible with the
	older Cirrus Logic SVGA 5402 adapter.
	
	RESOLUTION
	==========
	
	To resolve this problem, use any one of the following methods:
	
	- Set the Hardware Acceleration slider to None. To do so, use the right mouse
	  button to click My Computer, click Properties on the menu that appears, click
	  the Performance tab, click Graphics, move the Hardware Acceleration slider
	  all the way to the left, and then click OK.
	
	- Change the video adapter type to Standard Display Adapter (VGA) or Super VGA.
	
	- Upgrade to a newer video adapter.
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95. For further
	information, please contact the video adapter manufacturer.
	
	MORE INFORMATION
	================
	
	Installing a Windows 3.1 generic SVGA driver does not resolve the problem
	described in this article. Try the methods listed in this article to resolve
	other problems that may occur when you are using the Cirrus Logic SVGA 5402
	adapter.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
