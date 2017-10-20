---
layout: page
title: "Q131503: How to Delay Start of Program Manager For Logon Scripts"
permalink: /kb/131/Q131503/
---

## Q131503: How to Delay Start of Program Manager For Logon Scripts

{% raw %}

	Article: Q131503
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	Windows NT version 3.51 allows you to synchronize the logon script and the
	loading of Program Manager so that Program Manager does not start until the
	logon script has finished running. This article discusses two methods of
	delaying the start of Program Manager.
	
	To delay the start of Program Manager, do one of the following:
	
	- Modify the user profile. In Windows NT 3.51 User Profile Editor (UPEDIT.EXE),
	  select "Wait For Logon Script To Complete Before Starting Program Manager."
	
	  -or-
	
	- Modify the registry.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  1. Run Registry Editor (REGEDT32.EXE).
	
	  2. From the HKEY_CURRENT_USER subtree, go to the following key:
	
	        \SOFTWARE\MICROSOFT\Windows NT\CurrentVersion\Winlogon
	   
	
	  3. Select RunLogonScriptSync.
	
	  4. From the Edit menu, choose DWORD.
	
	  5. Change the Data from 0 (default) to 1. Choose OK.
	
	  6. Quit the Registry Editor.
	
	  7. Log off and log back on.
	
	Additional query words: prodnt Profile Logon Startup
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
