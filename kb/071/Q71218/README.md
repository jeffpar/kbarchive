---
layout: page
title: "Q71218: Idlewild Shows Blackness as Only Option"
permalink: /kb/071/Q71218/
---

## Q71218: Idlewild Shows Blackness as Only Option

{% raw %}

	Article: Q71218
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	When loading the Idlewild screen saver program from the "load=" line in the
	WIN.INI file, the only screen blanking option available is Blackness, when
	windows is running under a shell other than Program Manager, such as File
	Manager, MS-DOS Executive, or HDC Windows Express).
	
	To correct this problem, do only one of the following:
	
	- Using Notepad or SysEdit, edit the "shell=" line in the SYSTEM.INI file to
	  read "shell=progman.exe".
	
	  -or-
	
	- If using a shell other than Program Manager is desired, the Win command must
	  be executed from within the directory containing the Microsoft Entertainment
	  Pack for Windows (C:\WEP by default). For example; enter "cd\wep" at the DOS
	  prompt and then enter "win" (without the quotation marks) to start Windows.
	
	MORE INFORMATION
	================
	
	For Idlewild to show the options for screen blanking, it must access the screen
	blanking files (files with the extension ".IW"). When the "shell=" line in
	SYSTEM.INI declares a shell other than PROGMAN.EXE, Idlewild will be unable to
	access the .IW files unless the Win command is executed from within that
	directory.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
