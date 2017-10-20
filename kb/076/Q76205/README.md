---
layout: page
title: "Q76205: MS-DOS Shell Does Not Have to Read Files at Startup"
permalink: /kb/076/Q76205/
---

## Q76205: MS-DOS Shell Does Not Have to Read Files at Startup

{% raw %}

	Article: Q76205
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you want MS-DOS Shell to start without reading the files and directories in
	memory, you need to select a different view other than the default view setting.
	
	MORE INFORMATION
	================
	
	Press ALT, V (View) for a selection of different viewing modes for Shell (the
	default is Program/File Lists). Program/File Lists will display the directory
	tree, individual files, and menu groups. If Task Swapper is active, that area
	will also be shown. To keep Shell from reading the directories and files, choose
	Program List from the View menu. Program List view will only show the menu
	groups and the Active Task List (if Task Swapper is activated).
	
	Additional query words: 5.00 5.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	

{% endraw %}
