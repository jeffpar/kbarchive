---
layout: page
title: "Q136804: XCLN: Loading/Disabling MS Mail 3.x Win Client Extensions"
permalink: /kb/136/Q136804/
---

## Q136804: XCLN: Loading/Disabling MS Mail 3.x Win Client Extensions

	Article: Q136804
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Microsoft Exchange Windows client can load Microsoft Mail for Windows,
	version 3.x, client extensions.
	
	This article describes how to load (or exclude) Microsoft Mail 3.x Windows client
	extensions into Microsoft Exchange Windows clients.
	
	MORE INFORMATION
	================
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, you should first make a backup copy of the registry files
	(System.dat and User.dat). Both are hidden files in the Windows folder.
	
	The Microsoft Exchange Windows clients can read the Msmail.ini file and
	automatically load the client extensions listed in that file.
	
	Certain Microsoft Mail client extensions can be excluded from Microsoft Exchange
	by adding the tag of the extension to a list of tags to be excluded. On Windows
	95 and Windows NT, the list of tags is specified in the registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Client\ 
	  Options\ExcludeCustomKeys
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	On Windows 3.x, the list of tags is specified in the EXCHNG.INI file. The
	ExcludeCustomKeys entry in the Options section specifies the list of tags to be
	excluded.
	
	For example, the following two custom extensions were defined in the MSMAIL.INI
	file.
	
	  Sample1=3.0;File;Edit MSMAIL.&INI...;8;APPEXEC.DLL;NOTEPAD.EXE
	  MSMAIL.INI;; Displays MSMAIL.INI;;;
	
	  Sample2=3.0;File;Edit WIN.&INI...;8;APPEXEC.DLL;NOTEPAD.EXE WIN.INI;;
	  Displays WIN.INI;;;
	
	If you wanted to exclude these two extensions from Microsoft Exchange, you could
	either delete the above lines from Msmail.ini or you could add the tags for the
	extensions to the list of excluded tags in the following manner:
	
	  Sample1;Sample2
	
	By default, when the clients are installed the following tags are added to the
	list of extensions to be excluded. These extensions have been found to be
	incompatible with the Microsoft Exchange Client.
	
	  FaxSep1;IMEX;SP0;SP1;WinRules0
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	
	=============================================================================
	
