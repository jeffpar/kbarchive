---
layout: page
title: "Q119368: WD 8514/a Fails to Load in 8514/a High-Resolution Mode"
permalink: /kb/119/Q119368/
---

## Q119368: WD 8514/a Fails to Load in 8514/a High-Resolution Mode

{% raw %}

	Article: Q119368
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
	
	After installation, Windows 95 returns to VGA mode and displays the following
	error message:
	
	  Windows was unable to use the requested display settings. Please adjust them
	  now.
	
	CAUSE
	=====
	
	During an upgrade from Windows 3.1, Windows 95 Setup may incorrectly detect a
	Western Digital or Paradise 8514/a video adapter as an adapter that can use the
	default Western Digital video driver included with Windows 95.
	
	RESOLUTION
	==========
	
	To correct this problem, install the drivers for the 8514/a-compatible video
	adapter. These drivers can be found on the Windows 95 installation CD- ROM in
	the \DRIVERS\DISPLAY\8514 directory.
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: err msg wd wwt 3rdparty
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
