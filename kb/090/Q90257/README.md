---
layout: page
title: "Q90257: How Does WFWG Upgrade from LAN Manager 2.1?"
permalink: /kb/090/Q90257/
---

## Q90257: How Does WFWG Upgrade from LAN Manager 2.1?

	Article: Q90257
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups Setup detects if LAN Manager 2.1 is running by
	determining whether the LAN Manager redirector is present in memory. If it is,
	Setup then tries to upgrade using the information in the LAN Manager SETUP.INI
	file.
	
	MORE INFORMATION
	================
	
	LAN Manager 2.1 is only detected if it is loaded and running during Setup. This
	means that the NET START WORKSTATION command must have been executed in order
	for Setup to find it. Setup does not check the CONFIG.SYS or AUTOEXEC.BAT or any
	other file to find LAN Manager.
	
	If Setup does find LAN Manager 2.1, it uses the information in the LAN Manager
	2.1 SETUP.INI file to upgrade the configuration to Windows for Workgroups and to
	remove the LAN Manager statements from the CONFIG.SYS and AUTOEXEC.BAT files.
	
	Setup checks the SETUP.INI for the following entries:
	
	  [setup]
	  DRIVER0 = card protocol [protocol [protocol [protocol]]]
	  DRIVER1 = card protocol [protocol [protocol [protocol]]]
	  DRIVER2 = (etc.)
	
	It then uses the [netcard] and [transport] sections in LM21DRV.UPD to map the LAN
	Manager driver names to Windows for Workgroups driver identification numbers. A
	new PROTOCOL.INI is created using the mapped drivers. The settings for the
	drivers are copied from the LAN Manager PROTOCOL.INI file.
	
	If a mapping does not exist for a driver in SETUP.INI, Setup will warn the user
	that the driver could not be upgraded and the driver will be skipped. The user
	will have to add this device back by hand using the Control Panel, which may
	require the use of Windows for Workgroups compatible original equipment
	manufacturer (OEM) disks.
	
	Setup uses the the [ConfigSys] and [StartupCmd] sections in SETUP.INI file to
	delete any lines from the CONFIG.SYS and AUTOEXEC.BAT files that LAN Manager
	added. If the user has modified any of these lines so that they no longer match
	the lines in the SETUP.INI file, they might not be deleted. Setup also deletes
	any lines from the AUTOEXEC.BAT file that contain these phrases: LOAD NETBEUI,
	LOAD TCPIP, NET START, NET LOGON, or NET LOGIN.
	
	Additional query words: 3.10 lanman wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
