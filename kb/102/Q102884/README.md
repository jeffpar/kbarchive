---
layout: page
title: "Q102884: Migrating Windows 3.1 Groups After Installation"
permalink: /kb/102/Q102884/
---

## Q102884: Migrating Windows 3.1 Groups After Installation

{% raw %}

	Article: Q102884
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	When a user is logging on to Windows NT for the first time after
	setting up Windows NT over an existing version of Windows 3.1 or
	Windows for Workgroups, and if the user has not chosen to migrate
	their WIN.INI, CONTROL.INI, and program groups, you can still perform
	this migration by using REGEDT32.EXE. You can do this by doing the
	following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-
	wide problems that may require you to reinstall Windows NT to correct
	them. Microsoft cannot guarantee that any problems resulting from the
	use of Registry Editor can be solved. Use this tool at your own risk.
	
	1. If Windows NT is installed in a directory other than the directory containing
	  the Windows or Windows for Workgroups files, copy all of the initialization
	  files (*.INI) from the Windows directory to the Windows NT directory
	  (\WINNT).
	
	2. Log on as the user you want to modify.
	
	3. Run REGEDT32.EXE (located in the SYSTEM32 subdirectory).
	
	4. Choose the window titled "HKEY_CURRENT_USER on local machine."
	
	5. Choose and highlight the subkey called WINDOWS 3.1 MIGRATION STATUS.
	
	6. Press the DELETE key to remove that subkey and those below it, answering Yes
	  when prompted.
	
	7. Quit REGEDT32 by clicking Registry and then Exit from the menu.
	
	8. Quit Windows NT by pressing CTRL+ALT+DELETE and choosing Logoff.
	
	9. Logon again as the user and choose OK to migrate.
	
	Additional query words: wfw wfwg prodnt setup groups
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
