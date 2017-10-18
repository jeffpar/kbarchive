---
layout: page
title: "Q139748: Cannot Reinstall Microsoft Plus!"
permalink: kb/139/Q139748/
---

## Q139748: Cannot Reinstall Microsoft Plus!

	Article: Q139748
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you try to reinstall Microsoft Plus! for Windows 95, you may receive the
	following error message:
	
	  Microsoft Windows 95 Plus! setup was not completed successfully.
	
	CAUSE
	=====
	
	This error can occur if some of the Microsoft Plus! files are damaged,
	preventing you from uninstalling or reinstalling the program.
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	You must manually uninstall Microsoft Plus! before you can reinstall it. To
	uninstall Microsoft Plus! manually, follow these steps:
	
	1. Remove the "~Mssetup.t" folder located in the root folder of the hard disk.
	
	2. Remove the Plus! folder located in the Program Files folder.
	
	3. Remove the following keys from the registry:
	
	  a. Remove the Plus! key located in:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Plus!
	
	  b. Remove the PLUS!DLL@ entry located in
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MS Setup(ACME)\Table Files
	
	After you complete these steps, you can reinstall Microsoft Plus!. Note that
	after following steps 1-3, the Microsoft Plus! logo is still displayed if you
	restart your computer, and Microsoft Plus! is still listed on the
	Install/Uninstall tab in the Add/Remove Programs tool. However, you can
	reinstall Microsoft Plus!.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
