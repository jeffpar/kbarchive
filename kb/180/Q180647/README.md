---
layout: page
title: "Q180647: Disabling WinNT 3.51 Video Drivers to Enable Unattend Install"
permalink: kb/180/Q180647/
---

## Q180647: Disabling WinNT 3.51 Video Drivers to Enable Unattend Install

	Article: Q180647
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	A system running Windows NT 3.51 and using Windows NT 3.51 OEM video drivers may
	be unable to complete an unattended upgrade to Windows NT 4.0. Specific entries
	must be made to the Windows NT 3.51 registry using the utility Regini.exe,
	located in the Windows NT resource kit.
	
	MORE INFORMATION
	================
	
	The procedure below creates registry entries not normally found in a Windows NT
	3.51 installation. These keys are necessary to complete an unattended
	installation upgrade from a computer running Windows 3.51 and using OEM video
	drivers to a base VGA (16 colors and 640x480 resolution) installation of Windows
	NT 4.0. If an unattended installation of Windows NT 4.0 is not required, you may
	manually switch video drivers from the OEM version to a default VGA setting,
	through Control Panel, and begin the upgrade process.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Create a text file including the following lines of text and save it as
	  35vidoff.ini. The spacing must be exactly as shown below.
	
	  \HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\XXXXXXXX
	  Start=REG_DWORD 0x4
	
	  NOTE: Replace XXXXXXXX with the Registry subkey associated with your currently
	  loaded OEM video driver.
	
	2. Create a second text file including the following lines of text and save it
	  as 35addreg.ini. The spacing must be exactly as shown below.
	
	  \HKEY_LOCAL_MACHINE\System\CurrentControlSet\Hardware Profiles
	  \0001\System\CurrentControlSet\Services\VGASave\Device0
	
	  DefaultSettings.BitsPerPel=REG_DWORD 0x4
	  DefaultSettings.XResolution=REG_DWORD 0x280
	  DefaultSettings.YResolution=REG_DWORD 0x1e0
	  DefaultSettings.VRefresh=REG_DWORD 0x1
	  DefaultSettings.Flags=REG_DWORD 0x0
	  DefaultSettings.XPanning=REG_DWORD 0x0
	  DefaultSettings.YPanning=REG_DWORD 0x0
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. From a Windows NT 3.51 command line, run "Regini.exe 35vidoff.ini" and
	  "Regini.exe 35regadd.ini" (without the quotation marks).
	
	4. Immediately begin your Windows NT 4.0 unattended installation upgrade. Do not
	  restart prior to beginning this upgrade.
	
	5. After the upgrade is completed, you may make changes to the Display
	  properties by using the Display tool in Control Panel.
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
