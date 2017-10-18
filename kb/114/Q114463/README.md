---
layout: page
title: "Q114463: Hiding the Last Logged On Username in the Logon Dialog"
permalink: kb/114/Q114463/
---

## Q114463: Hiding the Last Logged On Username in the Logon Dialog

	Article: Q114463
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	It is possible to hide the user name of the last logged on user in the logon
	dialog box in Windows NT.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Start Regedt32.exe and locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon
	
	Add a REG_SZ value named DontDisplayLastUserName. Set the data value to 1 to
	enable the new feature. A data value of 0 disables the feature.
	
	The Last Username Display can also be hidden without editing the Registry
	directly if you have the Windows NT Resource Kit.
	
	1. Click Start\ProgramsResource Kit 4.0
	
	2. Click Configuration\C2 Configuration
	
	3. Double click the line that reads "Last Username Display"
	
	4. Place a check in Hide the last username to login.
	
	5. Click Secure then OK.
	
	Additional query words: prodnt login display
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
