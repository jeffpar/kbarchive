---
layout: page
title: "Q117688: Control Panel Does Not Accept Microsoft Driver Disk"
permalink: /kb/117/Q117688/
---

## Q117688: Control Panel Does Not Accept Microsoft Driver Disk

{% raw %}

	Article: Q117688
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows or Windows for Workgroups fails to install a new printer driver from the
	printer driver disk you received from Microsoft Product Support Services (PSS).
	When you try to install the printer driver using the Unlisted or Updated Printer
	option in Control Panel, the Install Driver dialog box does not find any drivers
	on the floppy disk.
	
	
	CAUSE
	=====
	
	Some of the printer driver disks now being shipped have the printer drivers in a
	subdirectory instead of the root directory. Windows and Windows for Workgroups
	do not find the drivers by default because the drivers are located in a
	subdirectory.
	
	RESOLUTION
	==========
	
	At the command line in the Install Driver dialog box, type the path to the
	appropriate directory in which the driver is located.
	
	
	Additional query words: 3.10 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
