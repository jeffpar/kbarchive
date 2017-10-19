---
layout: page
title: "Q158563: Cannot Open HKEY_DYN_DATA Key with Regedit.exe"
permalink: /kb/158/Q158563/
---

## Q158563: Cannot Open HKEY_DYN_DATA Key with Regedit.exe

	Article: Q158563
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Regedit.exe, clicking the HKEY_DYN_DATA key yields the
	following error message:
	
	  Cannot open HKEY_DYN_DATA: Error while opening key.
	
	CAUSE
	=====
	
	You are using the Windows 95 version of Registry Editor.
	
	Note that this key is not currently used in Windows NT.
	
	RESOLUTION
	==========
	
	Use Regedt32.exe instead of Regedit.exe when searching is not required.
	
	MORE INFORMATION
	================
	
	Windows NT Setup installs two versions of Registry Editor. Regedt32.exe is the
	Windows NT version of Registry Editor; Regedit.exe is either the Windows 3.x or
	Windows 95 version.
	
	The Windows 95 version of Registry Editor contains all the features and
	limitations of the Windows NT version. It is primarily included in Windows NT
	4.0 for its ability to search for keys and values. You can use the Windows 95
	version to make changes in the Windows NT 4.0 registry, but not all functions
	and types are available.
	
	You should use Regedit.exe only for its search capabilities. Use Regedt32.exe to
	edit the registry.
	
	For more information about the registry editors included with Windows NT 4.0,
	please see the NT 4.0 Readme.wri file.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
