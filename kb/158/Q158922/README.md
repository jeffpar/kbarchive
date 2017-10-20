---
layout: page
title: "Q158922: Removed Device Not Detected by Add New Hardware Wizard"
permalink: /kb/158/Q158922/
---

## Q158922: Removed Device Not Detected by Add New Hardware Wizard

{% raw %}

	Article: Q158922
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Add New Hardware Wizard, it may not detect a device that has
	been removed in Device Manager on a multiple-profile user system.
	
	CAUSE
	=====
	
	Removing a Plug and Play device from one profile and leaving it in another
	causes a flag to be set in the registry to prevent the device from being
	enumerated on the next startup, and may also cause the Add New Hardware Wizard
	to bypass the device. The flag exists only in the profile in which the device
	was removed.
	
	RESOLUTION
	==========
	
	To prevent this problem from occurring, disable the device in Device Manager
	instead of removing it. To disable a device, click the Disable In This Hardware
	Profile check box for the device in Device Manager.
	
	To restore (or redetect) the device, remove it from all profiles and then run the
	Add New Hardware Wizard.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	

{% endraw %}
