---
layout: page
title: "Q135160: Desktop Pythonizer Does Not Change Wallpaper"
permalink: /kb/135/Q135160/
---

## Q135160: Desktop Pythonizer Does Not Change Wallpaper

{% raw %}

	Article: Q135160
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Desktop Pythonizer tool, a component of the Monty Python's Complete Waste of
	Time software, may fail to change the desktop wallpaper.
	
	Also, the additional sound events that this program provides may not be saved.
	
	CAUSE
	=====
	
	The settings you choose in the program's interface are written to the System.ini
	file, not the registry. Windows 95 looks in the registry for these settings.
	
	RESOLUTION
	==========
	
	Please contact the program's manufacturer for information about possible
	resolutions to this problem.
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
