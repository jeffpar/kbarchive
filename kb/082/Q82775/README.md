---
layout: page
title: "Q82775: Uncompressed Files on Windows 3.1 disks"
permalink: kb/082/Q82775/
---

## Q82775: Uncompressed Files on Windows 3.1 disks

	Article: Q82775
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbsetup
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Below is a list of files that are not compressed on the Windows 3.1 disk sets,
	and an explanation of why they are not compressed.
	
	MORE INFORMATION
	================
	
	DISKx: Where x corresponds to the disk number. These files are 8 bytes in
	length. It would be useless to compress these files because they would still
	take up a sector on each disk. These files are used during System Administrator
	Setup (/A) to track which disks have been copied to the network.
	
	SETUP.EXE: This file cannot be compressed because it is started from the source
	directory.
	
	SETUP.INF: This file cannot be compressed because it is read from the source
	directory during first time setup.
	
	SETUP.SHH: This file is the template file for performing hands-off installations
	(setup /H:setup.shh). Users must be able to read it from the disk, make a local
	copy, and modify it to suit their hardware. Although this file is intended to be
	used by System Administrators (where it will be read from a network), Setup
	supports SETUP /H from a disk.
	
	SETUP.TXT: This file contains information about problems that may occur while
	running Setup. It must be readable from the disk in the unlikely event that
	Setup is unsuccessful.
	
	XMSMMGR.EXE: This file is a TSR (terminate-and-stay-resident) version of
	HIMEM.SYS. It is run from the source directory when Setup has determined that
	there is not an XMS provider loaded in memory. Because it is run from the source
	directory (which may be a disk), it must be uncompressed.
	
	EXPAND.EXE: This is the file expansion utility. It is used to manually expand
	files from the Windows 3.1 disks. It cannot be in compressed format.
	
	SETUP.INI: This file is used during the implementation of Copy Disincentive. In
	certain cases, when the customer enters his or her name and company name, this
	information is written back to the disk that contains SETUP.INI, in encrypted
	format. This file cannot be compressed because it uses an encryption scheme, and
	is read directly from the disk and never copied to disk.
	
	MSD.EXE: This program is used to diagnose a user's H/W. In cases where Setup
	fails, MSD (Microsoft Diagnostics) can be run directly from the disk to
	determine the system configuration. Therefore, the file cannot be compressed.
	
	CONTROL.INF: This file contains a list of printers, which is used by Control
	Panel to set up printers.
	
	
	PRTDUPD.INF: This file is used by Setup to upgrade printers. It is read into
	memory directly from the source directory (it is not copied to disk except
	during System Administrator's Setup -- /A) during printer upgrades, and
	therefore cannot be compressed.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
