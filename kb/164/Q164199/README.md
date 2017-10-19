---
layout: page
title: "Q164199: OSR2 Additional Power Management Features"
permalink: /kb/164/Q164199/
---

## Q164199: OSR2 Additional Power Management Features

	Article: Q164199
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
	
	When your computer is idle for a period of time, you may notice the following
	behavior when you begin using it again:
	
	- There is a delay when the drive is accessed.
	
	- Communications programs pause for several seconds before dialing out when you
	  are using a PC Card modem.
	
	CAUSE
	=====
	
	Windows 95 OEM Service Release 2 (OSR2) includes power management features that
	spin down IDE disk drives when they are not accessed, and turn off power to a PC
	Card socket when a PC Card modem is not in use. These power saving features may
	cause the delay you are experiencing.
	
	MORE INFORMATION
	================
	
	You can configure the new power management features in OSR2 using the following
	steps:
	
	1. In Control Panel, double-click Power.
	
	2. Click the Disk Drives tab.
	
	3. Click the "When powered by AC power" check box to enable or disable this
	  feature for IDE drives. If you enable this feature, you can adjust the amount
	  of idle time before the drive spins down. The unit of measurement is minutes.
	
	4. Click the PC Card Modems tab.
	
	5. Click the "Turn off when PC Card modem is not in use" check box to enable or
	  disable this feature. If you enable this feature, you can adjust the amount
	  of idle time before the power to the modem is turned off. The unit of
	  measurement is minutes.
	
	For additional information about the features of Windows 95 OSR2, see the
	following Microsoft Knowledge Base article:
	
	  Q155003 Description of Windows 95 OEM Service Release 2
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
