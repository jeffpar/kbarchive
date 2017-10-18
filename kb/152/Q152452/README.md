---
layout: page
title: "Q152452: Access Setup Wizard Fails Because of Permission"
permalink: kb/152/Q152452/
---

## Q152452: Access Setup Wizard Fails Because of Permission

	Article: Q152452
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Access Setup Wizard displays the following error:
	
	  Record Not Found.
	
	CAUSE
	=====
	
	The permission in the registry is not set appropriately for the user that is
	currently logged on.
	
	RESOLUTION
	==========
	
	Set the appropriate permission for the logged on user in the Registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	  Hkey_Local_Machine\Software\Microsoft\Access\7.0
	  (if you are running Access 7.0).
	
	2. From the Security menu, click Permissions.
	
	3. Add everyone Full Control, and ensure Replace Permission on Existing Subkeys
	  is selected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: status unavailable not available
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	
