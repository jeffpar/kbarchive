---
layout: page
title: "Q181490: Causes of Elevated CPU Utilization with TAPI 2.0 and RAS"
permalink: kb/181/Q181490/
---

## Q181490: Causes of Elevated CPU Utilization with TAPI 2.0 and RAS

	Article: Q181490
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Tapisrv.exe may begin to use an excessive amount of processor time (from 50% to
	100%) with Remote Access Services (RAS) installed.
	
	CAUSE
	=====
	
	This problem may occur if you use TAPI 2.0 and any of the following are true:
	
	- RAS is configured with modems that are no longer connected to the system or
	  that are powered off.
	
	- Your serial device or modem uses an outdated driver.
	
	- You are using a multi-port device that does not appear on the Microsoft
	  Windows NT 4.0 Hardware Compatibility List. For more information on the
	  Windows NT Hardware Compatibility List, please see the following article in
	  the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q131303
	  TITLE : Latest Windows 2000 and Windows NT Hardware Compatibility List (HCL)
	
	
	RESOLUTION
	==========
	
	To resolve this problem, perform one of the following:
	
	- Remove any modems listed in the RAS Server configuration that are no longer
	  on the system.
	
	- Connect the modems listed in the RAS Server configuration.
	
	- Turn on all modems connected to the system.
	
	- Update outdated serial device or modem drivers.
	
	- Make sure your serial device or modem is on the Hardware Compatibility List.
	
	- Update the firmware for your serial device or modem.
	
	
	MORE INFORMATION
	================
	
	This information does not apply to TAPI 2.1.
	
	To determine the version of TAPI on your computer, check date and file size of
	the Tapisrv.exe file in the %SystemRoot%\System32 folder.
	
	+--------------------------------------------------------------------------------------------+
	| File        | Date         | Size          | Version                                       | 
	+--------------------------------------------------------------------------------------------+
	| Tapisrv.exe | May 01, 1997 | 120,592 bytes | TAPI 2.0 (from Windows NT 4.0 Service Pack 3) | 
	+--------------------------------------------------------------------------------------------+
	
	Additional query words: ntsee serial rras
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
