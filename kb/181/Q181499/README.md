---
layout: page
title: "Q181499: USB Over Current Condition Causes Windows 95 Hang"
permalink: /kb/181/Q181499/
---

## Q181499: USB Over Current Condition Causes Windows 95 Hang

{% raw %}

	Article: Q181499
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbhw osr2 win95 kbHardwarekbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 may stop responding (hang) if an over current condition is detected
	from a Universal Serial Bus (USB) device. Over current conditions can occur when
	a USB device is "hot plugged" (or plugged in while the computer is on) into the
	computer.
	
	CAUSE
	=====
	
	Windows 95 may not clear the over current status in the USB hardware. This
	causes Windows 95 to service the same over current condition multiple times.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	Additional query words: overcurrent
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
