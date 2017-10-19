---
layout: page
title: "Q182856: &quot;Fatal Exception 0E&quot; Error Message When Ejecting Laptop"
permalink: /kb/182/Q182856/
---

## Q182856: &quot;Fatal Exception 0E&quot; Error Message When Ejecting Laptop

	Article: Q182856
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0,2.1,2.5
	Operating System(s): 
	Keyword(s): kberrmsg kbhw osr2 kbHardwarekbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you eject a laptop computer from its docking station while it is in suspended
	mode, the computer may resume, and then you may receive a "Fatal Exception Error
	0E" error message on a blue screen.
	
	CAUSE
	=====
	
	This problem can occur if all of the following conditions exist:
	
	- A data or audio CD-ROM is in the CD-ROM drive.
	
	- Auto insert notification is enabled for the CD-ROM drive.
	
	- The laptop computer is docked in its docking station.
	
	- You set the computer into suspended mode, or the computer goes into suspended
	  mode automatically based on power management settings.
	
	- You eject the computer by pressing the eject button on the docking station.
	
	- Your computer contains an Intel Pentium II processor.
	
	RESOLUTION
	==========
	
	To work around this problem, use the appropriate method:
	
	- Resume the computer from suspended mode before you eject it from the docking
	  station.
	
	- Disable auto insert notification. For information about how to do so, please
	  see the following article in the Microsoft Knowledge Base:
	
	  Q126025 How to Disable Automatic CD-ROM Running and Audio CD Playing
	
	- Configure the computer's power management settings to prevent it from
	  automatically going into suspended mode.
	
	- Remove any CD-ROMs from the CD-ROM drive when it is not in use.
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	This problem is known to occur with the following laptop computers:
	
	- Compaq Armada 7700
	
	- Compaq Armada 7800
	
	Additional query words: 2.00 2.10 2.50
	
	======================================================================
	Keywords          : kberrmsg kbhw osr2 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :2.0,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	
