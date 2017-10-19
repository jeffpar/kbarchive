---
layout: page
title: "Q158568: Installing Retired or Third-Party SCSI Drivers During Setup"
permalink: /kb/158/Q158568/
---

## Q158568: Installing Retired or Third-Party SCSI Drivers During Setup

	Article: Q158568
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the release of Windows NT version 4.0, the drivers for certain SCSI
	adapters have been moved from the base operating system to the Windows NT Driver
	Library included on the Windows NT 4.0 CD-ROM. Check the following list to
	determine if any of your adapters are affected by this change. If your computer
	has an adapter that appears on this list, you must create a driver disk before
	you can use that adapter. Use the driver disk to install the appropriate
	driver(s) during Setup, or keep the disk handy and install the driver once Setup
	is finished.
	
	Note that an unattended upgrade can no longer be performed with these adapters.
	On x86-based computers, the recommended method of performing Setup with any of
	these adapters is to use the three boot floppy disks with the CD-ROM.
	
	The following drivers have been moved:
	
	- Always.sys
	
	- Dtc329x.sys
	
	- T128.sys
	
	- T13b.sys
	
	- Tmv1.sys
	
	- Ultra124.sys
	
	- Wd33c93.sys
	
	The following adapters are affected by this change:
	
	- Always IN-2000
	
	- Data Technology Corp. 3290
	
	- Maynard 16-bit SCSI Adapter
	
	- MediaVision Pro Audio Spectrum-16
	
	- Trantor T-128
	
	- Trantor T-130B
	
	- UltraStor 124f EISA Disk Array Controller
	
	MORE INFORMATION
	================
	
	To create a driver disk for drivers that have been moved to the Driver Library,
	follow these steps:
	
	1. Create a blank formatted 3.5-inch disk.
	
	2. Copy all the files from the Drvlib\Storage\Retired\<platform> folder to
	  the floppy disk.
	
	  For enabler drivers, copy the files from the Drvlib\Storage\Fenb folder.
	
	3. Label the disk Driver Disk.
	
	To install drivers from the driver disk during Windows NT version 4.0 Setup,
	follow these steps:
	
	1. Start Windows NT Setup.
	
	2. When you see the "Setup has recognized the following mass storage devices in
	  your computer" message, press S to skip detection.
	
	3. Press S to display a list of supported SCSI host adapters.
	
	4. Click Other at the bottom of the list.
	
	5. Insert the Driver Disk you created. Select your host adapter from this list.
	
	  Windows NT will then recognize any devices attached to the adapter. Repeat
	  this step for each host adapter not already recognized by Windows NT Setup.
	
	To install drivers when Setup recognizes one of the supported SCSI host adapters
	without making the devices attached to it available for use, follow these
	steps:
	
	1. Restart Windows NT Setup.
	
	2. When Windows NT Setup displays the message "Setup is inspecting your
	  computer's hardware configuration..." press F6. This prevents Windows NT
	  Setup from performing disk controller detection and allows you to install a
	  driver from the Driver Disk you created. Note that all SCSI adapters will
	  have to be installed manually.
	
	3. When Windows NT Setup displays the message "Setup could not determine the
	  type of one or more mass storage devices installed in your system, or you
	  have chosen to manually specify an adapter" press S to display a list of
	  supported SCSI host adapters.
	
	4. Click Other at the bottom of the list.
	
	5. Insert the Driver Disk when you are prompted to do so, and select your host
	  adapter from the list. Note that in some cases, Windows NT Setup will
	  repeatedly prompt you to swap disks.
	
	  Windows NT will then recognize any devices attached to the adapter. Repeat
	  this step for each host adapter not already recognized by Windows NT Setup.
	
	To install drivers from your Driver Disk after running Windows NT 4.0 Setup,
	follow these steps:
	
	1. After installing the properly configured adapter in your computer, start
	  Windows NT version 4.0 as you normally would.
	
	2. In Control Panel, double-click SCSI Adapters.
	
	3. Click the Drivers tab, and then click Add.
	
	4. Click Have Disk, insert your Driver Disk in the appropriate floppy disk
	  drive, and then click OK.
	
	5. Click the driver in the list and then click OK. Click Continue to load the
	  driver.
	
	6. Restart the computer.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
