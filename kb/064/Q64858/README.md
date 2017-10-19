---
layout: page
title: "Q64858: Missing Printers on SETUP.INF on 3.5-Inch Disk in Windows 3.0"
permalink: /kb/064/Q64858/
---

## Q64858: Missing Printers on SETUP.INF on 3.5-Inch Disk in Windows 3.0

	Article: Q64858
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	The following printers are listed on SETUP.INF on the 5.25-inch Setup
	Disk; however, they are not listed on SETUP.INF on the 3.5-inch Setup
	Disk:
	
	  NEC PinWriter P6
	  NEC PinWriter P7
	  NEC PinWriter P2200
	  NEC PinWriter P5200
	  NEC Silentwriter LC 860 [PCL / HP LaserJet]
	  NEC Silentwriter LC 860 Plus [PCL / HP LaserJet]
	
	One workaround for this problem is to install for the P5300 because
	the printers above share the same driver; then, configure for the
	correct printer in the Printer Setup of the Control Panel. For the LC
	860 printers, it is necessary to install for the PCL/HP LaserJet
	driver.
	
	Additional query words: 3.00 3.0 3.0a 3.00a winsetup
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
