---
layout: page
title: "Q163661: Remove Old Device Drivers Before Installing Windows NT 4.0"
permalink: /kb/163/Q163661/
---

## Q163661: Remove Old Device Drivers Before Installing Windows NT 4.0

	Article: Q163661
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you upgrade to Windows NT 4.0 from an earlier version of Windows NT, all
	nonessential services and devices should be disabled before beginning the
	upgrade.
	
	MORE INFORMATION
	================
	
	In order to ensure a clean, stable upgrade from Windows NT 3.x, you must disable
	or remove third-party services and devices. If you do not, these devices or
	services may try to start during the reboot between the character-based and
	GUI-based portions of Setup. This situation may cause the computer to display a
	debug screen (for example, "STOP 0x00000050" or "STOP 0x0000001E") and halt, or
	to become so unstable that Setup cannot finish.
	
	If a driver or service is not required for system operation, it should be
	disabled before upgrading to Windows NT4.0.
	
	If a driver or service is required for system operation (such as a SCSI
	controller or network card), you should obtain a driver for Windows NT 4.0 from
	the third-party provider and have the driver available on a floppy disk for use
	during the upgrade process.
	
	To disable a driver, follow these steps:
	
	1. In Control Panel, double-click Devices.
	
	2. Click the third-party driver you want to disable, and then click Startup.
	
	3. In the Device dialog box, click Disabled, and then restart the computer.
	
	4. In Control Panel, double-click Devices, and verify that the device did not
	  start.
	
	To disable a service, use the following steps:
	
	1. In Control Panel, double-click Services.
	
	2. Click the third-party service you want to disable, and then click Startup.
	
	3. In the Service dialog box, click Disabled, and then restart the computer.
	
	4. In Control Panel, double-click Services, and then verify that the service did
	  not start.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
