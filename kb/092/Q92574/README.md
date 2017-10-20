---
layout: page
title: "Q92574: NULL Character Causes Loss of Data in INI Files"
permalink: /kb/092/Q92574/
---

## Q92574: NULL Character Causes Loss of Data in INI Files

{% raw %}

	Article: Q92574
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft WinLogin, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WinLogin adds a NULL character to all INI files that it manages. Any sections
	that are added to the INI file during a Windows session are added after the NULL
	character. This prevents the new sections from being saved when you exit and
	restart Windows. Editing the file in Windows Write, deleting the NULL character,
	and saving the file corrects this problem.
	
	Note: The Windows Write application has to be used to edit the INI files. The
	NULL character does not show up if the files are edited in the Windows Notepad.
	
	This information applies to version 1.0 of Microsoft WinLogin. For information
	about ordering Microsoft WinLogin, call the Microsoft Sales Information Center
	(MSIC) at (800) 426-9400, or mail the form supplied with the Windows Resource
	Kit (WRK) for the Microsoft Windows operating system version 3.1.
	
	MORE INFORMATION
	================
	
	With Microsoft WinLogin, INI files are set up by the system administrator for
	specific settings for users and workstations. By default, WinLogin manages the
	PROGMAN.INI, SYSTEM.INI, and WIN.INI files. The specific INI files set up by the
	administrator are merged together when Windows starts with WinLogin installed.
	During this merging process, the NULL character is placed at the end of the
	file.
	
	If, for example, a program is installed or a printer is added with Control Panel,
	any INI entries that are added in the process are placed after the NULL
	character. If the NULL character is not removed before exiting Windows, all
	changes to the INI files will be lost.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in WinLogin version 1.0. We are
	researching this problem and will post new information here as it becomes
	available.
	
	For more information about WinLogin, query on the following word in the Microsoft
	Knowledge Base:
	
	  WinLogin
	
	Additional query words: 1.00 missing nul gone Win Login
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWinLoginSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinLogin100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	

{% endraw %}
