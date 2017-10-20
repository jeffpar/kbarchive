---
layout: page
title: "Q169550: Windows 95 Clock Loses Time with APM Enabled"
permalink: /kb/169/Q169550/
---

## Q169550: Windows 95 Clock Loses Time with APM Enabled

{% raw %}

	Article: Q169550
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable Advanced Power Management (APM) on a computer running Windows
	95, the Windows 95 clock may slow down or stop when the computer switches to
	suspended mode. However, the system clock continues to keep the correct time and
	you can reset the Windows 95 clock to the correct time by restarting the
	computer.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions exists:
	
	- You enabled APM in the computer's CMOS settings after Windows 95 was
	  installed.
	
	- Your computer's BIOS supports an older version of APM.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method.
	
	Enabled APM After Installing Windows 95
	---------------------------------------
	
	If you enabled APM in your computer's CMOS settings after installing Windows 95,
	Windows 95 APM support may not have been installed. Reinstall Windows 95 to
	install APM support.
	
	To verify that APM support is enabled, follow these steps:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, double-click the System Devices branch to expand
	  it.
	
	3. Double-click Advanced Power Management Support.
	
	4. On the Settings tab, verify that the Enable Power Management Support check
	  box is selected.
	
	APM Support Is Installed
	------------------------
	
	If APM support is installed, suspend the computer by clicking the Start button
	and then clicking Suspend before the computer switches to suspended mode.
	
	Computer's BIOS Supports an Older Version of APM
	------------------------------------------------
	
	You may be able to resolve this issue by upgrading the computer's BIOS. Contact
	the computer's manufacturer for information about a possible BIOS upgrade.
	
	For additional information about BIOS support for APM, see the following article
	in the Microsoft Knowledge Base:
	
	  Q137402 APM Features May Be Unavailable in Windows 95
	
	======================================================================
	Keywords          : kbenv kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
