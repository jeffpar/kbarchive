---
layout: page
title: "Q173367: Non-Administrators Not Allowed Access to Change Log Settings"
permalink: kb/173/Q173367/
---

## Q173367: Non-Administrators Not Allowed Access to Change Log Settings

	Article: Q173367
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that
	may require you to reinstall Windows 95. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved.
	Use Registry Editor at your own risk.
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When a user who does not have administrative privileges tries to change the log
	settings in the Event Viewer and clicks OK, the following message appears:
	
	  Access is Denied.
	
	MORE INFORMATION
	================
	
	The user or group account that needs to change its settings must be given full
	control of the following registry key and its subkeys:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\EventLog
	
	To do this, edit the registry with Regedit.exe using the following steps. You
	must have administrative access to do so.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the Changing Keys and Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	1. Start Registry Editor and select the following registry subkey:
	  HKLM\SYSTEM\CurrentControlSet\Services\EventLog
	
	2. Click Permissions on the Security menu.
	
	3. Add the necessary user or group account to the list and change the Type of
	  Access to Full Control.
	
	4. Click the box for Replace Permissions on Existing Subkeys, and then click OK.
	
	Additional query words: appevent secevent sysevent size maximum overwrite older as needed clear manually wrapping
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
