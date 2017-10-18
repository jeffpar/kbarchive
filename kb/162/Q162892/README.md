---
layout: page
title: "Q162892: Problems Adding Second Drive to Dual Channel EIDE/PCI"
permalink: kb/162/Q162892/
---

## Q162892: Problems Adding Second Drive to Dual Channel EIDE/PCI

	Article: Q162892
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding an IDE drive to the second channel of an onboard EIDE/PCI
	controller, Windows NT may not recognize the device. If you configure the drive
	as a slave and add it to the primary channel, Windows NT may produce the
	following error during system startup:
	
	  STOP 0x7B INACCESSIBLE_BOOT_DEVICE
	
	CAUSE
	=====
	
	The problem is caused by incompatibilities between the onboard dual channel
	EIDE/PCI controller and the Windows NT 3.51 Atapi.sys driver.
	
	RESOLUTION
	==========
	
	To work around the compatibility problem, perform the following steps:
	
	1. Install the new IDE drive on the second IDE channel as the master.
	
	2. Make sure that a copy of Atdisk.sys is in the %SystemRoot%\System32\Drivers
	  directory.
	
	3. Use Control Panel Devices to start ATDISK and set the startup option to
	  System.
	
	4. Run Disk Administrator from the Administrative Tools group and assign a drive
	  letter to the new drive.
	
	MORE INFORMATION
	================
	
	Some systems that exhibit this problem may function properly with the latest
	service pack for Windows NT 3.51. Other systems may require you to install
	Windows NT version 4.0 to achieve full functionality.
	
	Additional query words: prodnt ATAPI ATDISK 0000007B boot reboot restart
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WINNT:3.51
	Issue type        : kbprb
	
	=============================================================================
	
