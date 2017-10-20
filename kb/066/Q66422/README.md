---
layout: page
title: "Q66422: Bottom Part of Desktop Missing on NEC Prospeed 386"
permalink: /kb/066/Q66422/
---

## Q66422: Bottom Part of Desktop Missing on NEC Prospeed 386

{% raw %}

	Article: Q66422
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a NEC Prospeed 486 laptop, and when you use the Microsoft Windows VGA
	driver, the bottom part of Windows is cut off.
	
	CAUSE
	=====
	
	The NEC Prospeed 386 (laptop) display is 640 x 400 resolution. This behavior
	occurs because the VGA driver supports 640 x 480 resolution (that is, 80 rows
	longer than the display).
	
	WORKAROUND
	==========
	
	NEC recommends that the EGA driver be used with this computer to work around the
	problem.
	
	MORE INFORMATION
	================
	
	The NEC products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
