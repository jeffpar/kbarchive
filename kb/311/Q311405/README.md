---
layout: page
title: "Q311405: You May Be Unable to Install Drivers in the Tape Devices Tool"
permalink: /kb/311/Q311405/
---

## Q311405: You May Be Unable to Install Drivers in the Tape Devices Tool

	Article: Q311405
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure you understand how to restore it if a problem occurs.
	
	SYMPTOMS
	========
	
	When you click Add on the Driver tab in the Tape Devices tool in Control Panel,
	nothing may happen.
	
	CAUSE
	=====
	
	This issue can occur if registry values that are used to display the Install
	Driver dialog box are missing from the registry.
	
	RESOLUTION
	==========
	
	WARNING: Modifying the registry incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems that result from incorrectly modifying the registry can be solved.
	Modify the registry at your own risk.
	
	Note that you should back up the registry before you modify it. If you are
	running Windows NT or Windows 2000, you should also update your Emergency Repair
	Disk (ERD).
	
	To resolve this issue, use a .reg file to re-create the appropriate entries:
	
	1. Create a file with the following contents:
	
	  REGEDIT4
	
	  [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Class\{6D807884-7D21-11CF-801C-08002BE10318}]
	  @="Tape drives"
	  "Class"="TapeDrive"
	  "Icon"="1610"
	  "Installer32"="SysSetup.Dll,TapeClassInstaller"
	  "LegacyInfOption"="TAPE"
	
	2. Save the file with a .reg file name extension.
	
	3. Double-click the .reg file to merge its contents into the registry on your
	  computer.
	
	You do not need to reboot your computer after you merge the .reg file into the
	registry.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
