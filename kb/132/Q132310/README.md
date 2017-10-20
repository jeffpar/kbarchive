---
layout: page
title: "Q132310: Cannot Detect New Hardware with Windows 3.1 Drivers Installed"
permalink: /kb/132/Q132310/
---

## Q132310: Cannot Detect New Hardware with Windows 3.1 Drivers Installed

{% raw %}

	Article: Q132310
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
	
	If you remove an unsupported sound card or other hardware device that uses
	Windows 3.1 drivers in the SYSTEM.INI file, and then attempt to install a new
	sound card or other device, the device may not be detected by the Add New
	Hardware Wizard. This problem can occur even if Windows 95 has protected-mode
	drivers for the device that you are attempting to install.
	
	CAUSE
	=====
	
	This problem can occur if the drivers for the original unsupported device have
	not been removed from the SYSTEM.INI file, causing Windows 95 to believe that
	the device is still installed. Because the original device is unsupported,
	Windows 95 does not recognize the Windows 3.1 drivers in the SYSTEM.INI file.
	Therefore, the Windows 3.1 drivers are not replaced with Windows 95
	protected-mode drivers, and Windows 95 does not continue to search for that type
	of device.
	
	RESOLUTION
	==========
	
	Remove the drivers for the original device from the SYSTEM.INI file and then run
	the Add New Hardware Wizard again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
