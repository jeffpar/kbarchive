---
layout: page
title: "Q155580: Second PC-Card Hard Disk on Fourth IDE Channel Not Configured"
permalink: /kb/155/Q155580/
---

## Q155580: Second PC-Card Hard Disk on Fourth IDE Channel Not Configured

{% raw %}

	Article: Q155580
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a computer with two internal IDE channels and two PC-Card type III
	slots, Windows NT will not configure the second PC-Card hard disk. When you open
	the PC-Card tool in Control Panel and look at the properties of the second disk,
	the status in the driver tab will read:
	
	  The driver is installed and started but didn't configure the device.
	
	When you look at the Resources tab, no resources are shown.
	
	CAUSE
	=====
	
	The PCMCIA driver in Windows NT does not install a fourth IDE interface. The
	current implementation requires that the driver know about possible
	configurations. This is different from Windows 95, which supports true Plug and
	Play.
	
	STATUS
	======
	
	Microsoft has confirmed this to be problem in Windows NT 4.0. We are researching
	this problem and will post additional information here in the Microsoft
	Knowledge base as it becomes available.
	
	
	Additional query words: prodnt kbbug4.0
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
