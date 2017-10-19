---
layout: page
title: "Q180604: Windows NT Installation on Laptops with PCI Docking Station"
permalink: /kb/180/Q180604/
---

## Q180604: Windows NT Installation on Laptops with PCI Docking Station

	Article: Q180604
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT on a portable computer with a docking station, the
	peripherals in the docking station are not detected. With some docking stations,
	you may receive the following error message after the first reboot:
	
	  Setup has encountered a fatal error while initializing your video
	  contact 0xC0000034. Setup can not continue.
	
	CAUSE
	=====
	
	Some docking stations have a PCI bridge that links the laptop's PCI bus to the
	docking station's PCI bus. During installation, Windows NT is not able to detect
	devices in a docking station of this type. The version of HAL available in
	Windows NT 4.0 Service Pack 3 has the ability to detect devices across the PCI
	bridge.
	
	RESOLUTION
	==========
	
	It is possible to replace the original HAL with the one in Service Pack 3 prior
	to installation. To do this, create a sharepoint that contains the i386
	directory from the Windows NT 4.0 compact disc, or copy the contents of the i386
	directory to the local hard disk. After creating the sharepoint, follow these
	steps:
	
	1. Rename the following files in the i386 sharepoint or move them to a backup
	  directory:
	
	  Hal.dl_
	  Halast.dl_
	  Halcbus.dl_
	  Halcbusm.dl_
	  Haloli.dl_
	  Halsp.dl_
	  Halwyse7.dl_
	
	2. Copy the following files from Service Pack 3 directory to the i386 sharepoint
	  on the distribution server:
	
	  Hal.dll
	  Hal486c.dll
	  Halapic.dll
	  Halast.dll
	  Halcbus.dll
	  Halcbusm.dll
	  Halmca.dll
	  Halmps.dll
	  Halmpsm.dll
	  Haloli.dll
	  Halsp.dll
	  Halwyse7.dll
	
	3. Perform a normal or unattended installation of Windows NT and the devices on
	  the docking station will be detected properly.
	
	Additional query words: unattend AGP stop 0
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
