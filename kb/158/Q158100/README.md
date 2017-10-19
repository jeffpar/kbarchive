---
layout: page
title: "Q158100: Windows NT 4.0 Support for Quantum Atlas SCSI Drives w/ Adaptec"
permalink: /kb/158/Q158100/
---

## Q158100: Windows NT 4.0 Support for Quantum Atlas SCSI Drives w/ Adaptec

	Article: Q158100
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installation of Windows NT 4.0 on a Quantum Atlas hard disk drive formatted with
	Windows NT file system (NTFS) connected to an Adaptec 2940/3940 controller may
	stop with any of the following error messages:
	
	  STOP 0x0000007B
	  INACCESSIBLE_BOOT_DEVICE
	
	-or-
	
	  OSLOADER 4.0 .... Disk I/O Error Status = 8000
	
	-or-
	
	  A kernel file is missing from the disk.
	  Insert a system disk and restart the system.
	
	CAUSE
	=====
	
	The Quantum Altas SCSI drives with firmware revision XL912 are incompatible with
	Windows NT 4.0 and Adaptec 2940/3940 SCSI controllers.
	
	WORKAROUND
	==========
	
	The Quantum Altas drive firmware needs to be updated to version XL915. The XL915
	version works with Windows NT 4.0 and the Adaptec 2940/3940 controllers. The
	firmware upgrade may be obtained from Quantum by calling their technical support
	line.
	
	MORE INFORMATION
	================
	
	For information about how to contact Quantum, query in the Microsoft Knowledge
	Base for one of the following articles:
	
	  ARTICLE-ID: Q65416
	  TITLE : Hardware and Software Third-Party Vendor Contact List, A-K
	
	  ARTICLE-ID: Q60781
	  TITLE : Hardware and Software Third-Party Vendor Contact List, L-P
	
	  ARTICLE-ID: Q60782
	  TITLE : Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	To view the firmware version of the Quantum drive, use one of the following
	procedures:
	
	With an MS-DOS boot disk:
	
	1. Boot your system with an MS-DOS boot disk that has the appropriate SCSI
	  drivers for your controller.
	
	2. When the ASPI driver loads, the identification code of the hard disk drive
	  will be displayed. For example:
	
	     Quantum XP23150W L915
	
	  The firmware revision is the last four digits of this code.
	
	  -or-
	
	From within Windows NT:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  Hardware\devicemap\SCSI\SCSI Port 0\SCSI BUS 0\Target ID 0\Logical
	  Unit ID 0\
	
	  (This procedure assumes that Quantum Disk is on SCSI Port 0 with Target ID
	  0.)
	
	  The Identifier Key displays the identification code for the drive. The last
	  four digits of this code are the firmware level, for example:
	
	     Quantum XP23150W L915
	
	The third-party products discussed here are manufactured by Adaptec and Quantum,
	vendors independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	
	Additional query words: prodnt disk scsi stop hang complete
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
