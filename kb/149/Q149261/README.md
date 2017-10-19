---
layout: page
title: "Q149261: Can't Use Security Properties via Win95 Server Admin Tools"
permalink: /kb/149/Q149261/
---

## Q149261: Can't Use Security Properties via Win95 Server Admin Tools

	Article: Q149261
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Windows 95 Server Admin tools provided in the Windows NT Resource
	Kit Version 3.51 Update 2 to look at security options on a mapped share, you may
	not be able to select the Permissions, Auditing, or Ownership option buttons on
	the properties sheet security tab.
	
	MORE INFORMATION
	================
	
	This problem can occur if the location of the server tools is not in your path
	statement. The Server Tools readme file states that the Windows 95 Server Admin
	tools require that the path to the Srvtools be included in the Autoexec.bat file
	(for example, path c:\srvtools).
	
	RESOLUTION
	==========
	
	Add the path to the server tools directory to the path statement in the
	Autoexec.bat file.
	
	Additional query words: prodnt win95 ntdomain reskit
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.51,4.0
	
	=============================================================================
	
