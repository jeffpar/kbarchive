---
layout: page
title: "Q76845: System Hangs with Kraft Mouse and Driver 3.01"
permalink: /kb/076/Q76845/
---

## Q76845: System Hangs with Kraft Mouse and Driver 3.01

{% raw %}

	Article: Q76845
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Kraft Systems mouse and mouse driver version 3.0 or earlier, and your
	system stops responding (hangs) or locks up when you use MS-DOS version 5.0
	Shell Task Swapper.
	
	CAUSE
	=====
	
	Kraft Systems has confirmed that the Kraft mouse and Kraft mouse driver version
	3.0 or earlier may cause this behavior in MS-DOS Shell Task Swapper.
	
	NOTE: Kraft Systems has confirmed that Kraft mouse and mouse driver version 3.01
	work properly with MS-DOS Shell Task Swapper.
	
	WORKAROUND
	==========
	
	If you have a Kraft mouse and Kraft mouse driver version 3.0 installed and your
	machine hangs with Task Swapper, you can work around the problem by doing one of
	the following:
	
	- Contact Kraft Systems about upgrading to the 3.01 version of the mouse
	  driver.
	
	- Disable the mouse by remarking out the DEVICE=C:\KRAFT\MOUSE.SYS line in the
	  CONFIG.SYS file and use Task Swapper by keyboard input.
	
	- Do not use Task Swapper.
	
	MORE INFORMATION
	================
	
	For more information, contact Kraft Systems.
	
	The Kraft Systems products included here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.00 5.00 dosshell switcher
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	

{% endraw %}
