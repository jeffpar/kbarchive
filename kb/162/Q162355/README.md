---
layout: page
title: "Q162355: Internet Tab Missing or Duplicated in Message Properties"
permalink: /kb/162/Q162355/
---

## Q162355: Internet Tab Missing or Duplicated in Message Properties

	Article: Q162355
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 4.00 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you are using the Internet Mail information service for Microsoft Exchange
	(Windows Messaging), the Internet tab may be either missing or duplicated in the
	properties for a received Internet message.
	
	CAUSE
	=====
	
	A registry entry is duplicated or missing.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	Check the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Clients\Extensions
	
	One of the two following keys should exist:
	
	  Internet Mail with a String value of "4.0;minet32.dll;2;;;IMAIL"
	  InternetMail with a String value of "4.0;minet32.dll;2;;;;IMAIL"
	
	If neither entry exists, add one. In Windows NT, the value should be type REG_SZ
	instead of String.
	
	If duplicate entries exist, remove one of them.
	
	Additional query words: winnt headers
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 4.00 95
	
	=============================================================================
	
