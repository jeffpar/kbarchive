---
layout: page
title: "Q120902: Cannot Specify a Working Directory for a Windows Executable"
permalink: /kb/120/Q120902/
---

## Q120902: Cannot Specify a Working Directory for a Windows Executable

{% raw %}

	Article: Q120902
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95 4.00
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the properties of a Windows-based executable file, you cannot
	specify the working directory.
	
	CAUSE
	=====
	
	Windows 95 is designed to behave this way because the executable file must be
	preserved in its original format so that links assigned to it can rely on stable
	(unchanging) data.
	
	RESOLUTION
	==========
	
	If you create a link or shortcut to the original executable file, you can then
	specify the working directory.
	
	MORE INFORMATION
	================
	
	Moving the original executable to the working directory is NOT recommended
	because other links may be dependent upon its current directory.
	
	NOTE: MS-DOS-based applications use program information files (.PIFs); therefore,
	you can specify a working directory for them using their properties.
	
	Additional query words: COM EXE BAT
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 95 4.00
	
	=============================================================================
	

{% endraw %}
