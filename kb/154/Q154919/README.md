---
layout: page
title: "Q154919: Internet Explorer 3.0 Setup Prompts to Overwrite Riched20.dll"
permalink: /kb/154/Q154919/
---

## Q154919: Internet Explorer 3.0 Setup Prompts to Overwrite Riched20.dll

	Article: Q154919
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:3.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Internet Explorer version 3.0 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing the HTML Layout control included with Microsoft Internet
	Explorer 3.0, a Confirm File Replace dialog box appears stating that a target
	file exists and is newer. This file is the Riched20.dll file.
	
	CAUSE
	=====
	
	Internet Explorer's new version of the Riched20.dll file has an older version
	stamp than the file included with Windows NT 4.0.
	
	RESOLUTION
	==========
	
	Allow Internet Explorer Setup to overwrite the existing Riched20.dll file.
	
	MORE INFORMATION
	================
	
	The Riched20.dll file is included in the Full installation of Internet Explorer
	3.0 for Windows NT 4.0, as well as in the HTML Layout control that is available
	separately.
	
	Versions of the Riched20.dll file:
	
	  Source           Name           Size      Version
	  ---------------------------------------------------
	  Windows NT 4.0   Riched20.dll   268,560   5.0.122.2
	  Msie30m.exe      Riched20.dll   385,536   5.0.120.8
	  Setupslt.exe     Riched20.dll   385,536   5.0.120.8
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbIEsearch kbZNotKeyword2 kbIENT400Search kbZNotKeyword3 kbIE300WinNT400
	Version           : WINDOWS:3.0; winnt:4.0
	
	=============================================================================
	
