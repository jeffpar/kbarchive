---
layout: page
title: "Q164103: Auto Insert Notification Polling May Prevent Automatic Suspend"
permalink: /kb/164/Q164103/
---

## Q164103: Auto Insert Notification Polling May Prevent Automatic Suspend

	Article: Q164103
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbhw osr2 win95 kbHardwarekbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some computers are equipped with power management features that place the
	computer in a suspended power state after a certain period of inactivity. If the
	Auto Insert Notification option is enabled for IDE CD-ROM drives on such a
	computer, and the computer uses the Intel PIIX 3 IDE controller chip set, the
	computer may not be suspended automatically.
	
	CAUSE
	=====
	
	The drive polling that Windows performs to determine drive status is detected by
	the power management components as drive activity. The drive controller reports
	that the drive is still in use, preventing the computer from being suspended.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	Note that this issue affects computers that use the Intel PIIX 3 IDE controller
	chip set, and does not depend upon whether the drive itself supports a
	particular Media Status Notification specification.
	
	
	Additional query words: pix pixx piix3
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
