---
layout: page
title: "Q161220: Removing Unknown Device in Device Manager Hangs Computer"
permalink: kb/161/Q161220/
---

## Q161220: Removing Unknown Device in Device Manager Hangs Computer

	Article: Q161220
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Removing an unknown device from Device Manager may cause the computer to stop
	responding (hang).
	
	CAUSE
	=====
	
	The computer's BIOS does not respond correctly to the device removal, causing
	the computer to hang.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Contact your computer manufacturer about a possible BIOS upgrade.
	
	- If your computer has a USB hub, contact your computer manufacturer to obtain
	  the Windows 95 OEM Service Release version 2.1 update.
	
	MORE INFORMATION
	================
	
	This behavior is not unique to any one device or BIOS. When you remove a device
	from Device Manager, a device removal notification is issued to the BIOS. The
	BIOS is then responsible for handling this message and acting accordingly
	(typically doing nothing). However, in certain systems, the BIOS is left in an
	unknown state and eventually hangs the computer.
	
	For information about troubleshooting unknown devices, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161102 Removing "Unknown Device" Network Adapter Hangs Computer
	
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
