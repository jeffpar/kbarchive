---
layout: page
title: "Q78596: Why MS-DOS Shell May Require Updated Mouse Driver"
permalink: /kb/078/Q78596/
---

## Q78596: Why MS-DOS Shell May Require Updated Mouse Driver

{% raw %}

	Article: Q78596
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the two reasons why MS-DOS Shell requires recent mouse
	driver versions.
	
	MORE INFORMATION
	================
	
	The first reason that Shell requires a recent mouse driver is that some older
	versions have bugs that may cause unexpected behavior when used in graphics
	modes or on certain types of monitors. Some examples of this behavior include:
	
	- Mouse "smear" on the screen
	
	- Inability to move the cursor more than half way across the screen
	
	- Occasional crashes
	
	The second reason Shell requires a recent mouse driver is that Task Swapper
	relies on certain functions of the mouse driver that are not present in older
	versions. These functions were added to the mouse driver to support Task Swapper
	and Windows (among other reasons). If this functionality is not supported, task
	swapping can cause the mouse to act unexpectedly and possibly crash the machine.
	
	Additional query words: 5.00 5.00a 6.00 DOSSHELL doshell mice
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	

{% endraw %}
