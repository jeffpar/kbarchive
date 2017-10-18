---
layout: page
title: "Q139206: Hardware List Not Updated After Installing New .inf File"
permalink: kb/139/Q139206/
---

## Q139206: Hardware List Not Updated After Installing New .inf File

	Article: Q139206
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kbhw win95 kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to install a new Setup information (.inf) file by placing the file in
	the Windows\Inf folder, the new device may not appear in the hardware list for
	that type of device, and may not be properly detected by Windows 95. If you
	replace an existing .inf file with a newer version, the device appears in the
	hardware list and is properly detected, but Windows 95 may not use the
	information in the newer file when you install the device.
	
	CAUSE
	=====
	
	This problem occurs because Windows 95 did not rebuild the driver information
	database after you placed the new or updated .inf file in the Windows\Inf
	folder.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Place the new or updated .inf file in the Windows\Inf folder.
	
	2. If you are installing a new .inf file for a device that is not currently
	  installed, skip to step 3. If you are replacing an existing .inf file with a
	  newer version, follow these steps:
	
	  a. In Control Panel, double-click the System icon.
	
	  b. On the Device Manager tab, double-click the hardware branch for the type
	     of device you are updating.
	
	  c. Click the device you are updating, and then click Remove.
	
	  d. Click OK.
	
	3. At a command prompt, type the following lines. Press ENTER after each line:
	
	  " cd \windows\inf
	  ren drvdata.bin drvdata.xxx
	  ren drvidx.bin drvidx.xxx " (without the quotation marks)
	
	4. Install the device using the Add New Hardware tool in Control Panel or using
	  the tool appropriate to the device type (such as the Add Printer tool or the
	  Install New Modem Wizard.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For additional information about the hardware lists and driver information
	database, please see the following article in the Microsoft Knowledge Base:
	
	  Q137377 Removing Windows 3.1 Drivers from Wizard Hardware Lists
	
	Additional query words: rebuilding
	
	======================================================================
	Keywords          : kbenv kbhw win95 kbHardware 
	Technology        : kbWin95search kbWin95
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
