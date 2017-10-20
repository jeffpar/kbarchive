---
layout: page
title: "Q133075: Disabling Adaptec SCSI Chip in CMOS Hangs Windows 95"
permalink: /kb/133/Q133075/
---

## Q133075: Disabling Adaptec SCSI Chip in CMOS Hangs Windows 95

{% raw %}

	Article: Q133075
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
	
	Windows 95 may stop responding (hang) the first time it restarts after you run
	Setup.
	
	CAUSE
	=====
	
	This problem can occur if the Adaptec AIC-6360 SCSI chip is disabled in your
	computer's CMOS settings.
	
	RESOLUTION
	==========
	
	To resolve this problem, disable the SCSI adapter in Device Manager. To do so,
	follow these steps:
	
	1. Start Windows 95 in Safe mode.
	
	2. Use the right mouse button to click My Computer, then click Properties on the
	  menu that appears.
	
	3. On the Device Manager tab, double-click the SCSI Controller branch.
	
	4. Click the SCSI adapter, then click Properties.
	
	5. Click the Original Configuration check box to clear it, then click OK.
	
	MORE INFORMATION
	================
	
	When the Adaptec AIC-6360 SCSI chip is disabled in the computer's CMOS settings,
	Windows 95 detects the device but cannot detect that it has been disabled. This
	causes the miniport drivers for the SCSI device to attempt to load, and may
	cause the system to hang
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
