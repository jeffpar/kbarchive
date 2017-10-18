---
layout: page
title: "Q86276: Installing Voyager Laserdisc Drivers into Windows 3.1"
permalink: kb/086/Q86276/
---

## Q86276: Installing Voyager Laserdisc Drivers into Windows 3.1

	Article: Q86276
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to install the Voyager, Inc. laserdisc (LD) multimedia drivers from
	floppy disks into the Microsoft Windows version 3.1 from the Drivers icon in
	Control Panel, you may receive the following error message:
	
	  oemsetup.inf
	  Cannot find this file.
	
	  Please check to ensure the correct path and filename are given.
	
	RESOLUTION
	==========
	
	According to Voyager technical support, the drivers should be installed manually
	as follows:
	
	1. Copy the appropriate driver file for the LD player to the Windows SYSTEM
	  subdirectory. Listed below are the filenames:
	
	   - Pioneer 6000A driver            mcivp6ka.drv
	   - other Pioneer LD players        mcivpion.drv
	   - all Sony LD players             mcivsony.drv
	
	2. Place the following line in the [MCI] section of the SYSTEM.INI file:
	
	  Videodisc=<driver name> COMx:
	
	  <driver name> is the file copied to the WINDOWS\SYSTEM directory. COMx:
	  is the COM port where the LD player is connected.
	
	After making this change, the MCI Voyager should appear as an installed driver
	under the Drivers icon in Control Panel.
	
	Multiple LD players can be used on the same computer (but different COM ports)
	when multiple lines are added to the [MCI] section of the SYSTEM.INI file. For
	example, with a Pioneer LD player on COM1 and a Sony LD player on COM2, the
	following entries would be placed in the [MCI]:
	
	     [MCI]
	     Videodisc=mcivpion.drv COM1
	     Videodisc=mcivsony.drv COM2
	
	Additional query words: 3.10 3.11 laserdisk laser disk disc 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
