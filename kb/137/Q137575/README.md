---
layout: page
title: "Q137575: Cannot Toggle NUMLOCK Key After Installing IntelliPoint v. 1.1"
permalink: /kb/137/Q137575/
---

## Q137575: Cannot Toggle NUMLOCK Key After Installing IntelliPoint v. 1.1

	Article: Q137575
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:1.1,95
	Operating System(s): 
	Keyword(s): win95 mnk
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft IntelliPoint software, version 1.1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you install the Microsoft IntelliPoint version 1.1 software, you may be
	unable to toggle the status of the NUMLOCK key.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem, add a key named "Keyboard" to the following registry
	key:
	
	  
	  HKEY_CURRENT_USER\Control Panel\Microsoft Input Devices
	
	Add a string value named "NumLock" to the key, and set the string value to "ON"
	(or to "OFF," if you want the NUMLOCK key to be off by default).
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	For information about backing up the registry, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q132332 How to Back Up the Registry
	
	Additional query words: Natural msnkbd
	
	======================================================================
	Keywords          : win95 mnk 
	Technology        : kbWin95search kbZNotKeyword3 kbIntellipointSearch kbIntelliPoint110
	Version           : WINDOWS:1.1,95
	Issue type        : kbprb
	
	=============================================================================
	
