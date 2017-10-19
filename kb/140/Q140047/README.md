---
layout: page
title: "Q140047: Eicon Diva ISDN PC-Card Setup Disables Mass-Storage Devices"
permalink: /kb/140/Q140047/
---

## Q140047: Eicon Diva ISDN PC-Card Setup Disables Mass-Storage Devices

	Article: Q140047
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbsetup kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the driver for Eicon Diva ISDN PC-Card devices on your
	computer, PC-Card adapters connecting mass-storage devices (such as SCSI
	adapters or IDE hard disks) stop working. Another symptom of this problem is
	that mass-storage devices you are trying to install may not work if you already
	have the Eicon product installed.
	
	CAUSE
	=====
	
	The setup program for the Eicon Diva ISDN adapter changes the startup value for
	the PCMCIA driver to "System." To work for mass-storage devices, this driver
	must be set to "Boot."
	
	This problem exists in the Eicon driver that ships with the Windows NT 4.0
	compact disc. Eicon is aware of this.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Devices.
	
	2. In the Device list, click Pcmcia, click Startup, and then click Boot.
	
	3. Click OK, and then click Close.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kb3rdparty kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
