---
layout: page
title: "Q141066: WSPlus: How to Force Schedule+ 7.0 to Ask to Work in Group"
permalink: /kb/141/Q141066/
---

## Q141066: WSPlus: How to Force Schedule+ 7.0 to Ask to Work in Group

	Article: Q141066
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-2001
	
	7.00
	WINDOWS
	kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start Schedule+ version 7.0 in Microsoft Windows 95 with a Messsaging
	Application Programming Interface (MAPI) mail-system installed, a Group Mode
	dialog box appears, and asks you to choose one of the following options:
	
	1. Yes, work in group-mode (default)
	
	2. No, work alone
	
	The dialog box also contains a Do Not Ask Again check box and three buttons: OK,
	Cancel, and Help.
	
	If you select the check box Do Not Ask Again, this dialog box will not appear
	again.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solve. Use Registry
	Editor at your own risk.
	
	To force Schedule+ 7.0 to ask the question about Group Mode requires changing an
	entry in the Windows 95 registry.
	
	In the Windows 95 registry, go to:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Schedule+\Application
	
	If you see an entry for MAPIPresent=1, then you have selected the option Do Not
	Ask Again. To be asked again, you can change the entry to MAPIPresent=0.
	
	Try Schedule+ again, this time you are asked if you would like to work in Group
	Mode or alone.
	
	
	
	Additional query words: 7.00 schedule plus schedplus schedule+ kbhowto
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3
	Version           : WINDOWS:7.0
	Issue type        : kbinfo
	
	=============================================================================
	
