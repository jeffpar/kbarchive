---
layout: page
title: "Q134238: Disabled Devices Generate Code 10 Status"
permalink: /kb/134/Q134238/
---

## Q134238: Disabled Devices Generate Code 10 Status

{% raw %}

	Article: Q134238
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows 95, Windows 95 may detect devices that are disabled in
	the computer's CMOS settings. These devices are displayed in Device Manager with
	an exclamation point in a yellow circle, with the following status:
	
	  This device is not present, not working properly, or does
	  not have all the drivers installed. See your hardware
	  documentation (Code 10.)
	
	CAUSE
	=====
	
	When Windows 95 detects a device that has been disabled in the computer's CMOS
	settings, the appropriate driver is loaded but the device is disabled. Any
	devices attached to the disabled device are not displayed in the device tree.
	
	RESOLUTION
	==========
	
	To enable the device in Windows 95, first enable it in the computer's CMOS
	settings, and then restart Windows 95. For information about enabling devices in
	your computer's CMOS settings, please consult your computer documentation.
	
	MORE INFORMATION
	================
	
	When Windows 95 detects the hardware in your computer, it scans memory at
	specific I/O addresses to find devices. Windows 95 does not check CMOS settings
	to determine whether a device is disabled.
	
	Additional query words: code10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
