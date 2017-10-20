---
layout: page
title: "Q124081: Configuring Schedule Plus To Run Without a Postoffice"
permalink: /kb/124/Q124081/
---

## Q124081: Configuring Schedule Plus To Run Without a Postoffice

{% raw %}

	Article: Q124081
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start Schedule Plus without creating or connecting to an existing
	Workgroup Postoffice, you may receive the following error message:
	
	  Mail could not connect to your Mail server. The configuration for the Mail
	  server path is missing or invalid.
	
	If you want to use Schedule Plus locally (off-line) without receiving the above
	error message, you must modify the Windows NT Registry.
	
	MORE INFORMATION
	================
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start REGEDT32.EXE and locate the following Registry subkey:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Schedule+ \Microsoft Schedule+
	
	2. From the Edit menu, select Add Value and enter the following:
	
	  Value Name: StartUpOffline
	  Data Type: REG_SZ
	  String: 1
	
	3. Exit the Registry Editor and restart Schedule Plus.
	
	Additional query words: prodnt 3.10 mail wgpo
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
