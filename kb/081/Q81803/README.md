---
layout: page
title: "Q81803: Windows Err Msg: WDCTRL Cannot Load Due to Conflict"
permalink: /kb/081/Q81803/
---

## Q81803: Windows Err Msg: WDCTRL Cannot Load Due to Conflict

{% raw %}

	Article: Q81803
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error message when you start Windows or Windows for
	Workgroups:
	
	  WDCTRL cannot load due to conflict with another virtual device
	
	CAUSE
	=====
	
	This error message can occur when:
	
	- The DEVICE=*INT13 entry is removed from the [386Enh] section of your
	  SYSTEM.INI file and the DEVICE=*WDCTRL line remains in the file.
	
	  -or-
	
	- You have a DEVICE=MULTIS.386 entry as well as the DEVICE=*INT13 and
	  DEVICE=*WDCTRL entries in the [386Enh] section of your SYSTEM.INI file.
	
	  -or-
	
	- A third-party device driver for the hard disk drive controller already exists
	  in the SYSTEM.INI file.
	
	  -or-
	
	- You have two or more DEVICE=*WDCTRL lines in your SYSTEM.INI file.
	
	RESOLUTION
	==========
	
	To correct this problem, remove the WDCTRL line or add the line DEVICE=*INT13 to
	the [386Enh] section of the SYSTEM.INI file. If you are using MULTIS.386, either
	remove it from the SYSTEM.INI file, or remove both DEVICE=*INT13 and
	DEVICE=*WDCTRL. If you are using a third-party device driver for the hard disk
	drive controller, either remove the driver or remove DEVICE=*WDCTRL from the
	SYSTEM.INI file.
	
	NOTE: If a
	
	  Fastdisk validation error
	
	occurs when you enter Windows after adding the DEVICE=*INT13 line to the
	SYSTEM.INI file, both the WDCTRL and the INT13 lines should be removed or
	commented out. (This error should occur only if you have manually edited the
	SYSTEM.INI file.)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
