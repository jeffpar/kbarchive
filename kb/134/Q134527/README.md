---
layout: page
title: "Q134527: Screen Flashing on Green PCs with Some AMI BIOS Versions"
permalink: /kb/134/Q134527/
---

## Q134527: Screen Flashing on Green PCs with Some AMI BIOS Versions

{% raw %}

	Article: Q134527
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
	
	With some AMI BIOS versions, some Green computer systems that have built-in
	power management support may experience a constant flashing of the screen. The
	screen may start flashing as soon as Windows 95 starts, after a long period of
	inactivity on the computer, or after you attempt to suspend the computer.
	
	In addition to the screen flashing every few seconds, the mouse cursor may jump
	to the center of the screen, and the system may respond so slowly that you are
	unable to use it.
	
	CAUSE
	=====
	
	When Windows 95 Advanced Power Management polls the BIOS for APM events, the
	BIOS returns a Resume From Suspend command. This causes Windows 95 to
	reinitialize some software and hardware, such as the display and the mouse,
	resulting in the screen flashing, the mouse centering, and the delays.
	
	RESOLUTION
	==========
	
	To work around this behavior, you must disable Windows 95 power management
	support. To do so, use one of the following methods:
	
	1. Click the Start button, point to Settings, and then click Control Panel on
	  the menu that appears.
	
	2. In Control Panel, double-click the System icon.
	
	3. In the System Properties dialog box, click the Device Manager tab, and then
	  double-click System Devices.
	
	4. Double-click Advanced Power Management Support.
	
	5. Click the Settings tab.
	
	6. Make sure that the box to Enable Power Management Support is not checked.
	
	7. Click the OK button, shut down the computer, and then restart Windows 95
	
	-or-
	
	Disable power management with the computer's BIOS Setup utility. For more
	information about the computer's BIOS Setup utility, please consult your
	computer documentation or manufacturer.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
