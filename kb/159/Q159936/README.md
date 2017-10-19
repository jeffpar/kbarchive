---
layout: page
title: "Q159936: Using the Windows NT 4.0 or Windows 95 System Policy Editor"
permalink: /kb/159/Q159936/
---

## Q159936: Using the Windows NT 4.0 or Windows 95 System Policy Editor

	Article: Q159936
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0;Win95
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Windows NT and Windows 95 System Policy Editors (Poledit.exe)
	interchangeably to create policy files for and on different operating systems.
	
	MORE INFORMATION
	================
	
	The Windows NT System Policy Editor can run on both Windows NT version 4.0 and
	Windows 95, but cannot run on previous versions of Windows NT. The Windows 95
	System Policy Editor runs on only Windows 95. However, you must run System
	Policy Editor on the operating system for which you intend to create policy
	files.
	
	For example, if User1 uses Windows 95 and User2 uses Windows NT Workstation, run
	System Policy Editor on Windows 95 to create User1's system policy file, and
	then run System Policy editor on Windows NT Workstation or Windows NT Server to
	create User2's system policy file.
	
	Although Windows NT Server version 4.0 provides .adm files for both the Windows
	NT and Windows 95 platforms, the files should be loaded only on the appropriate
	operating system you are creating policy files for. For example, when creating
	system policy files on Windows NT, load Winnt.adm, and when creating system
	policy files on Windows 95, load Windows.adm. Common.adm can be used with both
	operating systems.
	
	Note: Windows NT Workstation does not include System Policy Editor. To run System
	Policy Editor under Windows NT Workstation, install Poledit.exe from the Windows
	NT Workstation Resource Kit.
	
	Additional query words: policy editor profile
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WinNT:4.0;Win95
	Issue type        : kbinfo
	
	=============================================================================
	
