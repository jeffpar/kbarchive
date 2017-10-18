---
layout: page
title: "Q175649: Adding New SCSI Controller to DEC Alpha May Prevent Startup"
permalink: kb/175/Q175649/
---

## Q175649: Adding New SCSI Controller to DEC Alpha May Prevent Startup

	Article: Q175649
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you add a SCSI controller to an existing Microsoft Windows NT installation on
	a Digital Alpha Personal Workstation 433, the BIOS may not find the operating
	system boot partition.
	
	This problem may also occur on other Alpha systems.
	
	CAUSE
	=====
	
	In some cases it may be necessary to add additional SCSI controllers to an
	existing system. Some of examples might be to add hardware for additional disk
	storage or to prepare for installing Microsoft Cluster Server, for example,
	which requires a separate SCSI bus for shared storage between cluster nodes.
	
	Even though the boot device has not changed and the system BIOS indicates the
	correct device path to the boot device, it does not have the correct SCSI
	channel number stored for the path. This number is not displayed through the
	bios configuration menus.
	
	RESOLUTION
	==========
	
	To resolve this condition, reselect the device path for the boot and operating
	system partitions. This action will internally set the correct bus number for
	the boot device, which may have changed. This problem may be avoided by
	installing Windows NT with both controllers installed, rather than adding the
	additional controller at a later date.
	
	Additional query words: cluster mscs setup
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA
	Issue type        : kbprb
	
	=============================================================================
	
