---
layout: page
title: "Q78949: Toshiba HARDRAM Battery Back-Up RAM and Permanent Swap File"
permalink: /kb/078/Q78949/
---

## Q78949: Toshiba HARDRAM Battery Back-Up RAM and Permanent Swap File

{% raw %}

	Article: Q78949
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Toshiba HARDRAM battery back-up RAM causes the following system error when a
	permanent swap file has been set up on the RAM drive
	
	  Unable To Read From Drive:x
	
	where x is the assignment for the HARDRAM drive.
	
	The following line must be added to the [386Enh] section of the SYSTEM.INI file:
	
	  VirtualHDIrq=off
	
	MORE INFORMATION
	================
	
	The Toshiba HARDRAM is a battery-backed-up, RAM-based RAM drive. The battery
	backup allows information stored in the HARDRAM chips to be retained when the
	computer is rebooted or turned off.
	
	The VirtualHDIrq=<Boolean> switch allows Windows in 386 enhanced mode to
	terminate interrupts from the hard disk controller, bypassing the ROM routine
	that handles these interrupts. Some hard drives might require that this setting
	be disabled for interrupts to be processed correctly. If this setting is
	disabled, the ROM routine handles the interrupts.
	
	Additional query words: 3.0 3.00 3.0a 3.00a swapfile 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
