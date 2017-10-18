---
layout: page
title: "Q78675: Upgrade 5.0a Setup Automatically Updates DMDRVR.BIN/SSTOR.SYS"
permalink: kb/078/Q78675/
---

## Q78675: Upgrade 5.0a Setup Automatically Updates DMDRVR.BIN/SSTOR.SYS

	Article: Q78675
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Setup detects a Disk Manager or SpeedStor partition, MS-DOS 5 Upgrade
	version 5.0a Setup automatically updates the necessary driver(s). This is a
	change from the original MS-DOS 5 Upgrade Setup program, which in this case,
	instructs the customer to expand the driver(s) manually.
	
	MORE INFORMATION
	================
	
	If a Disk Manager or SpeedStor partition is detected, Setup checks for the
	location of the driver in the CONFIG.SYS file. If the correct DEVICE command is
	found in the CONFIG.SYS file, and the date of the file currently being loaded is
	earlier than the driver being distributed with MS-DOS 5.0a, Setup will give you
	the option to automatically upgrade the driver or to install MS-DOS 5.0 to
	floppies.
	
	Setup will refer you to the README.TXT file for instructions on how to manually
	install the driver if one of the following conditions exist:
	
	- There is no CONFIG.SYS file
	
	- Setup cannot find the DEVICE command in the CONFIG.SYS file
	
	- The driver does not exist on the hard drive
	
	If you choose to automatically install the driver, Setup will upgrade the driver
	before creating the Uninstall disk. The original driver will be renamed to
	*.OLD, and the new driver will be copied to the location pointed by the DEVICE
	command in the CONFIG.SYS file. If the partition detected is a Disk Manager
	partition, the XBIOS.OVL file will be copied to the root directory after the
	original XBIOS.OVL file has been renamed to XBIOS.OLD.
	
	SpeedStor often uses the same partition type as several varieties of UNIX. Setup
	assumes any partition using this type is used by SpeedStor. If you have a UNIX
	partition and are NOT using SpeedStor or one of its drivers (HARDRIVE.SYS or
	SSTOR.SYS), do an unconditional setup (using Setup /U).
	
	Additional query words: 3rdparty 5.00 5.00a noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500a
	Version           : MS-DOS:5.0a
	
	=============================================================================
	
