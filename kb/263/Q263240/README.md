---
layout: page
title: "Q263240: PRB: Tab Disappears from Power Management Properties on IBM Thin"
permalink: kb/263/Q263240/
---

## Q263240: PRB: Tab Disappears from Power Management Properties on IBM Thin

	Article: Q263240
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kbHWx86 kbOEM
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 does not allow the Control Panel Power Management application to
	display more than eight tabs at a time. The ninth tab is not displayed on the
	Power Management application if original equipment manufacturers (OEMs) and/or
	independent hardware vendors (IHVs) add their own custom tab.
	
	CAUSE
	=====
	
	Windows 95 removes (or hides) any tabs that are installed after the eighth tab.
	This problem has been verified after installing a Xircom CE2 performance series
	cardbus card on a Windows 95-based computer, which adds a new PC-Card Modems tab
	to the Power Management application. When this new tab is added, one of the
	eight tabs that were previously visible is removed.
	
	STATUS
	======
	
	This behavior is by design. Windows 95 was not designed to support more than
	eight tabs at the time the product was released. This limitation has been
	corrected in Microsoft Windows 98 and later.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Install Windows 95 OSR2.1 on IBM ThinkPad 600X with Intel SpeedStep
	  Technology processor installed.
	
	2. Install Internet Explorer 5, which is a prerequisite of ThinkPad
	  Configuration Utility, and then restart the system.
	
	3. Install all relevant device drivers, and then restart the system at each
	  installation of a device driver.
	
	4. Install ThinkPad Configuration Utility, and then restart the system.
	
	5. Open ThinkPad Configuration Utility.
	
	6. Select Power Management (click the battery icon), which should open the
	  Control Panel Power Management application.
	
	7. Confirm that seven tabs are displayed on the Power Management properties
	  (Power Mode, Suspend resume option, Alarm, Power Management, Disk Drives,
	  Hibernation, Advanced Setting).
	
	8. Close the Power Management properties.
	
	9. Install the Intel SpeedStep application, and then restart the system.
	
	10. Open ThinkPad Configuration Utility, or open the Power Management
	  application in Control Panel. (Select Power Management to open the Power
	  Management application.)
	
	11. Confirm that eight tabs are displayed on the Power Management properties
	  (Power Mode, Suspend resume option, Alarm, Power Management, Disk Drives,
	  Hibernation, Advanced Setting, Intel SpeedStep Technology).
	
	12. Close the Power Management properties.
	
	13. Install any PC Card to the system, for example, a PC Card Modem (Xircom CE2
	  Performance series cardbus card).
	
	14. Open ThinkPad Configuration Utility (or, open the Power Management
	  application in Control Panel.)
	
	Notice that the PC Card Modem tab, which is one of the Windows 95 standard tabs,
	has been added and is displayed. However, one of tabs that was previously
	available is missing. In this case, the Intel SpeedStep Technology or Power Mode
	tab disappears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWx86 kbOEM 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	Issue type        : kbprb
	
	=============================================================================
	
