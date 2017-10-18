---
layout: page
title: "Q171734: Error Message: The Selected Branch Does Not Exist..."
permalink: kb/171/Q171734/
---

## Q171734: Error Message: The Selected Branch Does Not Exist...

	Article: Q171734
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; WINDOWS NT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt use Registry Editor (Regedit.exe) to export a registry key from
	a remote registry, you may receive the following error message:
	
	  The selected branch does not exist. Make sure that the correct path is given.
	
	CAUSE
	=====
	
	Registry Editor cannot distinguish between local and remote registries when
	exporting registry keys.
	
	RESOLUTION
	==========
	
	If you are running Windows NT 4.0, use Regedt32.exe to export registry keys from
	remote registries. Note that you cannot run Regedt32.exe in Windows 95 because
	it relies on files that are not included with Windows 95.
	
	MORE INFORMATION
	================
	
	When you attempt to export a registry key from a remote registry, Registry
	Editor attempts to export the key from the local registry. If the registry key
	you are attempting to export does not exist in the local registry, you receive
	the above error message. If th1e registry key does exist in the local registry,
	Registry Editor exports the key from the local registry instead of exporting it
	from the remote registry.
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; WINDOWS NT:4.0
	
	=============================================================================
	
