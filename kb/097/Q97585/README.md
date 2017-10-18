---
layout: page
title: "Q97585: Multiple Identical Drive Icons in File Manager"
permalink: kb/097/Q97585/
---

## Q97585: Multiple Identical Drive Icons in File Manager

	Article: Q97585
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11; winnt:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting the Microsoft Windows NT File Manager, you may encounter multiple
	identical drive icons in File Manager.
	
	CAUSE
	=====
	
	This problem occurs when two SCSI devices on the same SCSI adapter are set to
	the same ID. For example:
	
	  SCSI Hard Drive SCSI 0
	  SCSI CD ROM     SCSI 0
	
	WORKAROUND
	==========
	
	Setting each SCSI device to a unique ID resolves this problem.
	
	The SCSI ID address is usually set through dip switch blocks or jumper blocks,
	depending on the device. The SCSI bus must be terminated correctly to ensure
	proper operation. The first and last physical SCSI devices on the SCSI cable
	must have terminators installed. All other devices on the SCSI cable between the
	first and last devices must have terminators removed.
	
	SCSI Host Adapter address ID is set by default to 7.
	SCSI hard drive ID should be set by default to 0 or 1.
	
	Additional query words: 3.00 3.0 3.0a 3.10 3.1 3.11 letter same winnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTS310search kbAudDeveloper kbWin3xSearch kbWinNT310Search kbWinNTW310Search kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11; winnt:3.1
	
	=============================================================================
	
