---
layout: page
title: "Q243015: INFO: Migration DLLs Target Only Windows 95/98 Applications"
permalink: /kb/243/Q243015/
---

## Q243015: INFO: Migration DLLs Target Only Windows 95/98 Applications

{% raw %}

	Article: Q243015
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbmigrate kbOSWinNT400 kbOSWin2000 kbSDKPlatform kbOSWin95 kbOSWin98 kbMigWin9x
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Migration Dynamic-Link Libraries (DLLs) port only Windows 95/98 programs to
	Windows 2000 Professional during an upgrade. Windows NT 4.0 applications do not
	have an equivalent mechanism for migrating applications. However, many Windows
	NT 4.0 applications run correctly on Windows 2000 after an upgrade.
	
	If changes or fixes are needed for a Windows NT 4.0 application, the best
	solution is to create a custom patch that can be run after upgrading to Windows
	2000 Professional. Both the Windows 95/98 Migration DLL and Windows NT 4.0 patch
	can be made available for download from the web.
	
	REFERENCES
	==========
	
	For more information on Migration DLLs, please browse to the following reference
	in the MSDN Library:
	
	  Platform SDK; Management Services; Setup; Migration-Extension Interface
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbmigrate kbOSWinNT400 kbOSWin2000 kbSDKPlatform kbOSWin95 kbOSWin98 kbMigWin9xtoWin2k kbMigrationDLL kbFAQ kbDSupport kbGrpDSTools kbMigrationDLLFAQ 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin95search kbWin98search kbWinAdvServSearch kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
