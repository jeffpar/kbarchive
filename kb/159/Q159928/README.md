---
layout: page
title: "Q159928: Regedt32 Displays Multiple SIDS in HKEY_USERS Key"
permalink: /kb/159/Q159928/
---

## Q159928: Regedt32 Displays Multiple SIDS in HKEY_USERS Key

	Article: Q159928
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you start Registry Editor (Regedt32.exe), you may notice multiple security
	IDs (SIDs) being displayed in addition to .default and the SID for the currently
	logged on user.
	
	MORE INFORMATION
	================
	
	This behavior is by design in Windows NT 4.0 and occurs when services are
	started in the context of a user account other than System or the currently
	logged on user. The change in Windows NT 4.0 gives service accounts access to
	the Hkey_Current_User portion of the registry.
	
	Additional query words: registry sids user account
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
