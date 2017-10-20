---
layout: page
title: "Q134608: Wrong Drive Icon and Format for Removable Drive"
permalink: /kb/134/Q134608/
---

## Q134608: Wrong Drive Icon and Format for Removable Drive

{% raw %}

	Article: Q134608
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
	
	The drive icon for a removable drive may be represented as a 3.5-inch floppy
	disk drive instead of a removable drive. When this occurs, you cannot format the
	drive using the graphical user interface (GUI) because the correct capacity for
	the drive is not listed in the Capacity box in the Format dialog box. Instead,
	you see only the capacities for a 3.5-inch floppy disk drive (1.44 MB and 2.88
	MB).
	
	CAUSE
	=====
	
	This problem may be caused by real-mode drivers for the removable drive in the
	Config.sys file.
	
	RESOLUTION
	==========
	
	Format the drive using the FORMAT command at an MS-DOS prompt. Also, disable the
	real-mode drivers for the drive in the Config.sys file so that the drive is not
	real-mode-mapped.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
