---
layout: page
title: "Q132201: Windows 95/98: Checking and Modifying a COM Port"
permalink: /kb/132/Q132201/
---

## Q132201: Windows 95/98: Checking and Modifying a COM Port

	Article: Q132201
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95,98
	Operating System(s): 
	Keyword(s): kbenv kbhw kbsetup kbimu kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to check and modify a serial communications (COM)
	port setting in Windows 95/98.
	
	MORE INFORMATION
	================
	
	To check COM port settings, do the following:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the System icon.
	
	3. On the Device Manager tab, double-click Ports (COM & LPT).
	
	4. Double-click the communications port, COMx (where x is the number assigned to
	  that port) you want to check. This opens the Communications Port Properties
	  window.
	
	Determining if a Device Conflict Exists
	---------------------------------------
	
	If two hardware devices are assigned to the same resource setting, a conflict
	exists and your hardware may not work properly. Interrupt Requests (IRQ) or
	Direct Memory Access (DMA) settings are two examples of such device resources.
	
	To determine if there is a device resource conflict, look at the Device status
	window on the General tab of the Communication Port Properties Window. If no
	device resource conflicts exist, the status window should contain the following
	message:
	
	  This device is working properly.
	
	If resource conflicts exist on the system, the Device status window should
	contain the following message:
	
	  This device is not present, not working properly, or does not have all the
	  drivers installed. See your hardware documentation.
	
	Next, click the Resources tab and check the Conflicting Device List to determine
	what, if any, hardware is causing a conflict.
	
	Checking Port Settings
	----------------------
	
	To check the port settings for a COM port, click the Port Settings tab in the
	Communication Port Properties window. This tab shows the following settings for
	the COM port:
	
	- Bits per second (baud rate)
	
	- Data bits
	
	- Parity
	
	- Stop bits
	
	- Flow control
	
	Modifying a COM Port Setting
	----------------------------
	
	If you want to modify COM port settings, do the following:
	
	1. Click the arrow next to the setting you want to change.
	
	2. Click the new setting.
	
	3. Click OK.
	
	For additional information about communications port settings in Windows 95/98,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q123992 Basic Configurations for COM Ports in Windows 95
	
	
	Additional query words: kbhowto 1995 communication comm com-port setup how-to configurations modems interference
	
	======================================================================
	Keywords          : kbenv kbhw kbsetup kbimu kbHardware 
	Technology        : kbWin95search kbWin98search kbWin95 kbWin98
	Version           : WINDOWS:95,98
	Issue type        : kbhowto
	
	=============================================================================
	
