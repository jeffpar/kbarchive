---
layout: page
title: "Q165318: Trio 64 Display Adapter Error Due to IDIS_NT.DLL"
permalink: /kb/165/Q165318/
---

## Q165318: Trio 64 Display Adapter Error Due to IDIS_NT.DLL

	Article: Q165318
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbdisplay kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade Windows NT 3.51 (that has the SMS 1.2 Remote Control client
	enabled) and the system uses a S3 Trio 64 Video adapter, the following
	configuration error is displayed on the initial log on attempt:
	
	  Invalid Display Settings
	
	NOTE: Testing shows this to be a problem with the S3 Trio 64 and not with other
	S3 compatible display adapters.
	
	The currently selected graphics display driver cannot be used. It was written for
	a previous version of Windows NT, and is no longer compatible with the current
	version of Windows NT.
	
	The system has been started using the default VGA driver.
	
	Please contact your hardware manufacture to get an upgraded driver, or select one
	of the Microsoft provided drivers.
	
	CAUSE
	=====
	
	The cause of the error is due to the IDIS_NT.DLL driver used by SMS 1.2 for the
	Remote Control of Windows NT 3.51 systems. Under Windows NT 4.0 the DLL is not
	needed and is not removed on the upgrade.
	
	IDIS_NT driver can be located in the following registry location:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\S3\Device0
	
	Value: InstalledDisplayDrivers REG_MULTI_SZ: IDIS_NT S3
	
	RESOLUTION
	==========
	
	Automated workaround
	--------------------
	
	The following REGEDIT script can be run during the upgrade process to rewrite the
	registry to remove the IDIS_NT.DLL driver. Copy the information starting with
	REGEDIT4 to the ,00 and save to a file as S3.REG. Place the S3.REG file in the
	Windows NT distribution share.
	
	REGEDIT4
	
	[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\s3\Device0]
	"InstalledDisplayDrivers"=hex(7):73,33,00,00
	
	The script is run towards the end of GUI mode setup just prior to final save
	configuration.
	
	The following step-by-step instructions will ensure proper removal of the IDIS_NT
	driver. The following solution assumes Z:\ is mapped to the root of the Windows
	NT distribution share for the example.
	
	Create the following batch job to start installation process and place in the
	Windows NT distribuition share.
	
	MKDIR C:\S3
	XCOPY Z:\S3.REG C:\S3
	XCOPY Z:\REGEDIT.EXE C:\S3
	WINNT32 /B /S:Z:\ /E:"C:\S3\REGEDIT.EXE /S C:\S3.REG"
	
	The /E: option is used to execute an external program that is not part of the
	normal Windows NT installation process.
	
	Manual Workaround
	-----------------
	
	The registry entry can be manually updated prior to upgrade using Registry Editor
	(REGEDT32.EXE) from Windows NT 3.51.
	
	1. Start Registry Editor (REGEDIT32.EXE) and select the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\S3\Device0
	
	2. Double-click on InstalledDisplayDrivers.
	
	3. Remove any reference to IDIS_NT.
	
	4. Quit Registry Editor.
	
	5. Upgrade the system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 and SMS
	1.2. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: unattended
	======================================================================
	Keywords          : kbdisplay kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
