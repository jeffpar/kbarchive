---
layout: page
title: "Q164403: Event 10 After Installing IntelliPoint 2.0 in Windows NT 4.0"
permalink: kb/164/Q164403/
---

## Q164403: Event 10 After Installing IntelliPoint 2.0 in Windows NT 4.0

	Article: Q164403
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Microsoft IntelliPoint version 2.0 software, the event log
	may show the following errors:
	
	  MouClass Event ID 10 - "Could not disable interrupts on connected port
	  \Device\PointerClass0"
	
	Even though the error is listed in the event log, the mouse is functional and the
	IntelliPoint features work.
	
	CAUSE
	=====
	
	You are using a serial mouse instead of a PS/2-style mouse.
	
	RESOLUTION
	==========
	
	This error does not create any problems. However, if you do not want to generate
	errors in the event log, disable the MSi8042 device driver and enable the i8042
	Keyboard and PS/2 Mouse driver.
	
	MORE INFORMATION
	================
	
	To disable the msi8042 device driver and enable the i8042 device driver, follow
	these steps:
	
	1. In Control Panel, double-click Devices.
	
	2. Click i8042 Keyboard And PS/2 Mouse Driver.
	
	3. Click Startup.
	
	4. Set the Startup Type to System, then click OK.
	
	5. Click MSi8042, and then click Startup.
	
	6. Set the Startup Type to Disabled, and then click OK.
	
	7. When a warning appears, click OK.
	
	8. Close Devices, and then shut down and restart your computer.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
